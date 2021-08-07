const express = require("express");
const app = express();
const port = 3000;
const localhost = "127.0.0.1";
const path = require("path");

// we will change the edfault views folder and will set the new folder path
const templatePath = path.join(__dirname, "../harry");

app.set("title", "harry site"); //setting the title using js ...app.get('title) to get the title

app.set("view engine", "hbs");
app.set("views", templatePath); //setting the new folder instead of views

// end points
app.get("/", (req, res) => {
  res.render("index", {
    ur_name: "harry",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    about: "about",
  });
});

app.listen(port, localhost, () => {
  console.log(`listening at ${port} port`);
});

// the first parameter in get() is request and response only in express
