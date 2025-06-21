import { NextFunction, Request,Response } from "express";
import {UniversityInput} from '../../types/dataTypes'
import {prisma} from '../../prisma/prisma'



export async function AddUniversity(req:Request<{},{},UniversityInput>,res:Response,next:NextFunction):Promise<any>{

    const {name,description,location}=req.body;
   try {
        const unversity= await prisma.university.create({
            data:{
                name,
                description,
                location
            }
        })
        res.status(201).json({Message:'University added successfuly',University:unversity})
   } catch (error) {
    console.log(error)
    res.status(500).json({Error:"Error to add university"})
   }
    
}