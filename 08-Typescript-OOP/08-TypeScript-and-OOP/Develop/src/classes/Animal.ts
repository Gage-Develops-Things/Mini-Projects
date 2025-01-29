import ZooAnimals from "../interfaces/ZooAnimals";

class Animal implements ZooAnimals{
    species: string
    hungry: boolean
    weight: number
    amount: number

    constructor(speciesArg: string, hungryArg: boolean, weightArg: number, amountArg:number){
        this.species=speciesArg;
        this.hungry=hungryArg;
        this.weight=weightArg;
        this.amount=amountArg;
    }

    makeRollCall(): string {
        return `Amount: ${this.amount}, Hungry: ${this.hungry}`
    }
};

export default Animal 