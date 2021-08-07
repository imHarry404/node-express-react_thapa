// routing in node js,,,,creating endpoints

const http = require("http");
const { url } = require("inspector");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end(`hello from home page `);
  } else if (req.url == "/contact") {
    res.end(`hello from contact page`);
  } else if (req.url == "/about") {
    res.end(`hello from about page`);
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
