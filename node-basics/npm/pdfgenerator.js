const http = require("http");
const PDFDocument = require("pdfkit");
const fs = require("fs");

http
  .createServer((req, res) => {
    const content = req.url.split("=");
    if (content[1] !== undefined) {
      createPDF(content[1]);
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("pdf generated");
  })
  .listen(8080);

const createPDF = (userInput) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.fontSize(25).text(userInput, 100, 100);
  doc.end();
};
