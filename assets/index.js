// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Title',
        message: 'Title: What is the title of your project?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Description: Write a description about your project.',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Installation: How is your project installed. Are there any requirements?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Usage: How do you use or operate or project?',
      },
      {
        type: 'input',
        name: 'Contribution',
        message: 'Contribution: How may a user contribute to your project?',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Test: What applications are needed to test your project?',
      },
      {
        type: 'rawlist',
        name: 'License',
        message: 'What license does your project use?',
        choices: [
            "N/A",
            "MIT License",
            "Academic Free License v3.0",
            "Apache license 2.0",
            "Artistic license 2.0",
          ], 
      },
      {
        type: 'input',
        name: 'Github',
        message: 'What is your Github Username?',
      }
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((response) => console.log(response));

};

// Function call to initialize app
init();
