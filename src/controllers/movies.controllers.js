import { movies } from "../data/movie.data.js";

export function getMovies(req, res) {
  res.json(movies);
}

export function createMovie(req, res, next) {
  const movie = req.body;

  if (!movie.title || !movie.description) {
    return next(new Error("Title and description are required"));
  }

  movies.push({ id: movies.length + 1, ...movie });

  res.status(201).json({ message: "Movie created successfully", movie });
}
