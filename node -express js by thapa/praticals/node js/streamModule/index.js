const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  // fs.readFile(
  //   "C://Users//hario//Desktop//to learn//js library//node -express js by thapa//praticals//streamModule//harry.txt",
  //   (err, data) => {
  //     if (err) return console.error(err);
  //     res.end(data.toString());
  //   }
  // );
  /*
  // 2nd way
  // reading from a stream
  // create a readable stream
  // handle stream events-> data,end and error
  
  const rstrem = fs.createReadStream("harry.txt");
  rstrem.on("data", (chunkdata) => {
    res.write(chunkdata);
  });
  rstrem.on("end", () => {
    res.end();
  });
  rstrem.on("error", (error) => {
    console.log(error);
    res.end("file not found");
  });
  */

  // 3rd way, using pipe(destination)
  const rstrem = fs.createReadStream("harry.txt");
  rstrem.pipe(res); //our destination is only res so this is the simplest way
  // this is fastest and shortest way
});

port = 8000;
localhost = "127.0.0.1";
server.listen(port, localhost);
