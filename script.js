const container = document.querySelector('div.container');
const ORIGINAL_SIZE = 16

function addHoverEffect(e) {
    this.style.backgroundColor = "black";
}

function createGrid(size) {
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

createGrid(ORIGINAL_SIZE);