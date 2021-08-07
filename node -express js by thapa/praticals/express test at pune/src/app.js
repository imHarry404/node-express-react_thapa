const express = require("express");
const app = express();
const path = require("path");
const port = 8000;
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path)); //serving static files

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/*", (req, res) => {
  res.render("err");
});

app.listen(port);
