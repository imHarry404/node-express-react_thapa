const express = require("express");
const app = express();
const port = 3000;
const localhost = "127.0.0.1";
const path = require("path");
const harryPath = path.join(__dirname, "../harry");

app.set("view engine", "hbs");
app.set("views", harryPath);
app.get("/", (req, res) => {
  res.render("index", {
    ur_name: "Harry",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pg_name: "about",
  });
});

app.listen(port, localhost, () => {
  console.log(`server is listening at ${port} port`);
});
