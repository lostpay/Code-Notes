import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "../middleware/ratelimiter.js";
import cors from "cors"
dotenv.config();

const app=express();
const port=process.env.PORT;

//middleware
app.use(
    cors({
        origin:["http://localhost:5173"],
    })
)
app.use(express.json())
app.use(rateLimiter)

//simple middleware example
// app.use((req,res,next)=>{
//     console.log(`req method is ${req.method} and req url is ${req.url}`)
//     next()
// })
app.use("/api/notes",notesRoutes);

connectDB().then(()=>{
    app.listen(port,() => {
        console.log("server started on PORT: ",port);
    });
})
