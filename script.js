//1. nastavenie štyroch konštánt

const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll(".log-left")
const logsRight = document.querySelectorAll(".log-right")
const carsLeft = document.querySelectorAll(".car-left")
const carsRight = document.querySelectorAll(".car-right")
//2. vždy keď sa pohneme, eventListener to zaregistruje a spustí funkciumoveFrog
console.log(squares)
let currentIndex = 76
const width = 9
function moveFrog(e) {

    squares[currentIndex].classList.remove('frog')
    switch(e.key) {
        case "ArrowLeft":
            console.log("move left")
            //pridaná podmienka, ktorá ohraničuje oblasť, aby sa stoplahráča, keď dá arrow
            if (currentIndex % width !== 0) currentIndex -= 1
            break
        case "ArrowRight":
            console.log("move right")
            if (currentIndex % width < width -1) currentIndex += 1
            break
        case "ArrowUp":
            console.log("move up")
            if (currentIndex - width >=0) currentIndex -= width
            break
        case "ArrowDown":
            console.log("move down")
            if (currentIndex + width < width * width) currentIndex += width
            break
    }
    //3.squares dávam do array
    squares[currentIndex].classList.add('frog')
}
document.addEventListener("keyup", moveFrog)

// 5. funkcia, ktorá vyberá logy v dive
function autoMoveElements() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    //8. pridávame do funkcie foreach pre right
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))
    carsRight.forEach(carRight => moveCarRight(carRight))
}
// 4. funkcia, ktorá nastavuje pohyb tilov do strany

function moveLogLeft(logLeft) {
    switch(true) {
        case logLeft.classList.contains("l1") :
            logLeft.classList.remove("l1")
            logLeft.classList.add("l2")
            break
        case logLeft.classList.contains("l2") :
            logLeft.classList.remove("l2")
            logLeft.classList.add("l3")
            break
        case logLeft.classList.contains("l3") :
            logLeft.classList.remove("l3")
            logLeft.classList.add("l4")
            break
        case logLeft.classList.contains("l4") :
            logLeft.classList.remove("l4")
            logLeft.classList.add("l5")
            break
        case logLeft.classList.contains("l5") :
            logLeft.classList.remove("l5")
            logLeft.classList.add("l1")
            break

    }
}
//8. kopírujem funkciu vyššie a nastavujem pohyb logov doprava
function moveLogRight(logRight) {
    switch(true) {
        case logRight.classList.contains("l1") :
            logRight.classList.remove("l1")
            logRight.classList.add("l5")
            break
        case logRight.classList.contains("l2") :
            logRight.classList.remove("l2")
            logRight.classList.add("l1")
            break
        case logRight.classList.contains("l3") :
            logRight.classList.remove("l3")
            logRight.classList.add("l2")
            break
        case logRight.classList.contains("l4") :
            logRight.classList.remove("l4")
            logRight.classList.add("l3")
            break
        case logRight.classList.contains("l5") :
            logRight.classList.remove("l5")
            logRight.classList.add("l4")
            break

    }
}
//9. pohyby áut
function moveCarLeft(carLeft) {
    switch(true) {
        case carLeft.classList.contains("c1") :
            carLeft.classList.remove("c1")
            carLeft.classList.add("c2")
            break
        case carLeft.classList.contains("c2") :
            carLeft.classList.remove("c2")
            carLeft.classList.add("c3")
            break
        case carLeft.classList.contains("c3") :
            carLeft.classList.remove("c3")
            carLeft.classList.add("c1")
            break
    }
}

function moveCarRight(carRight) {
    switch(true) {
        case carRight.classList.contains("c1") :
            carRight.classList.remove("c1")
            carRight.classList.add("c3")
            break
        case carRight.classList.contains("c2") :
            carRight.classList.remove("c2")
            carRight.classList.add("c1")
            break
        case carRight.classList.contains("c3") :
            carRight.classList.remove("c3")
            carRight.classList.add("c2")
            break
    }
}

//7. nastavujeme interval pohybu
setInterval(autoMoveElements, 1000)