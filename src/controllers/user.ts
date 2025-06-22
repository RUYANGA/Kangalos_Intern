import {Request,Response,NextFunction} from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import {addMinutes} from 'date-fns'
import {sendEmail,forgetPassword1} from'../util/nodemailer'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { ResendOtpInput,FogetEmail} from '../types/dataTypes'
import { VerifyOtpZ,VerifyOtpDto} from '../middlewares/zod/verifyOtp'
import { LoginDto, LoginZ } from '../middlewares/zod/userLogin'
import { SignUpDto, SignUpZ } from '../middlewares/zod/userRegister'



const prisma=new PrismaClient()
const JWT_KEY=process.env.JWTKEY || 'jkdsdfguyi90uy7tryfdfchvbhjuhigy' as string
const tokenkey=process.env.TOKEN_KEY || 'oiuytrdfghjkopiuygyf' as string;


export async function Register(req:Request<{},{},SignUpDto>,res:Response,next:NextFunction):Promise<any>{

    try {
       
    
        const result= await SignUpZ.safeParseAsync(req.body)

        if(!result.success){
            return res.status(400).json({
                error:result.error.format()
            })
        }

        const data:SignUpDto=result.data

        const parsedDate = new Date(data.dateOfBirth);

        if (isNaN(parsedDate.getTime())) {
        return res.status(400).json({ error: "Invalid date format" });
        }
    
        const otp:string= await crypto.randomInt(111111,999999).toString();
        const expiredOtp=addMinutes(new Date(),15)
    
        const hashPassword=await bcrypt.hash(data.password,12)     
    
        const user=await prisma.user.create({
            data:{
                firstName:data.firstName,
                lastName:data.lastName,
                dateOfBirth:parsedDate,
                email:data.email,
                password:hashPassword,
                phone:data.phone,
                gender:data.gender,

            }
        })
    
        await prisma.otp.create({
           data:{
            code:otp,
            expiredDate:expiredOtp,
            userId:user.id
           }
        })
    
        sendEmail(user.email,otp,user.firstName)//Send otp to email
    
        res.status(201).json({Message:`User registered verify otp send to ${data.email} `})
        
    } catch (error) {

        console.log(error)
        return res.status(500).json({Error:'Error to register user ',error})
    }
};


export async function resendOtp(req:Request<{},{},ResendOtpInput>,res:Response,next:NextFunction):Promise<any>{
   try {

        
        const {email}=req.body

        const user =await prisma.user.findUnique({
            where:{email:email}
        })

        if(!user)return res.status(404).json({Error:'User not found'})

        const otp:string= await crypto.randomInt(111111,999999).toString();
        const expiredOtp:Date=addMinutes(new Date(),15);

        await prisma.otp.update({
            where:{userId:user.id},
            data:{
                code:otp,
                expiredDate:expiredOtp
            }
        })

        sendEmail(email,otp,user.firstName)//Send otp to email
        
        res.status(200).json({Message:'Email resend successfuly, check on your email!'})

   } catch (error) {

        //console.log(error)
        return res.status(500).json({Error:'Error to resend otp '})
   }
};

export async function verifyOtp(req:Request<{},{},VerifyOtpDto>,res:Response,next:NextFunction):Promise<any>{

   try {

        const result= await VerifyOtpZ.safeParseAsync(req.body);

        if(!result.success){
            return res.status(400).json({
                error:result.error.format()
            })
        }

        const data:VerifyOtpDto=result.data

        console.log(data.otp)

        const user=await prisma.user.findUnique({
            where:{email:data.email}
        })

        const foundOtp=await prisma.otp.findUnique({
            where:{userId:user?.id}
        });

        if(!foundOtp)return res.status(404).json('Otp not found')

        if (String(foundOtp.code) !== data.otp.trim()) {
          return res.status(401).json({ error: 'Invalid Otp' });
        
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
    
        //console.log(error)
        return res.status(500).json({Error:'Error to verify otp '})
   }

}


export async function Login(req:Request<{},{},LoginDto>,res:Response,next:NextFunction):Promise<any>{

   try {
       

        const result =await LoginZ.safeParseAsync(req.body)

        if(!result.success){
            return res.status(400).json({
                error:result.error.format()
            })
        }

        const data:LoginDto=result.data

        const user=await prisma.user.findUnique({
            where:{email:data.email}
        })

        if(!user) return

        if(!await bcrypt.compare(data.password,user?.password)){
            return res.status(404).json({Error:"Email or password is incorrect!"});
        }

        const token =jwt.sign(
            {
                id:user?.id,
                role:user?.role,
                UserType:user.userType,
                email:user?.email
            },
               JWT_KEY,
            {
                expiresIn:'30day'
            }
        );

        res.status(200).json({Message:'Login successfuly',token:token})

        
   } catch (error) {
       console.log(error)
       return res.status(500).json({Error:'Error to login, try again '})
   }

};

export async function forgetPassword(req:Request<{},{},FogetEmail>,res:Response,next:NextFunction):Promise<any>{

   try {

    const {email}=req.body;

    const user=await prisma.user.findUnique({
        where:{email:email}
    });

    if(!user)return res.status(404).json({Error:'User with email not found'})

    const token=jwt.sign(
        {
            id:user.id
        },
        tokenkey,
        {
            expiresIn:"30day"
        }
    )

    forgetPassword1(user.email,token,user?.firstName)

    res.status(200).json({Message:`Rest password link sent to ${email}`,token:token})

   } catch (error) {

        //console.log(error)
        return res.status(500).json({Error:'Error to reset password'})
   }
};

 type Password={
            password:string
        };

export async function resetPassword(req:Request<{},{},Password>,res:Response,next:NextFunction):Promise<any>{

    try {
       
        const{password}=req.body;

        const authHeader=req.headers['authorization'];
        const token=authHeader?.split(" ")[1];

        if(!token)return res.status(400).json({Message:'Token not provided'});

        const hashPassword=await bcrypt.hash(password,12);

        const decoded=jwt.verify(token,tokenkey) as {id:string} ;

        await prisma.user.update({
            where:{id:decoded?.id},
            data:{password:hashPassword}
        });

        res.status(200).json({Message:"Reset password successfuly !"});

    } catch (err) {
        //console.log(err)
        return res.status(500).json({Error:'Token is expired or invalid !'});
        
    }
}

