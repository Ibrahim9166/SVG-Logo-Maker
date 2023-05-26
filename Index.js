const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('Lib/Shapes.js');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: function (input) {
        // Validate that the input has a length of 1 to 3 characters
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
 