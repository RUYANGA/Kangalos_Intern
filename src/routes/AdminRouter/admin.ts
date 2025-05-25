import { Router } from "express";
import {AddUniversity,updateUniversity,AddCollege,updateCollege,deleteCollege,AddCollegePrincipal,getAllUser} from '../../controllers/Users/AdminController/admin'





import {AuthorizeRoles, AuthorizTeam} from '../../middlewares/Auth/TokenVerify'
import { AddCollegeValidation } from "../../middlewares/RequestValidations/requestValidator";
import {validateRequest} from '../../middlewares/Auth/errorValiations'

const router=Router();

router.post('/admin/university',AuthorizeRoles(['ADMIN']),AddUniversity);  //Add universities in the system
router.put('/admin/updateUniversity/:id',AuthorizeRoles(['ADMIN']),updateUniversity);  //Update universities
router.post('/admin/university/:id',AuthorizeRoles(['ADMIN']),AddCollegeValidation,validateRequest,AddCollege); //add colleges related to university and dean of college

router.post('/admin/college/:id/adddirector',AuthorizeRoles(['ADMIN']),AddCollegePrincipal);

router.put('/admin/college/:id/update',AuthorizeRoles(['ADMIN']),updateCollege);  //Update colleges
router.delete('/admin/delete/college/:id',AuthorizeRoles(['ADMIN']),deleteCollege)  //Delete college with id
router.get('/admin/getusers',AuthorizeRoles(['ADMIN','PRINCIPAL']),getAllUser)


export default router