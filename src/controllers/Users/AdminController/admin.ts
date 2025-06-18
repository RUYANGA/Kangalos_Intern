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

res.status(200).json(uniWithCollege)
} catch (error) {
  return res.status(500).json({Message:"Error to register university"})
}

};

export async function AddSchool(req:Request,res:Response,next:NextFunction):Promise<any>{

  const {location,name,description}=req.body
  try {
    const newSchool = await prisma.school.create({
    data: {
      name: "School of Engineering",
      location: "Nyarugenge Campus",
      description:"",
      college: {
        connect: {
          id: "your_college_id_here" 
        }
      }
    }
  });
  } catch (error) {
    
  }
}

// export async function updateUniversity(req:Request,res:Response,next:NextFunction):Promise<any>{
//     try {

//         const universityId=req.params.id;

//         interface InputName{
//             name:string
//         };

//         const {name}:InputName=req.body;

//         const university=await prisma.universityOfRwanda.update({
//             where:{id:universityId},
//             data:{name:name}
//         });

       
//         res.status(200).json({Message:'University name updated!',University:university});

//     } catch (error) {

//         console.log(error);
//         return res.status(500).json({Error:"Error to update university"});
//     }
// };

// export async function AddCollege(req:Request,res:Response,next:NextFunction):Promise<any>{
//     try {

//         interface ColledeInput{
//             name:string
//         };

//         const deanId=req.params.deanId;
//         const universityId=req.params.id;
//         const {name}:ColledeInput=req.body;

//         const college=await prisma.college.create({
//             data:{

//                 name:name,
//                 university:{
//                     connect:{
//                         id:universityId
//                     }
//                 }
//             }
//         })

//         res.status(201).json({Message:'College added',college:college})

//     } catch (error) {
        
//         console.log(error);
//         return res.status(500).json({Error:"Error to add college"});
//     }
// };

// export async function AddCollegePrincipal(req:Request,res:Response,next:NextFunction):Promise<any>{

//    try {   

//         const collegeId=req.params.id;

//         const {name,email,password,gender,reg_no}=req.body

//         const defoultPassword= password || 'password123'
//         const number=reg_no||12345

//         const hashPassword=await bcrypt.hash(defoultPassword,12)     
        
//         const user=await prisma.user.create({
//             data:{
//                 name,
//                 email,
//                 reg_no:BigInt(number),
//                 password:hashPassword,
//                 gender,
//             }
//         })

//         await prisma.user.update({
//             where:{
//                 id:user.id
//             },
//             data:{
//                 role:'PRINCIPAL',
//                 status:'ACTIVE',
//             }
//         })

//         const college=  await prisma.college.update({
//             where:{id:collegeId},
//             data:{
//                 director:{
//                     connect:{
//                         id:user.id
//                     }
//                 }
//             }
//         })

//      res.status(201).json(college)

//    } catch (error) {

//         console.log(error);
//         return res.status(500).json({Error:"Error to add college director"});
    
//    }
// }

// export async function updateCollege(req:Request,res:Response,next:NextFunction):Promise<any>{

//     try {
//         interface InputCollege{
//             name:string,
//             deanId:string
//         }
//         const collegeId=req.params.id;

//         const{name}:InputCollege=req.body;

//         const collegeUpdated=await prisma.college.update({
//             where:{id:collegeId},
//             data:{
//                 name:name                
//             }
//         });

//         res.status(200).json({Message:'College updated',college:collegeUpdated})

//     } catch (error) {

//         console.log(error);
//         return res.status(500).json({Error:"Error to update college"});
//     }

// };


// export async function deleteCollege(req:Request,res:Response,next:NextFunction):Promise<any>{

//     try {

//         const id=req.params.id;

//         const college=await prisma.college.findUnique({
//             where:{id:id}
//         });

//         if(!college) return res.status(404).json({Error:'College to delete not found!'});

//         await prisma.college.delete({
//             where:{id:college.id}
//         });

//         res.status(200).json({Message:'College deleted'});

//     } catch (error) {

//         console.log(error);
//         return res.status(500).json({Error:"Error to delete college"});
//     }
// };

// export interface AuthenticatRequest extends Request{
//     user:string,
//     role:string
// }

// export async function getAllUser(req:Request,res:Response,next:NextFunction):Promise<any>{

//     try {


//         const {user}=req as AuthenticatRequest
         
//         const user1=await prisma.user.count({
//             where:{
//                 status:'ACTIVE'
//             }
//         })

//         const university=await prisma.universityOfRwanda.count()
//         const college=await prisma.college.count()
//         const principal=await prisma.user.count({
//             where:{
//                 role:'PRINCIPAL'
//             }
//         })
//         const deans=await prisma.user.count({
//             where:{
//                 role:'DEAN'
//             }
//         })

//         const schools=await prisma.school.count()

//         const admin=await prisma.user.findUnique({
//             where:{id:user.toString()},
//             select:{
//                 name:true,
//                 email:true,
//                 gender:true,
//                 role:true
//             }
//         })

//         // await prisma.user.findMany({
//         //     where:{
//         //         name:{
//         //             contains:{
                        
//         //             }
//         //         }
//         //     }
//         // })

//         const hod=await prisma.user.count({
//             where:{
//                 role:'HOD'
//             }
//         })
      

//         res.status(200).json({totalUser:user1,totalUnversity:university,totalCollege:college,principals:principal,schools:schools,deans:deans,HOD:hod,admin});

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({Error:"Error to delete college"});
//     }


// }

// export async function adminProfile(req:Request,res:Response,next:NextFunction){

//     try {
        
//         const id=(req as any).user.id
//         const admin=await prisma.user.findMany({
//             where:{id:id}
//         })

//     } catch (error) {
        
//     }
// }





