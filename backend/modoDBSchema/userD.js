import mongoose from "mongoose";

const userDSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
    date: { type: Date, default: Date.now }
});

const userD = mongoose.model("userD", userDSchema);

export default userD;   