import { Person } from "./person";

export class Student {
    private fistName : string;
    private lastName : string;
    private age : number;

    constructor(person : Person){
        this.fistName = person.firstName;
        this.lastName = person.lastName;
        this.age = person.age;
    }

    sayHello() : string{
        return "Hello " + this.fistName + " "+ this.lastName; 
    }
}