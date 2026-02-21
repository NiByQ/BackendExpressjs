import { movies } from "../data/movie.data.js";
import { Movie } from "../models/Movie.js";

export const getMovies = async (req, res) => {
  //res.json(movies);
  try {
    const allMovies = await Movie.find();
    res.json(allMovies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

export const createMovie = async (req, res, next) => {
  const movie = req.body;

  if (!movie.title || !movie.description) {
    return next(new Error("Title and description are required"));
  }

  //  movies.push({ id: movies.length + 1, ...movie, like: 0 });

  const newMovie = await Movie.create({
    title: movie.title,
    description: movie.description,
  });
  //console.log("dodano film");

  res.status(201).json({ message: "Movie created successfully", ...movie });
};

export const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res
        .status(404)
        .json({ error: "Movie with ID " + req.params.id + " not found" });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie" });
  }
};

export function likeMovie(req, res) {
  const movie = movies.find((el) => el.id === parseInt(req.params.id));
  if (!movie) {
    return res
      .status(404)
      .json({ error: "Movie with ID " + req.params.id + " not found" });
  }
  movie.like += 1;
  res.json({ message: "Movie liked successfully", movie });
}

export function dislikeMovie(req, res) {
  const movie = movies.find((el) => el.id === parseInt(req.params.id));
  if (!movie) {
    return res
      .status(404)
      .json({ error: "Movie with ID " + req.params.id + " not found" });
  }
  movie.like > 0 ? (movie.like -= 1) : 0;

  res.json({ message: "Movie disliked successfully", movie });
}
