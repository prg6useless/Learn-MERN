const qrcode = require("qrcode");

const generateQRcode = (str) =>
  qrcode.toFile("site.png", [{ data: str }]).then(() => "site.png");
module.exports = { generateQRcode };
