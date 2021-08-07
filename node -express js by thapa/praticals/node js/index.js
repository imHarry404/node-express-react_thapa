// const ok = "Harry";
// console.log(ok);

// node core modules

const fs = require("fs");

// reading,writing a file synchronously
// fs.writeFileSync("read.txt", "this is written into file");
// console.log("file created");

// if we try to write again into same file then it will remove  previous data and will insert new data, so we will use appendFileSync to add new data at end

// fs.appendFileSync("read.txt", " this is appending");
// console.log("data appended");

// reading the file
// while reading it will give buffer data first , we have to convert that buffer into string then we will get our original data

// const buff_data = fs.readFileSync("read.txt");
// console.log(buff_data);

// converting buffer data into readable format
// const ori_data = buff_data.toString();
// console.log(ori_data);

// remaning the file
fs.renameSync("read.txt", "renamed.txt");
console.log("file renamed");
