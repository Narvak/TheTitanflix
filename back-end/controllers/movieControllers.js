import { MovieModel } from "../models/movieModel";

export class MovieControllers {
    static async findOne(req, res) {
        try {
            const { movieId } = req.params;

            const movie = await MovieModel.findOne({ _id: movieId })

            if(!movie) {
                return res.status(404).send({
                    message: `The movie (${movieId}) is not found !`
                })
            }

            res.status(200).send({ movie })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async findAll(req, res) {
        try {
            const movies = await MovieModel.find({});

            res.status(200).send({ movies })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async create(req, res) {
        try {
            const { name, time } = req.body;

            const movieCreated = await MovieModel.create({ name, time });

            res.status(201).send({ movieCreated })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    } 

    static async update(req, res) {
        try {
            const { movieId } = req.params;
            const { name, time } = req.body;

            const movieUpdated = await MovieModel.findOneAndUpdate(
                { _id: movieId },
                {
                    ...(name ? { name } : {}),
                    ...(time ? { time }: {})
                },
                { new: true }
            )

            if(!movieUpdated){
                return res.status(404).send({
                    message: `The movie (${movieId}) is not found !`
                })
            }

            res.status(201).send({ movieUpdated })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async delete(req, res) {
        try {
            const { movieId } = req.params;

            const movie = await MovieModel.findOneAndDelete({ _id: movieId })

            if(!movie){
                return res.status(404).send({
                    message: `The movie (${movieId}) is not found !`
                })
            }

            res.status(200).send({
                message: `Movie (${movieId}) deleted`
            })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }
}