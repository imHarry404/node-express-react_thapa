// creating connection and iserting data into the mongodb

const mongoose = require("mongoose");

// creating the connection
mongoose
  .connect("mongodb://localhost:27017/harryTest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection created"))
  .catch((err) => console.log("Error occured while connection" + err));

//   defining the schema
const SchemaforTable = new mongoose.Schema({
  name: String,
  roll: Number,
  dob: { type: Date, default: Date.now },
});

// creating the model (means collection name) table name
const myTestTable = new mongoose.model("myTestTable", SchemaforTable);

// giving document to the collection
const record1 = new myTestTable({
  name: "Hariom",
  roll: 191021,
  //   dob: { type: Date, default: Date.now },
  //date has default value
});

// now save then it will save to database

// record1.save();

// save method returns promise
// but instead of promise we will use async await to save time

const result = await record1.save();
console.log(result);
