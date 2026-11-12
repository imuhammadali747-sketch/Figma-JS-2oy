const darkBtn = document.querySelector(".darkBtn");
const lightBtn = document.querySelector(".lightBtn");
const body = document.body;
const cards = document.querySelectorAll(".cardheaders");
const btn = document.querySelector(".see-all-btn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
} else {
    body.classList.remove("dark");
}

darkBtn.addEventListener("click", () => {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
});

lightBtn.addEventListener("click", () => {
    body.classList.remove("dark");
    localStorage.setItem("theme", "light");
});

btn.addEventListener("click", () => {
    if (btn.textContent === "See All") {
        cards.forEach((card, index) => {
            if (index >= 2) {
                card.style.display = "block";
            }
        });
        btn.textContent = "Yopish";
    } else {
        cards.forEach((card, index) => {
            if (index >= 2) {
                card.style.display = "";
            }
        });
        btn.textContent = "See All";
    }
});

const time = document.querySelector(".time");

function clock() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    time.textContent = `${hour}:${minute}:${seconds}`;
}

clock();
setInterval(clock, 1000);
