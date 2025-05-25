import {Request,Response,NextFunction} from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma=new PrismaClient()

export interface HodRequest{
    name:string,
    email:string,
    password:string,
    gender:string,

}


export async function addDepartment(req:Request,res:Response,next:NextFunction):Promise<any>{

   try {
        const schoolId=req.params.id
        const {name }=req.body;

        const department=await prisma.department.create({
            data:{
                name,
                school:{
                    connect:{
                        id:schoolId
                    }
                }
            }
        })

        res.status(201).json({department:department})

   } catch (error) {
         console.log(error);
        return res.status(500).json({Error:"Error to add school"});
   }

}

export async function updateDepartment(req:Request,res:Response,next:NextFunction){

    try {
        
        const departmentId=req.params.id
        const {name}=req.body;

        const department=await prisma.department.update({
            where:{
                id:departmentId
            },
            data:{
                name
            }
        })


    } catch (error) {
        
    }

}

export async function addHodSchool(req:Request,res:Response,next:NextFunction):Promise<any>{

   try {
        const departmentId=req.params.id
        const {name,email,password,gender}:HodRequest=req.body

        
        const defoultPassword= password || 'password123'
        
        const hashPassword=await bcrypt.hash(defoultPassword,12) ;

        const hodofSchool=await prisma.user.create({
            data:{
                name,
                email,
                password:hashPassword,
                gender,
                reg_no:BigInt(12345)

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