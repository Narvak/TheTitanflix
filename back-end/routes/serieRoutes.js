import express from "express";
import { SerieControllers } from "../controllers/serieControllers";
import { AuthMiddlewares } from "../middleware/authMiddlewares"

const serieRoutes = express.Router();

serieRoutes
.get('/', AuthMiddlewares.isConnected, SerieControllers.findAll)
.get('/:serieId', AuthMiddlewares.isConnected, SerieControllers.findOne)
.get('/:serieId/episodes', AuthMiddlewares.isConnected, SerieControllers.findOneWithEpisode)
.post("/", AuthMiddlewares.isConnected, SerieControllers.create)
.patch('/:serieId', AuthMiddlewares.isConnected, SerieControllers.update)
.delete('/:serieId', AuthMiddlewares.isConnected, SerieControllers.delete)

export default serieRoutes;