// ===== Chapter 05 =====
// ***Assignment #5 ***

// Q 1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write(`Sum of 3 and and 5 is ${sum} <br/>`);

// Q 2
var num1 = 3;
var num2 = 5;
var subtraction = num1 - num2;
document.write(`Subtractiom of 3 and and 5 is ${subtraction} <br/>`);

// Q 3
var num1 = 3;
var num2 = 5;
var multiply = num1 * num2;
document.write(`Multiply of 3 and and 5 is ${multiply} <br/>`);

// Q 4

var num1 = 3;
var num2 = 5;
var division = num1 / num2;
document.write(`division of 3 and and 5 is ${division} <br/>`);

// Q 5
var number = 5;
document.write(`Initial Value is : ${number} <br/>`);
number++;
document.write(`Value after increment is: ${number} <br/>`);
number = 5 + 8;
document.write(`Value after addition is : ${number} <br/>`);
--number;
document.write(`Value after decrement is: ${number} <br/>`);
number = number % 3;
document.write(`The remainder is : ${number} <br/>`);

// Q 6
var movieTicket = "600";
var totalTicket = 5;
var product = movieTicket * totalTicket;
document.write(
  `Total Cost to buy 5 tickets to a movie is ${product} PKR <br/>`
);

// Q 7
// Table of 4
var tableNumber = 4;
document.write(`4 X 1 = ${tableNumber * 1} </br>`);
document.write(`4 X 2 = ${tableNumber * 2} </br>`);
document.write(`4 X 3 = ${tableNumber * 3} </br>`);
document.write(`4 X 4 = ${tableNumber * 4} </br>`);
document.write(`4 X 5 = ${tableNumber * 5} </br>`);
document.write(`4 X 6 = ${tableNumber * 6} </br>`);
document.write(`4 X 6 = ${tableNumber * 7} </br>`);
document.write(`4 X 7 = ${tableNumber * 8} </br>`);
document.write(`4 X 8 = ${tableNumber * 9} </br>`);
document.write(`4 X 9 = ${tableNumber * 10} </br>`);

// Q 8

//The Temperature Converter

// Q 8

// a. Store a Celsius temperature into a variable
let celsius = 25; // Example: 25°C

// b. Convert it to Fahrenheit and output
let fahrenheit = (celsius * 9) / 5 + 32;
document.write(`${celsius}°C is ${fahrenheit}°F </br>`);

// c. Now store a Fahrenheit temperature into a variable
let fahrenheitInput = 77; // Example: 77°F

// d. Convert it to Celsius and output
let celsiusConverted = ((fahrenheitInput - 32) * 5) / 9;
document.write(`${fahrenheitInput}°F is ${celsiusConverted.toFixed(2)}°C`);
