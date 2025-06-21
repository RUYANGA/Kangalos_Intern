import { Router } from "express";
import {AddUniversity} from '../../controllers/Admin/Universities';
import {AddUniversityValidation} from '../../middlewares/RequestValidations/requestValidator'
import {validateRequest} from '../../middlewares/RequestValidations/validates'

const router=Router();


router.post('/admin/adduniversity',AddUniversityValidation,validateRequest,AddUniversity)


export default router