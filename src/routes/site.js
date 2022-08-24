import express from 'express'
import siteController from '../app/Controllers/SiteController.js'

const router = express.Router()

router.use('/register', siteController.register)
router.use('/', siteController.home)

export default router
