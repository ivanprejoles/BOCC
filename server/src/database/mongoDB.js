import mongoose from 'mongoose'

const connectMongo = async () => {
    const connectDB = mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('mongoDB connected')
        })
        .catch((error) => {
            console.log('mongoDB Error:', error)
        })

    return connectDB
}

export default connectMongo;