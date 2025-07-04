import 'dotenv/config';

import nodemailer from 'nodemailer';



const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,  // Your email address
      pass: process.env.EMAIL_PASS,  // Your email password or App password
    },
  });


  export const sendEmail = async (to: string,  otp:string,user:string) => {
    const year=new Date().getFullYear()
    const info = await transporter.sendMail({
      from:'EASY SHOP',
      to,
      subject:'VERIFY OTP CODE',
      html:` z
      <!DOCTYPE html>
      <html lang="en">
      <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome Email</title>
  <!-- Optional: Bootstrap CDN (not fully supported in email clients) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; margin: 0 auto;">
          <!-- Header -->
          <tr>
            <td style="background-color: #4A90E2; padding: 24px; text-align: center;">
              <h1 style="color: #ffffff; font-size: 26px; margin: 0;">Welcome to Kangalos</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 24px; color: #333333; font-size: 16px; line-height: 1.6;">
              <p style="margin-top: 0;">Hello 👋 ${user},</p>
              <p>Thank you for signing up! We're excited to have you on board.</p>
              <p>Here is your verification code to help you get started. This code expires in 15 minutes:</p>

              <div style="margin: 30px 0; text-align: center;">
                <span style="background-color: #4A90E2; color: #ffffff; padding: 12px 24px; border-radius: 6px; font-weight: bold; display: inline-block; font-size: 24px;">
                  ${otp}
                </span>
              </div>

              <p>If you have any questions, just reply to this email. We're always here to help!</p>
              <p>Best regards,<br><strong>Merci RUYANGA</strong></p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f4f4f4; padding: 24px; text-align: center; font-size: 14px; color: #777777;">
              <p style="margin: 0;">© ${year} Kangalos. All rights reserved.</p>
              <p style="margin: 10px 0 0;">
                <a href="#" style="color: #777777; text-decoration: underline;">Unsubscribe</a> |
                <a href="#" style="color: #777777; text-decoration: underline;">Privacy Policy</a>
              </p>

              <!-- Social links -->
              <div style="margin-top: 20px;">
                <a href="https://www.facebook.com/ruyanga.merci.1" style="margin: 0 10px;">
                  <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" width="24" height="24" style="vertical-align: middle;">
                </a>
                <a href="https://x.com/RuyangaM" style="margin: 0 10px;">
                  <img src="https://cdn-icons-png.flaticon.com/24/5968/5968958.png" alt="Twitter" width="24" height="24" style="vertical-align: middle;">
                </a>
                <a href="https://github.com/RUYANGA" style="margin: 0 10px;">
                  <img src="https://cdn-icons-png.flaticon.com/24/733/733553.png" alt="GitHub" width="24" height="24" style="vertical-align: middle;">
                </a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Optional JS (not used in most email clients) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    });
  };








  export const forgetPassword1 = async (to: string,  token:string,user:string) => {


    const info = await transporter.sendMail({
      from:'EASY SHOP',
      to,
      subject:'FORGET PASSWORD',
      html:` <!DOCTYPE html>
      <html>
      <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome Email</title>
      <link href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
          <td style="padding: 0;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
              <!-- Header -->
              <div style="background-color: #4A90E2; padding: 24px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 26px;">Welcome to EASY SHOP</h1>
              </div>
              
              <!-- Content -->
              <div style="padding: 24px; line-height: 1.6;">
                  <p style="margin-top: 0; color: #333333; font-size: 16px;">Hello 👋 ${user},</p>
                  
                  <p style="color: #333333; font-size: 16px;">Thank you for choose us! We're excited to have you on board.</p>
                  
                  <p style="color: #333333; font-size: 16px;">Here are link to help you get reset password this link expired in 30 minutes:</p>
                  
              
                  
                  <div style="margin: 30px 0; text-align: center;">
                  <h1 style=" color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-weight: bold; display: inline-block;"><a href="http://localhost:3000/reset-password/${token}">RESET PASSWORD</a></h1>
                  </div>
                  
                  <p style="color: #333333; font-size: 16px;">If you have any questions, just reply to this email. We're always here to help!</p>
                  
                  <p style="color: #333333; font-size: 16px;">Best regards,<br>Merci RUYANGA</p>
              </div>
              
              <!-- Footer -->
              <div style="background-color: #f4f4f4; padding: 24px; text-align: center;">
                  <p style="margin: 0; color: #777777; font-size: 14px;">
                  © 2025 EASY SHOP. All rights reserved.
                  </p>
                  <p style="margin: 10px 0 0; color: #777777; font-size: 14px;">
                  <a href="#" style="color: #777777; text-decoration: underline;">Unsubscribe</a> |
                  <a href="#" style="color: #777777; text-decoration: underline;">Privacy Policy</a>
                  </p>
                  <div style="margin-top: 20px;">
                  <a href="https://www.facebook.com/ruyanga.merci.1" style="display: inline-block; margin: 0 10px; color: #4A90E2;">
                  
                      <i class="bi bi-facebook"></i>
                  </a>
                  <a href="https://x.com/RuyangaM" style="display: inline-block; margin: 0 10px; color: #4A90E2;">
                      <i class="bi bi-twitter-x"></i>
                  </a>
                  <a href="https://github.com/RUYANGA" style="display: inline-block; margin: 0 10px; color: #4A90E2;">
                      <i class="bi bi-github"></i>
                  </a>
                  </div>
              </div>
              </div>
          </td>
          </tr>
      </table>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
      </html>`
    });
  };



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

