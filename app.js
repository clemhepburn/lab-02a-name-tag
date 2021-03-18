const div = document.getElementById('change-name');
const input = document.getElementById('name-input');
const button = document.getElementById('name-button');

button.addEventListener('click', () => {
    const userTyped = input.value;
    div.textContent = userTyped;
    div.style.fontFamily = 'cursive';
    div.style.fontSize = '72px';
})