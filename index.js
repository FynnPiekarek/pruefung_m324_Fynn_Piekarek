const chalk = require('chalk');

function checkNumber(num) {
  if (num === 10) {
    console.log(chalk.green('The number is 10.'));
  } else {
    console.log(chalk.red('The number is not 10.'));
  }
}

checkNumber(10);

function calculate(a, b, operation) {
    if (operation === 'add') {
      return a + b;
    } else if (operation === 'subtract') {
      return a - b;
    } else if (operation === 'division') {
      throw new Error('Division is not supported');
    } else {
      throw new Error('Invalid operation');
    }
  }
  
  // Example usage:
  console.log(calculate(5, 3, 'add'));       // 8
  console.log(calculate(10, 5, 'subtract')); // 5
