import { NextFunction, Request,Response } from "express";
import {AddCollege} from '../../types/dataTypes'
import {prisma} from '../../prisma/prisma'



export async function AddCollege(req:Request<{},{},AddCollege>,res:Response,next:NextFunction):Promise<any>{

    try {
        const {name,location,description,firstName,lastName,email,password,gender,phone,dateOfBirth}=req.body;
        
    } catch (error) {
        
    }

}