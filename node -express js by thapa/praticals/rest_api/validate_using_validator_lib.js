// custom validation
const validator = require("validator");
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
    maxlength: [25, "maximum 15 leters"],
  },
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

  //   custom validation
  qualification: {
    type: Number,

    //     validate(value) {
    //       if (value < 0) {
    //         throw new Error("Qualification can't be -ve");
    //       }
    //     },
  },
  //   email: { type: String },//it will get inserted
  // another way using validator package  npm i validator
  email: {
    type: String,
    unique: true,
    require: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        //   validating email using validaor library
        throw new Error("invalid email");
      }
    },
  },
});
// model
const Records = new mongoose.model("Records", schema_def);

// <------------insert the data----------------->
//
const insertData = async () => {
  try {
    const r1 = new Records({
      name: "sahi valitator email",
      class: "bca",
      roll: 194,
      sem: 1,
      //   qualification: -3, -> if we give -ve value then it will give error, this is custom qualification
      qualification: 8,
      //   email: "glat@glt", //it will get inserted
      email: "sahiemail@gmail.com", //it will get inserted
    });

    const insSuc = await Records.insertMany([r1]);
    // insertion sucessfull
    console.log(insSuc); //it will print all the inserted records
  } catch (err) {
    console.log(err);
  }
};

// <------------Calling the function----------------->
// insertData();
