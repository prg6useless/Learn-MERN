// const http = require("http");
// const PDFDocument = require("pdfkit");
// const fs = require("fs");

// http
//   .createServer((req, res) => {
//     const content = req.url.split("=");
//     if (content[1] !== undefined) {
//       createPDF(content[1]);
//     }
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("pdf generated");
//   })
//   .listen(8080);

// const createPDF = (userInput) => {
//   const doc = new PDFDocument();
//   doc.pipe(fs.createWriteStream("output.pdf"));
//   doc.fontSize(25).text(userInput, 100, 100);
//   doc.end();
// };

const http = require("http");
const PDFDocument = require("pdfkit");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const word = req.url.split("=")[1]; // http://localhost:7000
    if (word !== undefined) {
      pdfGenerate(word);
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    if (word !== undefined) res.end("PDF IS GENERATED!");
    else res.end("send request to generate pdf");
  })
  .listen(7000);
console.log("App Running In The Port 7000 : http://localhost:7000");

const pdfGenerate = (word) => {
  // Create a document
  const doc = new PDFDocument();
  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.text(word, 100, 100);
  // Finalize PDF file
  doc.end();
};
