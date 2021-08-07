// const chalk = require("chalk");
// const student = {
//   name: "harry",
//   age: 26,
//   branch: "Cse",
// };

// console.log(student);
// console.log(typeof student);
// // console.log(chalk.blue(student.name));
// // console.log(chalk.green.inverse(student.age));
// // console.log(student.branch);

// // to conver object into json
// const jsonData = JSON.stringify(student);

// // stringify is used when we have to create an object to json and parse is used when we have to convert json to string
// console.log(jsonData);
// console.log(typeof jsonData);

// // in json data every key value will be in ""

// // we can't access json data member using . but we can acces objects members

// const jstr = JSON.parse(jsonData);
// console.log(jstr);
// console.log(typeof jstr);

// playing with file system
const chalk = require("chalk");
const fs = require("fs");
const student = {
  name: "harry",
  age: 26,
  branch: "Cse",
};

// 1. convert to json
// 2. save to a file
// 3. read that file
// 4. convert back to json object
// show on console

/*
console.log(student);
const jsonData = JSON.stringify(student);
fs.writeFile("harry.json", jsonData, (err) => {
    console.log(chalk.green(`done`));
});
// writing done
*/

// now we will read that file
fs.readFile("harry.json", "utf-8", (err, data) => {
  //   console.log(data);
  // now converting the read data from json to object
  console.log(data); //this is original data
  const convertJson = JSON.parse(data);
  console.log(convertJson); //this is after convert
});
