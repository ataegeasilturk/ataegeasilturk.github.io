let open = 0;
let colorMode = localStorage.getItem("darkMode");

document.addEventListener("DOMContentLoaded", function (event) {
    const body = document.querySelector("body");
    const card = document.querySelectorAll(".card");
    const btnPrimary = document.querySelectorAll(".btn-primary");
    const chronoSpoiler = document.querySelector("#chrono-spoiler");
    let colorMode = localStorage.getItem("darkMode");
    if (colorMode == 1) {
        try {
            body.classList.add("dark-mode");
            card.forEach(function (cardElement) {
                cardElement.classList.add("dark-mode");
            });
            chronoSpoiler.innerHTML = `<img src="images/dark_chrono_spoiler.jpg" alt="Chronometer spoiler" onclick="chronoSpoiler()" id="chrono-spoiler"/>`;
            btnPrimary.forEach(function (cardElement) {
                cardElement.classList.add("btn-primary-dark");
            });
            darkMode.classList = "btn btn-light";
            darkMode.innerHTML = '<i class="fas fa-sun" id="toggle-darkmode" alt="Click to toggle dark mode!"></i>';
        } catch (e) {
            console.info("An error occurred while turning dark mode on. Please try again later.")
            console.info(`Error: ${e}`)
        }
    } else if (colorMode == 0 || colorMode == null) {
        try {
            body.classList.remove("dark-mode");
            card.forEach(function (cardElement) {
                cardElement.classList.remove("dark-mode");
            });
            btnPrimary.forEach(function (cardElement) {
                cardElement.classList.remove("btn-primary-dark");
            });
            darkMode.classList = "btn btn-dark";
            darkMode.innerHTML = '<i class="fas fa-moon" id="toggle-darkmode" alt="Click to toggle dark mode!"></i>';
            localStorage.setItem("darkMode", 0);
        } catch (e) {
            console.info("An error occurred while turning dark mode on. Please try again later.")
            console.info(`Error: ${e}`)
        }
    } else {
        console.error("An error occurred while turning dark mode on. Please report this issue from GitHub.")
    }
});

const comingSoon = document.querySelector("#coming-soon-btn");
const darkMode = document.querySelector("#toggle-darkmode");

// Event listeners

comingSoon.addEventListener("click", function (event) {
    alert("There is nothing to see here in my Todo List project. It will be available soon.");
    console.info("There is nothing to see here in my Todo List project. It will be available soon.");
});

darkMode.addEventListener("click", function (event) {
    const body = document.querySelector("body");
    const card = document.querySelectorAll(".card");
    const chronoSpoiler = document.querySelector("#chrono-spoiler");
    const btnPrimary = document.querySelectorAll(".btn-primary");
    if (colorMode == 0 || colorMode == null) {
        try {
            body.classList.add("dark-mode");
            card.forEach(function (cardElement) {
                cardElement.classList.add("dark-mode");
            });
            btnPrimary.forEach(function (cardElement) {
                cardElement.classList.add("btn-primary-dark");
            });
            chronoSpoiler.innerHTML = `<img src="images/dark_chrono_spoiler.jpg" alt="Chronometer spoiler" onclick="chronoSpoiler()" id="chrono-spoiler"/>`;
            darkMode.classList = "btn btn-light";
            darkMode.innerHTML = '<i class="fas fa-sun" id="toggle-darkmode" alt="Click to toggle dark mode!"></i>';
            localStorage.setItem("darkMode", 1);
        } catch (e) {
            console.info("An error occurred while turning dark mode on. Please try again later.")
            console.error(e)
        }
    } else if (colorMode == 1) {
        try {
            body.classList.remove("dark-mode");
            card.forEach(function (cardElement) {
                cardElement.classList.remove("dark-mode");
            });
            btnPrimary.forEach(function (cardElement) {
                cardElement.classList.remove("btn-primary-dark");
            });
            chronoSpoiler.innerHTML = `<img src="images/chrono_spoiler.jpg" alt="Chronometer spoiler" onclick="chronoSpoiler()" id="chrono-spoiler"/>`;
            darkMode.classList = "btn btn-dark";
            darkMode.innerHTML = '<i class="fas fa-moon" id="toggle-darkmode" alt="Click to toggle dark mode!"></i>';
            localStorage.setItem("darkMode", 0);
        } catch (e) {
            console.info("An error occurred while turning dark mode on. Please try again later.")
            console.error(e)
        }
    } else {
        console.error(`An error occurred. Please report this issue from github.com/ataegeasilturk`)
    }
});

