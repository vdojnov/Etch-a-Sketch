
// DECLERATIONS
const gameBox = document.createElement("div");
const clearBtn = document.getElementById("clear-btn");
const slider = document.getElementById("slider");
const sliderVal = document.getElementById("slide-val");
const colorBtns = document.querySelectorAll(".color-btn")
const mainContainer = document.getElementById("main-container");

// VARIABLES
let input;
let currentColor;
gameBox.id = "game-box";
let allBoxes 

// popluate()

// FUNCTIONS

function popluate() {
    let numBoxes = input*input;
    if (allBoxes) {
        allBoxes.forEach(element => {
            element.remove()
        });
    }

    mainContainer.appendChild(gameBox)
    for (let i = 0; i < numBoxes; i++) {
        let singleBox = document.createElement('div');
        let dimention = 100/input
        singleBox.classList="box";
        singleBox.style.width = dimention+"%"
        singleBox.style.height = dimention+"%"
        gameBox.appendChild(singleBox)
    }
    allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        box.addEventListener("mouseover", changeColor);   
    });
}

function changeColor() {
    this.style.backgroundColor = currentColor;
};

function clearBoard() {
    allBoxes.forEach(box => {
        box.style.backgroundColor = "white"
    });
};

function handleSlider(e) {
    input=+this.value
    popluate()
    sliderVal.textContent = this.value
};

function setColor() {
    console.log(currentColor)
    currentColor = this.value;
    console.log(currentColor)
}

// LOGIC
input = 5;
currentColor = "black"
sliderVal.textContent = 5;
mainContainer.appendChild(gameBox)
popluate()







// EVENT LISTENERS

clearBtn.addEventListener('click', clearBoard);

slider.addEventListener('change', handleSlider);
colorBtns.forEach(cbtn => {
    cbtn.addEventListener("click", setColor)
});