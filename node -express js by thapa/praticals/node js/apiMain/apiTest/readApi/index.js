// routing in node js,,,,creating endpoints

const http = require("http");
const url = require("url");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end(`hello from home page `);
  } else if (req.url == "/contact") {
    res.end(`hello from contact page`);
  } else if (req.url == "/about") {
    res.end(`hello from about page`);
  } else if (req.url == "/userapi") {
    //   reading json api file and showing it on this page
    fs.readFile(
      "C://Users//hario//Desktop//to learn//js library//node -express js by thapa//praticals//apiMain//apiTest//userapi.json",
      "utf-8",
      (err, data) => {
        console.log(err);
        console.log(data);
      }
    );
    res.end(`hello from userApi page`);
  } else {
    // to throw an error page we have to set status of that page, 404 is client error page
    res.writeHead(404, { "Content-type": "text/html" });
    res.end(`error 404 ! page not found`);
  }
});
port = 8000;
localhost = "127.0.0.1";
server.listen(port, localhost, () => {
  console.log(`server is listening at ${port} port`);
});
