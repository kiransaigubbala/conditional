function checkNumberValue() {

    let n = parseInt(
        document.getElementById("checkNumberValue").value);

    if (n == 10) {
        document.getElementById("checkNumberResult").value = "n is 10";
    }
}

// if(true) {
//     console.log("Condition is True: If block Executed")
// }
// else {
//     console.log("Condition is False: else block Executed")

// }
function checkStrictNumber() {

    let n = parseInt(
        document.getElementById("strictNumber").value
    );

    if (n === 10) {
        document.getElementById("strictResult").value = "n is 10";
    } else {
        document.getElementById("strictResult").value = "n is not 10";
    }
}
function checkDivisible() {

    let n = parseInt(
        document.getElementById("divisibleNumber").value
    );

    if (n % 5 === 0) {
        document.getElementById("divisibleResult").value =
            "n is divisible by 5";
    } else {
        document.getElementById("divisibleResult").value =
            "N is not divisible by 5";
    }
}
function checkBothNumbers() {

    let n1 = parseInt(document.getElementById("bothNum1").value);
    let n2 = parseInt(document.getElementById("bothNum2").value);

    if (n1 == 5 && n2 == 5) {
        document.getElementById("bothResult").value =
            "Both are Equal to 5";
    } else {
        document.getElementById("bothResult").value =
            "Both are not Equal to 5";
    }
}

// }
// if(NaN) {
//     console.log("Truthy value")
// } else {
//     console.log("Falsy block")
// }
// if (false) {
//     console.log("1st conditional -True:If block executed");

// }
// else if(true){
//     console.log("1 st condition is false and 2nd condition is -true 1st else if");

// }
// else if(true){
//     console.log("1 st condition is false and 2nd condition is -true 1st else if");
    
// } else {
//     console.log("All above is false")
// }
// if (true) {
//     console.log("First block is execute");
    
// }
// if (false) {
//     console.log("seconf if block is executed");
    
// }
// if (true){
//     console.log("Outer condition -True:Outer if executed");
//     if(true){
//         console.log("Inner condition -True: Inner if executed");
//     } else {
//         console.log("Inner condition -False: Inner else executed")
//     }
// } else {
//     console.log("Outer condition - False :Outer if executed");

// }
function checkPositiveEven() {

    let n = parseInt(
        document.getElementById("positiveEvenNum").value
    );

    if (n > 0) {
        if (n % 2 === 0) {
            document.getElementById("positiveEvenResult").value =
                n + " is positive and even";
        } else {
            document.getElementById("positiveEvenResult").value =
                n + " is positive but not even";
        }
    } else {
        document.getElementById("positiveEvenResult").value =
            n + " is negative";
    }
}
// let n=2;
// switch (n){
//     case 1:
//         console.log("Case 1 is executed");
//         break;
//     case 2:
//         console.log("Case 2 is executed");
//         break;
//     case 3:
//         console.log("Case 3 is executed");
//         break;
//     default:
//         console.log("Default block ecxecuted");
//         break;
// }

function checkSwitch() {

    let n = parseInt(
        document.getElementById("switchValue").value
    );

    switch (n) {

        case 10:
            document.getElementById("switchResult").value =
                "Case 1 is executed";
            break;

        case "10":
            document.getElementById("switchResult").value =
                "Case 2 is executed";
            break;

        default:
            document.getElementById("switchResult").value =
                "Default block executed";
            break;
    }
}
function calculate() {

    let n1 = parseInt(document.getElementById("calcNum1").value);
    let n2 = parseInt(document.getElementById("calcNum2").value);
    let op = document.getElementById("calcOperator").value;

    switch (op) {

        case "+":
            document.getElementById("calcResult").value =
                `Sum = ${n1 + n2}`;
            break;

        case "-":
            document.getElementById("calcResult").value =
                `Sub = ${n1 - n2}`;
            break;

        case "*":
            document.getElementById("calcResult").value =
                `Mul = ${n1 * n2}`;
            break;

        case "/":
            document.getElementById("calcResult").value =
                `Div = ${n1 / n2}`;
            break;

        case "%":
            document.getElementById("calcResult").value =
                `Mod = ${n1 % n2}`;
            break;

        default:
            document.getElementById("calcResult").value =
                "Default block executed";
            break;
    }
}
// let n=2;
// switch (n){
//     case 1:
//         console.log("Case 1 is executed");
     
//     case 2:
//         console.log("Case 2 is executed");
      
//     case 3:
//         console.log("Case 3 is executed");
        
//     default:
//         console.log("Default block ecxecuted");
        
// }