const title = document.getElementById("title");
const paragraphs = document.getElementsByClassName("desc");
const listItems = document.getElementsByTagName("li");
const specialItem = document.querySelector(".special");
const allButtons = document.querySelectorAll("button");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", () => {
    title.textContent = "Title has been changed!"
});

btn2.addEventListener("click", () => {
    for (let p of paragraphs) {
        p.classList.toggle("highlight");
    }
});

btn3.addEventListener("click", () => {
    specialItem.textContent = "I am the special one ⭐!"
});
