// create http server that takes user input as request and
// find a package that convert user currency input in usd to
// npr currency
// 1 usd => 133 npr

const http = require("http");
const url = require("url");
const CC = require("currency-converter-lt");
http
  .createServer(async (req, res) => {
    // let q = url.parse(req.url, true).query;
    // let txt = q.currencyUSD;
    // txt = Number(txt);
    if (req.url.split("=")[1] !== undefined) {
      const url = req.url.split("="); //localhost:8080?currency=75
      const txt = parseInt(url[1]);
      const convert = await convertCurrency(txt);
      res.writeHead(200, { "Content-Type": "text/html" });
      const h1 = `<h1> In USD : $${txt}</h1>
    <h1>In NPR : Rs. ${convert}</h1>
    `;
      res.end(h1);
    }
  })
  .listen(3001);

const convertCurrency = async (number = 1) => {
  let currencyConverter = new CC({
    from: "USD",
    to: "NPR",
    amount: number,
  });
  const result = await currencyConverter.convert();
  return result;
};
