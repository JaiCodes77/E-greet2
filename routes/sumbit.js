import express from "express"
import { register_post } from "../controllers/submit.js" 

const router = express.Router("")
router.post("/entry",register_post)

export default router