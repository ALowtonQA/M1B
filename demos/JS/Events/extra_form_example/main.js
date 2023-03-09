"use strict";

let theForm = document.querySelector("#myForm");
let errorDiv = document.querySelector("#errorDiv");

let valDrink = (e) => {
    
    if (theForm.RadioDrink[2].checked && (theForm.CheckMilk.checked || theForm.CheckSugar.checked)) {
        e.preventDefault();
        errorDiv.innerHTML = "You can't have milk or sugar with soup, duh."
    }      
}

theForm.addEventListener("submit", valDrink);