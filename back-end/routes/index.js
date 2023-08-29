import movieRoutes from "./movieRoutes"
import episodeRoutes from "./episodeRoutes";
import serieRoutes from "./serieRoutes";
import authRoutes from "./authRoutes";

const router = (app) => {
    app.use("/movies", movieRoutes)
    app.use("/episodes",episodeRoutes)
    app.use("/series", serieRoutes)
    app.use("/auth", authRoutes)
}

export default router;