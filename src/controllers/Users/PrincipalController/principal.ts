import {Request,Response,NextFunction} from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma=new PrismaClient()



export async function addSchool (req:Request,res:Response,next:NextFunction):Promise<any>{

    try {

      const{name}=req.body;
      const collegeId=req.params.id

      const school=await prisma.school.create(({
        data:{
            name,
            college:{
                connect:{
                    id:collegeId
                }
            }
        }
      }))


      res.status(201).json({Message:school})

    } catch (error) {

        console.log(error);
        return res.status(500).json({Error:"Error to add school"});
    }

};

export async function AddSchoolDean(req:Request,res:Response,next:NextFunction):Promise<any>{

    try {

        const schoolId=req.params.id
        const {name,email,password,gender,reg_no}=req.body

        const defoultPassword= password || 'password123'
        const number=reg_no||12345

        const hashPassword=await bcrypt.hash(defoultPassword,12)     
        
        const user=await prisma.user.create({
            data:{
                name,
                email,
                reg_no:BigInt(number),
                password:hashPassword,
                gender,
            }
        })

        await prisma.user.update({
            where:{
                id:user.id
            },
            data:{
                role:'DEAN',
                status:'ACTIVE'
            }
        })

        const school=await prisma.school.update({
            where:{id:schoolId},
            data:{
                dean:{
                    connect:{
                        id:user.id
                    }
                }
            }
        })

        res.status(201).json({Message:school})

    } catch (error) {
        console.log(error);
        return res.status(500).json({Error:"Error to add dean of school"});
    }


}