import express, { json } from "express"
import { clerkMiddleware } from "@clerk/express"
import cors from "cors"

import 'dotenv/config'
import connectDB from "./db_connection/connnectDB.js"
import userRoute from "./routes/user.route.js"
import postRoute from "./routes/post.route.js"
import commentRoute from "./routes/comment.route.js"
import webhookRoute from "./routes/webhook.route.js"

const app = express()
app.use(cors(process.env.CLIENT_URL))
app.use(clerkMiddleware())
app.use("/webhooks", webhookRoute)

app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use("/posts",postRoute)
app.use("/users", userRoute)
app.use("/comments", commentRoute)

app.use((error, req, res, next) => {
  console.log(error)
    res.status(error.status || 500);
    res.json({
        message: error.message,
        status: error.status,
        stack:error.stack
    })
})


app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`the server is running on port ${process.env.PORT}`)
})