// const chalk = require('chalk');

// const greenMsg = chalk.green.inverse.bold('Success!');
// console.log(greenMsg);
// console.log(chalk.blue('Hello World!'));

const command = process.argv[2];
console.log(process.argv);

if(command === 'add'){
    console.log('Adding notes!');
}else if(command === 'remove'){
    console.log('Removing notes!');
}
// const validator = require('validator');
// console.log(validator.isEmail('aastha@gmail.com'));
// console.log(validator.isURL('https://mead.io'));

// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
// fs.appendFileSync('notes.txt', ' My name is Aastha Awasthi.');
// fs.appendFileSync('notes.txt', ' I am a Mean Stack Developer. Working as a software developer.');

// const add = require('./utils.js');
// const sum = add(4, -2);
// console.log(sum);

// const name = "Aastha";
// console.log(name);

// const getNotes = require('./notes.js');
// const msg = getNotes();
// console.log(msg);