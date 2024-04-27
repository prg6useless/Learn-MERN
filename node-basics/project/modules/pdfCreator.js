const PDFDocument = require("pdfkit");
const fs = require("fs");

const doc = new PDFDocument();

const createPDF = (path) => {
  doc.pipe(fs.createWriteStream("./qrcode.pdf"));
  doc.image(path, {
    fit: [250, 300],
    align: "center",
    valign: "center",
  });
  doc.end();
  console.log("Created PDF");
};

module.exports = { createPDF };
