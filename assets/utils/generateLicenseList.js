const badgeList = require('./badgeList.js')

function generateLicense() {
    let licenseList = [];
    for (const key in badgeList) {
        licenseList.push(`${key}`);
    }
    generateLicense.prototype.licenseList = licenseList;
}

module.exports = generateLicense;