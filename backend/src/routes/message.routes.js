import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {
  deleteChat,
  getMessages,
  getUserFromSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUserFromSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
router.delete("/:id", protectRoute, deleteChat);

export default router;
