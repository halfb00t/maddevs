const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3')
const { S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY } = require('../config/env')

const s3Configuration = {
  credentials: {
    accessKeyId: S3_ACCESS_KEY_ID,
    secretAccessKey: S3_SECRET_ACCESS_KEY,
  },
  region: 'eu-west-1',
}

async function getUrl() {
  const client = new S3Client(s3Configuration)
  const command = new GetObjectCommand({
    Bucket: 'maddevsio',
    Key: 'images/Blog/blog-header-bg.png',
  })
  const url = await getSignedUrl(client, command, { expiresIn: 30 })
  console.log('Presigned URL: ', url)
}

getUrl()
