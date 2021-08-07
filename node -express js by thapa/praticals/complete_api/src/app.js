const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const path = require("path");
const hbs = require("hbs");
// const routers = require("./routers/");
// const viewPath = path.join(__dirname, "../views");
// now we will set our view engine to use the handlebars
const templatePath = path.join(__dirname, "../templates/views");
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public"))); //it will check for index.html in public folder
app.set("views", templatePath);
const partialPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialPath);
app.get("/", (req, res) => {
  res.render("index"); //index.hbs
});

app.listen(port, () => {
  console.log(`server is running at ${port} port`);
});
