import { NextFunction, Request,Response } from "express";
import {prisma} from '../../prisma/prisma'
import {AddProgramSchema,AddProgramDto } from '../../middlewares/zod/program'



export async function AddProgram(req:Request<{id:string},{},AddProgramDto>,res:Response,next:NextFunction):Promise<any>{
    try {

        const departmentId=req.params.id

        const result=await AddProgramSchema.safeParseAsync(req.body);

        if(!result.success){
            return res.status(400).json({
                errors:result.error.format()
            })
        }

        const data:AddProgramDto=result.data;

        if(!departmentId){
            return res.status(400).json({
                error:'Department id not found'
            })
        }

        const department=await prisma.department.findUnique({
            where:{
                id:departmentId
            }
        })

        if(!department){
            return res.status(404).json({
                error:'Department not found!'
            })
        }

        const program=await prisma.program.create({
            data:{
                name:data.name,
                description:data.description,
                department:{
                    connect:{
                        id:departmentId
                    }
                }
                
            }
        })

        res.status(201).json({
            message:'Program created successfully',
            program
        })
        
    } catch (error) {

        console.log(error)
        res.status(500).json({Error:"Error to add progarm",error})
        
    }

}