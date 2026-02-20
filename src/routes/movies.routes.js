import { Router } from "express";
import {
  getMovies,
  createMovie,
  getMovie,
  likeMovie,
  dislikeMovie,
} from "../controllers/movies.controllers.js";

const router = Router();

router.get("/", getMovies);
router.post("/", createMovie);
router.get("/:id", getMovie);
router.patch("/:id/like", likeMovie);
router.patch("/:id/dislike", dislikeMovie);

export default router;
