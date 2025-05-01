import { Router } from "express";
import {Register} from '../../controllers/user'
import {RegisterValidation} from '../../middlewares/RequestValidations/requestValidator'
import { validateRequest } from "../../middlewares/Auth/errorValiations";


const router=Router()
router.post('/user/register',RegisterValidation,validateRequest,Register)


export default router