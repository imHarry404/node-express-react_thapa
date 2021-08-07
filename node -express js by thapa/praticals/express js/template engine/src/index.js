// !important!
const express = require("express");
const app = express();
const port = 3000;
const localhost = "127.0.0.1";

// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("index", { yr_name: "Harry" }); //means index.hbs and sending variable
});

app.listen(port, localhost, () =>
  console.log("> Server is up and running on port : " + port)
);
