const path = require("path");
// dir name
// console.log(
//   path.dirname(
//     "C:/Users/hario/Desktop/to learn/js library/node -express js by thapa/praticals/path module/index.js"
//   )
// );

// extesntion name
// console.log(
//   path.extname(
//     "C:/Users/hario/Desktop/to learn/js library/node -express js by thapa/praticals/path module/index.js"
//   )
// );

// basename/file name
// console.log(
//   path.basename(
//     "C:/Users/hario/Desktop/to learn/js library/node -express js by thapa/praticals/path module/index.js"
//   )
// );

// parse ->returns an object with root,dir,ext,name,base
// console.log(
//   path.parse(
//     "C:/Users/hario/Desktop/to learn/js library/node -express js by thapa/praticals/path module/index.js"
//   )
// );

// playing with object
const mypath = path.parse(
  "C:/Users/hario/Desktop/to learn/js library/node -express js by thapa/praticals/path module/index.js"
);

console.log(mypath.dir);
