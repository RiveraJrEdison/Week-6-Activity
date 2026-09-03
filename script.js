//PART 1========================================================//
const name = document.querySelector('#nameInput');

const welcome = document.querySelector('#welcomeMessage');

name.addEventListener('input', () => {
    welcome.textContent = 'Welcome, ' + name.value + '!';
});
//==============================================================//

//PART 2========================================================//
const form = document.querySelector('#studentForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted!');
})
//==============================================================//

//PART 3========================================================//
const lightModeButton = document.querySelector('#themeButton');
lightModeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
});
//==============================================================//

//PART 3========================================================//
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        document.querySelector('#welcomeMessage').textContent = '';
    }
});
//==============================================================//