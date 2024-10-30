import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/DB.js";
import routesPath from './routes/Routes.js';
import routerResume from "./routes/ResumeRoutes.js";

const app = express()
// 
app.use(express.json())
app.use(cors())
app.use('/api/route/', routesPath)
app.use('/api/route/', routerResume)

dotenv.config()
const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Server is running ${port}`)
    connectDB()
})
