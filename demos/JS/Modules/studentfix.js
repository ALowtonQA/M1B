export default class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return `name is ${this.name}`;
    }

    getAge() {
        return `age is ${this.age}`;
    }
}


export function sayHi(name){
    return "Hello " + name;
}

export function sayBye(name){
    return "Bye " + name;
}