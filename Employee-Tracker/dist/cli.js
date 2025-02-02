import { pool, connectToDb } from './connection.js';
import inquirer from 'inquirer';
await connectToDb();
class Cli {
    // method to start the cli
    startCli() {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'ViewAddUpdate',
                message: 'Please choose an option from the following:',
                choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
            },
        ])
            .then((answers) => {
            // check if the user wants to create a new vehicle or select an existing vehicle
            switch (answers.ViewAddUpdate) {
                case ('View all Departments'):
                    pool.query(`SELECT * FROM department`, (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        else if (result) {
                            console.table(result.rows);
                            this.startCli();
                        }
                    });
                    break;
                case ('View all Roles'):
                    pool.query(`SELECT * FROM role`, (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        else if (result) {
                            console.table(result.rows);
                            this.startCli();
                            return result.rows;
                        }
                    });
                    break;
                case ('View all Employees'):
                    pool.query(`SELECT * FROM employee`, (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        else if (result) {
                            console.table(result.rows);
                            this.startCli();
                            return result.rows;
                        }
                    });
                    break;
                case ('Add a Department'):
                    this.addDepartment();
                    break;
                case ('Add a Role'):
                    this.addRole();
                    break;
                case ('Add an Employee'):
                    this.addEmployee();
                    break;
                case ('Update an Employee Role'):
                    this.updateEmployeeRole();
                    break;
            }
        });
    }
    addDepartment() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'addDepartment',
                message: 'Enter deparment name.',
            },
        ])
            .then((answers) => {
            const sql = `INSERT INTO department (department_name) VALUES ($1)`;
            const parameters = [answers.addDepartment];
            pool.query(sql, parameters, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else if (result) {
                    console.log(`${answers.addDepartment} successfully added to Departments.`);
                    this.startCli();
                }
            });
        });
    }
    addRole() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'roleTitle',
                message: 'Enter role title.',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter role salary.',
            },
            {
                type: 'input',
                name: 'departmentId',
                message: 'Enter department id for role.',
            },
        ])
            .then((answers) => {
            const sql = `INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`;
            const parameters = [answers.roleTitle, answers.salary, answers.departmentId];
            pool.query(sql, parameters, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else if (result) {
                    console.log(`${answers.roleTitle}, ${answers.salary}, and ${answers.departmentId} sucessfully added to Roles.`);
                    this.startCli();
                }
            });
        });
    }
    addEmployee() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter employee first name.',
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter employee last name.',
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'Enter role id for role.',
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Enter manager id for employee, if applicable.',
            },
        ])
            .then((answers) => {
            if (typeof answers.managerId != 'undefined') {
                answers.managerId = null;
            }
            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`;
            const parameters = [answers.firstName, answers.lastName, answers.roleId, answers.managerId];
            pool.query(sql, parameters, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else if (result) {
                    console.log(`${answers.firstName}, ${answers.lastName}, and ${answers.roleId} sucessfully added to Employees.`);
                    this.startCli();
                }
            });
        });
    }
    updateEmployeeRole() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'employeeId',
                message: 'Enter id for employee you would like to change.',
            },
            {
                type: 'input',
                name: 'roleId',
                message: 'Enter new role id for employee.',
            },
        ])
            .then((answers) => {
            const sql = `UPDATE employee SET role_id = $1 WHERE employee_id = $2`;
            const parameters = [answers.roleId, answers.employeeId,];
            pool.query(sql, parameters, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else if (result) {
                    console.log(`Successfully updated ${result.rowCount} row(s) in Employee table.`);
                    this.startCli();
                }
            });
        });
    }
}
;
const cli = new Cli();
cli.startCli();
