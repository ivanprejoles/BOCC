import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { ResponseHandler } from '../../utils/error.js';

import MainUser from "../models/mainUser.model.js";

export const googleSignUp = async (req, res, next) => {
    console.log(req.body)
    const {
        email,
        username,
        googlePhotoUrl,
        userId,
        password
    } =  req.body;

    try {
        const mainUser = await MainUser.findOne({ userId })

        if (mainUser) {
            ResponseHandler(res, 400, 'Email already used')
        }
        
        const salt = await bcryptjs.genSalt(10);

        const hashedPassword = bcryptjs.hashSync(password, salt);

        const newMainUser = new MainUser({
            userId,
            email,
            username,
            password: hashedPassword,
            salt,
            googlePhotoUrl,
        })

        await newMainUser.save()

        ResponseHandler(res, 200, 'User Signed Up', true)

    } catch (error) {
        console.log('[Sign Up] : ',error)
        next(error)
    }
}

export const googleSignIn = async (req, res, next) => {
    const {
        userId,
        password
    } = req.body;

    const validMainUser = await MainUser.findOne({ userId })
    
    if (!validMainUser) {
        ResponseHandler(res, 404, 'Email not found. Sign up first.')
    }
    
    const validMainPassword = bcryptjs.compareSync(password, validMainUser.password, validMainUser.salt)
    

    if (!validMainPassword) {
        ResponseHandler(res, 404, 'User not found')
    }
    
    try {
        const token = jwt.sign({userId: validMainUser._id , googleId: validMainUser.userId}, process.env.JWT_SECRET)

        const {
            userId: userId,
            password: pass,
            salt: salt, 
            _id: id,
            __v:v, 
            ...rest
        } = validMainUser._doc;
        
        res.cookie('main_access_token', token, {httpOnly:true})

        console.log(res.cookies)
        res.status(200).json(rest)

    } catch (error) {
        console.log('[Sign In] : ',error)
        next(error)
    }
}