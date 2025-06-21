import { Router } from "express";

import {addHodSchool,addDepartment} from '../../controllers/Admin/DeanController/dean';

import {AuthorizeRoles } from '../../middlewares/Auth/TokenVerify'




const router=Router();

router.post('/dean/school/:id/adddepartment',AuthorizeRoles(['ADMIN','DEAN']),addDepartment)
router.post('/dean/department/:id/addhod',AuthorizeRoles(['DEAN','ADMIN']),addHodSchool)

export default router