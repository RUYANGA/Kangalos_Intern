import { Request,Response,NextFunction } from "express";
import {prisma} from '../../prisma/prisma'
import {AddSchool} from '../../types/dataTypes'
import bcrypt from 'bcrypt'

export async function addSchool(req:Request<{id:string},{},AddSchool>,res:Response,next:NextFunction):Promise<any>{

    try {
        const {name,description,firstName,lastName,email,password,gender,phone,dateOfBirth,jobTitle}=req.body;

        const collegeId=req.params.id

        if(!collegeId){
            return res.status(400).json({Error:"College id not provided"})
        }

        const existCollage=await prisma.college.findUnique({
            where:{
                id:collegeId
            }
        })
        if(!existCollage){
            return res.status(404).json({Error:"College to add school not found"})
        }

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
        res.status(201).json({
        message: 'School created successfully',
        school,
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({Error:"Error to add school",error})
    }
}