// in this file we will convert object to json and then we will read that json file and then we will convert that json file into original state

const chalk = require("chalk");
const fs = require("fs");

const strData = {
  name: "harry",
  age: 26,
  branch: "Cse",
};

/*
// converting this js object to json format and saving it to a  file
const jsonData = JSON.stringify(strData);
// writing into the file
fs.writeFile("again.json", jsonData, (err) => {
    console.log("writing done");
});
*/

// Reading the file and again converting it to object/string
fs.readFile("again.json", "utf-8", (err, data) => {
  console.log(data); //original json file data
  //   converting into string
  const strDaTA = JSON.parse(data);
  console.log(strDaTA); //converted file data
});
