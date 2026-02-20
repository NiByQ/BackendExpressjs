import express from "express";
import { title } from "node:process";
const app = express();
app.use(express.json());
const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/movies", (req, res) => {
  const movies = [
    { id: 1, title: "Movie 1", description: "Description of Movie 1" },
    { id: 2, title: "Movie 2", description: "Description of Movie 2" },
    { id: 3, title: "Movie 3", description: "Description of Movie 3" },
  ];
  res.json(movies);
});

app.post("/api/movies", (req, res) => {
  const movie = req.body;
  res.status(201).json({ message: "Movie created successfully", movie });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} on port ${port}`);
});
