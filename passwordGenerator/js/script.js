// Grabbing page elements...
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
const bars = document.querySelectorAll('.bar')

// This changes the copy icon back after the tick disappears
const originalCopyIcon = copy.innerHTML;

// This turns true once a real password exists, so Copy ignores the starter text
let hasGenerated = false;
// Holds the timer so a second copy click can cancel the first one
let copyTimer 

// This shows the chosen length
range.addEventListener('input', slider);
function slider(e) {
    characterLength.textContent = range.value;
}

//Generate button
generate.addEventListener('click', generated);

function generated(e) {
// Build the pool of allowed characters from the ticked boxes, and count how many types are ticked (used for strength later)
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

// Stop if there is nothing to build a password from
if (pool.length === 0) {
    return;
}
// Stop if the slider is at 0 
if (range.value === "0") {
    return;
}

// Pick one random character from the pool, once per unit of length
let password = "";

for (let i = 0; i < range.value; i++) {
    const position = Math.floor(Math.random() * pool.length);
    const character = pool[position];
    password = password + character;
}

// Show the password and mark that a real one exists
generatedPassword.textContent = password;
generatedPassword.classList.add('generated');
hasGenerated = true;


// STRENGTH RATING
// 1. Length gives a level from 1 to 4
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

// 2. A password is only as strong as its weaker side, so take the lower of the length level and the variety count
const finalLevel = Math.min(tally, lengthLevel);

// 3. Turn the final level into a word
if (finalLevel === 1) {
    strengthText.textContent = "WEAK";
} else if (finalLevel === 2) {
    strengthText.textContent = "MEDIUM";
} else if (finalLevel === 3) {
    strengthText.textContent = "GOOD";
} else if (finalLevel === 4) {
    strengthText.textContent = "STRONG";
}

// Lights up the bars
for (let i = 0; i < bars.length; i++) {
    if (i < finalLevel) {
        bars[i].classList.add('filled');
    } else {
        bars[i].classList.remove('filled');
    }
}
}

// COPY BUTTON
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
    }, 2000);
}