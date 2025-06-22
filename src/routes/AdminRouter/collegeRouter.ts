import { Router } from "express";
import {AddCollege} from '../../controllers/Admin/colleges'

import {AddCollegeSchema} from '../../middlewares/zod/college'
import{zodValidate} from '../../middlewares/Auth/zodValidaate'
import {AuthorizeRoles} from '../../middlewares/Auth/TokenVerify'
const router=Router();


router.post('/admin/addcollege/:id',zodValidate(AddCollegeSchema),AuthorizeRoles(['ADMIN','PRINCIPAL']),AddCollege)


export default router