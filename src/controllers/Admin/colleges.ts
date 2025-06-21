import { NextFunction, Request,Response } from "express";
import {AddCollege} from '../../types/dataTypes'
import {prisma} from '../../prisma/prisma'
import bcrypt from 'bcrypt'
import {AddCollegeSchema,AddCollegeDto} from '../../middlewares/zod/college'



export async function AddCollege(req:Request<{id:string},{},AddCollegeDto>,res:Response,next:NextFunction):Promise<any>{

    try {

        const universityId=req.params.id

        const result = await AddCollegeSchema.safeParseAsync(req.body);
        if (!result.success) {
        return res.status(400).json({
            errors: result.error.format(),
        });
        }

        const data: AddCollegeDto = result.data; 

        const hashedPassword = await bcrypt.hash(data.password, 12);

        const college= await prisma.college.create({
            data:{
                name:data.name,
                description:data.description,
                location:data.location,
                university:{
                    connect:{
                        id:universityId
                    }
                },
                director:{
                    create:{
                        firstName:data.firstName,
                        lastName:data.lastName,
                        dateOfBirth:data.dateOfBirth,
                        email:data.email,
                        password:hashedPassword,
                        gender:data.gender,
                        phone:data.phone,
                        staffProfile:{
                            create:{
                                jobTitle:data.jobTitle
                            }
                        },
                        role:'PRINCIPAL'

                    }
                }
            },
            include:{
                university:true,
                director:true
            }
        })

        res.status(201).json({
        message: 'College created successfully',
        college,
        });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({Error:"Error to add college",error})
    }

}