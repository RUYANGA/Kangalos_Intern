import {Request,Response,NextFunction} from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import {addMinutes} from 'date-fns'


const prisma=new PrismaClient()


export async function Register(req:Request,res:Response,next:NextFunction){

    interface userInput{
        email:string,
        name:string,
        password:string,
        gender:string,
        reg_no:number
    }

    const{name,email,reg_no,gender,password}:userInput=req.body;

    const otp= await crypto.randomInt(111111,999999).toString();
    const expiredOtp=addMinutes(new Date(),15)
    const hashPassword=await bcrypt.hash(password,12)



    const user=await prisma.user.create({
        data:{
            name,
            email,
            reg_no,
            password:hashPassword,
            gender,
            otp:otp
        }
    })

    await prisma.otp.create({
        otp:otp,
        expiredOtp:expiredOtp,
        user:user.id
    })

    res.status(201).json({Message:'User registered'})
}
