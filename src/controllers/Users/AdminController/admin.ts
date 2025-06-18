import {Request,Response,NextFunction} from 'express'
import { PrismaClient } from "@prisma/client"
import bcrypt from 'bcrypt'
import { create } from 'domain'

const prisma=new PrismaClient()

export async function AddUniversity(req:Request,res:Response,next:NextFunction):Promise<any>{

  const {nameUn,phone,locationUn,descriptionUn ,nameCollege,locationCollege,descriptionCollege, nameDir,email,gender,password}=req.body
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
            phone,
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
  
}};

export async function getUniversity(req:Request,res:Response,next:NextFunction):Promise<any>{

  try {
    const universities=await prisma.university.findMany({
      select:{
        id:true,
        name:true,
        location:true,
        description:true
      }
    })

    res.status(200).json({AllUniversity:universities})
  } catch (error) {
    console.log(error)
  return res.status(500).json({Message:"Error to get all university"})
  }
}


export async function AddCollege(req:Request,res:Response,next:NextFunction):Promise<any>{

    const { nameCollege, phone, locationCollege, descriptionCollege, nameDir, email, gender, password } = req.body;
  const university = req.params.id;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newCollege = await prisma.college.create({
      data: {
        name: nameCollege,
        location: locationCollege,
        description: descriptionCollege,
        university: {
          connect: { id: university },
        },
        director: {
          create: {
            name: nameDir,
            email,
            phone,
            gender,
            password: await bcrypt.hash(password, 12),
            role: "PRINCIPAL",
            status: "ACTIVE",
          },
        },
      },
      include: {
        university: true,
        director: true,
      },
    });

    res.status(201).json({ college: newCollege });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error to add new college" });
  } 
}

export async function AddSchool(req:Request,res:Response,next:NextFunction):Promise<any>{
const { location, name,phone, description, nameDean, email, gender, password } = req.body;
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
            phone,
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


export async function addDepartment(req:Request,res:Response,next:NextFunction):Promise<any>{

  const {name,phone,description,email,password,gender,hodName}=req.body
  const schoolId=req.params.id;

  try {
    
    const newDepartment=await prisma.department.create({
      data:{
        name,
        description,
        school:{
          connect:{
            id:schoolId
          }
        },
        hod:{
          create:{
            name:hodName,
            email,
            phone,
            password:await bcrypt.hash(password,12),
            gender,
            role: "HOD",
            status: "ACTIVE",         

          }
        }

      },
      include:{
        school:true,
        hod:true
      }
    })
    res.status(201).json({Departments:newDepartment})
  } catch (error) {
    console.log(error)
    return res.status(500).json({error:"Erro to add new department"})
  }

}
