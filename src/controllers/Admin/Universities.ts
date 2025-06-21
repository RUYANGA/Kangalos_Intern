import { NextFunction, Request,Response } from "express";
import {UniversityInput} from '../../types/dataTypes'
import {prisma} from '../../prisma/prisma'
import {AddUniversitySchema,AddUniversityDto} from '../../middlewares/zod/university'
import { error } from "console";



export async function AddUniversity(req:Request<{},{},AddUniversityDto>,res:Response,next:NextFunction):Promise<any>{

   
   try {

       const result = await AddUniversitySchema.safeParseAsync(req.body);
      
        if (!result.success) {
        return res.status(400).json({
            errors: result.error.format(),
        });
        }

        const data:AddUniversityDto=result.data

        const unversity= await prisma.university.create({
            data:{
                name:data.name,
                description:data.description,
                location:data.location
            }
        })

        res.status(201).json({
        message: 'Unversity created successfully',
        unversity,
        });

   } catch (error) {
    console.log(error)
    res.status(500).json({Error:"Error to add university"})
   }
    
}