import {Request,Response,NextFunction} from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import {addMinutes} from 'date-fns'
import {sendEmail} from'../util/nodemailer'
import jwt from 'jsonwebtoken'


const prisma=new PrismaClient()
const JWT_KEY=process.env.JWT_KEY as string


export async function Register(req:Request,res:Response,next:NextFunction):Promise<any>{

    try {
        interface UserInput{
            email:string,
            name:string,
            password:string,
            gender:string,
            reg_no:number
        }
    
        const{name,email,reg_no,gender,password}:UserInput=req.body;
    
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
    
        sendEmail(email,otp,user.name)//Send otp to email
    
        res.status(201).json({Message:'User registered'})
        
    } catch (error) {

        console.log(error)
        return res.status(500).json({Error:'Error to register user '})
    }
};


export async function resendOtp(req:Request,res:Response,next:NextFunction):Promise<any>{
   try {

        interface ResendInput{
            email:string
        }
        const {email}:ResendInput=req.body

        const user =await prisma.user.findUnique({
            where:{email:email}
        })

        if(!user)return res.status(404).json({Error:'User not found'})

        const otp:string= await crypto.randomInt(111111,999999).toString();
        const expiredOtp:Date=addMinutes(new Date(),15);

        await prisma.otp.update({
            where:{userId:user.id},
            data:{
                otp:otp,
                expiredDate:expiredOtp
            }
        })

        sendEmail(email,otp,user.name)//Send otp to email
        
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

        if(!foundOtp)return res.status(404).json('Otp not found')

        if(foundOtp?.otp !== otp){

            return res.status(401).json({Error:'Invalid Otp'})

        }else if(foundOtp.expiredDate < new Date()){

            return res.status(404).json('Otp expired date')

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


export async function Login(req:Request,res:Response,next:NextFunction){

   try {
        interface LoginInput{
            email:string,
            password:string
        };

        const{email,password}:LoginInput=req.body;

        const user=await prisma.user.findUnique({
            where:{email:email}
        })

        if(!user) return

        if(!await bcrypt.compare(password,user?.password)){

        }

        const token =jwt.sign(
            {
                id:user?.id,
                role:user?.role,
                roleinTeam:user?.roleInTeam,
                email:user?.email
            },
               JWT_KEY,
            {
                expiresIn:'30day'
            }
        )

        
   } catch (error) {
       console.log(error)
       return res.status(500).json({Error:'Error to login, try again '})
   }

};



