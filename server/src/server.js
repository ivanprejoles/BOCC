import express from 'express'
import dotnev from 'dotenv'
import cookieParser from 'cookie-parser'

import connectMongo from './database/mongoDB.js'

import mainUserRoutes from './database/routes/mainUser.route.js'
import mainAuthRoutes from './database/routes/mainAuth.route.js'

dotnev.config();

connectMongo();


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json( ))
app.use(cookieParser(process.env.JWT_SECRET))

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/api/mainUser', mainUserRoutes);
app.use('/api/mainAuth', mainAuthRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res
        .status(statusCode)
        .json({
            success: false,
            statusCode,
            message
        })
    
})