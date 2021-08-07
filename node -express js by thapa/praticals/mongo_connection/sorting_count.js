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
// reading the data
const getDocument = async () => {
  //   const data1 = await Records.find().countDocuments();
  //   const data1 = await Records.find().sort({ phone: 1 }); //sort the documents by name
  console.log(data1);
};
getDocument();
