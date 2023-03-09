import Student,{ sayHi, sayBye } from "./studentfix.js";

const stu = new Student('Dave',45);

const div1 = document.getElementById("div1")

div1.innerHTML =  stu.getName() + "</br>" + stu.getAge() + "</br>" + sayHi('Derek') + "</br>" + sayBye('Bilbo') + "</br>";

