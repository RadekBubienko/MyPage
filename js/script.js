{
    console.log("Wiadomość dla developerów - Miło mi, że odwiedzasz moją stronkę! To jest nowy commit w GIT");

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
    let aside = document.querySelector(".js-asideParagraph");
    const headerElements = document.querySelectorAll(".js-header");
    const paragraphElements = document.querySelectorAll(".js-paragraph");

    buttonChangeTheme.addEventListener("click", () => {

        buttonChangeTheme.innerText === "Zmień motyw na ciemny"
            ? buttonChangeTheme.innerText = "Zmień motyw na jasny"
            : buttonChangeTheme.innerText = "Zmień motyw na ciemny";
        body.classList.toggle("dark");

        aside.classList.toggle("paragraph-brighter");

        headerElements.forEach(header => {
            header.classList.toggle("brighter")
        });

        paragraphElements.forEach(paragraph => {
            paragraph.classList.toggle("paragraph-brighter")
        });

    });
}