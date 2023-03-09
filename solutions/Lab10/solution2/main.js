let mainDiv = document.querySelector("#mainDiv");
let toggleBtn = document.querySelector("#toggleBtn");

let changeColour = () => {
    mainDiv.style.color = "red";
}

let toggleVisibility = () => {
    mainDiv.style.display = (mainDiv.style.display == "none") ? "block" : "none";

    // The above is called a ternary if, it represents the following conditional block:

    // if (mainDiv.style.display == "none") {
    //     mainDiv.style.dislay = "block";
    // } else { 
    //     mainDiv.style.display = "none";
    // }
}

toggleBtn.addEventListener("click", toggleVisibility);