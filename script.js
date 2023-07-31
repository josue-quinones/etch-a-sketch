const container = document.querySelector('div.container');
const ORIGINAL_SIZE = 16

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add("grid-square");
            div.style.width = `calc(100% / ${size})`;
            div.style.height = `calc(100% / ${size})`;
            container.appendChild(div);
        }
    }
}

createGrid(ORIGINAL_SIZE);