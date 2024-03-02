1 // take input from user and alert if number is proper number or not?

    var userInput = prompt("Please enter a number:");

    if (isNaN(userInput) || userInput === "" || userInput === null) {
        alert("Not a proper number!");
    } else {
        alert("Proper number: " + userInput);
    }

// 2. take input from user and alert if number is even or  odd ?
var userInput = prompt("Please enter a number:");

    // Check if input is a number
    if (isNaN(userInput) || userInput === "" || userInput === null) {
        alert("Not a valid number!");
    } else {
        var number = parseInt(userInput);
        
        // Check if the number is even or odd
        if (number % 2 === 0) {
            alert(number + " is an even number.");
        } else {
            alert(number + " is an odd number.");
        }
    }

    // 3.take inputs and operator from user and alert calculated calue?
    // take user name and alert user with greeitng mesage ?
    var userName = prompt("Enter your name:");
    
    // Check if the user provided a name
    if (userName !== null && userName !== "") {
        alert("Hello, " + userName + "! Welcome to our website.");
    } else {
        alert("Hello! Welcome to our website.");
    }
