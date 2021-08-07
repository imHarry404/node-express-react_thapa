// !important!
const express = require("express");
const app = express();
const port = 3000;
const localhost = "127.0.0.1";
const path = require("path");
const hbs = require("hbs");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);
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

// adding 404 page on our webpage
app.get("*", (req, res) => {
  res.render("404", {
    errorComment: "Page not Exists",
  });
});
app.listen(port, localhost, () =>
  console.log(
    "> Server is up and running on port : " +
      port +
      " ---locaal host :" +
      localhost
  )
);

// partials are the Path where those files are stored which are reaprating in every page,,,means component like react,, we can use those files everywhere when we need it

// to import partials files inside the views files we have to add {{<filename}}, it will inherit at line

// from now we will run as nodemon filename.js -e js,hbs  -<>if any modification in those 2 files then server will restart
