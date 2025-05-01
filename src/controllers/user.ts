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


export async function resendOtp(req:Request,res:Response,next:NextFunction):Promise<any>{
   try {

        interface resendInput{
            email:string
        }
        const {email}:resendInput=req.body

        const user =await prisma.user.findUnique({
            where:{email:email}
        })

        if(!user)return res.status(404).json({Error:'User not found'})

        const otp:string= await crypto.randomInt(111111,999999).toString();
        const expiredOtp:Date=addMinutes(new Date(),15);

        sendEmail(email,otp,user.name,)
        
        res.status(200).json({Message:'Email resend successfuly, check on your email!'})

   } catch (error) {
        console.log(error)
        return res.status(500).json({Error:'Error to resend otp '})
   }
};

export async function verifyOtp(req:Request,res:Response,next:NextFunction):Promise<any>{
   try {

        interface VetifyInput{
            email:string,
            otp:string
        }
        const {email,otp}:VetifyInput=req.body;

        const user=await prisma.user.findUnique({
            where:{email:email}
        })

        const foundOtp=await prisma.otp.findUnique({
            where:{userId:user?.id}
        });

        if(foundOtp?.otp !== otp || foundOtp.expiredDate < new Date){
            return res.status(400).json({Error:'Invalid or expired otp'})
        }

        await prisma.user.update({
            where:{id:user?.id},
            data:{
                status:'ACTIVE'
            }
        });

        await prisma.otp.delete({
            where:{userId:user?.id}
        });

        res.status(200).json({Message:'Email verify successfuly, now you can login'});

   } catch (error) {
        console.log(error)
        return res.status(500).json({Error:'Error to verify otp '})
   }

}
