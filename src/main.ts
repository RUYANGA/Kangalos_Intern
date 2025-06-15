import dotenv from 'dotenv'
dotenv.config()

import express ,{Request,Response,NextFunction} from "express";
import userRoutes from '../src/routes/UserRoutes'
import adminRoutes from './routes/AdminRouter/admin'
import principalRoutes from '../src/routes/PrincipalRoute/principal'
import deanRoutes from  '../src/routes/DeanController/dean'

import cors from 'cors'


const port=process.env.PORT||2000



const app=express()

app.use(express.json());


app.use(cors({
    origin:'*',
    methods:['GET','POST','PUT','PUTCH','DELETE'],
    credentials:true
}))



app.use(userRoutes)
app.use(adminRoutes)
app.use(principalRoutes)
app.use(deanRoutes)



app.use((error:any,req:Request,res:Response,next:NextFunction):void=>{
    res.status(500).json({Error: 'Something went wronge, Try again'})
    console.log(error.message)
    return
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})