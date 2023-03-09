"use strict";
// Selectors
// let myButton = document.getElementById("myButton");
let myButton = document.querySelector("#myButton");

// Functions
const testFunction = () => {
    alert("hello!");
}

// Event Listeners
myButton.addEventListener("click", testFunction);