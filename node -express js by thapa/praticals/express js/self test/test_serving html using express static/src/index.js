// this is the main file where we will serve our files uisng express static

const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const localhost = "127.0.0.1";
const staticpath = path.join(__dirname, "../public");

// console.log(path.join(__dirname, "../public"));
app.use(express.static(staticpath));

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.listen(port, localhost, () => {
  console.log(`listening at ${port} port`);
});
