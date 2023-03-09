"use strict";

let testingTernary = () => {
    let a = 5;
    let result;

    // if (a < 10) {
    //     result = "a was less than 10";
    // } else {
    //     result = "a was 10 or higher";
    // }

    result = a < 10 ? "a was less than 10" : "a was 10 or higher";

    console.log(result)
}

testingTernary();
