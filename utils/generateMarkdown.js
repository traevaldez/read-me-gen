// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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
