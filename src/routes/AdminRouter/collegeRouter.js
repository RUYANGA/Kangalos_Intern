"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var colleges_1 = require("../../controllers/Admin/colleges");
var college_1 = require("../../middlewares/zod/college");
var zodValidaate_1 = require("../../middlewares/Auth/zodValidaate");
var router = (0, express_1.Router)();
router.post('/admin/addcollege/:id', (0, zodValidaate_1.zodValidate)(college_1.AddCollegeSchema), colleges_1.AddCollege);
exports.default = router;
