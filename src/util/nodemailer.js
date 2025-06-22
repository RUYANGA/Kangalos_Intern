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
exports.forgetPassword1 = exports.sendEmail = void 0;
var nodemailer_1 = require("nodemailer");
// Create the transporter object (reusable in multiple functions)
var transporter = nodemailer_1.createTransport({
    host: 'smtp.gmail.com', // Example for Gmail SMTP
    port: 587, // Or use 465 for SSL
    secure: false, // Set to true if using port 465
    auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or App password
    },
});
var sendEmail = function (to, otp, user) { return __awaiter(void 0, void 0, void 0, function () {
    var year, info;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                year = new Date().getFullYear();
                return [4 /*yield*/, transporter.sendMail({
                        from: 'EASY SHOP',
                        to: to,
                        subject: 'VERIFY OTP CODE',
                        html: " \n      <!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n  <title>Welcome Email</title>\n  <!-- Optional: Bootstrap CDN (not fully supported in email clients) -->\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\">\n  <style>\n    body {\n      margin: 0;\n      padding: 0;\n      background-color: #f4f4f4;\n      font-family: Arial, sans-serif;\n    }\n  </style>\n</head>\n<body>\n  <table role=\"presentation\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\"background-color: #f4f4f4;\">\n    <tr>\n      <td align=\"center\">\n        <table role=\"presentation\" width=\"100%\" style=\"max-width: 600px; background-color: #ffffff; margin: 0 auto;\">\n          <!-- Header -->\n          <tr>\n            <td style=\"background-color: #4A90E2; padding: 24px; text-align: center;\">\n              <h1 style=\"color: #ffffff; font-size: 26px; margin: 0;\">Welcome to Kangalos</h1>\n            </td>\n          </tr>\n\n          <!-- Content -->\n          <tr>\n            <td style=\"padding: 24px; color: #333333; font-size: 16px; line-height: 1.6;\">\n              <p style=\"margin-top: 0;\">Hello \uD83D\uDC4B ".concat(user, ",</p>\n              <p>Thank you for signing up! We're excited to have you on board.</p>\n              <p>Here is your verification code to help you get started. This code expires in 15 minutes:</p>\n\n              <div style=\"margin: 30px 0; text-align: center;\">\n                <span style=\"background-color: #4A90E2; color: #ffffff; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 24px;\">\n                  ").concat(otp, "\n                </span>\n              </div>\n\n              <p>If you have any questions, just reply to this email. We're always here to help!</p>\n              <p>Best regards,<br><strong>Merci RUYANGA</strong></p>\n            </td>\n          </tr>\n\n          <!-- Footer -->\n          <tr>\n            <td style=\"background-color: #f4f4f4; padding: 24px; text-align: center; font-size: 14px; color: #777777;\">\n              <p style=\"margin: 0;\">\u00A9 ").concat(year, " Kangalos. All rights reserved.</p>\n              <p style=\"margin: 10px 0 0;\">\n                <a href=\"#\" style=\"color: #777777; text-decoration: underline;\">Unsubscribe</a> |\n                <a href=\"#\" style=\"color: #777777; text-decoration: underline;\">Privacy Policy</a>\n              </p>\n\n              <!-- Social links -->\n              <div style=\"margin-top: 20px;\">\n                <a href=\"https://www.facebook.com/ruyanga.merci.1\" style=\"margin: 0 10px;\">\n                  <img src=\"https://cdn-icons-png.flaticon.com/24/733/733547.png\" alt=\"Facebook\" width=\"24\" height=\"24\" style=\"vertical-align: middle;\">\n                </a>\n                <a href=\"https://x.com/RuyangaM\" style=\"margin: 0 10px;\">\n                  <img src=\"https://cdn-icons-png.flaticon.com/24/5968/5968958.png\" alt=\"Twitter\" width=\"24\" height=\"24\" style=\"vertical-align: middle;\">\n                </a>\n                <a href=\"https://github.com/RUYANGA\" style=\"margin: 0 10px;\">\n                  <img src=\"https://cdn-icons-png.flaticon.com/24/733/733553.png\" alt=\"GitHub\" width=\"24\" height=\"24\" style=\"vertical-align: middle;\">\n                </a>\n              </div>\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n\n  <!-- Optional JS (not used in most email clients) -->\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>\n</body>\n</html>")
                    })];
            case 1:
                info = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.sendEmail = sendEmail;
var forgetPassword1 = function (to, token, user) { return __awaiter(void 0, void 0, void 0, function () {
    var info;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, transporter.sendMail({
                    from: 'EASY SHOP',
                    to: to,
                    subject: 'FORGET PASSWORD',
                    html: " <!DOCTYPE html>\n      <html>\n      <head>\n      <meta charset=\"utf-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <title>Welcome Email</title>\n      <link href=\"\thttps://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\">\n      </head>\n      <body style=\"margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;\">\n      <table role=\"presentation\" style=\"width: 100%; border-collapse: collapse;\">\n          <tr>\n          <td style=\"padding: 0;\">\n              <div style=\"max-width: 600px; margin: 0 auto; background-color: #ffffff;\">\n              <!-- Header -->\n              <div style=\"background-color: #4A90E2; padding: 24px; text-align: center;\">\n                  <h1 style=\"color: #ffffff; margin: 0; font-size: 26px;\">Welcome to EASY SHOP</h1>\n              </div>\n              \n              <!-- Content -->\n              <div style=\"padding: 24px; line-height: 1.6;\">\n                  <p style=\"margin-top: 0; color: #333333; font-size: 16px;\">Hello \uD83D\uDC4B ".concat(user, ",</p>\n                  \n                  <p style=\"color: #333333; font-size: 16px;\">Thank you for choose us! We're excited to have you on board.</p>\n                  \n                  <p style=\"color: #333333; font-size: 16px;\">Here are link to help you get reset password this link expired in 30 minutes:</p>\n                  \n              \n                  \n                  <div style=\"margin: 30px 0; text-align: center;\">\n                  <h1 style=\" color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold; display: inline-block;\"><a href=\"http://localhost:3000/reset-password/").concat(token, "\">RESET PASSWORD</a></h1>\n                  </div>\n                  \n                  <p style=\"color: #333333; font-size: 16px;\">If you have any questions, just reply to this email. We're always here to help!</p>\n                  \n                  <p style=\"color: #333333; font-size: 16px;\">Best regards,<br>Merci RUYANGA</p>\n              </div>\n              \n              <!-- Footer -->\n              <div style=\"background-color: #f4f4f4; padding: 24px; text-align: center;\">\n                  <p style=\"margin: 0; color: #777777; font-size: 14px;\">\n                  \u00A9 2025 EASY SHOP. All rights reserved.\n                  </p>\n                  <p style=\"margin: 10px 0 0; color: #777777; font-size: 14px;\">\n                  <a href=\"#\" style=\"color: #777777; text-decoration: underline;\">Unsubscribe</a> |\n                  <a href=\"#\" style=\"color: #777777; text-decoration: underline;\">Privacy Policy</a>\n                  </p>\n                  <div style=\"margin-top: 20px;\">\n                  <a href=\"https://www.facebook.com/ruyanga.merci.1\" style=\"display: inline-block; margin: 0 10px; color: #4A90E2;\">\n                  \n                      <i class=\"bi bi-facebook\"></i>\n                  </a>\n                  <a href=\"https://x.com/RuyangaM\" style=\"display: inline-block; margin: 0 10px; color: #4A90E2;\">\n                      <i class=\"bi bi-twitter-x\"></i>\n                  </a>\n                  <a href=\"https://github.com/RUYANGA\" style=\"display: inline-block; margin: 0 10px; color: #4A90E2;\">\n                      <i class=\"bi bi-github\"></i>\n                  </a>\n                  </div>\n              </div>\n              </div>\n          </td>\n          </tr>\n      </table>\n      <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>\n      </body>\n      </html>")
                })];
            case 1:
                info = _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.forgetPassword1 = forgetPassword1;
//    export const sendMessage = async (to: string,  password:string,user:string) => {
//     const info = await transporter.sendMail({
//       from:'EASY SHOP',
//       to,
//       subject:'VERIFY OTP CODE',
//       html:` <!DOCTYPE html>
//       <html>
//       <head>
//       <meta charset="utf-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Welcome Email</title>
//       <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
//       </head>
//       <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
//       <table role="presentation" style="width: 100%; border-collapse: collapse;">
//           <tr>
//           <td style="padding: 0;">
//               <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
//               <!-- Header -->
//               <div style="background-color: #4A90E2; padding: 24px; text-align: center;">
//                   <h1 style="color: #ffffff; margin: 0; font-size: 26px;">Welcome to Kangalos</h1>
//               </div>
//               <!-- Content -->
//               <div style="padding: 24px; line-height: 1.6;">
//                   <p style="margin-top: 0; color: #333333; font-size: 16px;">Hello 👋 ${user},</p>
//                   <p style="color: #333333; font-size: 16px;">Thank you for signing up! We're excited to have you on board.</p>
//                   <p style="color: #333333; font-size: 16px;">Here are verification code  to help you get started this code expired in 15 minutes:</p>
//                   <div style="margin: 30px 0; text-align: center;">
//                   <h1 style="background-color: #4A90E2; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold; display: inline-block;">${otp}</h1>
//                   </div>
//                   <p style="color: #333333; font-size: 16px;">If you have any questions, just reply to this email. We're always here to help!</p>
//                   <p style="color: #333333; font-size: 16px;">Best regards,<br>Merci RUYANGA</p>
//               </div>
//               <!-- Footer -->
//               <div style="background-color: #f4f4f4; padding: 24px; text-align: center;">
//                   <p style="margin: 0; color: #777777; font-size: 14px;">
//                   © 2025 EASY SHOP. All rights reserved.
//                   </p>
//                   <p style="margin: 10px 0 0; color: #777777; font-size: 14px;">
//                   <a href="#" style="color: #777777; text-decoration: underline;">Unsubscribe</a> |
//                   <a href="#" style="color: #777777; text-decoration: underline;">Privacy Policy</a>
//                   </p>
//                   <div style="margin-top: 20px;">
//                   <a href="https://www.facebook.com/ruyanga.merci.1" style="display: inline-block; margin: 0 10px; color: #4A90E2;">
//                       <i class="bi bi-facebook"></i>
//                   </a>
//                   <a href="https://x.com/RuyangaM" style="display: inline-block; margin: 0 10px; color: #4A90E2;">
//                       <i class="bi bi-twitter-x"></i>
//                   </a>
//                   <a href="https://github.com/RUYANGA" style="display: inline-block; margin: 0 10px; color: #4A90E2;">
//                       <i class="bi bi-github"></i>
//                   </a>
//                   </div>
//               </div>
//               </div>
//           </td>
//           </tr>
//       </table>
//       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
//       </body>
//       </html>`
//     });
//   };
