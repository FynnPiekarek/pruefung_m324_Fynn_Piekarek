const chalk = require('chalk');

// Remove this if unused, or use it in the program
let myUnusedVariable = 42; // Unused variable that should either be used or removed


function checkNumber(num) {
  if (num == 10) {  
    console.log(chalk.green('The number is 10.'));
  } else {
    console.log(chalk.red('The number is not 10.'));
  }
}

checkNumber(10);
