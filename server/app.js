const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./config.env" });
app.use(cors({origin:true,credentials: true}));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});

app.post("/contact", async (req, res) => {
  const { name, email, message, phone } = req.body;
  const mailOptions = {
    from: {
      name: "Portfolio Visitor",
      address: "quluzadeelmir646@gmail.com",
    },
    to: "elmir.quluzade627@gmail.com",
    subject: `Message from portfolio`,
    html: `<p><b>Name: ${name}</b></p>
        <p><b>Email: ${email}</b></p>
        <p><b>Phone: ${phone}</b></p>
        <p><b>Message: ${message}</b></p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log("Email sent: " + info.response);
        resolve(info);
      }
    });
  });

  // transporter.sendMail(mailOptions, (err, info) => {
  //   if (err) {
  //     console.error(err);
  //     reject(err);
  //   } else {
  //     console.log("Email sent: " + info.response);
  //     resolve(info);
  //   }
  // });

  res.json({
    status: true,
    message: "Email Sent",
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    status: true,
    message: "Working",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening in ${PORT}`));
