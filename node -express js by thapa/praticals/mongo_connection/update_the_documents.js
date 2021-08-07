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

// update the document
/*
const updateDocument = async () => {
    try {
        //   updateOne this returns the update history means how much value has been modified
        // const uptData = await Records.updateOne(
            
            // findByIdAndUpdate this method returns the updated valuee
            const uptData = await Records.findByIdAndUpdate(
                { _id: "60d5acd7429b8c28c4ad1f94" },
                { $set: { name: "ladoo bhai" } }
                ); //now this will be updated
                console.log(uptData); //this will give how many record are update
                
                // printing that updated result
                const updData = await Records.find({ name: "ladoo bhai" });
                console.log(updData);
            } catch (err) {
                console.log(err);
            }
        };
        
        // 60d5acd7429b8c28c4ad1f94 ->unique id , by this we will update the document
        updateDocument();
        */
