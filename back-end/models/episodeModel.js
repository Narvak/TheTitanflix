import mongoose, { ObjectId } from "mongoose";

export const EpisodeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
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
    },
    serieId: {
        type: ObjectId,
        ref: 'series',
        required: false
    }
})

export const EpisodeModel = mongoose.model("episodes", EpisodeSchema);
