const container = document.querySelector('div.container');
const button = document.querySelector('button');
const MAX_SIZE = 100;
const ORIGINAL_SIZE = 16;

function addHoverEffect(e) {
    this.style.backgroundColor = "black";
}

function createGrid(size) {
    if (size > 100) size = 100;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add("grid-square");
            cell.style.width = `calc(100% / ${size})`;
            cell.style.height = `calc(100% / ${size})`;
            container.appendChild(cell);

            cell.addEventListener('mouseenter',addHoverEffect);
        }
    }
}

button.onclick = () => {
    let newSize = parseInt(prompt("Change the grid size here: (MAX allowed is 100)", 16));
    let cells = [...container.childNodes];
    for (let i = 0; i < cells.length; i++) {
        container.removeChild(cells[i]);
    }
    createGrid(newSize);
}

createGrid(ORIGINAL_SIZE);