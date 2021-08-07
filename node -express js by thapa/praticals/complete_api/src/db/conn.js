const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/harry_test_api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection ho gya");
  })
  .catch((err) => {
    console.log("Connection ni hua error aa gya bhai");
  });

// module.exports = mongoose;
