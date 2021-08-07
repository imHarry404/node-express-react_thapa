const mongoose = require("mongoose");

// creating the connection
mongoose
  .connect("mongodb://localhost:27017/harry", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection sucessfull"))
  .catch((err) => console.log("Error occured", err));

//   defining structure using schema
const student_schema = new mongoose.Schema({
  name: {
    type: String,
    reqired: true,
  },
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
