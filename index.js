// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) => {if (err) throw new Error(err)
    
     console.log(`${fileName}.md has been created!`)});
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
