let open = 0;
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

comingSoon.addEventListener("click", function (event) {
    alert("There is nothing to see here in my Todo List project. It will be available soon.");
    console.info("There is nothing to see here in my Todo List project. It will be available soon.");
});

// Event listener functions

