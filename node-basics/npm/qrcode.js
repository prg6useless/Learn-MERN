// const properCase = require("./proper-upper-case");

// const result = properCase("saral sainju");
// console.log({ result });

const QRCode = require("qrcode");
const http = require("http");

// generate qr code in terminal
// QRCode.toString(
//   "https://www.saralsainju.com.np/",
//   { type: "terminal" },
//   (err, url) => {
//     console.log(url);
//   }
// );

// generate qrcode using url query

http
  .createServer(async (req, res) => {
    if (req.url.split("=")[1] !== undefined) {
      const qr = await QRCode.toDataURL(req.url.split("=")[1]);
      const img = `<img src="${qr}"/>`;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(img);
    }
  })
  .listen(3000);

// save qr code as image
// QRCode.toFile("website.png", [{ data: "https://www.saralsainju.com.np/" }]);

// create http server that takes user input as request and
// find a package that convert user input to currency
// 1 usd => 133 npr
