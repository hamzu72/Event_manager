import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config({ path: "./config/config.env" });


const app = express();


app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Event Management",
  });
});
app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;
