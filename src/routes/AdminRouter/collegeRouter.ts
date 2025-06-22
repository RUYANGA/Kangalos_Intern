import { Router } from "express";
import {AddCollege} from '../../controllers/Admin/colleges'

import {AddCollegeSchema} from '../../middlewares/zod/college'
import{zodValidate} from '../../middlewares/Auth/zodValidaate'
import {AuthorizeRoles} from '../../middlewares/Auth/TokenVerify'
const router=Router();


router.post('/admin/addcollege/:id',AuthorizeRoles(['ADMIN','PRINCIPAL']),zodValidate(AddCollegeSchema),AddCollege)


export default router