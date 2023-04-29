const sizeOfGrid = 32;

const canvas = document.querySelector('#canvas');

const createGrid = (amtOfGrips) => {
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
                gridBox.style.backgroundColor = 'black';
            })

            row.appendChild(gridBox);
        }

        canvas.append(row);
    }
}

createGrid(sizeOfGrid);

// const allDivs = document.querySelectorAll('.grid-box');
// allDivs.forEach(div => {
//     div.addEventListener('mouseenter', () => {
//         div.style.backgroundColor = 'black';
//     })
// })