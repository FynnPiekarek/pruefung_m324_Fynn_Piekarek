const chalk = require('chalk');


function checkNumber(num) {
  if (num === 10) {  
    console.log(chalk.green('The number is 10.'));
  } else {
    console.log(chalk.red('The number is not 10.'));
  }
}

checkNumber(10);