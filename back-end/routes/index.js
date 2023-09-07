import movieRoutes from "./movieRoutes"
import episodeRoutes from "./episodeRoutes";
import serieRoutes from "./serieRoutes";
import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";

const router = (app) => {
    app.use("/movies", movieRoutes)
    app.use("/episodes", episodeRoutes)
    app.use("/series", serieRoutes)
    app.use("/auth", authRoutes)
    app.use("/users", userRoutes)
}

export default router;
