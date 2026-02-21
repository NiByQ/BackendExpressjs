import express from "express";
import moviesRoutes from "./routes/movies.routes.js";
import cors from "cors";
import "dotenv/config";
import { connectToDB } from "./db/mongoose.js";

const app = express();
app.use(cors());

await connectToDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

const port = 3005;

app.use("/api/movies", moviesRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(port, () => {
  console.log(`http://localhost:${port} on port ${port}`);
});
