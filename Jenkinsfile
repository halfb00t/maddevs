#!groovy

abortPreviousRunningBuilds()

pipeline {

    options {
        ansiColor('xterm')
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timestamps()
        skipStagesAfterUnstable()
    }

    parameters {
        booleanParam (
            defaultValue: true,
            description: 'Checkbox to skip test run',
            name : 'RUN_TESTS')
    }

    agent { label "k8s-agent" }

    environment {
        REPO                    = 'maddevsio'
        IMAGE                   = "maddevsio"
        AWS_DEFAULT_REGION      = 'us-east-1'
        REGISTRY                = "https://730809894724.dkr.ecr.us-east-1.amazonaws.com/"
        TIMEOUT                 = sh (script:'echo ${TIMEOUT:-60}', returnStdout: true).trim()
        RETRY                   = sh (script:'echo ${RETRY:-1}', returnStdout: true).trim()
        SHORT_COMMIT            = sh (script: "git rev-parse --short=7 HEAD", returnStdout: true).trim()
        REVISION                = sh (script: "git rev-parse HEAD", returnStdout: true).trim()
        SKIP_CI                 = sh (script: "git log -1 | grep '.*\\[skip ci\\].*'", returnStatus: true)
    }

    stages {

            parallel {
                stage ('RUN TESTS') {
                    agent { label 'k8s-agent' }
                    environment {
                      NODE_CYPRESS_BASE_URL = "http://localhost:3000"
                      CI                    = "true"
                      NODE_ENV              = "test"
                    }
                    steps {
                        timeout(time: TIMEOUT.toInteger(), unit: 'MINUTES') {
                          retry (RETRY.toInteger()) {
                            script {
                                sh """
                                      npm install
                                      npm run test:staging
                                """
                                currentBuild.result = 'SUCCESS'
                            }
                          }
                        }
                    }
                    post {
                        always {
                            sh "echo TESTS COMPLETE"
                        }
                    }
                }

                stage ('LINTER') {
                    environment {
                        CI = true
                    }
                    steps {
                        timeout(time: TIMEOUT.toInteger(), unit: 'MINUTES') {
                          retry (RETRY.toInteger()) {
                            script {
                                sh """
                                    npm install
                                    npm run lint
                                """
                                currentBuild.result = 'SUCCESS'
                            }
                          }
                        }
                    }
                    post {
                        always {
                            sh "echo LINTER COMPLETE"
                        }
                    }
                }
            }
        }

        stage ('Build Docker Image') {
            when {
                beforeAgent true
                allOf {
                    expression { currentBuild.result != 'UNSTABLE' }
                }
            }
            steps {
                sh 'aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin 730809894724.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com'
                retry (2) {
                    script {
                      docker.withRegistry(REGISTRY) {
                          docker.image("${IMAGE}:latest").pull()
                          myImage = docker.build("${IMAGE}", "--cache-from 730809894724.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE}:latest -f Dockerfile .")
                          myImage.push(SHORT_COMMIT)
                          myImage.push("latest")

                      }
                    }
                }
            }
        }

        stage ('Check docker image for vulnerabilities (ECR registry functionality)') {
            when {
                beforeAgent true
                allOf {
                    expression { currentBuild.result != 'UNSTABLE' }
                }
            }
            options { timeout(time: 5, unit: 'MINUTES') }
            steps {
                script {
                    waitUntil {
                        def r = sh script: "aws ecr describe-image-scan-findings --repository-name ${IMAGE} --image-id imageTag=${SHORT_COMMIT} --region ${AWS_DEFAULT_REGION} --query 'imageScanFindings.findingSeverityCounts' --output text", returnStatus: true
                        return r == 0
                    }
                    sh "aws ecr describe-image-scan-findings --repository-name ${IMAGE} --image-id imageTag=${SHORT_COMMIT} --region ${AWS_DEFAULT_REGION} --query 'imageScanFindings.findingSeverityCounts' --output json > scan_result_of_docker_image.html"
                    IMAGE_SHA = sh (script: 'aws ecr describe-image-scan-findings --repository-name ${IMAGE} --image-id imageTag=${SHORT_COMMIT} --region ${AWS_DEFAULT_REGION} --query "imageId.imageDigest" --output json | sed s/\\"//g', returnStdout: true).trim()
                    sh "echo '<p> See results here: <a href=https://console.aws.amazon.com/ecr/repositories/${IMAGE}/image/${IMAGE_SHA}/scan-results?region=${AWS_DEFAULT_REGION}>https://console.aws.amazon.com/ecr/repositories/${IMAGE}/image/${IMAGE_SHA}/scan-results?region=${AWS_DEFAULT_REGION}</a>' >> scan_result_of_docker_image.html"
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        RESULT = sh (script: "aws ecr describe-image-scan-findings --repository-name ${IMAGE} --image-id imageTag=${SHORT_COMMIT} --region ${AWS_DEFAULT_REGION} --query 'imageScanFindings.findingSeverityCounts' --output json | jq '.| select(.HIGH > 0 or .CRITICAL > 0)'", returnStdout: true).trim()
                        if (RESULT != "") {
                            sh "exit 1"
                        }
                    }
                }
            }
            post {
                always {
                    archiveArtifacts artifacts: 'scan_result_of_docker_image.html', fingerprint: true
                }
            }
        }

    post {
        always {
            script {
              if ( SKIP_CI == '0' ) {
                currentBuild.result = 'UNSTABLE'
              }
            }
            // sendNotifications currentBuild.result
            deleteDir()
        }
        failure {
            script {
              Jenkins.instance.getItem("test_job").setDisabled(true)
            }
        }
        unstable {
            script {
              Jenkins.instance.getItem("test_job").setDisabled(true)
            }
        }
    }
}

