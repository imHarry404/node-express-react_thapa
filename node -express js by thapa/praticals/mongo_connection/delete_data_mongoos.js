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
  try {
    const data1 = await Records.find();
    console.log(data1);
  } catch (err) {
    console.log(err);
  }
};
getDocument();
console.log("deleting one document");

// deleting documents

const deleteDocument = async () => {
  try {
    const del = await Records.deleteOne({ _id: "60d5acd7429b8c28c4ad1f96" });
    console.log(del);
  } catch (err) {
    console.log(err);
  }
};
deleteDocument();
console.log("After deleting");
getDocument();
