// Loads modules from badgeList.js (Where our License List and Badges are stored)
const badgeList = require("./badgeList.js");

// Function creates list of licenses that will be used on our questions in the generator.
function generateLicense() {
  // Sets our list to an empty Array.
  let licenseList = [];
  // Goes through our Object's key value pairs from badgeList.js
  // Pushes each "key" (license) into a new array.
  for (const key in badgeList) {
    licenseList.push(`${key}`);
  }
  // Saves our list of licenses in a prototype.
  generateLicense.prototype.licenseList = licenseList;
}

module.exports = generateLicense;
