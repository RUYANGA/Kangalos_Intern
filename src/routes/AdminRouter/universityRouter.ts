import { Router } from "express";
import {AddUniversity} from '../../controllers/Admin/Universities';
import {AuthorizeRoles} from '../../middlewares/Auth/TokenVerify'


import {AddUniversitySchema }from '../../middlewares/zod/university'
import {zodValidate} from '../../middlewares/Auth/zodValidaate'

const router=Router();


router.post('/admin/adduniversity',zodValidate(AddUniversitySchema),AuthorizeRoles(['ADMIN']),AddUniversity)


export default router