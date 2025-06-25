import { NextFunction, Request,Response } from "express";
import {AddDepartmentDto,AddDepartmentSchema} from '../../middlewares/zod/department'
import { prisma } from "../../prisma/prisma";
import bcrypt from 'bcrypt'


export async function addDepepartment(req:Request<{id:string},{},AddDepartmentDto>,res:Response,next:NextFunction):Promise<any>{

    try {

        const result=await AddDepartmentSchema.safeParseAsync(req.body);

        if(!result.success){
            return res.status(400).json({
                errors:result.error.format()
            })
        }

        const data:AddDepartmentDto=result.data;

        const schoolId=req.params.id;

        const school=await prisma.school.findUnique({
            where:{
                id:schoolId
            }
        })

        if(!school){
            return res.status(404).json('School to add department not found')
        }

        const hashedPassword=await bcrypt.hash(data.password,12);

        const department=await prisma.department.create({
            data:{
                name:data.name,
                description:data.description,
                school:{
                    connect:{
                        id:schoolId
                    }
                },
                hod:{
                    create:{
                        firstName:data.firstName,
                        lastName:data.lastName,
                        email:data.email,
                        password:data.password,
                        dateOfBirth:data.dateOfBirth,
                        gender:data.gender,
                        phone:data.phone,
                        staffProfile:{
                            create:{
                                jobTitle:data.jobTitle
                            }
                        },
                        role:'HOD',
                        userType:'STAFF',
                        status:'ACTIVE'
                        
                    }
                }

            }
        })

        res.status(201).json({
        message: 'School created successfully',
        department,
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({Error:"Error to add department",error})
    }
}

export async function getDepartment(req:Request,res:Response,next:NextFunction):Promise<any>{

    try {

        const schoolId=req.params.id;

        const department=await prisma.department.findMany({
            where:{
                schoolId:schoolId
            },
            select:{
                id:true,
                name:true,
                description:true,
                programs:true,
                hod:{
                    select:{
                        id:true,
                        firstName:true,
                        lastName:true,
                        email:true,
                        phone:true,
                        gender:true,
                        staffProfile:{
                            select:{
                                jobTitle:true
                            }
                        },
                        role:true,
                        userType:true,
                    }
                },
            }
        });

        res.status(200).json({
            message:'Department get successfully',
            department:department
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({Error:"Error to get department",error})
    }

}