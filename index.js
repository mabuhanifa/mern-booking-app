import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/mongodb.js";
import auth from "./routes/auth.js";

const app = express();

dotenv.config();
app.use(cors());

try {
  connectDB();
} catch (err) {
  console.error(err);
}

app.use("/auth", auth);
app.get("/", (req, res) => {
  res.send("hello from node api!");
});

const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
  console.log("listening on port 5000 ");
});
