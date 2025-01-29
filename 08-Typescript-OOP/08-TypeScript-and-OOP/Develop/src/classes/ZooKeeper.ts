// TODO: Have the ZooKeeper class inherit Employee properties
import Employee from "./Employee";
class ZooKeeper extends Employee{
  private specialty: string
  constructor(
    name: string,
    id: number,
    title: string,
    salary: number,
    specialty: string
  ) {
    super(name,id,title,salary,)
    this.specialty = specialty;
  }

  getSpecialty(): string {
    return this.specialty;
  }
}
export default ZooKeeper;
