import { Router } from "express";
import {AddUniversity,updateUniversity,AddCollege} from '../../controllers/Users/AdminController/user'

const router=Router();

router.post('/admin/university',AddUniversity);
router.put('/admin/updateUniversity/:id',updateUniversity);
router.post('/admin/university/:id/dean/:deanId',AddCollege)

export default router