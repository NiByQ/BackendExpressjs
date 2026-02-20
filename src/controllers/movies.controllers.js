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

export function getMovie(req, res) {
  const movie = movies.find((el) => el.id === parseInt(req.params.id));
  if (!movie) {
    return res
      .status(404)
      .json({ error: "Movie with ID " + req.params.id + " not found" });
  }
  res.json(movie);
}

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
