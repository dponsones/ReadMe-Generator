// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3':
      return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const licenseLink = renderLicenseLink(license);

  return `## License

This project is licensed under the [${license}](${licenseLink}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, contribution, test, license, github, email } = data;
  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${title} ${licenseBadge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
${license ? '- [License](#license)\n' : ''}
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contribution

${contribution}

## Tests

${test}

${licenseSection}

## Questions

If you have any questions or issues, please contact me directly:

- GitHub: [${github}](https://github.com/${github})
- Email: ${email}
`;
};

module.exports = generateMarkdown;
