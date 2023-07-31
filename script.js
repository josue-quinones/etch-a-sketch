const container = document.querySelector('div.container');
const ORIGINAL_SIZE = 16

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.classList.add("grid-square");

            container.appendChild(div);
        }
    }
}

createGrid(ORIGINAL_SIZE);

console.log(container);