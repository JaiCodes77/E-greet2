import { delete1 } from "../controllers/delete1.js"; 
import express from "express" 
import deletedata from "../controllers/delete.js";
const router = express.Router();

router.get("/delete", delete1)
router.post("/enterdata",deletedata)
export default router