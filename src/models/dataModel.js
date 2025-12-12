import mongoose from "mongoose";

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
    location: {
        country: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        coordinates: {
            latitude: {
                type: Number,
                required: false
            },
            longitude: {
                type: Number,
                required: false
            }
        }
    },
    userAgent: {
        type: String,
        required: false
    },
    dateTime: {
        type: String,
        required: false
    }
})

const Data = mongoose.models.geminidata || mongoose.model("geminidata", dataSchema)
export default Data