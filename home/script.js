const darkBtn = document.querySelector(".darkBtn");
const lightBtn = document.querySelector(".lightBtn");
const body = document.body;
const cards = document.querySelectorAll(".cardheaders");
const btn = document.querySelector(".see-all-btn");
const savedTheme = localStorage.getItem("theme");
const likeButton = document.querySelectorAll(".like-btn");

// like

likeButton.forEach((like, index) => {
    let likeName = "Like" + index

    if (localStorage.getItem(likeName) === "like") {
        like.style.color = 'red'
    } else {
        like.style.color = 'black'
    }

    like.addEventListener('click', () =>{
        if (localStorage.getItem(likeName) === "like") {
            like.style.color = 'black'
            localStorage.setItem(likeName, "dislike")
        } else {
            like.style.color = 'red'
            localStorage.setItem(likeName, "like")
        }
    })
})

// dark mode

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
    if (btn.style.color === "See All") {
        cards.forEach((card, index) => {
            if (index >= 2) {
                card.style.display = "block";
            }
        });
        btn.style.color = "Yopish";
    } else {
        cards.forEach((card, index) => {
            if (index >= 2) {
                card.style.display = "";
            }
        });
        btn.style.color = "See All";
    }
});

// time

const time = document.querySelector('.time')

function clock() {
    let now = new Date()

    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()

    if (hour < 10) hour = '0' + hour
    if (minute < 10) minute = '0' + minute
    if (seconds < 10) seconds = '0' + seconds

    time.textContent = `${hour}:${minute}:${seconds}`
}

clock()
setInterval(clock, 1000)


// search

let searchInp = document.querySelector('.inp1')

searchInp.addEventListener('input', () => {
    let inpValue = searchInp.value.toLowerCase()

    cards.forEach((card) => {
        let cardTitle = card.querySelector('h1').textContent.toLowerCase()

        if (cardTitle.includes(inpValue)) {
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    })
})
