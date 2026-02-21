import mongoose from "mongoose";

export async function connectToDB() {
  const uri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/moviesdb";

  await mongoose.connect(uri);
  console.log("Połączono z bazą");
}
