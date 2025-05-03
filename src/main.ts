import dotenv from 'dotenv'
dotenv.config()

import express ,{Request,Response,NextFunction} from "express";
import userRoutes from '../src/routes/UserRoutes'


const port=2000



const app=express()

app.use(express.json())



app.use(userRoutes)



app.use((error:any,req:Request,res:Response,next:NextFunction):void=>{
    res.status(500).json({Error: 'Something went wronge, Try again'})
    console.log(error.message)
    return
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})