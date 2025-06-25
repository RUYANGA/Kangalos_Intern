import { Router} from "express";
import {addDepepartment,getDepartment} from '../../controllers/Admin/department'
import {AuthorizeRoles} from '../../middlewares/Auth/TokenVerify'


const router=Router();


router.post('/admin/adddepartment/:id',AuthorizeRoles(['ADMIN']),addDepepartment);

router.get('/admin/department/:id',AuthorizeRoles(['ADMIN','PRINCIPAL','DEAN','HOD']),getDepartment)



export default router
