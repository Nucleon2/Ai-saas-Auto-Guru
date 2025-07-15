import express from "express"
import { chat } from "../controllers/chat.controller.js"

const router = express.Router()

router.post("/Deepseek", chat)

export default router