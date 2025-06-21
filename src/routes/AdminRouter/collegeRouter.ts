import { Router } from "express";
import {AddCollege} from '../../controllers/Admin/colleges'
import{AddCollegeValidation} from '../../middlewares/RequestValidations/requestValidator'
import {validateRequest} from '../../middlewares/RequestValidations/validates'

const router=Router();


router.post('/admin/addcollege',AddCollegeValidation,validateRequest,AddCollege)


export default router