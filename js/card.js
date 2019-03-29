
let cards = [];

document.getElementById('add-item').addEventListener('click', function(event) {
    event.preventDefault();
   let title = document.getElementById('item').value;
   let description = document.getElementById('description').value;
   document.getElementById('warning').style.display = 'none';
   if (title && description) {
       appendItemToDom(title, description)
       addRemoveCardListener();
       addCheckCardListener();
       document.getElementById('item').value = '';
       document.getElementById('description').value = '';
   } else {
    document.getElementById('warning').style.display = 'block';
   } 
})

function appendItemToDom(item1, item2) {
    let card = document.createElement('div');
   
    addDateStamp(card);
    addCardTitle(card, item1);
    addCardDescription(card, item2);
    addStamp(card);
    addRemoveButton(card);
    
    card.classList.add('card', 'card__todo'); 
    let container = document.getElementById('container');
    cards.push(card.outerHTML)
    container.innerHTML = cards.join('');
}

function addRemoveCardListener() {
    let removeButton = document.getElementsByClassName('remove')
    for(let i = 0; i < removeButton.length; i++){
        removeButton[i].addEventListener('click', removeCard);
    }
}
function addCheckCardListener() {
    let card = document.getElementsByClassName('card')
    for(let i = 0; i < card.length; i++){
        card[i].addEventListener('click', checkCard);
    }
}


function removeCard() {
    let card = this.parentNode;
    let parent = card.parentNode;
    let cardValue = card.outerHTML;
    parent.removeChild(card);
    let cardIndexInCards = cards.findIndex(e => e === cardValue);
    cards.splice(cardIndexInCards, 1);
}

function checkCard(e) {
    let card = e.currentTarget;
    cardClass = card.className;
    if (card.className === 'card card__done') {
        card.className = 'card card__todo';
    } else {   
        card.className = 'card card__done';
    }
}


function addDateStamp(card) {
    let cardDate = document.createElement('footer');
    card.appendChild(cardDate);
    cardDate.innerText = new Date().toLocaleString();
};
function addCardTitle(card, item1) {
    let cardTitle = document.createElement('h2');
    card.appendChild(cardTitle);
    cardTitle.innerText = item1;
};
function addCardDescription(card, item2) {
    let cardDescription = document.createElement('p');
    card.appendChild(cardDescription);
    cardDescription.innerText = item2;
};
function addStamp(card) {
    let stamp = document.createElement('span');
    stamp.innerText = 'Completed';
    stamp.classList.add('stamp', 'stamp--completed');
    card.appendChild(stamp);
};
function addRemoveButton(card) {
    let removeButton = document.createElement('button');
    card.appendChild(removeButton);
    removeButton.innerText = 'Remove';
    removeButton.classList.add('remove');
};



