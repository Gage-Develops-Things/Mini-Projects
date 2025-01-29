import inquirer from 'inquirer';
import Animal from './Animal.js';
import Employee from './Employee.js';
import type ZooAnimals from '../interfaces/ZooAnimals.js';
import ZooKeeper from './ZooKeeper.js';
import ZooWorker from './ZooWorker.js';
// Note that the above are explicitly importing in .js files as the current tsconfig cannot correctly path to the necessary files. The classes will be referred correctly after the dist folder is generated.

class Cli {
  animals: Animal[];
  employees: Employee[];
  constructor(animals: Animal[], employees: Employee[]) {
    this.animals = animals;
    this.employees = employees;
  }

  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What do you want to do?',
          choices: [
            'Add Animals to Zoo',
            'Add new Employee',
            'See Animal List',
            'See Employee List',
            'Feed Animals',
            'Pay Employee',
            'Exit',
          ],
        },
      ])
      .then((res) => {
        //switch statement for the different options on inquirer.
        switch (res.action) {
          case 'Add Animals to Zoo':
            this.startAnimalCli();
            break;
          case 'Add new Employee':
            this.startEmployeeCli();
            break;
          case 'See Animal List':
            console.log(this.animals);
            this.startCli();
            break;
          case 'See Employee List':
            console.log(this.employees);
            this.startCli(); //Recursive call to go back to main menu.
            break;
          case 'Feed Animals':
            this.feedAnimals();
            break;
          case 'Pay Employee':
            this.payEmployee();
            break;
          default:
            process.exit(0);
        }
      });
  }

  // TODO: Update the startAnimalCli() method to create an Animal object and push to the animals array
  startAnimalCli(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'species',
          message: 'What kind of animal would you like to input? (Enter a species name)'
        },
        {
          type: 'list',
          name: 'hungry',
          message: 'Is the animal hungry? Please choose true or false.',
          choices: ['true', 'false']
        },
        {
          type: 'number',
          name: 'weight',
          message: 'How much does the average animal weigh?',
        },
        {
          type: 'number',
          name: 'amount',
          message: 'How many animals are there?'
        }
      ])
      .then((answers: ZooAnimals) => {
        const newAnimal = new Animal(
          answers.species,
          answers.hungry,
          answers.amount,
          answers.weight
        );
        console.log(
          `This is the information for your new animal: ${JSON.stringify(
            newAnimal
          )}`
        );
        this.animals.push(newAnimal);
        this.startCli(); //Recursive call to go back to main menu.
      });
    }

  startEmployeeCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'employeeChoice',
          message: 'Which employee department do you want to access?',
          choices: ['Zoo Keeper', 'Zoo Worker'],
        },
      ])
      .then((res) => {
        if (res.employeeChoice === 'Zoo Keeper') {
          this.startZooKeeperCli();
        } else {
          this.startZooWorkerCli();
        }
      });
  }

  // TODO: Update the startZooKeeperCli() method to create an Employee object and push to the employees array
  startZooKeeperCli(): void {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is their name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'what is their ID number?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'what is their title?',
      },
      {
        type: 'number',
        name: 'salary',
        message: 'what is their salary?',
      },
      {
        type: 'confirm',
        name: 'uniform',
        message: 'Is their uniform clean?',
      },
    ])
    .then((res)=>{
      const newZooKeeper = new ZooKeeper(
        res.name,
        res.id,
        res.title,
        res.salary,
        res.uniform
      )
      console.log(`Please welcome to the team ${newZooKeeper.name}!`)
      this.employees.push(newZooKeeper);
      this.startCli;
    })
  }

  startZooWorkerCli(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is their name?',
        },
        {
          type: 'input',
          name: 'id',
          message: 'what is their ID number?',
        },
        {
          type: 'input',
          name: 'title',
          message: 'what is their title?',
        },
        {
          type: 'number',
          name: 'salary',
          message: 'what is their salary?',
        },
        {
          type: 'confirm',
          name: 'uniform',
          message: 'Is their uniform clean?',
        },
      ])
      .then((res) => {
        const newZooWorker = new ZooWorker(
          res.name,
          res.id,
          res.title,
          res.salary,
          res.uniform
        );
        console.log(`Please welcome to the team: ${newZooWorker.name}!`);
        this.employees.push(newZooWorker);
        this.startCli();
      });
  }

  // TODO: Update the feedAnimals() method to iterate through the animals array and if the animal is hungry, console the species will be fed.
  
  // not sure where underlines are coming from
  feedAnimals(): void {
    for (const eachAnimal of this.animals){
      if (eachAnimal.hungry){
        console.log(`The ${eachAnimal.species} will be fed.`)
      }
    }
  }

  payEmployee(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Who do you want to pay? Input name precisely',
        },
        {
          type: 'number',
          name: 'pay',
          message: 'How much do you want to pay?',
        },
      ])
      .then((res) => {
        // TODO: Update the method to iterate through the employees array and find the name of the employee to receive pay.
        for (const )
      });
  }
}
export default Cli;
