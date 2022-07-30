import mongoose from "mongoose";

const mongoDB = "mongodb+srv://shanda:jadenallen@cluster0.nvetu.mongodb.net/test";

export async function connectToDatabase() {
  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.error(e);
  }
}
