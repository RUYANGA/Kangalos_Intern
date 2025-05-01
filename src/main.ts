import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import userRoutes from '../src/routes/UserRoutes'


const port=2000



const app=express()

app.use(express.json())



app.use(userRoutes)





app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})