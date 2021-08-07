// here we will try all 3 ways of streaming

const http = require("http");
const fs = require("fs");

const server = http.createServer();

/*
// first way
server.on("request", (req, res) => {
    fs.readFile("harry.txt", (err, data) => {
        if (err) return console.error(err);
        res.end(data.toString());
    });
});

server.listen(8000, "127.0.0.1");
*/
/*
// 2nd way
server.on("request", (req, res) => {
    const rstrm = fs.createReadStream("harry.txt");
    
    //   on data
    rstrm.on("data", (chunkData) => {
        res.write(chunkData);
    });
    
    //   on end
    rstrm.on("end", () => res.end());
    
    //   on error
    rstrm.on("error", (err) => {
        res.end("file not found");
        console.log(err);
    });
});
server.listen(8000, "127.0.0.1");

*/
/*
// 3rd way
server.on("request", (req, res) => {
    const rstm = fs.createReadStream("harry.txt");
    rstm.pipe(res);
});
server.listen(8000, "127.0.0.1");
// the simplest and fastest way

*/
