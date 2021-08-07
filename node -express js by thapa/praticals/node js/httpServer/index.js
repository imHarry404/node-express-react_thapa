// //  creating our own server using node js

// const http = require("http"); //importing the required module

// //creating the server, it takes a callback function and request and responce as its parameter then after we have to give an end for res and listen that request on a port and will have to give the responce back for the request
// const server = http.createServer((req, res) => {
//   res.end("Hello from other side");
// });

// port = 8000;
// localhost = "127.0.0.1";
// server.listen(port, localhost, () => {
//   console.log(`listening at ${port} port and localhost is ${localhost}`);
// });

// my test
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from harry ok");
});

port = 8000;
localhost = "127.0.0.1";
server.listen(port, localhost, () => {
  console.log(`listening at port no ${port} and localhost is ${localhost}`);
});
