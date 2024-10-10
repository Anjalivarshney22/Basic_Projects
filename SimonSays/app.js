let gameSeq = [];
let userSeq = [];
let buttons = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    // Random button choose karna h
    let randIdx = Math.floor(Math.random() * 4);
    let rc = buttons[randIdx];
    let rb = document.querySelector(`.${rc}`);
    gameSeq.push(rc);
    btnFlash(rb);
}

function checkAns(currentLevel) {
    if (userSeq[currentLevel] == gameSeq[currentLevel]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `GAME OVER your score was <b>${level}</b>`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);
    let uc = btn.getAttribute("id");
    userSeq.push(uc);
    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
