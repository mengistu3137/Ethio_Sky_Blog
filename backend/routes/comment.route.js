import {
  
    getComments,
    postComment,
    deleteComment,
  
} from "../controllers/comment.controller.js"
import express from "express"

const router = express.Router()

router.get('/:postId',getComments)
router.post('/:postId',postComment)
router.delete('/:id',deleteComment)
export default router