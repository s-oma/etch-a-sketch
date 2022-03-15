// Create the Global Variables
let color = "black";
let click = true;
// Create The Grid Function
function gridDimention(size) {
    let drawingField = document.querySelector(".drawing-field");
    let allSquares = drawingField.querySelectorAll("div");
    allSquares.forEach((div) => div.remove());
    drawingField.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    drawingField.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    // Create the Loop
    let quantityOfSquares = size * size
    for(i = 0; i <= quantityOfSquares; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", squaresColor)
        square.style.backgroundColor = "white";
        drawingField.insertAdjacentElement("beforeend", square);
    }
}
gridDimention(16);

// Create The Editing the Grid Size Value
function editSize(number) {
    if(number >= 2 && number <= 100) {
        document.querySelector(".error").style.display = 'none';
        gridDimention(number);  
    } else {
        document.querySelector(".error").style.display = 'flex';
    }
    
}

// Create the function of colorizing the Squares
function squaresColor() {
    if(click) {
        if(color === "rainbow") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

// Create the Function of changing the colores
function editColor(choice) {
    color = choice;
}

// Create the function of ReSet Button
function reSetButton() {
    let drawingField = document.querySelector(".drawing-field");
    let allSquares = drawingField.querySelectorAll("div");
    allSquares.forEach((div) => div.style.backgroundColor = "white");
}
// Acivate and De-Activate The Ability To Draw On The Screen
document.querySelector("body").addEventListener("click", (e) => {
    if(e.target.tagName != "button") {
        click = !click;
        if (click) {
            document.querySelector(".status").textContent = "Status: Active";
            document.querySelector(".status").style.color = "green";
        } else {
            document.querySelector(".status").textContent = "Status: NOT Active";
            document.querySelector(".status").style.color = "red";
        }
    }  
});