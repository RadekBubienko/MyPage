console.log("Wiadomość dla developerów - Miło mi, że odwiedzasz moją stronkę!");

let button1 = document.querySelector(".js-button1");
let button2 = document.querySelector(".js-button2");
let myImg = document.querySelector(".js-myImg");

button1.addEventListener("click", () => {

    button1.innerText === "Usuń zdjęcie"
        ? button1.innerText = "Pokaż moje zdjęcie"
        : button1.innerText = "Usuń zdjęcie";

    myImg.classList.toggle("displayNone");
});

button2.addEventListener("click", () => {
    dogImg = document.querySelector(".js-dogImg");
    dogImg.classList.toggle("bigger");
    button2.remove();
    treat = document.querySelector(".js-treat");
    treat.classList.add("warning");
    treat.innerText = "Tofik dziękuje!";
});

let buttonChangeTheme = document.querySelector(".js-buttonChangeTheme");
let body = document.querySelector(".body");
let header2 = document.querySelector(".js-header2");
let header1 = document.querySelector(".js-header1");
let paragraph = document.querySelector(".js-paragraph");

buttonChangeTheme.addEventListener("click", () => {

    buttonChangeTheme.innerText === "Zmień motyw na ciemny"
        ? buttonChangeTheme.innerText = "Zmień motyw na jasny"
        : buttonChangeTheme.innerText = "Zmień motyw na ciemny";
    body.classList.toggle("dark");

    const headerElements = document.querySelectorAll(".js-header1")
    headerElements.forEach(header1 => {
    header1.classList.toggle("brighter")});

    const subHeaderElements = document.querySelectorAll(".js-header2")
    subHeaderElements.forEach(header2 => {
        header2.classList.toggle("brighter")});

    const paragraphElements = document.querySelectorAll(".js-paragraph")
    paragraphElements.forEach(paragraph => {
        paragraph.classList.toggle("paragraph-brighter")}); 
    
});