import { getLinkWithLifeTime } from '../services/S3Service'

export async function s3GetLinkWithLifeTime(req, res) {
  const url = await getLinkWithLifeTime(req.body)
  return res.json(url)
}
