// STEP 1: Print text to the browser console is string ""

//console.log("Hello World!"); alert("Hello World!");

// STEP 2: Variables

//const name = "Pyry"; let age = 21; const favouriteAnimal = "Reggie SeaLion";
// console.log(name)
// console.log(name, age, favouriteAnimal);
// console.log("Hello! I am", name, "and my favorite animal in the world is", favouriteAnimal);
// STEP 3: User interaction

// const name = prompt("What is your name?");

//console.log("Hello", name, "! Welcome to JavaScript.");
// const favouriteAnimal = prompt("What is your favorite animal?");

//console.log("Hello", name, "is it true that your favorite animal is", favouriteAnimal, "?");

//Exercise 4
//if (age >= 18) {
//    console.log("You are an adult");
//} else {
//    console.log("You are under 18.");
//}
//Exercise 5:

//greetUser("Pyry");
//function greetUser(name) { console.log("Hello " + name + "! Welcome to my cool site!"); }

// Exercise 6
function clicked() {
    alert("Bitcoin miner initiated! Thanks buddy!");
}
const animalbutton = document.getElementById("animalbutton");

// animalbutton.addEventListener("click", function(){
//     alert("Sea Lions are awesome!");
// });
// ADD SOUND EFFECT FOR BUTTON


const animaltitle = document.querySelector("#animaltitle");

animaltitle.addEventListener("click", function(){
    animaltitle.textContent = "My Favorite Animal is Reggie the goofy Sea lion."
    animaltitle.style.color = "#B09981";
});


const animalimage = document.querySelector("img");

animalimage.addEventListener("mouseover", function(){
    animalimage.style.border = "5px solid black"
});


const animalinput = document.querySelector("#animalinput");
const animaloutput = document.querySelector("#animaloutput");
animalinput.addEventListener("input", function(){
    animaloutput.textContent = animalinput.value;
});

animalinput.addEventListener("focus", function(){
    console.log("Input is focused");
});

animalinput.addEventListener("blur", function(){
    console.log("Input lost focus");
});

const animalform = document.querySelector("#animalform");

animalform.addEventListener("submit", function(event){
    event.preventDefault();
    animaloutput.textcontent = "Your favorite animal is: " + animalinput.value;
    console.log("Form submitted with animal: " + animalinput.value);
});

document.addEventListener("keydown", function(event){
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.code);
});

const mousetrap = document.querySelector("#mousetrap");

