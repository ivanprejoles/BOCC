import express from 'express'
import { test } from '../controllers/mainUser.controller.js'
import { verifyToken } from '../../utils/verifyToken.js'

const router = express.Router()

router.post('/test', verifyToken, test)

export default router
