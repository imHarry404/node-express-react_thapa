// Events modules

// it is used to create, fire or listen our own events

// const EventEmitter = require("events");
// const event = new EventEmitter();

// listening the event
// listening 1st time
// event.on("whoAmI", () => {
//   console.log("Your name is Hariom");
// });

// listening 2nd time
// event.on("whoAmI", () => {
//   console.log("Your name is Kumar");
// });
// listening 3nd time
// event.on("whoAmI", () => {
//   console.log("Your name is Harry");
// });

// event.emit("whoAmI"); //creating the event

// when we define our own event then first we have to listen then we have to create it this is right way,,,if we create first then listen then it will not give any output

// example

const EventEmitter = require("events");
const event = new EventEmitter();
event.on("checkPage", (status, message) => {
  console.log(`status code is ${status} and message is ${message}`);
});

event.emit("checkPage", 200, "ok"); //passing the status code
