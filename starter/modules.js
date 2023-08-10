console.log(arguments);
console.log(require("module").wrapper);

//module-exports
const Calculator = require("./calculator");
const calculator = new Calculator();
console.log(calculator.add(3,5));

//exports
const calculator2 = require("./exports");
console.log(calculator2.multiply(3,5));

//caching
//The top-level code executes just once because the module will not pe loaded
//every single time, just once and the will be cached and just the function
require("./caching")();
require("./caching")();
require("./caching")();