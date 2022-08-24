import express from 'express'
import newsController from '../app/Controllers/NewsController.js'

const router = express.Router()

router.use('/f8-lap-trinh', newsController.show)
router.use('/', newsController.index)
export default router

