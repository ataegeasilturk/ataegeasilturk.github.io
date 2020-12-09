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