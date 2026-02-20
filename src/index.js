import express from "express";
import moviesRoutes from "./routes/movies.routes.js";
import { MoviesList } from "./viue/moves.list.js";

const app = express();
app.use(express.json());

const port = 3005;

app.use("/api/movies", moviesRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} on port ${port}`);
});
