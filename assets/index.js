// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown.js')
const generateLicense = require('./utils/generateLicenseList.js')

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
        type: 'input',
        name: 'credits',
        message: 'Anything to credit for helping build the project that you would like to include?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: generateLicense.prototype.licenseList, 
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      }
    ]);
  };

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
const init = () => {
    generateLicense()
    questions()
    .then((response) => generateMarkdown(response))
    .then(() => writeFile('README.md', generateMarkdown.prototype.readme))
    .then(() => console.log('You have successfully created README.md'))
    .catch((err) => console.log(err));
};

// Function call to initialize app
init();
