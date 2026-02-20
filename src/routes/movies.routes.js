import { Router } from "express";
import { getMovies, createMovie } from "../controllers/movies.controllers.js";

const router = Router();

router.get("/", getMovies);
router.post("/", createMovie);

export default router;
