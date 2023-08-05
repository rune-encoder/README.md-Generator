const generateBadge = require('./generateBadge')

const generateReadme = ({ title, description, installation, usage, contribution, tests, credits, license, github, email }) =>
    
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

 ${generateBadge.prototype.chosenBadge}  
 **${license}**  
 Please refer to the LICENSE in the repository.

 ## Questions
 
 **If you have any questions you may reach me at my email: [${email}](mailto:${email})**  

 **Here is a link to my Github Profile: [Profile Link: ${github}](https://github.com/${github})**  

 **If you would like to check out my other projects visit this link: [Projects Link: ${github}](https://github.com/${github}?tab=repositories)**  
    
`;

module.exports = generateReadme;