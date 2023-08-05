// Loads modules from badgeList.js (Where our License List and Badges are stored)
const badgeList = require("./badgeList.js");

// Function generates the badge for the license that we picked.
function generateBadge(license) {
  // Goes through our Object's key value pairs from badgeList.js
  // Picks the value (badge) from key (license) that we chose in our questions.
  for (const key in badgeList) {
    if (`${key}` === license) {
      // Saves our license badge to a prototype.
      generateBadge.prototype.chosenBadge = `${badgeList[key]}`;
      break;
    }
  }
}

module.exports = generateBadge;
