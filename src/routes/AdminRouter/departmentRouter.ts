import { Router} from "express";
import {addDepepartment,getDepartment} from '../../controllers/Admin/department'
import {AuthorizeRoles} from '../../middlewares/Auth/TokenVerify'


const router=Router();


router.post('/admin/adddepartment',AuthorizeRoles([]),addDepepartment);

router.get('/admin/department',AuthorizeRoles(['ADMIN']),getDepartment)



export default router
