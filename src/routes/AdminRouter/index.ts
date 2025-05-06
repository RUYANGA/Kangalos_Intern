import { Router } from "express";
import {AddUniversity,updateUniversity,AddCollege,updateCollege,deleteCollege} from '../../controllers/Users/AdminController/user'
import {AuthorizeRoles, AuthorizTeam} from '../../middlewares/Auth/TokenVerify'
import { AddCollegeValidation } from "../../middlewares/RequestValidations/requestValidator";
import {validateRequest} from '../../middlewares/Auth/errorValiations'

const router=Router();

router.post('/admin/university',AuthorizeRoles(['ADMIN']),AddUniversity);
router.put('/admin/updateUniversity/:id',AuthorizeRoles(['ADMIN']),updateUniversity);
router.post('/admin/university/:id/dean/:deanId',AuthorizeRoles(['ADMIN']),AddCollegeValidation,validateRequest,AddCollege);
router.put('/admin/college/:id/update',AuthorizeRoles(['ADMIN']),updateCollege);
router.delete('/admin/delete/college/:id',AuthorizeRoles(['ADMIN']),deleteCollege)

export default router