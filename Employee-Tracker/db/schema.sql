CREATE DATABASE snorlax;
\c snorlax

DROP DATABASE IF EXISTS workplace;
CREATE DATABASE workplace;
\c workplace;

DROP DATABASE snorlax;

CREATE TABLE department (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(30)  
);

CREATE TABLE role (
    role_id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES department (department_id)
);

CREATE TABLE employee (
    employee_id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role (role_id),
    manager_id INTEGER REFERENCES employee (employee_id)
);