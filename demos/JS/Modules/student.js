export default class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log(`name is ${this.name}`);
    }

    printAge() {
        console.log(`age is ${this.age}`);
    }
}

export function sayHi(name){
    console.log(`Hello ${name}`);
}

export function sayBye(name){
    console.log(`Bye ${name}`);
}