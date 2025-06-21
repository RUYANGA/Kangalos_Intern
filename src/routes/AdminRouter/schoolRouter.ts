import { Router } from "express";
import {addSchool} from '../../controllers/Admin/schools'

import {AddSchoolSchema} from '../../middlewares/zod/school'
import {zodValidate} from '../../middlewares/Auth/zodValidaate'

const router=Router();


router.post('/admin/addschool/:id',zodValidate(AddSchoolSchema),addSchool)


export default router