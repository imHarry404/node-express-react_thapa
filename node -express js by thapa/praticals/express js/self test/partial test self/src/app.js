const express = require("express");
const app = express();
const port = 3000;
const localhost = "127.0.0.1";
const hbs = require("hbs");
const path = require("path");
const viewPath = path.join(__dirname, "../templates/views");
const partialPth = path.join(__dirname, "../templates/partials");
const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath)); //ye css ye sb add krne me kam aayega

app.set("view engine", "hbs");
hbs.registerPartials(partialPth);
app.set("views", viewPath);

// endpoints
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.listen(port, localhost, () => {
  console.log(`server is listening at ${port} and localserver is ${localhost}`);
});
