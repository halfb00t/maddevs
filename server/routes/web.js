import express from 'express'
// controllers
import switchLanguage from '../controllers/LanguageController'

const router = express.Router()

router.get('/ru', switchLanguage)
router.get('/en', switchLanguage)

export default router
