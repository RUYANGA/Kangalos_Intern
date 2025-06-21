import { Router } from "express";
import {AddUniversity} from '../../controllers/Admin/Universities';


import {AddUniversitySchema }from '../../middlewares/zod/university'
import {zodValidate} from '../../middlewares/Auth/zodValidaate'

const router=Router();


router.post('/admin/adduniversity',zodValidate(AddUniversitySchema),AddUniversity)


export default router