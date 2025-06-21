import { Request,Response,NextFunction } from "express";
import {prisma} from '../../prisma/prisma'
import {AddCollege} from '../../types/dataTypes'
import bcrypt from 'bcrypt'

export async function addSchool(req:Request<{id:string},{},AddCollege>,res:Response,next:NextFunction):Promise<any>{

    try {
        const {name,location,description,firstName,lastName,email,password,gender,phone,dateOfBirth,jobTitle}=req.body;

        const collegeId=req.params.id

         const parsedDate = new Date(dateOfBirth);
        
        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ error: "Invalid date "})
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const school= await prisma.school.create({
            data:{
                name,
                description,
                college:{
                    connect:{
                        id:collegeId
                    }
                },
                dean:{
                    create:{
                        firstName,
                        lastName,
                        dateOfBirth:parsedDate,
                        email,
                        password:hashedPassword,
                        gender,
                        phone,
                        staffProfile:{
                            create:{
                                jobTitle
                            }
                        },
                        role:'DEAN'
                    }
                }
                
                
            },
            include:{
                college:true,
                dean:true
            }
        })
        return res.status(201).json({
        message: 'School created successfully',
        school,
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({Error:"Error to add school"})
    }
}