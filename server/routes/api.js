import express from 'express'
import multer from 'multer'

// controllers
import { create as createLead } from '../controllers/LeadsController'
import { s3GetLinkWithLifeTime } from '../controllers/S3Controller'
import { index as sendVacancyApplication } from '../controllers/CareersController'
import { send } from '../controllers/SendEmailController'

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '/tmp')
  },
  filename(req, file, cb) {
    const { originalname } = file
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0]
    cb(null, `${file.fieldname}${Date.now()}${fileExtension}`)
  },
})

const router = express.Router()

router.post('/leads', createLead)
router.post('/get-link-with-life-time', s3GetLinkWithLifeTime)
router.post('/careers', multer({ storage }).single('cvFile'), sendVacancyApplication)
router.post('/send-email', multer({ storage, limits: { fieldSize: 25 * 1024 * 1024 } }).single('base64'), send)

export default router
