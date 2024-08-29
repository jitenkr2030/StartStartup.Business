// emailService.js

const nodemailer = require('nodemailer');

// Email service logic
const sendEmail = async (to, subject, text) => {
  try {
    // Setup transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Example service
      auth: {
        user: process.env.EMAIL_USER,  // Your email
        pass: process.env.EMAIL_PASS,  // Your password
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }
};

module.exports = {
  sendEmail,
};
