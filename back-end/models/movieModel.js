import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        required: false,
    },
    movieUrl: {
        type: String,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    }
})

export const MovieModel = mongoose.model("movies", MovieSchema);
