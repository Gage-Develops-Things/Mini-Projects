import inquirer from 'inquirer';

import writeToFile from './helpers.js'

inquirer.prompt([
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your first and last name.'
    },
    {
        type: 'input',
        name: 'address',
        message: 'Please enter your address.'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Write a short bio about yourself so prospecetive employers can get to know you.'
    },
    {
        type: 'input',
        name: 'linkedInUrl',
        message: 'Enter your LinkedIn url.'
    },
    {
        type: 'input',
        name: 'gitHubUrl',
        message: 'Enter your GitHub url.'
    }
])
.then(writeToFile);