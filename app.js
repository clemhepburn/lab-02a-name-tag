const div = document.getElementById('change-name');
const input = document.getElementById('name-input');
const button = document.getElementById('name-button');
const pinkButton = document.getElementById('pink-button');
const greenButton = document.getElementById('green-button')
const tomatoButton = document.getElementById('tomato-button');

button.addEventListener('click', () => {
    const userTyped = input.value;
    div.textContent = userTyped;
    div.style.fontFamily = 'cursive';
    div.style.fontSize = '72px';
})

tomatoButton.addEventListener('click', () => {
    div.style.backgroundColor = 'tomato';
})

greenButton.addEventListener('click', () => {
    div.style.backgroundColor = 'green';
})

pinkButton.addEventListener('click', () => {
    div.style.backgroundColor = 'pink';
})