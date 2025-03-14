import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const City = mongoose.model("City", citySchema);
export default City;
