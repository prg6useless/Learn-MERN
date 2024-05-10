const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = (email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  const main = async (email) => {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Saral Sainju" <saralsainju07@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Signing in to Movie Mate",
      text: "Thank you for signing in to Movie MAte!",
    });

    console.log("Message sent : ", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  };

  main(email).catch(console.error);
};

module.exports = { sendMail };
