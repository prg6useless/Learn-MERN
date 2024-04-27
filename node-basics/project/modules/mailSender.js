const nodemailer = require("nodemailer");

const sendMail = ({ username, password, attachments }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: username,
      pass: password,
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main({ to, subject, text, attachments, html }) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Saral Sainju" <saralsainju07@gmail.com>', // sender address
      to: "sainju.saral433@gmail.com", // list of receivers
      subject: "MSG from Nodemailer",
      text: "This is a dummy mail",
      attachments, // Subject line
      html: "<h3>Thank you for sending the request</h3>", // html body
    });

    console.log("Message sent : ", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  main({
    attachments,
  }).catch(console.error);
};

// const attachments = [
//   {
//     // define custom content type for the attachment
//     filename: "qrcode.pdf",
//     path: "../qrcode.pdf",
//   },
// ];
// const password = "cbhjnpgdbuoeedhh";
// const username = "saralsainju07@gmail.com";

// const msg = sendMail({ username, password, attachments });
// console.log(msg);

module.exports = { sendMail };
