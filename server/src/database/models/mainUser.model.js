import mongoose from "mongoose";

const mainUserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    googlePhotoUrl: {
        type: String,
        required: true,
    }
    
}, {timestamps: true})

const MainUser = mongoose.model('AuthUser', mainUserSchema);

export default MainUser;