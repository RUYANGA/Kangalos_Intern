import { Router } from "express";
import {AddCollege,getCollege} from '../../controllers/Admin/colleges'

import {AddCollegeSchema} from '../../middlewares/zod/college'
import{zodValidate} from '../../middlewares/Auth/zodValidaate'
import {AuthorizeRoles} from '../../middlewares/Auth/TokenVerify'
const router=Router();


router.post('/admin/addcollege/:id',AuthorizeRoles(['ADMIN','PRINCIPAL']),zodValidate(AddCollegeSchema),AddCollege);

router.get('/admin/college/:id',AuthorizeRoles(['ADMIN']),getCollege)


export default router