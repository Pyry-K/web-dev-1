// Otsikon muutos nappi
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function(){
    taskOneHeading.textContent = ("Muokattu otsikko!");
});


// Muuta tyyliä nappi
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function() {
    taskOneHeading.classList.toggle("highlight");
});

// Kolmas nappi 
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function(){
    animalText.textContent = (`WE LOVE ANIMALS
        ANIMALS ARE SOOOO COOOL`);
});

// Animal name & animal image & animal desc

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription")

animalSelect.addEventListener("change", function(){
    const selectedAnimal = animalSelect.value;

    console.log("selected animal:", selectedAnimal);

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elefantti:";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "tämä on Elefantti";
        animalDescription.textContent = "Elephantit ovat isoja! Niillä on iso pää ja syksyhampaat.";
    }
    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri:";
        animalImage.src = "images/tiger.jpg";
        animalImage.alt = "tämä on tiikeri";
        animalDescription.textContent = "Tiikerit ovat hurjia! Niillä on silmät ja pelottavat hampaat.";
    }
    if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini:";
        animalImage.src = "images/pingviini.png";
        animalImage.alt = "tämä on Pingviini";
        animalDescription.textContent = "Pingviinit eivät osaa lentää, vaikka niilla siivet ovatkin.";
    }
    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda:";
        animalImage.src = "images/panda.png";
        animalImage.alt = "tämä on panda";
        animalDescription.textContent = "Pandat syövät bambua. Bambu on varmasti tosi herkullista.";
    }
});

//Tarkistus onko formi tyhjä

function statuschk(input) {
    const count = input.value.length;
    if (count < 1) {
        return false
    } else {
        return true
    }
};

//Formin tiedot

const animalForm = document.querySelector("#animalForm")
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");
const output = document.querySelector("#output");

observationAnimal.addEventListener("input", function () {
});
observationLocation.addEventListener("input", function () {
});
observationDate.addEventListener("input", function () {
});

animalForm.addEventListener("submit", function(event){
    event.preventDefault();

    const animalOK = statuschk(observationAnimal);
    const locationOK = statuschk(observationLocation);
    const dateOK = statuschk(observationDate);

    if (animalOK && locationOK && dateOK) {
        const newRow = document.createElement("tr");
        const animalCell = document.createElement("td");
        const locationCell = document.createElement("td");
        const dateCell = document.createElement("td");

        console.log("Submitted Animal name: " + observationAnimal.value);
        console.log("Submitted Animal location: " + observationLocation.value);
        console.log("Submitted Animal date: " + observationDate.value);
        
        output.textContent = "Thanks for your submission!";

        animalCell.textContent = observationAnimal.value;
        locationCell.textContent = observationLocation.value;
        dateCell.textContent = observationDate.value;

        newRow.appendChild(animalCell);
        newRow.appendChild(locationCell);
        newRow.appendChild(dateCell);

        observationTableBody.appendChild(newRow);
    } else {
        console.log("error lähetyksessä");
        output.textContent = "Error with your submission!";
    }
});