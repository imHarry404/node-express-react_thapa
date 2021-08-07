// creating file, reading, appending and removing the file using async

const { error } = require("console");
const fs = require("fs");

// in casep of async we must have to give a callback function and it takes args as error, data and all then it will work otherwise it will through an error

// creating file
// fs.writeFile("hello.txt", "this is written", (error) => {
//   console.log("file created sucessfully");
//   console.log(error); //if not then will print null
// });

// appending to the file
// fs.appendFile("hello.txt", " this is appended", (error) => {
//   console.log("data appended sucessfully");
//   console.log(error);
// });
// reading the file
// fs.readFile("hello.txt", "UTF-8", (error, data) => {
//   console.log(data);
//   console.log(error);
// });

// renaing the file
// fs.rename("hello.txt", "hii.txt", (error) => {
//   console.log("file renamed");
//   console.log(error);
// });

// removing the file
// fs.unlink("hii.txt", (error) => {
//   console.log("file deleted sucessfully");
//   console.log(error);
// });
