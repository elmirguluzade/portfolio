const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config({path: './config.env'})
app.use(cors());
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});


app.post("/contact", (req, res) => {
  const { name, email, message, phone } = req.body;
  const mailOptions = {
    from: process.env.MAIL,
    to: "elmir.quluzade627@gmail.com",
    subject: `Message from portfolio`,
    html: `<p><b>Name: ${name}</b></p>
        <p><b>Email: ${email}</b></p>
        <p><b>Phone: ${phone}</b></p>
        <p><b>Message: ${message}</b></p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.json({
    status: true, 
    message: "Email Sent"
  })
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is listening in ${PORT}`));
