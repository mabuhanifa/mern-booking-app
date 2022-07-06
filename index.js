import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/mongodb.js";
const app = express();
dotenv.config();

try {
  connectDB();
} catch (err) {
  console.error(err);
}

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log("listening on port 5000 ");
});
