const badgeList = require('./badgeList.js')

function generateBadge(license) {
    for (const key in badgeList) {
        if (`${key}` === license) {
            generateBadge.prototype.chosenBadge = `${badgeList[key]}`
            break
        }
    }
}

module.exports = generateBadge;
