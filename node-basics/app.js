const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.end(JSON.stringify({ msg: "hello" }));
  })
  .listen(8080);
console.log("App running on port 8080");
console.log("hello");

// 0-1000 system reserved
// 1001-2999 others
// 3000 - 1000 for development process

//js function that uses os module to get your computer ram in MB/GB

const os = require("os");

const memory = os.totalmem();

console.log(`total memory is ${memory} Bytes`);
console.log(`total memory is ${memory / 1024} KB`);
console.log(`total memory is ${(memory / (1024 * 1024)).toFixed(2)} MB`);
console.log(`total memory is ${(memory / (1024 * 1024 * 1024)).toFixed(2)} GB`);
