import { NextFunction, Request,Response } from "express";
import {prisma} from '../../prisma/prisma'
import {AddStudentDto,AddStudentSchema} from '../../middlewares/zod/student'


export async function AddStudent(req:Request<{id:string},{},AddStudentDto>,res:Response,next:NextFunction):Promise<any>{

    try {

        const programId=req.params.id;

        const result=await AddStudentSchema.safeParseAsync(req.body);

        if(!result.success){
            return res.status(400).json({
                errors:result.error.format()
            })
        };


        const program=await prisma.program.findUnique({
            where:{
                id:programId
            }
        });


        if(!program){
            return res.status(404).json({
                error:"Program not found"
            })
        }

        const data:AddStudentDto=result.data;


        const student=await prisma.student.create({
            data:{
                program:{
                    connect:{
                        id:programId
                    }
                },
                regNo:parseInt(data.regNo),
                user:{
                    create:{
                        firstName:data.firstName,
                        lastName:data.lastName,
                        email:data.email,
                        phone:data.phone,
                        password:data.password,
                        gender:data.gender,
                        dateOfBirth:data.dateOfBirth,
                    },
                },
                
            }
        })



        
    } catch (error) {
        
    }

}