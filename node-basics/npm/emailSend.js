require("dotenv").config();
const nodemailer = require("nodemailer");
const fs = require("fs");

const file = fs.readFileSync("website.png", (err) => console.log(err.message));

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
async function main({ to, subject, text, attachments, html }) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Saral Sainju" <saralsainju07@gmail.com>', // sender address
    to, // list of receivers
    subject,
    text,
    attachments, // Subject line
    html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main({
  to: "sainju.saral433@gmail.com",
  subject: "Nodemailer MSG",
  text: "This is a random line",
  attachments: [
    {
      // define custom content type for the attachment
      filename: "output.pdf",
      content: "Hi This Is Spam Sent from Node.js!",
      contentType: "text/plain",
    },
    //send image
    // {
    //   filename:'imageName.png',
    //   path:'imagePath.png',
    //   cid:'image',
    // }
  ],
  html: "<img src='cid:image' />",
}).catch(console.error);

//hw
//attach pdf to email
//embed image to email (as html content)
