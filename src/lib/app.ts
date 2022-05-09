import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/error";
import notFound from "./middleware/not-found";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(notFound)
app.use(errorHandler)

export default app;
