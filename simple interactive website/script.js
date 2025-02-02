const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
const changeBgColorBtn = document.getElementById("changeBgColor");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const countDisplay = document.getElementById("count");

// Toggle Dark Mode
toggleDarkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Change Background Color Randomly
changeBgColorBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Counter Logic
let count = 0;

increaseBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    }
});
