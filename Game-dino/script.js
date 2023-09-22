
const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function(event) {
    jump()
})

function jump () {
    if (dino.classList !="jump") {
        dino.classList.add("jump")
    }
    setTimeout (function() {
        dino.classList.remove("jump")
    }, 300)
}

//Отключение анимаций

document.querySelector('.startSec').addEventListener('click', ()=>{
document.querySelectorAll('.game > span').forEach(el => el.classList.toggle("animation"))
 });


//timer field
const secondElement = document.querySelector('.timeSec')

//buttons

const startButton = document.querySelector('.startSec')

//List
let second = 0
let interval

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 1000)
})

//Variables


function startTimer () {
    second++
    secondElement.innerText = "" + second
}


/* let isAlive = setInterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 150 && cactusLeft > 0 && dinoTop >= 250) {
        alert("You died!")
    }
   /*  if (cactusLeft < 150 && cactusLeft > 0 && dinoTop >= 250) {
        cactusLeft.getPropertyValue("-5px")
    } */
/*     if (cactusLeft < 150 && cactusLeft > 0 && dinoTop >= 250) {
        clearInterval(interval)
        second = 0
        secondElement.innerHTML = '0'
    }
}, 10) */