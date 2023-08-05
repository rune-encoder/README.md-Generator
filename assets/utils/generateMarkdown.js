const generateBadge = require('./generateBadge')
const generateReadme = require('./generateReadme')

function renderLicenseBadge(license) {
  generateBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  generateMarkdown.prototype.readme = generateReadme(data); 
}

module.exports = generateMarkdown;
