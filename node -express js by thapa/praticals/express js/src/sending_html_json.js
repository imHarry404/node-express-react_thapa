const express = require("express");
const app = express();
const port = 3000;
const localhost = "127.0.0.1";
// creating the routes

app.get("/", (req, res) => {
  res.send("hello from harry using express");
});

app.get("/about", (req, res) => {
  res.status(200).send("this is about page and status is optional");
});

app.get("/json", (req, res) => {
  res.send({
    name: "harry",
    branch: "cse",
    roll: 191021,
    college: "IIT Farrukhnagar",
  });
});

app.get("/arrjson", (req, res) => {
  res.send([
    {
      name: "harry",
      branch: "cse",
      roll: 191021,
      college: "IIT Farrukhnagar",
    },
    {
      name: "nitish",
      branch: "bevkuf",
      roll: 196969,
      college: "IIT confused academy",
    },
    {
      name: "mohak",
      branch: "selfish",
      roll: 19999,
      college: "IIT amirpur",
    },
  ]);
});

app.get("/temp", (req, res) => {
  res.json([
    {
      id: 1,
      name: "first",
    },
    {
      id: 2,
      name: "second",
    },
    {
      id: 3,
      name: "third",
    },
    {
      id: 4,
      name: "fourth",
    },
  ]);
});
app.listen(port, localhost, () => {
  console.log(`app is listening at ${port} port`);
});
