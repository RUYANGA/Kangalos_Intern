"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = Register;
exports.resendOtp = resendOtp;
exports.verifyOtp = verifyOtp;
exports.Login = Login;
exports.forgetPassword = forgetPassword;
exports.resetPassword = resetPassword;
var client_1 = require("@prisma/client");
var bcrypt_1 = require("bcrypt");
var crypto_1 = require("crypto");
var date_fns_1 = require("date-fns");
var nodemailer_1 = require("../util/nodemailer");
var jsonwebtoken_1 = require("jsonwebtoken");
var prisma = new client_1.PrismaClient();
var JWT_KEY = process.env.JWTKEY || 'jkdsdfguyi90uy7tryfdfchvbhjuhigy';
var tokenkey = process.env.TOKEN_KEY || 'oiuytrdfghjkopiuygyf';
function Register(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, firstName, lastName, phone, email, gender, password, dateOfBirth, parsedDate, otp, expiredOtp, hashPassword, user, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, firstName = _a.firstName, lastName = _a.lastName, phone = _a.phone, email = _a.email, gender = _a.gender, password = _a.password, dateOfBirth = _a.dateOfBirth;
                    parsedDate = new Date(dateOfBirth);
                    if (isNaN(parsedDate.getTime())) {
                        return [2 /*return*/, res.status(400).json({ error: "Invalid date format" })];
                    }
                    return [4 /*yield*/, crypto_1.default.randomInt(111111, 999999).toString()];
                case 1:
                    otp = _b.sent();
                    expiredOtp = (0, date_fns_1.addMinutes)(new Date(), 15);
                    return [4 /*yield*/, bcrypt_1.default.hash(password, 12)];
                case 2:
                    hashPassword = _b.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                firstName: firstName,
                                lastName: lastName,
                                dateOfBirth: parsedDate,
                                email: email,
                                password: password,
                                phone: phone,
                                gender: gender,
                            }
                        })];
                case 3:
                    user = _b.sent();
                    return [4 /*yield*/, prisma.otp.create({
                            data: {
                                code: otp,
                                expiredDate: expiredOtp,
                                userId: user.id
                            }
                        })];
                case 4:
                    _b.sent();
                    (0, nodemailer_1.sendEmail)(user.email, otp, user.firstName); //Send otp to email
                    res.status(201).json({ Message: "User registered verify otp send to ".concat(email, " ") });
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _b.sent();
                    console.log(error_1);
                    return [2 /*return*/, res.status(500).json({ Error: 'Error to register user ' })];
                case 6: return [2 /*return*/];
            }
        });
    });
}
;
function resendOtp(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var email, user, otp, expiredOtp, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    email = req.body.email;
                    return [4 /*yield*/, prisma.user.findUnique({
                            where: { email: email }
                        })];
                case 1:
                    user = _a.sent();
                    if (!user)
                        return [2 /*return*/, res.status(404).json({ Error: 'User not found' })];
                    return [4 /*yield*/, crypto_1.default.randomInt(111111, 999999).toString()];
                case 2:
                    otp = _a.sent();
                    expiredOtp = (0, date_fns_1.addMinutes)(new Date(), 15);
                    return [4 /*yield*/, prisma.otp.update({
                            where: { userId: user.id },
                            data: {
                                code: otp,
                                expiredDate: expiredOtp
                            }
                        })];
                case 3:
                    _a.sent();
                    (0, nodemailer_1.sendEmail)(email, otp, user.firstName); //Send otp to email
                    res.status(200).json({ Message: 'Email resend successfuly, check on your email!' });
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    //console.log(error)
                    return [2 /*return*/, res.status(500).json({ Error: 'Error to resend otp ' })];
                case 5: return [2 /*return*/];
            }
        });
    });
}
;
function verifyOtp(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, otp, user, foundOtp, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, email = _a.email, otp = _a.otp;
                    return [4 /*yield*/, prisma.user.findUnique({
                            where: { email: email }
                        })];
                case 1:
                    user = _b.sent();
                    return [4 /*yield*/, prisma.otp.findUnique({
                            where: { userId: user === null || user === void 0 ? void 0 : user.id }
                        })];
                case 2:
                    foundOtp = _b.sent();
                    if (!foundOtp)
                        return [2 /*return*/, res.status(404).json('Otp not found')];
                    if ((foundOtp === null || foundOtp === void 0 ? void 0 : foundOtp.code) !== otp) {
                        return [2 /*return*/, res.status(401).json({ Error: 'Invalid Otp' })];
                    }
                    else if (foundOtp.expiredDate < new Date()) {
                        return [2 /*return*/, res.status(404).json('Otp expired date')];
                    }
                    return [4 /*yield*/, prisma.user.update({
                            where: { id: user === null || user === void 0 ? void 0 : user.id },
                            data: {
                                status: 'ACTIVE'
                            }
                        })];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, prisma.otp.delete({
                            where: { userId: user === null || user === void 0 ? void 0 : user.id }
                        })];
                case 4:
                    _b.sent();
                    res.status(200).json({ Message: 'Email verify successfuly, now you can login' });
                    return [3 /*break*/, 6];
                case 5:
                    error_3 = _b.sent();
                    //console.log(error)
                    return [2 /*return*/, res.status(500).json({ Error: 'Error to verify otp ' })];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function Login(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, user, token, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, email = _a.email, password = _a.password;
                    return [4 /*yield*/, prisma.user.findUnique({
                            where: { email: email }
                        })];
                case 1:
                    user = _b.sent();
                    if (!user)
                        return [2 /*return*/];
                    return [4 /*yield*/, bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password)];
                case 2:
                    if (!(_b.sent())) {
                        return [2 /*return*/, res.status(404).json({ Error: "Email or password is incorrect!" })];
                    }
                    token = jsonwebtoken_1.default.sign({
                        id: user === null || user === void 0 ? void 0 : user.id,
                        role: user === null || user === void 0 ? void 0 : user.role,
                        UserType: user.userType,
                        email: user === null || user === void 0 ? void 0 : user.email
                    }, JWT_KEY, {
                        expiresIn: '30day'
                    });
                    res.status(200).json({ Message: 'Login successfuly', token: token });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _b.sent();
                    //console.log(error)
                    return [2 /*return*/, res.status(500).json({ Error: 'Error to login, try again ' })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
;
function forgetPassword(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var email, user, token, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    email = req.body.email;
                    return [4 /*yield*/, prisma.user.findUnique({
                            where: { email: email }
                        })];
                case 1:
                    user = _a.sent();
                    if (!user)
                        return [2 /*return*/, res.status(404).json({ Error: 'User with email not found' })];
                    token = jsonwebtoken_1.default.sign({
                        id: user.id
                    }, tokenkey, {
                        expiresIn: "30day"
                    });
                    (0, nodemailer_1.forgetPassword1)(user.email, token, user === null || user === void 0 ? void 0 : user.firstName);
                    res.status(200).json({ Message: "Rest password link sent to ".concat(email), token: token });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    //console.log(error)
                    return [2 /*return*/, res.status(500).json({ Error: 'Error to reset password' })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
function resetPassword(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var password, authHeader, token, hashPassword, decoded, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    password = req.body.password;
                    authHeader = req.headers['authorization'];
                    token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
                    if (!token)
                        return [2 /*return*/, res.status(400).json({ Message: 'Token not provided' })];
                    return [4 /*yield*/, bcrypt_1.default.hash(password, 12)];
                case 1:
                    hashPassword = _a.sent();
                    decoded = jsonwebtoken_1.default.verify(token, tokenkey);
                    return [4 /*yield*/, prisma.user.update({
                            where: { id: decoded === null || decoded === void 0 ? void 0 : decoded.id },
                            data: { password: hashPassword }
                        })];
                case 2:
                    _a.sent();
                    res.status(200).json({ Message: "Reset password successfuly !" });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    //console.log(err)
                    return [2 /*return*/, res.status(500).json({ Error: 'Token is expired or invalid !' })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
