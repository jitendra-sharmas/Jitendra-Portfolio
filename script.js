
let name = "Jitendra Kumar Sharma";
let age = 20;
let skills = ["HTML", "CSS", "JavaScript", "Python", "C++"];

console.log(`My name is ${name}`);
console.log(`My age is ${age}`);
console.log(`My skills are ${skills}`);

console.log(typeof name);
console.log(typeof age);

document.getElementById("year").innerText =
    new Date().getFullYear();

let form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("name").value;

    document.getElementById("result").innerText =
        "Thank you " + username + "! Form submitted successfully.";

    form.reset();
});
