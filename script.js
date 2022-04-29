// BANK ACCOUNT

// REQUIREMENTS
// Create an object called account that has the following properties:
// - accountName, should be the data type string
// - balance, should be the data type number
// - getBalance, should be a function
// - deposit, also a function
// - withdrawal, also a function
// - getAccountName, function as well
// - accountError, same as above function!
// EXTRA: exitAccount, should be a function
// EXTRA = optional

// The object properties should work as following:
// - accountName: the account holders name
// - balance: total amount of the account should be initiated with 100 from start
// - getBalance: a function that should display the total balance of the account
// - deposit: a function that will deposit a certain amount into the account
// - withdrawal: a function that will withdraw the desired amount of money from the account
// - getAccountName: a function to display the account holders name
// - accountError: trick question! you need to think about this and how to use it
// but keep in mind that we do not want to repeat our code. So what could you use this function for?
// EXTRA (OPTIONAL): exitaccount - a function that should close the whole window. You need to do some research yourself and
// see if you can figure this one out.

// Remember that a function is just a value. And if a function is just a
// value then we can both pass it as a parameter to a function and
// pass it as a property of an object.

// The object should handle all of the functionality (logic)

// You also need to create a function called atm()
// The atm() function should be responsible for showing the user interface
// and based on the user input show the right meny choice

// In this assignment you will practice:
// Objects
// Functions
// This keyword
// Statements and operators

// && operator
// || operator

// A user should NOT be able to deposit och withdraw negative number!
// A user should NOT be able to deposit or withdraw an empty string, leaving the input empty
// A user should NOT be able to withdraw a larger total sum that the actual balance of the account
// A user should NOT be able to put anything that is NOT a number in the input

// In this assignment you do not have to create any HTML you will only output
// to the console. But you will use prompt instead of just regular console.

// to handle one of the potential errors you can use this built in method:
const variableName = 10;
isNaN(variableName);

function atm() {
  const message = parseFloat(prompt("Display message"));
  // you need to answer the question why we are using parseFloat() method here
  // either use a if/else statement or a switch. Write a comment and motivate your choice
}
