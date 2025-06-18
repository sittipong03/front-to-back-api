import express from "express"
import { register , login } from "../controllers/auth.controller.js"

const router = express.Router()

// ENDPOINT http://localhost:8000/auth/register
router.post("/register" , register)
router.post("/login", login)



// Export 
export default router