import {sayHi} from "./module1.js";
import {sayBye} from "./module2.js";

let div1 = document.querySelector("#div1");

div1.innerHTML = `${sayHi("Anoush")} <br/> ${sayBye("Anoush")}`;