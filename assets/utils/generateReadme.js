const generateBadge = require('./generateBadge')

const generateREADME = ({ title, description, installation, usage, contribution, tests, credits, license, github, email }) =>
console.log(
    
 `# ${title} ${generateBadge.prototype.chosenBadge}

 ## Description
 
 ${description}
 
 ## Table of Contents
 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contribution](#contribution)
 - [Tests](#tests)
 - [License](#license)
 - [Questions](#Questions)
 
 ## Installation
 
 ${installation}
 
 ## Usage
 
 ${usage}    
 
 ## Contributing
 
 ${contribution}
 
 ## Tests
 
 ${tests}
 
 ## Credits
 
 ${credits}
 
 ## License

 ${license}

 ## Questions
 
 If you have any questions you may reach me at my email: [${email}](mailto:${email})
 Here is a link to my Github Profile: [Profile for ${github}](https://github.com/${github})
 If you would like to check out other projects of mine here is a link: [Projects from ${github}](https://github.com/${github}?tab=repositories)
    
`
);
module.exports = generateREADME;