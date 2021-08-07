const mongoose = require("mongoose");

// creating the connection
mongoose
  .connect("mongodb://localhost:27017/conndata", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection sucessfull"))
  .catch((err) => console.log("Error occured", err));

//   defining structure using schema
const student_schema = new mongoose.Schema({
  name: String,
  branch: String,
  roll: Number,
  placement: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// creating the collection based on defined schema
// creating a class and then creating the model

// it will create the collection name plural defaults
const Student = new mongoose.model("Student", student_schema);
// the collection will be created as Students

//   date is optional becuase it has given default value
// inserting data

const first = new Student({
  name: "harry",
  branch: "cse",
  roll: 191021,
  placement: true,
});

first.save();
