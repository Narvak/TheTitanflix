import mongoose from "mongoose";

const SerieSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    averageTime: {
        type: Number,
        required: true
    },
})

export const SerieModel = mongoose.model("series", SerieSchema)
