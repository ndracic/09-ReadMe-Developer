const inquirer = require('inquirer');
const fs = require('fs')

const questions = () =>
    inquirer.prompt([
    {
        type: "input",
        message: "What is the Title of your Project?",
        name: "title",
    },
    {
        type: "input",
        message: "Who are the Author(s)/Developer(s)?",
        name: "author",
    },
    {
        type: "input",
        message: "What is your email address",
        name: "email",
    },
    {
        type: "input",
        message: "What is your GitHub UserName?",
        name: "github",
    },
    {
        type: "input",
        message: "Please provide a description of/about this project",
        name: "description",
    },
    {
        type: "list",
        message: "Any license(s) that your project should have?",
        choices: ["MIT", 'APACHE 2.0', "Academic", 'BSD 3', "ISC", "Mozilla", "None"],
        name: "license",
    },
    {
        type: "input",
        message: "What command(s) need to be run to install dependencies?",
        name: "installations",
    },
    {
        type: "input",
        message: "How does the user have to know about the repo to use it?",
        name: "usage",
    },
    {
        type: "input",
        message: "What tests are needed?",
        name: "tests"
    },
    {
        type: "input",
        message: "What does the user have to know about the repo to contribute to it?",
        name: "contribute",
    },
]);

//renders the license badge underneath the the generated readme Title
function renderBadge(answers) {
    console.log(answers)
    if (answers === "None") {
        return ""
    } else if (answers === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (answers === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (answers === "Mozilla")
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
}

function generateMD(answers){
return`# ${answers.title}
${renderBadge(answers.license)}
## Description:
${answers.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contribute)
* [Questions](#questions)

## Installation:
In order to install required dependencies, open console and run the following:
\`\`\`${answers.installations}\`\`\`

## Usage:
${answers.usage}

## License:
This project is licensed with: ${answers.license}

## Contributing:
${answers.contribute}

## Tests:
${answers.tests}

## Questions:
If you have any questions please feel free to contact me on [GitHub](https://github.com/${answers.username})
Or send ${answers.author} an email using ${answers.email}
`
}

questions()
.then((answers) => {
fs.writeFile(`${answers.title}.md`, generateMD(answers), (err) => {
  err ? console.error(err) : console.log('Success!')
})}
);