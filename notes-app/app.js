const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const { getNotes } = require('./notes');

const mynote = getNotes("Your notes...");
console.log(chalk.blue(mynote));
console.log(chalk.green("Success"));

console.log(validator.isURL("https://test.com"));
console.log(chalk.hex('#DEADED').underline('Hello, world!'))
yargs.version('1.4.4')

yargs.command({
    command: 'add',
    describe: 'adding a command',
    handler: function() {
        console.log("hello user, this is my first command")
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a command',
    handler: function() {
        console.log("karthick, Removed your command")
    }
})

yargs.command({
    command: 'list',
    describe: 'Show list of command',
    handler: function() {
        console.log("1. Hellow karthick");
        console.log("2. This is my list command");
        console.log("3. List command is comming from yargs npm")
    }
})

yargs.command({
    command: 'read',
    describe: 'read a command',
    handler: function() {
        console.log("this is to read a command");
    }
})

console.log(process.argv)
console.log(yargs.argv)

// Customize yargs version
