import express from "express";
import { MovieControllers } from "../controllers/movieControllers";
import { AuthMiddlewares } from "../middleware/authMiddlewares"

const movieRoutes = express.Router();

movieRoutes
.get('/', AuthMiddlewares.isConnected, MovieControllers.findAll)
.get('/:movieId', AuthMiddlewares.isConnected, MovieControllers.findOne)
.post('/', AuthMiddlewares.isConnected, MovieControllers.create)
.patch('/:movieId', AuthMiddlewares.isConnected, MovieControllers.update)
.delete('/:movieId', AuthMiddlewares.isConnected, MovieControllers.delete)

export default movieRoutes;