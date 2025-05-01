import { Router } from "express";
import {Register} from '../../controllers/user'


const router=Router()
router.post('/user/register',Register)


export default router