import express from "express";
import { EpisodeControllers } from "../controllers/episodeControllers";
import { AuthMiddlewares } from "../middleware/authMiddlewares"

const episodeRoutes = express.Router();

episodeRoutes
.get('/:episodeId', AuthMiddlewares.isConnected, EpisodeControllers.findOne)
.get('/', AuthMiddlewares.isConnected, EpisodeControllers.findAll)
.post('/', AuthMiddlewares.isConnected, EpisodeControllers.create)
.patch('/:episodeId', AuthMiddlewares.isConnected, EpisodeControllers.update)
.delete('/:episodeId', AuthMiddlewares.isConnected, EpisodeControllers.delete)

export default episodeRoutes;