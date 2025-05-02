// Importing a module using the ES6 import syntax
// Third-party module
import chalk from 'chalk';

// custom module
import{add, subtract, multiply, divide}from './my_module/calculator.js';

// Accessing metadata about the module
console.log(chalk.yellow (import.meta.url)); 

console.log(chalk.red (`Addition is: ${add(5, 3)}`));
console.log(chalk.green (`Subtraction is: ${subtract(5, 3)}`));
console.log(chalk.blue (`Multiplication is: ${multiply(5, 3)}`));
console.log(chalk.magenta (`Division is: ${divide(5, 3).toFixed(2)}`)); // 1.67

