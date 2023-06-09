const root = document.querySelector('#root')
const sizeOfGrid = 32;

const createGrid = (amtOfGrips) => {

    // create a canvas with id
    const canvas = document.createElement('div');
    canvas.setAttribute('id', 'canvas')
    root.appendChild(canvas);

    for (let i = 0; i < amtOfGrips; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        
        for (let j = 0; j < amtOfGrips; j++) {
            const gridBox = document.createElement('div');
            const widthAndHeight = 800 / sizeOfGrid;
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            gridBox.classList.add('grid-box');

            // adding mouseenter to change the background color
            gridBox.addEventListener('mouseenter', () => {
                randomColor = Math.floor(Math.random()*16777215).toString(16);
                gridBox.style.backgroundColor = '#' + randomColor;
            })
            row.appendChild(gridBox);
        }
        canvas.append(row);
    }
}

// create buttons
const buttons = document.createElement('div');
buttons.classList.add('buttons');
root.appendChild(buttons);

// create a button for reset the canvas
const resetButton = document.createElement('button');
resetButton.classList.add('button')
resetButton.textContent = 'Reset';
buttons.appendChild(resetButton);
resetButton.addEventListener('click', () => {
    canvas.remove();
    
    let userSize = Number(prompt('What size you want?'));
    while (userSize > 100) {
        userSize = Number(prompt('Pick a smaller number than 100'));
    }
    createGrid(userSize);
})

createGrid(sizeOfGrid);

// const allDivs = document.querySelectorAll('.grid-box');
// allDivs.forEach(div => {
//     div.addEventListener('mouseenter', () => {
//         div.style.backgroundColor = 'black';
//     })
// })