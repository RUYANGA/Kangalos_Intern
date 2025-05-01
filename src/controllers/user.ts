import {Request,Response,NextFunction} from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import {addMinutes} from 'date-fns'
import {sendEmail} from'../util/nodemailer'


const prisma=new PrismaClient()


export async function Register(req:Request,res:Response,next:NextFunction):Promise<any>{

    try {
        interface userInput{
            email:string,
            name:string,
            password:string,
            gender:string,
            reg_no:number
        }
    
        const{name,email,reg_no,gender,password}:userInput=req.body;
    
        const otp:string= await crypto.randomInt(111111,999999).toString();
        const expiredOtp=addMinutes(new Date(),15)
    
        const hashPassword=await bcrypt.hash(password,12)     
    
        const user=await prisma.user.create({
            data:{
                name,
                email,
                reg_no,
                password:hashPassword,
                gender,
            }
        })
    
        await prisma.otp.create({
           data:{
            otp:otp,
            expiredDate:expiredOtp,
            userId:user.id
           }
        })
    
        sendEmail(email,otp,user.name,)
    
        res.status(201).json({Message:'User registered'})
    } catch (error) {
        console.log(error)
        return res.status(500).json({Error:'Error to register user '})
    }
};


export async function resendOtp(req:Request,res:Response,next:NextFunction){
    interface resendInput{
        email:string
    }
    const {email}=req.body

    const user =await prisma.user.findUnique({
        where:{email:email}
    })

    if(!user)return res.status(404).json({Error:'User not found'})

    const otp:string= await crypto.randomInt(111111,999999).toString();
    const expiredOtp:Date=addMinutes(new Date(),15);

    sendEmail(otp,email,user?.name)
    

}
