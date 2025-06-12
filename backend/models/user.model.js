import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
    {
        clerkUserId: {
            type: String,
            required: true,
            unique:true
       },
        username: {
        type: String,
        unique: true,
        required:true, 
        },
        email: {
        type: String,
        unique: true,
        required:true, 
        },
        img: {
        type: String
        
        },
        savedPosts: {
            type: [String],
            defualt:[]
    
        }
    },
    {
timestamps:true
    }
)
export default mongoose.model("User",userSchema)