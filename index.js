// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your Project Title?',
  },
  {
    type: 'input',
    message: 'Please provide a short description of the project.',
    name: 'description', 
  },
  {
    type: 'input',
    message: 'Please enter installation instructions.',
    name: 'installation', 
  },
  {
    type: 'input',
    message: 'Please enter your usage instructions.',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Please enter contribution guidelines.',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Please enter instructions for testing',
    name: 'test',
  },
  {
    type: 'confirm',
    name: 'licenseConfirm',
    message: 'Do you want to include a license?',
    default: true,
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license:',
    choices: [
      'MIT',
      'Apache 2.0',
      'GPL 3.0',
      'BSD 3',
      'None',
    ],
  },
  {
    type: 'input',
    message: 'Please enter your github username.',
    name: 'github',
  },
  {
    type: 'input',
    message: 'Please enter your email',
    name: 'email',
  },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const folderPath = './sample/'
  const readmeContent = generateMarkdown(data);
  fs.writeFile(folderPath + fileName, readmeContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile('README.md', answers);
  });
};

// // Function call to initialize app
init();
