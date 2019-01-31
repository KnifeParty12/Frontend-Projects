const barOuter = document.querySelector(".bar-outer");
const options = document.querySelectorAll(".bar-grey .option");
let current = 1;
options.forEach((option, i) => (option.index = i + 1));
options.forEach(option =>
    option.addEventListener("click", function() {
        barOuter.className = "bar-outer";
        barOuter.classList.add(`pos${option.index}`);
        if (option.index > current) {
            barOuter.classList.add("right");
        } else if (option.index < current) {
            barOuter.classList.add("left");
        }
        current = option.index;
    }));
