const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/databsetesting", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection created"))
  .catch((err) => console.log("Error occured while connection" + err));

//
