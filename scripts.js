/*********************** Exercise 1 ********************* */

// Navigate to your Github profile page
// Identify as many different pieces of functionality that likely use functions.
//hamburger, dropdown,etc. everytime arrow turns into a hand its a function

// List the functions here:
//All places where we can edit and add new information and run it again
/*********************** Exercise 2 ********************* */
// Fix each function's syntax so that it will correctly run the code in the code block.

// Suggested workflow:

// 1. Uncomment a function—that is, remove the `//` from the start of each of its lines. (Command-/ will toggle commenting on and off in VS Code!)
// 2. Fix the function so that it no longer gives you an error.
// 3. Repeat.

function sayHello(name) {
alert("Hello,");
}


/*********************** Exercise 3 ********************* */
// Call the following function so that a random number is alerted in the browser.
// If you don't want to keep getting alerts in this assignment,
// then once you've confirmed it works, feel free to comment the function call.

function sayHello() {
  alert("Hello");
  }

function alertRandom() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  alert(randomNumber);
}

alertRandom();{}

/*********************** Exercise 4 ********************* */

// Declare a function that prompts the user's for their favorite drink and logs the following phrase to the console. "Your favorite drink is ________."

function favDrink() {
  let userDrink = prompt("Your favorite drink is ________.");
}

favDrink(); {}


// Execute the function so that you see "Your favorite drink is [whatever you typed in the prompt]." in the console.
// Feel free to comment out the execution line after you're done, so you don't keep getting prompted.

//let userDrink = function() {
 // let favDrink = window.prompt("your favorite drink is __ ");
//}

function askForDrink() {
  let favoriteDrink =  prompt ("whats your fav drink?");
  console.log("your fav drink is " + favoriteDrink);
}

/*********************** Exercise 5 ********************* */

let user = {
  id: 32,
  fullName: "Trinity Armstead",
  languages: ["JavaScript", "Python", "Ruby"],
};

// Declare a function that creates an alert that says, "Welcome, Trinity! You know JavaScript, Python, and Ruby."
// Make sure not to use the literal string "Trinity" or the words in the `languages` array.

function userGreeting() {
  alert ("Welcome, " + user.fullName.slice(0, 7) + "! You know " + user.languages[0] + ", " + user.languages[1] +" and " + user.languages[2] + ".")
};

//user.fullName = "Kristal Thomas";
//user.languages[1] = "Racket";

// Execute the function.
userGreeting();



// Below, NOT in a function, change the object's properties in these ways:
// 1. The name should be "Kristal Thomas".
// 2. The second language should be `Racket`.


// Execute the function again, and you should see a different message printed than the first time, with a different name and a different second language listed.


//Feel free to comment out the function calls once you've confirmed they work.


/*********************** Exercise 6 ********************* */

// Declare a function that prompts the user for their birth year and prints to the console the sentence, "Your approximate age is [the value in the age variable]."

// Hint: Don't forget that values come in from a user as strings! Subtracting a string from `todaysYear` won't quite work.
// Is there a way to convert it to a number first?

// You can use the following code in your function to calculate the user's approximate age:

let todaysYear = "";
todaysYear = prompt("What is todays year?");
function userBirthday() {
let birthYear = prompt("What is your birth year?");
let todaysDate = new Date();
let todaysYear = todaysDate.getFullYear();
let age = Number(todaysYear) - Number(birthYear);
console.log ("Your approximate age is " + age)
};

userBirthday();

// Execute the function. Feel free to comment it out once you've confirmed it works.


/*********************** Exercise 7 ********************* */

// Declare a function that prompts the user for the following things: age, favoriteColor, favoriteYour.
// Inside the function, create an object to store the user's responses.
// Inside the function, log the following sentence to the console with the user's responses: "Your age is ____, your favorite color is ______, and your favorite movie is ______".

function userId(){
  let ageFromUser = prompt("What is your age?");
  let colorFromUser = prompt("Wht is your fav color?");
  let movieFromUser = prompt("What is fav movie?");

  let userAnswer = {
    age: ageFromUser,
    color: colorFromUser,
    movie: movieFromUser,
  };

  console.log(`Your age is ${userAnswer.age} , Your fav color ${userAnswer.color} & Your fav movie is ${userAnswer.movie}`);
}

userId();
// Execute the function


/*********************** Exercise 8 ********************* */

// Declare a function that prompts the user for two numbers. Add the two numbers together and log the result to the console.

// Execute the function three times.

function addTwoNumbers(){
  let num1 = Number(prompt('Input a number.'))
  let num2 = Number(prompt('Input another number.'))
  return num1 + num2 
}

let result1 = addTwoNumbers()
console.log(result1)

// Execute the function three times.
