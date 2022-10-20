{
    console.log("Wiadomość dla developerów - Miło mi, że odwiedzasz moją stronkę!");

    const deleteMyPhoto = () => {

        const button1 = document.querySelector(".js-button1");
        const myImg = document.querySelector(".js-myImg");
        
        button1.innerText === "Usuń zdjęcie"
            ? button1.innerText = "Pokaż moje zdjęcie"
            : button1.innerText = "Usuń zdjęcie";
    
            myImg.classList.toggle("displayNone");
    };

    const deleteDogPhoto = () => {

        const button2 = document.querySelector(".js-button2");
        dogImg = document.querySelector(".js-dogImg");
        dogImg.classList.toggle("bigger");
        button2.remove();
        treat = document.querySelector(".js-treat");
        treat.classList.add("warning");
        treat.innerText = "Tofik dziękuje!";


        button2.addEventListener("click", deleteDogPhoto );
    }

    const toggleTheme = () => {

        const buttonChangeTheme = document.querySelector(".js-buttonChangeTheme");
        const body = document.querySelector(".body");
        const aside = document.querySelector(".js-asideParagraph");
        const headerElements = document.querySelectorAll(".js-header");
        const paragraphElements = document.querySelectorAll(".js-paragraph");

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
       
    };
    
    const init = () => {
        
        const buttonChangeTheme = document.querySelector(".js-buttonChangeTheme");
        buttonChangeTheme.addEventListener("click", toggleTheme);

        const button1 = document.querySelector(".js-button1");
        button1.addEventListener("click", deleteMyPhoto);

        const button2 = document.querySelector(".js-button2");
        button2.addEventListener("click", deleteDogPhoto );

    }; 

    init();
}