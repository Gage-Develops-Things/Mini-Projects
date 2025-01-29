import type Work from '../interfaces/Work';

class Employee implements Work{
    name: string
    id: number
    title: string
    salary: number

    constructor(nameArg: string, idArg: number, titleArg: string, salaryArg: number){
        this.name = nameArg;
        this.id = idArg;
        this.title = titleArg;
        this.salary = salaryArg;
    }

    receivePay(pay: number): number {
        return pay;
      }
}

export default Employee