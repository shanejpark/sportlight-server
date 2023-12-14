import express from "express";
import cors from "cors";
import "dotenv/config";
import session from "express-session";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";

const CONNECTION_STRING = "mongodb://127.0.0.1:27017/sportlight";
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};

mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
app.listen(process.env.PORT || 4000);
