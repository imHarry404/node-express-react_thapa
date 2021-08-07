const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello from home page");
  } else if (req.url == "/about") {
    res.end("Hello from about page");
  } else if (req.url == "/contact") {
    res.end("Hello from contact page");
  } else if (req.url == "/api") {
    // reading the api file
    fs.readFile(
      "C://Users//hario//Desktop//to learn//js library//node -express js by thapa//praticals//testUserApi//apiFolder//userapi.json",
      "utf-8",
      (err, data) => {
        console.log(data);
      }
    );
    res.end("Hello from api page");
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
