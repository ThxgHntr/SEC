const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Thay thế thông tin sau bằng thông tin của bạn từ Mailtrap
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "47021e79e24389",
        pass: "a2428f9e9990ab"
    }
});

app.post('/api/send-email', (req, res) => {
  const { message, name, email, phone } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com', // Thay bằng địa chỉ email của bạn
    to: email,
    subject: 'Subject of the email', // Thay bằng chủ đề mong muốn
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
