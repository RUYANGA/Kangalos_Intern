import { Router } from "express";

import {addSchool,AddSchoolDean} from '../../controllers/Users/PrincipalController/principal'


import {AuthorizeRoles, AuthorizTeam} from '../../middlewares/Auth/TokenVerify'


const router=Router();

router.post('/principal/college/:id/addschool',AuthorizeRoles(['ADMIN','PRINCIPAL']),addSchool);
router.post('/principal/school/:id/adddean',AuthorizeRoles(['ADMIN','PRINCIPAL']),AddSchoolDean);


export default router