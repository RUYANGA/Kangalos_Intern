import { Router } from "express";
import {AddUniversity} from '../../controllers/Admin/Universities';
import {AuthorizeRoles} from '../../middlewares/Auth/TokenVerify'


import {AddUniversitySchema }from '../../middlewares/zod/university'
import {zodValidate} from '../../middlewares/Auth/zodValidaate'

const router=Router();


router.post('/admin/adduniversity',AuthorizeRoles(['ADMIN']),zodValidate(AddUniversitySchema),AddUniversity)


export default router