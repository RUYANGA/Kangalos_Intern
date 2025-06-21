import { NextFunction, Request,Response } from "express";
import {AddDepartmentDto,AddDepartmentSchema} from '../../middlewares/zod/department'
import { error } from "console";
import { prisma } from "../../prisma/prisma";


export async function addDpepartment(req:Request<{id:string},{},AddDepartmentDto>,res:Response,next:NextFunction){

    try {

        const result=await AddDepartmentSchema.safeParseAsync(req.body);

        if(!result.success){
            return res.status(400).json({
                errors:result.error.format()
            })
        }

        const data:AddDepartmentDto=result.data

        const schoolId=req.params.id

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
                        firstName:data.firstName
                    }
                }

            }
        })
        
    } catch (error) {
        
    }



}