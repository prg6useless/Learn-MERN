const nodemailer = require("nodemailer");
// using events

// create event
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
  async function main({ attachments }) {
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

module.exports = { sendMail };
