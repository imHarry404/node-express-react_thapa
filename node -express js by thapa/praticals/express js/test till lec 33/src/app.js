const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 3000;
const localhost = "127.0.0.1";
const path = require("path");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
app.set("title", "harry test");
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/news", (req, res) => {
  res.render("news");
});
app.get("/action", (req, res) => {
  res.render("news");
});
app.get("/doctores", (req, res) => {
  res.render("doctores");
});

app.listen(port, localhost, () => {
  console.log(`server is listening at port ${port}`);
});
