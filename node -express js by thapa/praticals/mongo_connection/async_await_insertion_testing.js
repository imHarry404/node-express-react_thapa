const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/bhaiinserthoga", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected"))
  .catch((err) => console.log("bhai error aa gya" + err));

//   schema definition
const schema_for_table = new mongoose.Schema({
  name: String,
  phone: Number,
  age: Number,
  dob: { type: Date, default: Date.now },
});

// defining the model
const mydocument = new mongoose.model("mydocument", schema_for_table);

// inserting into the database
const insertData = async () => {
  try {
    const info = new mydocument({
      name: "ha bhai jaaa",
      phone: 3456,
      age: 21,
      // date is default
    });
    const sucIns = await info.save();
    console.log(sucIns);
  } catch (err) {
    console.log(err);
  }
};
insertData();
console.log("data inserted sucessfully");
