const fs = require("fs");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/insertManyTesst", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error occured" + err);
  });

//   schema definition
const schema_def = new mongoose.Schema({
  name: String,
  class: String,
  phone: Number,
});
// model
const Records = new mongoose.model("Records", schema_def);

// inserting many data into the collection
const insertManyRecords = async () => {
  try {
    const data1 = new Records({
      name: "harry bhai",
      class: "3rd year",
      phone: 1234,
    });
    const data2 = new Records({
      name: "moahk bhai",
      class: "4th semester",
      phone: 4124,
    });
    const data3 = new Records({
      name: "Nitish bhai",
      class: "all clear",
      phone: 7431,
    });
    const data4 = new Records({
      name: "Ronik bhai",
      class: "2rd year",
      phone: 5434,
    });

    // now inserting these document using collection class name
    const insRec = await Records.insertMany([data1, data2, data3, data4]);
  } catch (err) {
    console.log("bhai error aa gya");
  }
};

// insertManyRecords();

// reading the data
const getDocument = async () => {
  // const data = await Records.find(); //all document will come

  // finding with condition
  // const data = await Records.find({ phone: 1234 }); //only 1234 phone no record will come

  // finding with more conditions, finding only one data
  const data = await Records.find({ phone: 1234 }).select({ name: 1 }); //only name will come

  console.log(data);
  //writing into the file
};
getDocument();
