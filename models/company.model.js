import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    city: {
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

const Company = mongoose.model("Company", companySchema);
export default Company;
