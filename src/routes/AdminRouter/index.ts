import { Router } from "express";
import {AddUniversity,updateUniversity,AddCollege,updateCollege} from '../../controllers/Users/AdminController/user'
import {AuthorizeRoles, AuthorizTeam} from '../../middlewares/Auth/TokenVerify'

const router=Router();

router.post('/admin/university',AuthorizeRoles(['ADMIN']),AddUniversity);
router.put('/admin/updateUniversity/:id',AuthorizeRoles(['ADMIN']),updateUniversity);
router.post('/admin/university/:id/dean/:deanId',AuthorizeRoles(['ADMIN']),AddCollege);
router.put('/admin/college/:id/update',AuthorizeRoles(['ADMIN']),updateCollege);

export default router