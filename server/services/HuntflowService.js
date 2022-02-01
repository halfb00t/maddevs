import axios from 'axios'
import fs from 'fs'
import FormData from 'form-data'

import config from '../config'

const apiUrlPrefix = `${config.HUNTFLOW_API_URL}/account/${config.HUNTFLOW_ACCOUNT_ID}`

const defaultConfig = {
  headers: {
    Authorization: `Bearer ${config.HUNTFLOW_TOKEN}`,
    'Content-Type': 'application/json',
  },
}

const uploadFile = async cvFilePath => {
  const formData = new FormData()
  formData.append('file', fs.createReadStream(cvFilePath))

  const uploadResponse = await axios.post(`${apiUrlPrefix}/upload`, formData, {
    headers: {
      Authorization: `Bearer ${config.HUNTFLOW_TOKEN}`,
      'Content-Type': 'multipart/form-data',
      ...formData.getHeaders(),
    },
  })
  return uploadResponse.data
}

const createCandidate = async (cvFileId, {
  firstName, middleName, lastName, email, linkedinProfile, positionTitle, positionValue,
}) => {
  const candidate = {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
    position: `${positionTitle}. You can also consider me for your other: ${positionValue} roles.`,
    email,
    externals: [
      {
        data: {
          body: `To get more information on my skills, please check out my linkedin profile: ${linkedinProfile}`,
        },
        auth_type: 'NATIVE',
        files: [
          {
            id: cvFileId,
          },
        ],
      },
    ],
  }

  const candidateResponse = await axios.post(`${apiUrlPrefix}/applicants`, candidate, defaultConfig)
  return candidateResponse.data
}

const createApplication = async (vacancyId, candidateId, cvFileId) => {
  const application = {
    vacancy: vacancyId,
    status: 75897, // "Новые"
    comment: 'Заявка на вакансию отправлена с сайта https://maddevs.io/',
    files: [
      {
        id: cvFileId,
      },
    ],
  }

  const applicationResponse = await axios.post(`${apiUrlPrefix}/applicants/${candidateId}/vacancy`,
    application,
    defaultConfig)
  return applicationResponse.data
}

export async function sendApplication(req) {
  try {
    let { vacancyId } = req.body

    // Uploading CV file to huntflow
    const cvFile = await uploadFile(req.file.path)

    // Applicant creation
    const candidate = await createCandidate(cvFile.id, req.body)

    // Checking a vacancyId for existence
    try {
      await axios.get(`${apiUrlPrefix}/vacancies/${vacancyId}`, defaultConfig)
    } catch {
      vacancyId = config.HUNTFLOW_RESERVE_VACANCY_ID
    }

    // Creating a vacancy application
    await createApplication(vacancyId, candidate.id, cvFile.id)

    return cvFile
  } catch (error) {
    return error
  }
}
