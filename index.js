import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/mongodb.js";
import authRoutes from "./routes/auth.js";
import hotelsRoutes from "./routes/hotels.js";
import roomsRoutes from "./routes/rooms.js";
import usersRoutes from "./routes/users.js";

const app = express();

dotenv.config();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());

try {
  connectDB();
} catch (err) {
  console.error(err);
}

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/rooms", roomsRoutes);
app.use("/api/users", usersRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.get("/", (req, res) => {
  res.send("hello from node api!");
});

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log("listening on port 5000 ");
});
