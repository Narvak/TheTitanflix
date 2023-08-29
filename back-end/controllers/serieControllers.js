import { SerieModel } from "../models/serieModel";
import { EpisodeModel } from "../models/episodeModel";


export class SerieControllers {
    static async findOne(req, res) {
        try{
            const { serieId } = req.params;

            const serie = await SerieModel.findOne({_id: serieId })
            
            if(!serie) {
                return res.status(404).send({
                    message: `Serie (${serieId}) is not found !`
                })
            }

            res.status(200).send({ serie })
        } catch(err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }


    static async findOneWithEpisode(req, res) {
        try{
            const { serieId } = req.params;

            const serie = await SerieModel.findOne({_id: serieId })
            
            if(!serie) {
                return res.status(404).send({
                    message: `Serie (${serieId}) is not found !`
                })
            }

            const episodes = await EpisodeModel.find({ serieId })

            res.status(200).send({ serie, episodes })
        } catch(err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async findAll(req, res) {
        try {
            const series = await SerieModel.find({});

            res.status(200).send({
                data: series,
                message: "All series !"
            })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async create(req, res){
        try {
            const { name, averageTime } = req.body;

            const serieCreated = await SerieModel.create({
                name,
                averageTime,
            });

            res.status(201).send({ serieCreated })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async update(req, res) {
        try {
            const { serieId } = req.params;
            const { name, averageTime } = req.body;

            const serieUpdated = await SerieModel.findOneAndUpdate(
                { _id: serieId },
                {
                    ...( name ? { name } : {} ),
                    ...( averageTime ? { averageTime } : {} ),
                },
                { new: true }
            )
            
            if (!serieUpdated){
                res.status(404).send({
                    message: `Serie (${serieId}) is not found !`
                })
            }

            res.status(200).send({ serieUpdated, episodes })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async delete(req, res) {
        try {
            const { serieId } = req.params;

            const serie = await SerieModel.findOneAndDelete({ _id: serieId });
    
            if(!serie){
                return res.status(404).send({
                    message: `Serie (${serieId}) is not found !`
                })
            }
    
            res.status(200).send({
                message: `Serie (${serieId}) deleted`
            })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }
}