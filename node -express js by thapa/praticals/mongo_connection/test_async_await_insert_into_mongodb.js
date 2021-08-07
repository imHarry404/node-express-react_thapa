const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/databsetesting", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection created"))
  .catch((err) => console.log("Error occured while connection" + err));

//   defining the schema
const SchemaforTable = new mongoose.Schema({
  name: String,
  roll: Number,
  pass: Boolean,
  dob: { type: Date, default: Date.now },
});

const details = new mongoose.model("details", SchemaforTable);

// save method returns promise
// but instead of promise we will use async-await to save time

// const record1 = new details({
//   name: "Mohak",
//   roll: 191034,
//   pass: true,
// });
// record1.save();
const createDocument = async () => {
  try {
    const record2 = new details({
      name: "Mohak",
      roll: 191034,
      pass: true,
    });

    const result = await record2.save();
    console.log(result); //this will show on console
  } catch (err) {
    console.log(err);
  }
};
createDocument();
