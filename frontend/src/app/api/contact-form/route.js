// export default async function (req, res) {
//     // require("dotenv").config();
  
//     let nodemailer = require("nodemailer");
//     const transporter = nodemailer.createTransport({
//       port: 587,
//       host: "smtp.gmail.com",
//       auth: {
//         // user: process.env.USER_MAIL,
//         // pass: process.env.USER_AUTH,
//       },
//       secure: false,
//     });
  
//     const mailData = {
//       // from: process.env.USER_EMAIL,
//       to: req.body.email,
//       subject: `Message From Vigorant`,
//       html: `
//         <div>
//             <p>Name: ${req.body.firstname}</p>
//             <p>Name: ${req.body.lastname}</p>
//             <p>Email: ${req.body.email}</p>
//             <p>category: ${req.body.subject}</p>
//             <p>phone: ${req.body.message}</p>
//             </div>
//         `,
//     };
//     await transporter
//       .sendMail(mailData)
//       .then((re) => {
//         res.status(200).json({ status: "OK" });
//       })
//       .catch((er) => {
//         res.status(500).json({ status: "error" });
//       });
//   }
  