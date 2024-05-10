const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

const sendMail = async ({ email, subject, html }) => {
  // async..await is not allowed in global scope, must use a wrapper
  // const sendMail = async (email) => {
  // send mail with defined transport object
  // const info = await transporter.sendMail({
  const { messageId } = await transporter.sendMail({
    from: '"Saral Sainju" <saralsainju07@gmail.com>', // sender address
    to: email, // list of receivers
    subject,
    html,
  });
  // return messageId;
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};

module.exports = { sendMail };
