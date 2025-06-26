import dotenv from 'dotenv'
dotenv.config()

import express ,{Request,Response,NextFunction} from "express";
import cors from 'cors'


import userRoutes from '../src/routes/UserRoutes'
import universityRoutes from './routes/AdminRouter/universityRouter'
import collegeRoutes from './routes/AdminRouter/collegeRouter'
import schoolRouter from './routes/AdminRouter/schoolRouter'
import departmentRouter from './routes/AdminRouter/departmentRouter'

import addProgram from './routes/AdminRouter/program'


const port=process.env.PORT||1000



const app=express()

app.use(express.json());


app.use(cors({
  origin: ['https://kangalos.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true
}));


app.use(userRoutes)
app.use(universityRoutes)
app.use(collegeRoutes)
app.use(schoolRouter)
app.use(departmentRouter)
app.use(addProgram)



app.get('/', (req:Request, res:Response) => {
  res.send('Kangalos backend is running ✅');
});


app.use((error:any,req:Request,res:Response,next:NextFunction):void=>{
    console.log(error.message)
    res.status(500).json({Error: 'Something went wronge, Try again'})
    
    return
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})