import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes";

dotenv.config();

const port = process.env.PORT || 5000

const uri = process.env.MONGODB_URI

if(uri){
    mongoose
        .connect(uri)
        .then(() => {
            console.log("DB Connected !")
        })
        .catch(err => console.log(err))
} else {
    console.log("No URI to DB")
}

const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors('*'))

router(app)

app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})
