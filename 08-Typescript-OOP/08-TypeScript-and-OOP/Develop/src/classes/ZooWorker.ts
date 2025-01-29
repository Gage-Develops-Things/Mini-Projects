// TODO: Have the ZooWorker class inherit Employee properties
import Employee from "./Employee";

class ZooWorker extends Employee{
  private cleanUniform: boolean
  constructor(
    name: string,
    id: number,
    title: string,
    salary: number,
    cleanUniform: boolean
  ) {
    super(name,id,title,salary)
    this.cleanUniform = cleanUniform;
  }

  getCleanUniform(): boolean {
    return this.cleanUniform;
  }
}
export default ZooWorker;
