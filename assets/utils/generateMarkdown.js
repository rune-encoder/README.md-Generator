// Loads modules from generateBadge.js
const generateBadge = require("./generateBadge.js");
// Loads modules from generateReadme.js
const generateReadme = require("./generateReadme.js");

// Function picks License Badge based on our choice.
// It grabs the badge from generateBadge.js.
function renderLicenseBadge(license) {
  generateBadge(license);
}

// Function generates Markdown Text for our README.md
function generateMarkdown(data) {
  // Picks Badge.
  renderLicenseBadge(data.license);
  // Generates and saves Markdown Text for our README.md.
  generateMarkdown.prototype.readme = generateReadme(data);
}

module.exports = generateMarkdown;
