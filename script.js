let password = document.querySelector('.password');
let length = document.querySelector('.length');
let input = document.querySelector('.input');
let upperCase = document.querySelector('#uppercase');
let number = document.querySelector('#number');
let symbol = document.querySelector('#symbol');
let button = document.querySelector('.button');
let str = "";
let randflag = 1;
var len = 8;
input.value = len;
upperCase.checked = false;
number.checked = false;
symbol.checked = false;
input.addEventListener('input', (event) => {
    length.innerHTML = event.target.value;
    len = event.target.value;
})
button.addEventListener('click', generatePassword);

function generatePassword() {
    let smallAlpha = "abcdefghijklmnopqrstuvwxyz";
    let bigAlpha = upperCase.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    let numArray = number.checked ? "0123456789" : "";
    let specChar = symbol.checked ? "!@#$%^&*()_+" : "";
    let passwordVar = smallAlpha + bigAlpha + numArray + specChar;
    str = "";
    for (let i = 0; i < len; i++) {

        randflag = Math.floor(Math.random() * (passwordVar.length));
        str += passwordVar[randflag];

    }
    password.innerHTML = str;


}
