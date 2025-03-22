const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend" });
});

module.exports = app;
