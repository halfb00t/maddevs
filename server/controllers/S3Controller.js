const { getLinkWithLifeTime } = require('../services/S3Service')

async function s3GetLinkWithLifeTime(req, res) {
  const url = await getLinkWithLifeTime(req.body)
  return res.json(url)
}

module.exports = {
  s3GetLinkWithLifeTime,
}
