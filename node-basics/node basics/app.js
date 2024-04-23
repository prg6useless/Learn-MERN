// set of functions -> module

// http module

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.end(JSON.stringify({ msg: "hello" }));
  })
  .listen(3000);
console.log("App running on port 3000");
console.log("hello");

// 0 - 1000 system reserved
// 1001 - 2999 others
// 3000 - 10000 for development process

// OS module

// js function that uses os module to get your computer ram in MB/GB

const os = require("os");
const memory = os.totalmem();

console.log(`total memory is ${memory} Bytes`);
console.log(`total memory is ${memory / 1024} KB`);
console.log(`total memory is ${(memory / (1024 * 1024)).toFixed(2)} MB`);
console.log(`total memory is ${(memory / (1024 * 1024 * 1024)).toFixed(2)} GB`);

// fs module
// read a file using fs module

const fs = require("fs");
const content = fs.readFileSync("./someText.txt", { encoding: "utf8" });
console.log({ content });
