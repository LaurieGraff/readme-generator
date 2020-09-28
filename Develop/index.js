const inquirer = require('inquirer');
//const fs = require('fs');

//Description, Table of Contents, Installation, Usage, License, 
//Contributing, Tests, and Questions
// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'descritption',
            message: 'Please enter a description of your project:'
        },
        {
            type: 'input',
            name: 'contents',
            message: 'Table of Contents:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is required to install this projects?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'instructions and examples of usage'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of license does this project require',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'No license' ]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please name contributing parties'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Include any testing examples here:'
        },
        {
            type: 'input',
            name: 'questions',

        }
]);
}

questions()
    .then(answers => console.log(answers));

// function to write README file
//function writeToFile(fileName, data){}

// function to initialize program
function init() {

}

// function call to initialize program
init();
