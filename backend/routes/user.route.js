import express from "express"
import { getSavedPost, SavePost } from "../controllers/user.controller.js"
const router = express.Router()
router.get("/saved", getSavedPost)
router.patch("/save", SavePost)
export default  router