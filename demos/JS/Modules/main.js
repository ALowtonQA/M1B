import Student, { sayHi, sayBye } from "./student.js";
import {name, age} from "./person";

const stu = new Student('Dave',45);
stu.printName();
stu.printAge();

sayHi('Derek');
sayBye('Bilbo');

console.log(name);
console.log(name);
