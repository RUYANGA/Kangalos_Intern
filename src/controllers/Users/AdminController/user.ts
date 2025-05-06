import {Request,Response,NextFunction} from 'express'
import { PrismaClient } from '@prisma/client'

const prisma=new PrismaClient()


export async function AddUniversity(req:Request,res:Response,next:NextFunction):Promise<any>{

    try {

        interface Name{
            name:string
        };

        const {name}:Name=req.body;

        const university =await prisma.universityOfRwanda.create({
            data:{name:name}
        });

        res.status(200).json({Message:'University added',University:university});

    } catch (error) {

        console.log(error);
        return res.status(500).json({Error:"Error to add new university"});
    }

};

export async function updateUniversity(req:Request,res:Response,next:NextFunction):Promise<any>{
    try {

        const universityId=req.params.id;

        interface InputName{
            name:string
        };

        const {name}:InputName=req.body;

        const university=await prisma.universityOfRwanda.update({
            where:{id:universityId},
            data:{name:name}
        });

       
        res.status(200).json({Message:'University name updated!',University:university});

    } catch (error) {

        console.log(error);
        return res.status(500).json({Error:"Error to update university"});
    }
};

export async function AddCollege(req:Request,res:Response,next:NextFunction):Promise<any>{
    try {

        interface ColledeInput{
            name:string
        };

        const deanId=req.params.deanId;
        const universityId=req.params.id;
        const {name}:ColledeInput=req.body;

        const college=await prisma.college.create({
            data:{

                name:name,
                university:{
                    connect:{
                        id:universityId
                    }
                },
                dean:{
                    connect:{
                        id:deanId
                    }
                }
            }
        })

        res.status(201).json({Message:'College added',college:college})

    } catch (error) {
        
        console.log(error);
        return res.status(500).json({Error:"Error to add college"});
    }
};

export async function updateCollege(req:Request,res:Response,next:NextFunction):Promise<any>{

    try {
        interface InputCollege{
            name:string,
            deanId:string
        }
        const collegeId=req.params.id;

        const{name,deanId}:InputCollege=req.body;

        const collegeUpdated=await prisma.college.update({
            where:{id:collegeId},
            data:{
                name:name,
                deanId:deanId
            }
        });

        res.status(200).json({Message:'College updated',college:collegeUpdated})

    } catch (error) {

        console.log(error);
        return res.status(500).json({Error:"Error to update college"});
    }

};


export async function deleteCollege(req:Request,res:Response,next:NextFunction):Promise<any>{

    try {

        const id=req.params.id;

        const college=await prisma.college.findUnique({
            where:{id:id}
        });

        if(!college) return res.status(404).json({Error:'College to delete not found!'});

        await prisma.college.delete({
            where:{id:college.id}
        });

        res.status(200).json({Message:'College deleted'});

    } catch (error) {

        console.log(error);
        return res.status(500).json({Error:"Error to delete college"});
    }
};


export async function addSchool (req:Request,res:Response,next:NextFunction):Promise<any>{

    try {
        
        const collegeId=req.params.id;

        const {name}=req.body;

    } catch (error) {
        
    }

}



