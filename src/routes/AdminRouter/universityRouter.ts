import { Router } from "express";
import {AddUniversity,getUniversity} from '../../controllers/Admin/Universities';
import {AuthorizeRoles} from '../../middlewares/Auth/TokenVerify'
import {AddUniversitySchema }from '../../middlewares/zod/university'
import {zodValidate} from '../../middlewares/Auth/zodValidaate'


const router=Router();


router.post('/admin/adduniversity',AuthorizeRoles(['ADMIN']),zodValidate(AddUniversitySchema),AddUniversity);

router.get('/admin/university',AuthorizeRoles(['ADMIN','PRINCIPAL','DEAN','HOD']),getUniversity)


export default router
