import { Router } from "express";
import {addSchool,getSchool} from '../../controllers/Admin/schools'

import {AddSchoolSchema} from '../../middlewares/zod/school'
import {zodValidate} from '../../middlewares/Auth/zodValidaate'
import { AuthorizeRoles } from "../../middlewares/Auth/TokenVerify";

const router=Router();


router.post('/admin/addschool/:id',zodValidate(AddSchoolSchema),addSchool);

router.get('/admin/school/:id',AuthorizeRoles(['ADMIN','PRINCIPAL','DEAN','HOD']),getSchool)


export default router