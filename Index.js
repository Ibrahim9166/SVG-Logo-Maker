const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./Lib/Shapes')

const prompt = inquirer.createPromptModule();

prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: function (input) {
      return input.length >= 1 && input.length <= 3;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color:',
  },
])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        shape = new Circle();
    }

    shape.setColor(answers.shapeColor);

    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
        <text x="50%" y="50%" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
        
      </svg>
    `;

    fs.writeFile('logo.svg', svgString, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
