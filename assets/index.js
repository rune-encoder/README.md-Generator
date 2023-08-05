// inquirer 8.2.4 must be installed.
const inquirer = require("inquirer");

//Using promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require("fs").promises;

// Loads modules from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");
// Loads modules from generateLicenseList.js
const generateLicense = require("./utils/generateLicenseList.js");

// Array created to ask questions. Answers will be used for the README.md
const questions = () => {
  return inquirer.prompt([
    // Project Title
    {
      type: "input",
      name: "title",
      message: "Title: What is the title of your project?",
    },
    // Description
    {
      type: "input",
      name: "description",
      message: "Description: Write a description about your project.",
    },
    // Installation
    {
      type: "input",
      name: "installation",
      message:
        "Installation: How is your project installed. Are there any requirements?",
    },
    // Usage
    {
      type: "input",
      name: "usage",
      message: "Usage: How do you use or operate or project?",
    },
    // Contribution
    {
      type: "input",
      name: "contribution",
      message: "Contribution: How may a user contribute to your project?",
    },
    // Tests
    {
      type: "input",
      name: "tests",
      message: "Test: What applications are needed to test your project?",
    },
    // Credits
    {
      type: "input",
      name: "credits",
      message: "Any credits?",
    },
    // Licenses (List rendered with generateLicenseList.js module).
    {
      type: "list",
      name: "license",
      message: "What license does your project use?",
      choices: generateLicense.prototype.licenseList,
    },
    // Github Username
    {
      type: "input",
      name: "github",
      message: "What is your Github Username?",
    },
    // Email
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ]);
};

// Function to initialize application.
const init = () => {
  // Generates license list that will be used for our choices with generateLicenseList.js module.
  generateLicense();
  // Generates questions with inquier.
  questions()
    // Passes answers to generate license badge, license url and markdown input used for our README.md file.
    .then((response) => generateMarkdown(response))
    // Creates README.md file.
    .then(() => writeFile("README.md", generateMarkdown.prototype.readme))
    // If no errors detected: Logs Success.
    .then(() => console.log("You have successfully created README.md"))
    // If errors are detected: Logs Error.
    .catch((err) => console.log(err));
};

// Function call to initialize application.
init();
