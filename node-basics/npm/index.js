// const properCase = require("./proper-upper-case");

// const result = properCase("saral sainju");
// console.log({ result });

let QRCode = require("qrcode");

// generate qr code in terminal
QRCode.toString(
  "https://www.saralsainju.com.np/",
  { type: "terminal" },
  (err, url) => {
    console.log(url);
  }
);

// save qr code as image
QRCode.toFile("website.png", [{ data: "https://www.saralsainju.com.np/" }]);
