const hero = document.querySelector('#hero');
const lab = document.querySelector('#lab');
const btn = document.querySelector('#btn');

btn.addEventListener('click', transformation)

 let isHulk = false;

function transformation() {

    if(isHulk) {
        isHulk = false;
        hero.textContent = 'Bruce Banner';
        lab.style.backgroundColor = '#ffb300';
        hero.style.fontSize = '60px';
        hero.style.letterSpacing = '2px';
    } else {
        isHulk = true;
        hero.textContent = 'Hulk';
        lab.style.backgroundColor = '#70964b';
        hero.style.fontSize = '130px';
        hero.style.letterSpacing = '6px';
    }

}
