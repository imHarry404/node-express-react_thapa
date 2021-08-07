// testing,
// streaming the file

// this is only for testing purpose

const http = require("http");
const fs = require("fs");

const server = http.createServer();

/*
//serving the file using node fire (means .on event)
server.on("request", (req, res) => {
    fs.readFile("harry.txt", (err, data) => {
        if (err) return console.error(err);
        res.end(data.toString());
    });
});
port = 8000;
localhost = "127.0.0.1";
server.listen(port, localhost);

*/

// 2nd way
// we will use streaming method to show the data
// we will use the event parameter to fire the streaming
// data, end,err,finally

server.on("request", (req, res) => {
  const rstrmdata = fs.createReadStream("harr.txt");
  rstrmdata.on("data", (chunkData) => {
    res.write(chunkData);
  });

  rstrmdata.on("end", () => res.end());

  rstrmdata.on("error", (err) => {
    console.log(err);
    res.end("file not found");
  });
});
port = 8000;
localhost = "127.0.0.1";
server.listen(port, localhost);
