import { EpisodeModel } from "../models/episodeModel";
import { SerieModel } from "../models/serieModel";

export class EpisodeControllers {
    static async findOne(req, res) {
        try{
            const { episodeId } = req.params;

            const episode = await EpisodeModel.findOne({_id: episodeId })
            
            if(!episode) {
                return res.status(404).send({
                    message: `The episode (${episodeId}) is not found !`
                })
            }

            res.status(200).send({ episode })
        } catch(err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async findAll(req, res){
        try {
            const episodes = await EpisodeModel.find({});

            console.log(req.user)

            res.status(200).send({ episodes })
        } catch(err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async create(req, res) {
        try {
            const { name, description, time, serieId } = req.body;

            const episodeCreated = await EpisodeModel.create({
                name,
                description, 
                time,
                serieId: serieId || null,
            });

            res.status(201).send({ episodeCreated })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async update(req, res) {
        try {
            const { episodeId } = req.params;
            const { name, time, description, serieId } = req.body;

            if(serieId){
                const serie = await SerieModel.findOne({ _id: serieId });

                if(!serie){
                    return res.status(404).send({
                        message: `Serie (${serieId}) is not found !`
                    })
                }
            }

            const episodeUpdated = await EpisodeModel.findOneAndUpdate(
                { _id: episodeId },
                {
                    ...( name ? { name } : {} ),
                    ...( time ? { time } : {} ),
                    ...( description ? { description } : {}),
                    ...( (serieId || serieId === null) ? { serieId } : {})
                },
                { new: true }
            )
            
            if (!episodeUpdated){
                res.status(404).send({
                    message: `The episode (${episodeId}) is not found !`
                })
            }

            res.status(201).send({ episodeUpdated })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }

    static async delete(req, res) {
        try {
            const { episodeId } = req.params;

            const episode = await EpisodeModel.findOneAndDelete({ _id: episodeId });
    
            if(!episode){
                return res.status(404).send({
                    message: `The episode (${episodeId}) is not found !`
                })
            }
    
            res.status(200).send({
                message: `Episode (${episodeId}) deleted`
            })
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err.message })
        }
    }
}
