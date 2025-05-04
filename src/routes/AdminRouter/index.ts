import { Router } from "express";
import {AddUniversity,updateUniversity} from '../../controllers/Users/AdminController/user'

const router=Router();

router.post('/admin/university',AddUniversity);
router.put('/admin/updateUniversity/:id',updateUniversity)

export default router