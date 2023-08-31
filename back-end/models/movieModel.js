import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: false,
    },
    time: {
        type: Number,
        required: true,
    }
})

export const MovieModel = mongoose.model("movies", MovieSchema);
