const express = require("express");
const app = express();
const port = 3000;

// now express application is created
// now app variable has everyting and we will develop by using it

app.get("/", (req, res)    => {
  res.send("hello from harry using express");
});

app.get("/about", (req, res) => {
  res.send("this is hii from author side");
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
