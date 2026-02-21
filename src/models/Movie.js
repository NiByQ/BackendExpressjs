import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    like: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Movie = mongoose.model("Movie", MovieSchema);
