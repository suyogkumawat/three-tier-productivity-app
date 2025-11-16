import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import apiRoutes from "./routes/api.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://107.21.150.218:8082",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));
app.options("*", cors()); // Enable preflight support

app.use(express.json());

// Health check for Kubernetes
app.get("/healthz", (_, res) => res.status(200).send("OK"));

// Routes
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Backend running on port ${port}`));
