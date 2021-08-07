const chalk = require("chalk");

// console.log(chalk.yellow.underline("hey harry"));
// console.log(chalk.red.italic("hey harry"));
// console.log(chalk.blue.underline.inverse("hey harry"));
// console.log(chalk.green.inverse("ok this is done"));
// console.log(chalk.red.inverse("ok this not done"));

// complete validation

const validator = require("validator");
const res = validator.isEmail("harry@k.com");

// using ternary operator
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
