function init() {
const animal = prompt("What animal is the superhero most similar to?");
const gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
const age = prompt("How old is the superhero?");
const ageNum = parseInt(age);[]

const animalRegex = /^[a-zA-Z]{1,20}$/;
const genderRegex = /^(male|female)$/i;
const ageRegex = /^[1-9][0-9]{0,4}$/;

if(!animalRegex.test(animal)) {
    alert("Invalid animal name!");
    return;
}

if(gender !== "" && !genderRegex.test(gender)) {
    alert("Invalid gender!");
    return;
}

if(!ageRegex.test(age)) {
    alert("Invalid age");
    return;
}

let description;

if(gender.toLowerCase() === 'male' && ageNum < 18) {
    description = 'boy';
} else if(gender.toLowerCase() === 'male' && ageNum >= 18) {
    description = 'man';
} else if(gender.toLowerCase() === 'female' && ageNum < 18) {
    description = 'girl';
} else if(gender.toLowerCase() === 'female' && ageNum >= 18) {
    description = 'woman';
} else if(gender === '' && ageNum < 18) {
    description = 'kid';
} else {
    description = 'hero';
}

alert(`The superhero's name is: ${animal}-${description}!`);

}

init();


