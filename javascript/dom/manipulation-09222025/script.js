const mainTitle = document.getElementById("mainTitle");
const changeTitleBtn = document.getElementById("changeTitleBtn");
const paragraph = document.getElementById("para");
const makeRedBtn = document.getElementById("makeRedBtn");
const toggleHighlightBtn = document.getElementById("toggleHighlightBtn");
const image = document.getElementById("theImage");
const changeImageBtn = document.getElementById("changeImageBtn");
const list = document.getElementById("itemList");
const addItemBtn = document.getElementById("addItemBtn");
const removeFirstBtn = document.getElementById("removeFirstBtn");
const newItemInput = document.getElementById("newItemInput");
const addFromInputBtn = document.getElementById("addFromInputBtn");

changeTitleBtn.addEventListener("click", () => {
    mainTitle.textContent = "Title has been changed! 👻";
});

makeRedBtn.addEventListener("click", () => {
    paragraph.style.color = "red";
});

toggleHighlightBtn.addEventListener("click", () => {
    paragraph.classList.toggle("highlight");
});

changeImageBtn.addEventListener("click", () => {
    image.setAttribute("src", "https://via.placeholder.com/600x200?text=Changed+Image");
});

addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
});

removeFirstBtn.addEventListener("click", () => {
    if (list.firstElementChild) {
        list.removeChild(list.firstElementChild);
    }
});

addFromInputBtn.addEventListener("click", () => {
    const text = newItemInput.value.trim();
    if (text !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = text;
        list.appendChild(newItem);
        newItemInput.value = "";
    } else {
        alert("Please type something before adding!");
    }
});
