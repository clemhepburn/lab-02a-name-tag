
//making objects for the nametag, input, and buttons
const div = document.getElementById('change-name');
const input = document.getElementById('name-input');
const button = document.getElementById('name-button');
const pinkButton = document.getElementById('pink-button');
const greenButton = document.getElementById('green-button')
const tomatoButton = document.getElementById('tomato-button');

//this tells the button to listen for a click
button.addEventListener('click', () => {
    //this makes an object for input value
    const userTyped = input.value;
    //this tells the text to change to the input value object
    div.textContent = userTyped;
    //this sets the font family
    div.style.fontFamily = 'cursive';
    //this changes the font size
    div.style.fontSize = '72px';
})
//this tells the tomato button to listen for a click
tomatoButton.addEventListener('click', () => {
    //this changes the background color to tomato
    div.style.backgroundColor = 'tomato';
})
//this tells the green button to listen for a click
greenButton.addEventListener('click', () => {
    //this changes the background color to green
    div.style.backgroundColor = 'green';
})
//this tells the pink button to listen for a click
pinkButton.addEventListener('click', () => {
    //this changes the background color to pink
    div.style.backgroundColor = 'pink';
})