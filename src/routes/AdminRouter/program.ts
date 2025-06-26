import { Router } from "express";
import {AddProgramSchema} from '../../middlewares/zod/program';
import {zodValidate} from '../../middlewares/Auth/zodValidaate';
import {AuthorizeRoles} from '../../middlewares/Auth/TokenVerify'
import {AddProgram} from '../../controllers/Admin/program'

const router=Router();


router.post('/admin/program/:id',AuthorizeRoles(['ADMIN']),zodValidate(AddProgramSchema),AddProgram)



export default router