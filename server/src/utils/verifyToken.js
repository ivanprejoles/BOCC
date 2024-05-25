import jwt from 'jsonwebtoken'
import { ResponseHandler } from './error.js'

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.main_access_token
    console.log(token)
    if (!token) {
        console.log(token) 
        return ResponseHandler(res, 401, 'Unauthorized')
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log(err)
            return ResponseHandler(res, 401, 'Unauthorized')
        }
        
        req.user = user

        next()
    })
} 