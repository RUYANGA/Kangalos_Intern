import { Router } from "express";
import {AddUniversity ,AddSchool,AddCollege,addDepartment,getUniversity,getCollege}from '../../controllers/Users/AdminController/admin'





import {AuthorizeRoles, AuthorizTeam} from '../../middlewares/Auth/TokenVerify'
import { AddCollegeValidation } from "../../middlewares/RequestValidations/requestValidator";
import {validateRequest} from '../../middlewares/Auth/errorValiations'
import { add } from "date-fns";
import { addSchool } from "../../controllers/Users/PrincipalController/principal";

const router=Router();

router.post('/admin/university',AddUniversity);  //Add universities in the system

router.post('/admin/addSchool/:id',AddSchool)

router.post('/admin/newCollege/:id',AddCollege)
router.get('/admin/allUniversity',getUniversity)
router.post('/admin/school/:id/addDepartment',addDepartment)
router.get('/admin/getcollege',getCollege)



// router.put('/admin/updateUniversity/:id',AuthorizeRoles(['ADMIN']),updateUniversity);  //Update universities
// router.post('/admin/university/:id',AuthorizeRoles(['ADMIN']),AddCollegeValidation,validateRequest,AddCollege); //add colleges related to university and dean of college

// router.post('/admin/college/:id/adddirector',AuthorizeRoles(['ADMIN']),AddCollegePrincipal);

// router.put('/admin/college/:id/update',AuthorizeRoles(['ADMIN']),updateCollege);  //Update colleges
// router.delete('/admin/delete/college/:id',AuthorizeRoles(['ADMIN']),deleteCollege)  //Delete college with id
// router.get('/admin/getusers',AuthorizeRoles(['ADMIN','PRINCIPAL']),getAllUser)


export default router