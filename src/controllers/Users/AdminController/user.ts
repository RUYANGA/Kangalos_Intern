import {Request,Response,NextFunction} from 'express'
import { PrismaClient } from '@prisma/client'

const prisma=new PrismaClient()


export async function AddUniversity(req:Request,res:Response,next:NextFunction):Promise<any>{

    try {
        interface Name{
            name:string
        }
        const {name}:Name=req.body;

        await prisma.universityOfRwanda.create({
            data:{name:name}
        });
        res.status(200).json({Message:'University added'})

    } catch (error) {

        console.log(error)
        return res.status(500).json({Error:"Error to add new university"})
    }

};

export async function updateUniversity(req:Request,res:Response,next:NextFunction):Promise<any>{
    try {

        const universityId=req.params.id;
        
        interface InputName{
            name:string
        }

        const {name}:InputName=req.body;

        await prisma.universityOfRwanda.update({
            where:{id:universityId},
            data:{name:name}
        });

        res.status(200).json({Message:'University name updated!'})

    } catch (error) {

        console.log(error)
        return res.status(500).json({Error:"Error to add new university"});
    }
}