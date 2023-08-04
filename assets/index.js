// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown.js')
const renderLicenseBadge = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Title: What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description: Write a description about your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation: How is your project installed. Are there any requirements?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage: How do you use or operate or project?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Contribution: How may a user contribute to your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Test: What applications are needed to test your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: [
            "CC0",
            "CC0",
            "CC0",
            "CC0",
            "CC0",
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
// TODO: Create a function to initialize app
const init = () => {
    questions()
    // .then((response) => renderLicenseBadge(response.license))
    // .then((response) => console.log(response))
    .then((response) => generateMarkdown(response));
    // .then((response) => writeFile('README.md', generateMarkdown(response)))
    // .then(() => console.log('You have successfully created README.md'))
    // .catch((err) => console.log(err));
};

// Function call to initialize app
init();
