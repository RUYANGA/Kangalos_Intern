import {Request,Response,NextFunction} from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma=new PrismaClient()

interface HodRequest{
    name:string,
    email:string,
    password:string,
    gender:string,
    reg_no:number

}

export async function addHodSchool(req:Request,res:Response,next:NextFunction){

   try {
        const departmentId=req.params.id
        const {name,email,password,gender,reg_no}=req.body
        
        const defoultPassword= password || 'password123'
        const number=reg_no||12345
        
        const hashPassword=await bcrypt.hash(defoultPassword,12) ;

        const hodofSchool=await prisma.user.create({
            data:{
                name,
                email,
                password,
                gender,
                reg_no:BigInt(number)

            }
        })

        await prisma.user.update({
            where:{
                id:hodofSchool.id
            },
            data:{
                role:'HOD',
                status:'ACTIVE'
            }
        });

        const school=await prisma.department.update({
            where:{
                id:departmentId
            },
            data:{
                HOD:{
                    connect:{
                        id:hodofSchool.id
                    }
                }
            }
        })


        res.status(200).json({schoolHOD:school})


   } catch (error) {
        console.log(error);
        return res.status(500).json({Error:"Error to add school"});
   }

}