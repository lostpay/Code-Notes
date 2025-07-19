import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "../middleware/ratelimiter.js";
import cors from "cors"
import path from "path"
dotenv.config();

const app=express();
const port=process.env.PORT;
const __dirname=path.resolve()
//middleware
if(process.env.Node_ENV!== "production"){
    app.use(
        cors({
            origin:["http://localhost:5173"],
        })
    )
}
app.use(express.json())
app.use(rateLimiter)

//simple middleware example
// app.use((req,res,next)=>{
//     console.log(`req method is ${req.method} and req url is ${req.url}`)
//     next()
// })
app.use("/api/notes",notesRoutes);

if(process.env.Node_ENV=== "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))//combines the 2 ports of backend and front end into 1
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}
connectDB().then(()=>{
    app.listen(port,() => {
        console.log("server started on PORT: ",port);
    });
})
