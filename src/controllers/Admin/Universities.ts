import { NextFunction, Request,Response } from "express";
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


export async function getUniversity(req:Request,res:Response,next:NextFunction):Promise<any>{

    try {

        const university=await prisma.university.findMany({
            select:{
                id:true,
                name:true,
                description:true,
                location:true,
                colleges:{
                    select:{
                        id:true,
                        name:true,
                        description:true,
                        location:true
                    }
                }
            }
        })

        res.status(200).json({
            message:'University get successfully!',
            university:university
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
        error: 'Error get university',
        });
    }

}