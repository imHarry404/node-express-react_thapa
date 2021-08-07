const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/apniMongo", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

//   schema definition
const schema_def = new mongoose.Schema({
  name: String,
  class: String,
  roll: Number,
  sem: Number,
});
// model
const Records = new mongoose.model("Records", schema_def);

// insert the data
const insertData = async () => {
  try {
    const r1 = new Records({
      name: "harry",
      class: "B.tech",
      phone: 21,
      sem: 4,
    });
    const r2 = new Records({
      name: "mohak",
      class: "M.tech",
      phone: 34,
      sem: 5,
    });
    const r3 = new Records({
      name: "Nitish",
      class: "B.tech",
      phone: 38,
      sem: 6,
    });
    const r4 = new Records({
      name: "Ronik",
      class: "Bca",
      phone: 52,
      sem: 2,
    });
    const r5 = new Records({
      name: "Priyanshu",
      class: "Not",
      phone: 46,
      sem: 9,
    });

    const insSuc = await Records.insertMany([r1, r2, r3, r4, r5]);
    // insertion sucessfull
    console.log(insSuc); //it will print all the inserted records
  } catch (err) {
    console.log(err);
  }
};

// insertData();

// reading the data
const readData = async () => {
  try {
    // const dataRead = await Records.find();
    // const dataRead = await Records.find({ name: "harry" });
    // const dataRead = await Records.find({ sem: { $gt: 3 } }).limit(2);
    // const dataRead = await Records.find({ sem: { $gt: 7 } }).select({name: 1, });
    console.log(dataRead);
  } catch (err) {
    console.log(err);
  }
};
// readData();

// update the data
const updateData = async () => {
  try {
    const update = await Records.findByIdAndUpdate(
      { _id: "60d5c5d4d8ac142098e4dd3f" },
      { $set: { name: "harry bhai ka new name" } }
    );
    console.log(update);
  } catch (err) {
    console.log(err);
  }
};
// updateData();

const deleteData = async () => {
  try {
    const update = await Records.findByIdAndDelete(
      { _id: "60d5c5d4d8ac142098e4dd3f" },
      { $set: { name: "harry bhai ka new name" } }
    );
    console.log(update);
  } catch (err) {
    console.log(err);
  }
};
deleteData();
