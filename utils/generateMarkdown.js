const licenseArr = ["Academic Free License v3.0", "Creative Commons Attribution 4.0", "MIT", "Open Software License 3.0"]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ===licenseArr[0]){
    return "[![License: AFL-3.0](https://img.shields.io/badge/License-AFL--3.0-lightgrey.svg)](https://opensource.org/licenses/AFL-3.0)"
  } else if (license===licenseArr[1]) {
    return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)"
  } else if (license===licenseArr[2]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license===licenseArr [3]) {
    return "[![License: OSL-3.0](https://img.shields.io/badge/License-OSL--3.0-lightgrey.svg)](https://opensource.org/licenses/OSL-3.0)"
  } else {
    return ""
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license ===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/AFL-3.0)`
  } else if (license===licenseArr[1]) {
    return `[${licenseArr[1]}](https://creativecommons.org/licenses/by/4.0/)`
  } else if (license===licenseArr[2]) {
    return `[${licenseArr[2]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenseArr [3]) {
    return `[${licenseArr[3]}](https://opensource.org/licenses/OSL-3.0)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ===licenseArr[0]){
    return `Read more about ${licenseArr[0]} here:`
  } else if (license===licenseArr[1]) {
    return `Read more about ${licenseArr[1]} here:`
  } else if (license===licenseArr[2]) {
    return `Read more about ${licenseArr[2]} here:`
  } else if (license===licenseArr [3]) {
    return `Read more about ${licenseArr[3]} here:`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges

  ## Table of Contents
  
    - [Description](#description)
    - [Languages](#languages)
    - [Installation](#install)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contribute](#contribute)
    - [Test](#test)

  ## Description
  ${data.description}

  ## Languages
  This app was built with ${data.languages}

  ## Install
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  [${data.name}](${data.email}) // [GitHub](http://www.github.com/${data.github})

  ## License
  ${data.license}
  
  ## Contribute
  ${data.contribute}

  ## Test
  ${data.test}

`;
}

module.exports = generateMarkdown;
