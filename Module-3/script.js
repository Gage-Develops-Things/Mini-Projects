// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
    let addEmployees = true
    let employeesArray = []
    // TODO: Get user input to create and return an array of employee objects
    while (addEmployees === true) {
    let firstName = prompt(`first name:`);
    let lastName = prompt(`last name:`);
    let salary = prompt(`salary:`);
    if (isNaN(salary)) {
      salary = 0;
    };
    console.log(`hello ${firstName} ${lastName}`);
        console.log(`Awesome!`);
        employeesArray.push({
          firstName: firstName,
          lastName: lastName,
          salary: salary
        });
        addEmployees = confirm(`add another employee?`)
      } 
        return employeesArray;
      };

// Display the average salary
/*const displayAverageSalary = function(employeesArray) {
    let averageSalaryWithTwoDecimals = 0;
    let numberofEmployees = employeesArray.length;
    for (let i=0; i<numberofEmployees; i++){
        averageSalaryWithTwoDecimals = averageSalaryWithTwoDecimals + Number(employeesArray[i].salary)
    }
    averageSalaryWithTwoDecimals = averageSalaryWithTwoDecimals/numberofEmployees;
    
    console.log(`The average employee salary between our ${numberofEmployees} employee(s) is $${averageSalaryWithTwoDecimals}.`)
    averageSalaryWithTwoDecimals.toFixed(2)
    console.log(`The average employee salary between our ${numberofEmployees} employee(s) is $${averageSalaryWithTwoDecimals}.`)
}*/

// Display the average salary 
const displayAverageSalary = function(employeesArray) {   
// TODO: Calculate and display the average salary    
let addAvg = 0;  
const numberOfEmployees = employeesArray.length;      
for (let i = 0; i < numberOfEmployees; i++) {        
    addAvg += employeesArray[i].salary;       
    console.log(addAvg);       
}        
let averageSalaryWithTwoDecimals = addAvg / employeesArray.length;       
console.log(averageSalaryWithTwoDecimals);       
console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${Math.round(averageSalaryWithTwoDecimals)}`);       
averageSalaryWithTwoDecimals = averageSalaryWithTwoDecimals.toFixed(2);              
console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalaryWithTwoDecimals}`);      
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomIndex = Math.floor(Math.random()*employeesArray.length);
  console.log(`Congratulations to ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);