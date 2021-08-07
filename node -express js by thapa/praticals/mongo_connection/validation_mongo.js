const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/apniMongoKiValidation", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

//   schema definition
const schema_def = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    uppercase: true,
    trim: true,
    minlength: [2, "minimum 5 leters"],
    maxlength: [15, "maximum 15 leters"],
  },
  //   unique is not a validator, it is just to say that the name can't be duplicate
  //   all the values of name will be inserted as uppercase

  class: {
    type: String,
    trim: true,
    enum: ["b.tech", "m.tech", "bca"],
    //   using enum-> means have limited option to fill,cann't give value our of these
  },
  roll: {
    type: Number,
    require: true,
    unique: true,
    minlength: 2, //will give error if it is case is failed
    maxlength: 6,
  },
  sem: { type: Number, require: true },
});
// model
const Records = new mongoose.model("Records", schema_def);

// <------------insert the data----------------->
//
const insertData = async () => {
  try {
    const r1 = new Records({
      name: "Rahul kumar",
      class: "b.tech",
      phone: 48,
      sem: 5,
    });

    const insSuc = await Records.insertMany([r1]);
    // insertion sucessfull
    console.log(insSuc); //it will print all the inserted records
  } catch (err) {
    console.log(err);
  }
};

// <------------Calling the function----------------->
insertData();

// if we try to insert the same records then it will give us an error

// trim:true -> it will remove the trailing whitespace from the end of the string
