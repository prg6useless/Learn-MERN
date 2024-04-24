const properCase = require("proper-upper-case");
const QRCode = require("qrcode");
const http = require("http");

const result = properCase("saral sainju");
console.log({ result });

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
