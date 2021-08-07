// this is the main file where we will make static webpage using public folder files

const express = require("express");
const app = express();
const port = 3000;
const localhost = "127.0.0.1";
const path = require("path");
const staticpath = path.join(__dirname, "../public");

// console.log(path.join(__dirname, "../public")); //join method is used to go with absolute  path
app.use(express.static(staticpath));
app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.listen(port, localhost, () => {
  console.log(`this is server and it is listening at ${port} port`);
});

// relative path ../../ -> dont use this

// go with absolute path
// __dirname -> this will give absolute path
