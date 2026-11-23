const range = document.querySelector('#length');
const characterLength = document.querySelector('.character-length');
const strengthText = document.querySelector('.strength-text')
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const generate = document.querySelector('#generate');
const generatedPassword = document.querySelector('#password');
const copy = document.querySelector('#copy');
const copyText = document.querySelector('#copy-text');
const originalCopyIcon = copy.innerHTML;
const bars = document.querySelectorAll('.bar')

let hasGenerated = false;
let copyTimer

range.addEventListener('input', slider);
function slider(e) {
    characterLength.textContent = range.value;
}

generate.addEventListener('click', generated);

function generated(e) {
let pool = "";
let tally = 0;

if (uppercase.checked) {
    pool = pool + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    tally = tally + 1;
} 
if (lowercase.checked) {
    pool = pool + "abcdefghijklmnopqrstuvwxyz";
    tally = tally + 1;
}
if (numbers.checked) {
    pool = pool + "0123456789";
    tally = tally + 1;
}
if (symbols.checked) {
    pool = pool + "!@#$%^&*";
    tally = tally + 1;
}

if (pool.length === 0) {
    return;
}
if (range.value === "0") {
    return;
}

let password = "";

for (let i = 0; i < range.value; i++) {
    const position = Math.floor(Math.random() * pool.length);
    const character = pool[position];
    password = password + character;
}

generatedPassword.textContent = password;
generatedPassword.classList.add('generated');
hasGenerated = true;

let rangeLength = Number(range.value);
let lengthLevel;

if (rangeLength <= 5) {
    lengthLevel = 1;
} else if (rangeLength <= 8) {
    lengthLevel = 2;
} else if (rangeLength <= 12) {
    lengthLevel = 3;
} else if (rangeLength <= 24) {
    lengthLevel = 4;
}

const finalLevel = Math.min(tally, lengthLevel);

if (finalLevel === 1) {
    strengthText.textContent = "WEAK";
} else if (finalLevel === 2) {
    strengthText.textContent = "MEDIUM";
} else if (finalLevel === 3) {
    strengthText.textContent = "GOOD";
} else if (finalLevel === 4) {
    strengthText.textContent = "STRONG";
}

for (let i = 0; i < bars.length; i++) {
    if (i < finalLevel) {
        bars[i].classList.add('filled');
    } else {
        bars[i].classList.remove('filled');
    }
}
}

copy.addEventListener('click', copied);

function copied(e) {
    if (hasGenerated === false) {
        return;
    }
    navigator.clipboard.writeText(generatedPassword.textContent);
    copy.textContent = "✓";
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
        copy.innerHTML = originalCopyIcon;
    }, 5000);
}