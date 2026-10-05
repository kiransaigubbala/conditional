//  checking even or Not 
function checkEven() {

    let n = parseInt(document.getElementById("num").value);

    if (n % 2 == 0) {
        document.getElementById("res").value = "n is even";
    }
    else {
        document.getElementById("res").value = "n is odd";
    }
}
//check positive number
function checkPositive() {

    let num = parseInt(document.getElementById("num1").value);

    if (num > 0) {
        document.getElementById("res1").value = "Number is positive";
    }
}


// checking battery
function checkBattery() {

    let battery = parseInt(document.getElementById("batteryNum").value);

    if (battery < 20) {
        document.getElementById("batteryResult").value =
            "Battery is low. Please charge your laptop.";
    }
}

// checking blance to buy items
function checkBalance() {

    let balance = parseInt(document.getElementById("balanceNum").value);

    if (balance >= 1000) {
        document.getElementById("balanceResult").value = "Buy the items";
    }
}

//checking weights
function checkWeight() {

    let weight = parseInt(document.getElementById("weightNum").value);

    if (weight > 20) {
        document.getElementById("weightResult").value = "Extra weight";
    }
}

//checking screen size
function checkScreenSize() {

    let screenSize = parseFloat(
        document.getElementById("screenSizeNum").value
    );

    if (screenSize >= 15) {
        document.getElementById("screenSizeResult").value = "Large screen";
    }
}

//checking even or odd
function checkEvenOdd() {

    let a = parseInt(document.getElementById("evenOddNum").value);

    if (a % 2 == 0) {
        document.getElementById("evenOddResult").value = "a is even";
    } else {
        document.getElementById("evenOddResult").value = "a is odd";
    }
}

//checking positive or negative number
function checkPositiveNegative() {

    let n1 = parseInt(document.getElementById("positiveNegativeNum").value);

    if (n1 > 0) {
        document.getElementById("positiveNegativeResult").value =
            "Number is positive";
    } else {
        document.getElementById("positiveNegativeResult").value =
            "Number is negative";
    }
}

//Eligible for Vote
function checkVotingEligibility() {

    let age = parseInt(document.getElementById("votingAge").value);

    if (age >= 18) {
        document.getElementById("votingResult").value =
            "Eligible for vote";
    } else {
        document.getElementById("votingResult").value =
            "Not eligible for vote";
    }
}
//checking parking spaces
function checkParking() {

    let parkingSpaces = parseInt(
        document.getElementById("parkingSpacesNum").value
    );

    if (parkingSpaces > 0) {
        document.getElementById("parkingResult").value =
            "Parking space available";
    } else {
        document.getElementById("parkingResult").value =
            "Parking is full";
    }
}
//checking weights
function checkWeightLimit() {

    let weight = parseInt(
        document.getElementById("weightLimitNum").value
    );

    if (weight <= 10) {
        document.getElementById("weightLimitResult").value =
            "Weight accepted";
    } else {
        document.getElementById("weightLimitResult").value =
            "Weight exceeds the limits";
    }
}
//checking numbers
function checkNumberType() {

    let number = parseInt(
        document.getElementById("pnzNumber").value
    );

    if (number > 0) {
        document.getElementById("pnzResult").value = "Positive";
    } else if (number < 0) {
        document.getElementById("pnzResult").value = "Negative";
    } else {
        document.getElementById("pnzResult").value = "Zero";
    }
}
//checking marks

function checkGrade() {

    let marks = parseInt(
        document.getElementById("marksNumber").value
    );

    if (marks >= 90) {
        document.getElementById("marksResult").value = "A+";
    } else if (marks >= 75) {
        document.getElementById("marksResult").value = "A";
    } else if (marks >= 60) {
        document.getElementById("marksResult").value = "B";
    } else {
        document.getElementById("marksResult").value = "C";
    }
}
//checking speed
function checkSpeed() {

    let speed = parseInt(
        document.getElementById("speedNumber").value
    );

    if (speed >= 100) {
        document.getElementById("speedResult").value = "Very Fast";
    } else if (speed >= 50) {
        document.getElementById("speedResult").value = "Fast";
    } else if (speed >= 20) {
        document.getElementById("speedResult").value = "Average";
    } else {
        document.getElementById("speedResult").value = "Slow";
    }
}

//checking distance
function checkDeliveryCharge() {

    let distance = parseInt(
        document.getElementById("deliveryDistance").value
    );

    if (distance <= 5) {
        document.getElementById("deliveryResult").value =
            "Delivery Charge: ₹30";
    } else if (distance <= 10) {
        document.getElementById("deliveryResult").value =
            "Delivery Charge: ₹50";
    } else if (distance <= 20) {
        document.getElementById("deliveryResult").value =
            "Delivery Charge: ₹80";
    } else {
        document.getElementById("deliveryResult").value =
            "Delivery Charge: ₹120";
    }
}

//checking fuel
function checkFuel() {

    let fuel = parseInt(
        document.getElementById("fuelLevel").value
    );

    if (fuel <= 10) {
        document.getElementById("fuelResult").value =
            "Fuel is very low";
    } else if (fuel <= 30) {
        document.getElementById("fuelResult").value =
            "Fuel is low";
    } else if (fuel <= 60) {
        document.getElementById("fuelResult").value =
            "Fuel level is normal";
    } else {
        document.getElementById("fuelResult").value =
            "Fuel tank is sufficiently filled";
    }
}


//checking storage
function checkStorage() {

    let storage = parseInt(
        document.getElementById("storageLevel").value
    );

    if (storage < 100) {
        document.getElementById("storageResult").value =
            "Very low storage";
    } else if (storage < 250) {
        document.getElementById("storageResult").value =
            "Low storage";
    } else if (storage < 400) {
        document.getElementById("storageResult").value =
            "Moderate storage";
    } else {
        document.getElementById("storageResult").value =
            "High storage capacity";
    }
}