import dotenv from "dotenv";
dotenv.config();
import connect from "./config/database.js";
connect();
import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const port = process.env.PORT || 5000;

// cors middleware
app.use(cors());

app.use(express.json({ limit: "150mb" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", (req, res) => {
  res.send("Server is running...");
});

// Catch-all for unknown routes (404 handler)
app.use((req, res, next) => {
  const error = new Error("Resource not found");
  error.statusCode = 404;
  next(error);
});

// Global error-handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
