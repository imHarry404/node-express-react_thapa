const express = require("express");
const app = express();
const port = 3000;
const localhost = -"127.0.0.1";

app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("index", {
    name: "harry",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, localhost, () => {
  console.log(`listening at ${port}`);
});