// Abort previous builds in progress
def abortPreviousRunningBuilds() {
    while(currentBuild.rawBuild.getPreviousBuildInProgress() != null) {
        currentBuild.rawBuild.getPreviousBuildInProgress().doKill()
    }
}

def sendNotifications(String buildStatus = 'STARTED') {
    buildStatus = buildStatus ?: 'SUCCESS'

    // Default values
    def color = 'danger'
    def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
    def summary = "${subject} (${env.BUILD_URL})"

    // Override default values based on build status
    if (buildStatus == 'STARTED') {
        color = '#c0c0c0'
    } else if (buildStatus == 'SUCCESS') {
        color = 'good'
    } else if (buildStatus == 'ABORTED') {
        color = '#c0c0c0'
    } else if (buildStatus == 'UNSTABLE') {
        color = 'warning'
    } else {
        color = 'danger'
    }
    slackSend (color: color, message: summary)

    emailext body: '''${JELLY_SCRIPT,template="html-veeqo"}''',
        attachLog: true,
        mimeType: 'text/html',
        subject: "[Jenkins] ${subject}",
        //to: "${mailRecipients}",
        //replyTo: "${mailRecipients}",
        recipientProviders: [[$class: 'DevelopersRecipientProvider']]
}

def checkFolderForDiffs(path) {
    def previousCommit = getLastCommit()

    try {
        // git diff will return 1 for changes (failure) which is caught in catch, or
        // 0 meaning no changes
        sh "git diff --quiet --exit-code ${previousCommit} ${path}"
        return true
    } catch (err) {
        return false
    }
}

def getLastCommit() {
    def lastHash = null
    def lastBuild = currentBuild.rawBuild.getPreviousBuild()
    if ( lastBuild ) {
        lastHash = commitHashForBuild( lastBuild )
    }
    return lastHash
}

/**
 * Gets the commit hash from a Jenkins build object, if any
 */
@NonCPS
def commitHashForBuild( build ) {
    def scmAction = build?.actions.find { action -> action instanceof jenkins.scm.api.SCMRevisionAction }
    return scmAction?.revision?.hash
}
