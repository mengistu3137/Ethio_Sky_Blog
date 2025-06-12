import User from "../models/user.model.js"

export const getSavedPost = async (req, res) => {
    const clerkUserId = req.auth.userId

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated to get saved post")
    }
    const user = await User.findOne({clerkUserId })
   
    res.status(200).json(user.savedPosts)
    
    
}

export const SavePost = async (req, res) => {
    const clerkUserId = req.auth.userId
    const postId=req.body.postId
    if (!clerkUserId) {
      return  res.status(401).json("Not authenticated to to save post")
    }
    const user = await User.findOne({ clerkUserId })
    const isSaved = user.savedPosts.some((p) => p === postId)
    
    if (!isSaved) {
       await User.findByIdAndUpdate(user._id, {
            $push:{savedPosts:postId}
        })
        
    }
    else {
     await User.findByIdAndUpdate(user._id, {
            $pull:{savedPosts:postId}
        })    
    }
    setTimeout(() => {
        
        res.status(200).json(isSaved? "Post unsaved":"Post saved")
    },3000)
    }
    
    
