const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    let q = url.parse(req.url, true).query;
    let txt = q.currencyUSD;
    txt = Number(txt);
    let toNPR = (txt * 132.7).toFixed(3);
    const h1 = `<h1> In USD : $${txt}</h1>
    <h1>In NPR : Rs. ${toNPR}</h1>
    `;
    res.end(h1);
  })
  .listen(3001);
