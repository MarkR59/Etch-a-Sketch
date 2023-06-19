let currentColor = 'black';

function createBoard(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let sizeSquared = size * size;
    for (let i = 0; i < sizeSquared; i++){
        let square = document.createElement('div');
        square.addEventListener("mouseover", changeColor);
        square.addEventListener("mousedown", changeColor);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", square);
    }
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

createBoard(16);

const eraserBtn = document.getElementById('Eraser');
eraserBtn.addEventListener("click", (event) => {
    activateButton('white');
    setColor('white');
})

const colorBtn = document.getElementById('Color');
colorBtn.addEventListener("click", (event) => {
    activateButton('black');
    setColor('black');
})


function changeBoard(input){
    createBoard(input);
}

function setColor(color){
    currentColor = color;
}

function changeColor(e){
    if(e.type == 'mouseover' && !mouseDown) return;
    if(currentColor == 'white'){
        this.style.backgroundColor = 'white';
    }
    else{
        this.style.backgroundColor = 'black';
    }
}

function activateButton(newColor){
    if (currentColor == 'black'){
        colorBtn.classList.remove('active');
    }
    else if (currentColor == 'white'){
        eraserBtn.classList.remove('active');
    }

    if (newColor == 'black'){
        colorBtn.classList.add('active');
    }
    else if (newColor == 'white'){
        eraserBtn.classList.add('active');
    }
}

window.onload = () => {
    activateButton('black');
  }
