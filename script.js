//1. nastavenie štyroch konštánt

const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
//2. vždy keď sa pohneme, eventListener to zaregistruje a spustí funkciumoveFrog
let currentIndex = 76
const width = 9
function moveFrog(e) {

    squares[currentIndex].classList.remove('frog')
    switch(e.key) {
        case "ArrowLeft":
            console.log("move left")
            if (currentIndex % width !== 0) currentIndex -= 1
            break
        case "ArrowRight":
            console.log("move right")
            currentIndex += 1
            break
        case "ArrowUp":
            console.log("move up")
            currentIndex -= width
            break
        case "ArrowDown":
            console.log("move down")
            currentIndex += width
            break
    }
    //3.squares dávam do array
    squares[currentIndex].classList.add('frog')
}
document.addEventListener("keyup", moveFrog)