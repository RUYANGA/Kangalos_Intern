import {Request,Response,NextFunction} from 'express'
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'

const prisma=new PrismaClient()

export async function AddUniversity(req:Request,res:Response,next:NextFunction):Promise<any>{

  const {nameUn,locationUn,descriptionUn ,nameCollege,locationCollege,descriptionCollege, nameDir,email,gender,password}=req.body
try {
  
  const uniWithCollege = await prisma.university.create({
  data: {
    name: nameUn, 
    location:locationUn,  
    description:descriptionUn ,

    college: {
      create: {
        name: nameCollege,
        location:locationCollege,
        description:descriptionCollege,
        director: {
          create: {
            name: nameDir,
            email: email,
            gender: gender,
            password: await bcrypt.hash(password,12),
            role: "PRINCIPAL",
            status: "ACTIVE"
          }
        }
      }
    }
  },
  include: {
    college: { include: { director: true } }
  }
});

res.status(200).json({University:uniWithCollege})
} catch (error) {
  console.log(error)
  return res.status(500).json({Message:"Error to register university"})
  
}

};

export async function AddSchool(req:Request,res:Response,next:NextFunction):Promise<any>{
const { location, name, description, nameDean, email, gender, password } = req.body;
  const collegeId = req.params.id;

  try {
    const newSchool = await prisma.school.create({
      data: {
        name,
        location,
        description,
        college: {
          connect: {
            id: collegeId,
          },
        },
        dean: {
          create: {
            name: nameDean,
            email,
            gender,
            password: await bcrypt.hash(password, 12),
            role: "DEAN",
            status: "ACTIVE",
          },
        },
      },
      include: {
        dean: true,
        college: true,
      },
    });

    res.status(201).json({ school: newSchool });
  } catch (error) {
    return res.status(500).json({Message:"Error to add schools"})
  }
}

