import { Router } from "express";
import {AddUniversity ,AddSchool,AddCollege,addDepartment,getUniversity,getCollege}from '../../controllers/AdminController/admin'

//import { validateBody } from "../../middlewares/RequestValidations/validates";
//import {  AddUniversityFlatSchema ,AddCollegeSchema} from "../../middlewares/RequestValidations/requestValidator";





import {AuthorizeRoles, AuthorizTeam} from '../../middlewares/Auth/TokenVerify'


import { add } from "date-fns";
import { addSchool } from "../../controllers/Admin/PrincipalController/principal";

import {AddUniversityValidation,AddCollegeValidation,AddSchoolValidation,AddDepartmentValidation} from '../../middlewares/RequestValidations/requestValidator'
import {validateRequest} from '../../middlewares/RequestValidations/validates'

const router=Router();

//,AddUniversityValidation,validateRequest

router.post('/admin/university',AddUniversity);  //Add universities in the system
router.post('/admin/addSchool/:id',AddSchoolValidation,validateRequest,AddSchool)
router.post('/admin/newCollege/:id',AddCollegeValidation,validateRequest,AddCollege)
router.post('/admin/school/:id/addDepartment',AddDepartmentValidation,validateRequest,addDepartment)

router.get('/admin/allUniversity',getUniversity)
router.get('/admin/getcollege/:id',getCollege)



// router.put('/admin/updateUniversity/:id',AuthorizeRoles(['ADMIN']),updateUniversity);  //Update universities
// router.post('/admin/university/:id',AuthorizeRoles(['ADMIN']),AddCollegeValidation,validateRequest,AddCollege); //add colleges related to university and dean of college

// router.post('/admin/college/:id/adddirector',AuthorizeRoles(['ADMIN']),AddCollegePrincipal);

// router.put('/admin/college/:id/update',AuthorizeRoles(['ADMIN']),updateCollege);  //Update colleges
// router.delete('/admin/delete/college/:id',AuthorizeRoles(['ADMIN']),deleteCollege)  //Delete college with id
// router.get('/admin/getusers',AuthorizeRoles(['ADMIN','PRINCIPAL']),getAllUser)


export default router