import cors from "cors";
import express from "express";
import { connectToDatabase } from "./db/database";
import rootRouter from "./routes/root";
import bookRouter from "./routes/books.js";
import authorRouter from "./routes/authors.js";


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connectToDatabase();

app.use("/", rootRouter);
app.use("/books", bookRouter);
app.use("/authors", authorRouter);

export default app; 
