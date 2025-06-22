"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var schools_1 = require("../../controllers/Admin/schools");
var school_1 = require("../../middlewares/zod/school");
var zodValidaate_1 = require("../../middlewares/Auth/zodValidaate");
var router = (0, express_1.Router)();
router.post('/admin/addschool/:id', (0, zodValidaate_1.zodValidate)(school_1.AddSchoolSchema), schools_1.addSchool);
exports.default = router;
