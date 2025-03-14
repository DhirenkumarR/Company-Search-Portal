import mongoose from 'mongoose';

export const USER_TYPE = {
    ADMIN: 1,
    USER: 2
};

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        enum: Object.values(USER_TYPE),
        required: true
    },
    city: {
        name: {
            type: String
        },
        id: mongoose.Types.ObjectId,
        _id: 0
    },
    experience: {
        type: Number
    },
    company: {
        name: {
            type: String
        },
        id: mongoose.Types.ObjectId,
        _id: 0
    },
    linkedinProfileURL: {
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;
