const generateBadge = require('./generateBadge')
const generateReadme = require('./generateReadme')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  generateBadge(license);
  // const chosenBadge = generateBadge.prototype.chosenBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  generateReadme(data); 



  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
