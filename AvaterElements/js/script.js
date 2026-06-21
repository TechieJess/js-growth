const characters = document.querySelectorAll('#characters li');

characters.forEach(function(character) {
    const nameText = character.textContent;
    character.textContent = '';
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = nameText;
    nameSpan.className = 'char-name';
    character.appendChild(nameSpan);

    if(character.className !== 'good' && character.className !== 'evil' && character.className !== 'unknown') {
        character.className = 'unknown';
    } 
    
    if(!character.dataset.element) {
        character.dataset.element = 'none';
    } 

    const elements = character.dataset.element.split(' ');

    const elementsContainer = document.createElement('div');
    elementsContainer.className = 'elements-container';

    elements.forEach(function(element) {
        const circle = document.createElement('div');
        circle.className = `elem ${element}`;
        elementsContainer.appendChild(circle);

        if(element === 'none') {
            const line = document.createElement('div');
            line.className = 'line';
            circle.appendChild(line);
        }
    });

    character.appendChild(elementsContainer);
});