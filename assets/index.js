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
      message: `\x1b[32mTitle: What is the title of your project?\x1b[0m`,
    },
    // Description
    {
      type: "input",
      name: "description",
      message: `\x1b[32mDescription: Write a description about your project.\x1b[0m`,
    },
    // Installation
    {
      type: "input",
      name: "installation",
      message: `\x1b[32mInstallation: How is your project installed. Are there any requirements?\x1b[0m`,
    },
    // Usage
    {
      type: "input",
      name: "usage",
      message: `\x1b[32mUsage: How do you use or operate or project?\x1b[0m`,
    },
    // Contribution
    {
      type: "input",
      name: "contribution",
      message: `\x1b[32mContribution: How may a user contribute to your project?\x1b[0m`,
    },
    // Tests
    {
      type: "input",
      name: "tests",
      message: `\x1b[32mTest: What applications are needed to test your project?\x1b[0m`,
    },
    // Credits
    {
      type: "input",
      name: "credits",
      message: `\x1b[32mAny credits to your project?\x1b[0m`,
    },
    // Licenses (List rendered with generateLicenseList.js module).
    {
      type: "list",
      name: "license",
      message: `\x1b[35mWhat license does your project use?\x1b[0m`,
      choices: generateLicense.prototype.licenseList,
    },
    // Github Username
    {
      type: "input",
      name: "github",
      message: `\x1b[33mWhat is your Github Username?\x1b[0m`,
    },
    // Email
    {
      type: "input",
      name: "email",
      message: `\x1b[33mWhat is your email?\x1b[0m`,
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
