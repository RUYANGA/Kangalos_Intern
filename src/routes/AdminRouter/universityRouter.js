"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Universities_1 = require("../../controllers/Admin/Universities");
var university_1 = require("../../middlewares/zod/university");
var zodValidaate_1 = require("../../middlewares/Auth/zodValidaate");
var router = (0, express_1.Router)();
router.post('/admin/adduniversity', (0, zodValidaate_1.zodValidate)(university_1.AddUniversitySchema), Universities_1.AddUniversity);
exports.default = router;
