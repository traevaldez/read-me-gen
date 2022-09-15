// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        // App Title
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your application?'
        },
        // User Name
        {
            name: 'name',
            type: 'input',
            message: 'What is your name?'
        },
        // User Email
        {
            name: 'email',
            type: 'input',
            message: 'What is your e-mail?'
        }, 
        // User Github Repository
        {
            name: 'github',
            type: 'input',
            message: 'What is your GitHub username?'
        },
        // App Description
        {
            name: 'description',
            type: 'input',
            message: 'What does this application do? Provide a short description explaining the what, why and how of your project.'
        },
        // Installation Guide
        {
            name: 'install',
            type: 'input',
            message: 'How do I install this application?'
        },
        // How to use app
        {
            name: 'usage',
            type: 'input',
            message: 'How do I use this application?'
        },
        // What languages was this app built with
        {
            name: 'languages',
            type: 'checkbox',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        // Licenses for use of app
        {
            name: 'license',
            type: 'list',
            message: 'Select the kind of license for this application:',
            choices: ['','','']
        },
        // How to contribute to this project
        {
            name: 'contributing',
            type: 'input',
            message: 'How do I contribute to this application?'
        },
        // How to test this app
        {
            name: 'test',
            type: 'input',
            message: 'How do I test this application?'
        },
        // Create fileName for readme file
        {
            name: 'fileName',
            type: 'input',
            message: 'What do you want to call this readme?'
        }
      
     ]);

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) => {if (err) throw new Error(err)
    
     console.log(`${fileName}.md has been created!`)});
}

// TODO: Create a function to initialize app
function init() {
    let answers = await userInput();
    writeToFile((answers.fileName), (generateMarkdown(answers)));
}

// Function call to initialize app
init();
