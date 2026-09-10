// STEP 1: Print text to the browser console is string ""
console.log("Hello World!"); alert("Hello World!");
// STEP 2: Variables

// Store text values in variables
const name = "Pyry"; let age = 21; const favouriteAnimal = "Reggie SeaLion";
// Print the variables to the console
console.log(name)
console.log(name, age, favouriteAnimal);
console.log("Hello! I am", name, "and my favorite animal in the world is", favouriteAnimal);
// STEP 3: User interaction

// Display a pop-up message

// Ask the user for their name
const name = prompt("What is your name?");
// Print the user's answer
console.log("Hello", name, "! Welcome to JavaScript.");
// Ask the user for their favorite animal
const favouriteAnimal = prompt("What is your favorite animal?");
// Create a sentence using both answers
console.log("Hello", name, "is it true that your favorite animal is", favouriteAnimal, "?");
// console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".");

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

// const visitorFavoriteAnimal = prompt("What is your favorite animal?");

//Exercise 4
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are under 18.");
}
//Exercise 5
greetUser("Pyry");

function greetUser(name) { console.log("Hello " + name + "! Welcome to my cool site!"); }