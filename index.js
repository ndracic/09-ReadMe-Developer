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
        choices: ["MIT", 'APACHE 2.0', 'BSD 3', "GPL 3.0", "None"],
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

function generateMD(answers){
return`# ${answers.title}
##Description
${answers.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contribute)
* [Questions](#questions)
### Installation:
In order to install required dependencies, open console and run the following:
\`\`\`${answers.installations}\`\`\`
#Usage:
${answers.usage}
### License:
This project is licensed with:
${answers.license}
###Contributing:
${answers.contribute}
###Tests:
${answers.tests}
###Questions:
If you have any questions please feel free to contact me on [GitHub](https://github.com/${answers.username})
Or send ${answers.author} an email using ${answers.email}
`}
questions()
.then((answers) => {
fs.writeFile('NewREADME.md', generateMD(answers), (err) => {
  err ? console.error(err) : console.log('Success!')
})}
);