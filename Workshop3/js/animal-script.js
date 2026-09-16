// WORKSHOP 3 ADDITIONS:

const button1 = document.querySelector("#button1")

button1.addEventListener("click", function(){
    alert("You clicked me!");
});

const tablebutton = document.querySelector("#tablebutton");
const tableContainer = document.querySelector("#tableContainer");

function clicked(){
    alert("You clicked me!")
};

const animal = "Sea Lion";
const habitat = "The Sea";
const diet = "Carnivore / fish";

const animal1 = "Reggie";
const habitat1 = "China";
const diet1 = "Carnivore / fish";

function showtable(){
    tableContainer.innerHTML = `
        <table>
            <tr>
                <th>Animal</th>
                <th>Habitat</th>
                <th>Diet</th>
            </tr>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
            <tr>
                <td>${animal1}</td>
                <td>${habitat1}</td>
                <td>${diet1}</td>
            </tr>
        </table>
    `;
}

tablebutton.addEventListener("click", showtable);

const mousetrap = document.querySelector("#mousetrap");
const mousekill = document.querySelector("#mousekill");

mousetrap.addEventListener("mouseenter", function(){
    mousetrap.style.backgroundColor = "#75C9C9";
    mousetrap.innerHTML = `<h2>hidden mousetrap</h2>`;
    console.log("Stepped over me with a mouse!");
});
mousekill.addEventListener("click", function(){
    mousekill.innerHTML = `<b style="text-align: center; font-size: 2rem">Bye bye mouse!</b>`;
    mousekill.style.color = "#e40f0f";
    mousekill.style.backgroundColor = "black";
});

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");


feedback.addEventListener("focus", function(){
    console.log("Input is focused")
    feedback.style.backgroundColor = "#948F89"
});

feedback.addEventListener("blur", function(){
    console.log("Input lost focus");
    feedback.style.backgroundColor = "#6ca1b1"
});

const input = document.querySelector("#feedback");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");
const output = document.querySelector("#output");
const sendBtn = document.querySelector("#sendBtn")

function statuschk() {
    const count = input.value.length;

    if (count < 10) {
        status.textContent = "Too low";
        status.style.color = "red";
        return false
    } else if (count > 200) {
        status.textContent = "Too large";
        status.style.color = "red";
        return false
    } else {
        status.textContent = "Good";
        status.style.color = "green";
        return true
    }
}

input.addEventListener("input", function () {
    const count = input.value.length;
    charcount.textContent = `${count}/200`;
    preview.textContent = input.value;
    statuschk();
});

sendBtn.addEventListener("click", function(event) {
    event.preventDefault();

    if (statuschk()) {
        output.textContent = "Thanks for your feedback!";
        console.log("Form submitted with: " + input.value);
    }
    else {
        output.textContent = "Error with your feedback!";
    }
});

const keys = document.querySelector("#keybox");

document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
    keys.textContent = event.key + " (" +event.code + ")";

});