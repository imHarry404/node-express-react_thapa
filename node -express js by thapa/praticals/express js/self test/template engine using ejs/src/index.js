const express = require("express");
const app = express();
const port = 3000;
const localhost = "127.0.0.1";
// const path = require("path");
// const staticpath = path.join(__dirname, "../views");
// console.log(path.join(__dirname, "../views"));
// creating the routes

app.set("view engine", "hbs");

// app.use(express.static(staticpath));
app.get("/", (req, res) => {
  res.render("index.hbs", {
    name: "harry",
  });
});
app.get("/message", (req, res) => {
  res.send("hello from simple server :)");
});

app.listen(port, localhost, () => {
  console.log(`app listening at ${port}`);
});
