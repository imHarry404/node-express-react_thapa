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
  // const data = await Records.find({
  //     phone: { $in: [1234, 5434, 673, 23, 76] },
  //   }).select({ name: 1 }); //only name will come whose roll no is in given array list
  // we can use condition here  as we can in cli mode
  //   we can use logical operators too
  const data = await Records.find({
    $or: [{ name: "harry bhai" }, { phone: 5434 }],
  }).limit(1);
  //   finding data with logical operator,checking consition given in array , of any one is true then it will execute

  //   we can count how many documenrts are matching and can print, instead of printing we can count no of coming document using countDocuments()

  console.log(data);
};
getDocument();
