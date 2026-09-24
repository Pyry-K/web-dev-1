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

// Animal name & animal image

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription")

animalSelect.addEventListener("change", function(){
    const selectedAnimal = animalSelect.value;

    console.log("selected animal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri:";
        animalImage.src = "images/tiger.jpg";
        animalImage.alt = "tämä on tiikeri";
    }
});