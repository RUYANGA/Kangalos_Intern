import { NextFunction, Request,Response } from "express";
import {AddCollege} from '../../types/dataTypes'
import {prisma} from '../../prisma/prisma'
import bcrypt from 'bcrypt'



export async function AddCollege(req:Request<{id:string},{},AddCollege>,res:Response,next:NextFunction):Promise<any>{

    try {
        const {name,location,description,firstName,lastName,email,password,gender,phone,dateOfBirth,jobTitle}=req.body;

        const universityId=req.params.id

        const parsedDate = new Date(dateOfBirth);

        if (isNaN(parsedDate.getTime())) {
            return res.status(400).json({ error: "Invalid date "})
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const college= await prisma.college.create({
            data:{
                name,
                description,
                location,
                university:{
                    connect:{
                        id:universityId
                    }
                },
                director:{
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
                        role:'PRINCIPAL'

                    }
                }
            }
        })
        
    } catch (error) {
        
    }

}