import { Router } from "express";

const router = Router();

// Routes

router.get("/api/movies", (req, res) => {
  const movies = [
    { id: 1, title: "Movie 1", description: "Description of Movie 1" },
    { id: 2, title: "Movie 2", description: "Description of Movie 2" },
    { id: 3, title: "Movie 3", description: "Description of Movie 3" },
  ];
  res.json(movies);
});

router.post("/api/movies", (req, res, next) => {
  const movie = req.body;

  if (!movie.title || !movie.description) {
    return next(new Error("Title and description are required"));
  }

  res.status(201).json({ message: "Movie created successfully", movie });
});

export default router;
