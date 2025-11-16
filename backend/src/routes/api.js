import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  res.json({ user: req.user.sub });
});

router.get("/tasks", authMiddleware, (req, res) => {
  const tasks = [
    { id: 1, title: "Learn Kubernetes", status: "OPEN" },
    { id: 2, title: "Build CI/CD Pipeline", status: "IN_PROGRESS" }
  ];
  res.json(tasks);
});

export default router;
