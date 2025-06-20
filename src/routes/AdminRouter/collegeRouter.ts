import { Router } from "express";
import {AddCollege} from '../../controllers/Admin/colleges'

import {AddCollegeSchema} from '../../middlewares/zod/college'
import{zodValidate} from '../../middlewares/Auth/zodValidaate'

const router=Router();


router.post('/admin/addcollege/:id',zodValidate(AddCollegeSchema),AddCollege)


export default router