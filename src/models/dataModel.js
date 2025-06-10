import mongoose from "mongoose";
import { type } from "os";

const dataSchema = new mongoose.Schema({
    prompt: {
        type: String,
        required: [true, "Please provide a prompt"],
        unique: false
    },
    response: {
        type: String,
        required: [true, "Please provide a response"],
        unique: false
    },
})

const Data = mongoose.models.geminidata || mongoose.model("geminidata", dataSchema)
export default Data