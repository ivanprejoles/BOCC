import { googleSignIn, googleSignUp } from '../controllers/mainAuth.controller.js';

import express from 'express';

const router = express.Router();

router.post('/google-in', googleSignIn);
router.post('/google-up', googleSignUp);

export default router;
