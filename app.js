let open = 0;
let colorMode = false;

function chronoSpoiler() {
    if (open == 0) {
        let spoiler = document.querySelector("#chrono-spoiler");
        spoiler.style.filter = "blur(0.00001px)";
        open = 1;
    } else {
        let spoiler = document.querySelector("#chrono-spoiler");
        spoiler.style.filter = "blur(5px)";
        open = 0;
    }
};

const comingSoon = document.querySelector("#coming-soon-btn");
const darkMode = document.querySelector("#toggle-darkmode");

// Event listeners

comingSoon.addEventListener("click", function (event) {
    alert("There is nothing to see here in my Todo List project. It will be available soon.");
    console.info("There is nothing to see here in my Todo List project. It will be available soon.");
});

darkMode.addEventListener("click", function (e) {
    const body = document.querySelector("body");
    const card = document.querySelectorAll(".card");
    const btnPrimary = document.querySelectorAll(".btn-primary");
    if (colorMode == false) {
        try {
            body.classList.add("dark-mode");
            card.forEach(function (cardElement) {
                cardElement.classList.add("dark-mode");
            });
            btnPrimary.forEach(function (cardElement) {
                cardElement.classList.add("btn-primary-dark");
            });
            darkMode.classList = "btn btn-light";
            darkMode.innerHTML = '<i class="fas fa-sun" id="toggle-darkmode" alt="Click to toggle dark mode!"></i>';
            colorMode = true;
        } catch (e) {
            console.info("An error occurred while turning dark mode on. Please try again later.")
            console.info(`Error: ${e}`)
            if (colorMode == true) colorMode = false;
        }
    } else if (colorMode == true) {
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
            colorMode = false;
        } catch (e) {
            console.info("An error occurred while turning dark mode on. Please try again later.")
            console.info(`Error: ${e}`)
            if (colorMode == false) colorMode = true;
        }
    };
});