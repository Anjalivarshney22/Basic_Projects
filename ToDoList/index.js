const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "<i class='fas fa-trash'></i>";

        li.appendChild(span);
        listContainer.appendChild(li);

        playSound("recorded");
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
        saveData();
        playSound("deleted");
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
});

function playSound(action) {
    var audio = new Audio();
    
    if (action === "recorded") {
        audio.src ="item is recorded .mp3";
    } else if (action === "deleted") {
        audio.src = "item is deleted .mp3";
    }

    audio.play();
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
