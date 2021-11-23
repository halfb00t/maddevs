const express = require('express')
const multer = require('multer')

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

// controllers
const { create: createLead } = require('../controllers/LeadsController')
const { s3GetLinkWithLifeTime } = require('../controllers/S3Controller')
const { index: sendVacancyApplication } = require('../controllers/CareersController')
const { send } = require('../controllers/SendEmailController')

const router = express.Router()

router.post('/leads', createLead)
router.post('/get-link-with-life-time', s3GetLinkWithLifeTime)
router.post('/careers', multer({ storage }).single('cvFile'), sendVacancyApplication)
router.post('/send-email', multer({ storage, limits: { fieldSize: 25 * 1024 * 1024 } }).single('base64'), send)

module.exports = router
