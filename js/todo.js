/* eslint-disable no-undef */
const cards = [];

function addRemoveCardListener() {
  const removeButton = document.getElementsByClassName('remove');
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', removeCard);
  }
}
function addCheckCardListener() {
  const card = document.getElementsByClassName('card');
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', checkCard);
  }
}


function removeCard() {
  const card = this.parentNode;
  const parent = card.parentNode;
  const cardValue = card.outerHTML;
  parent.removeChild(card);
  const cardIndexInCards = cards.findIndex(e => e === cardValue);
  cards.splice(cardIndexInCards, 1);
}

function checkCard(e) {
  const card = e.currentTarget;
  if (card.className === 'card card__done') {
    card.className = 'card card__todo';
  } else {
    card.className = 'card card__done';
  }
}

function addInputToCard() {
  const title = document.getElementById('item').value;
  const description = document.getElementById('description').value;
  document.getElementById('warning').style.display = 'none';
  if (title && description) {
    appendItemToDom(title, description);
    addRemoveCardListener();
    addCheckCardListener();
    document.getElementById('item').value = '';
    document.getElementById('description').value = '';
  } else {
    document.getElementById('warning').style.display = 'block';
  }
}

function addDateStamp(card) {
  const cardDate = document.createElement('footer');
  card.appendChild(cardDate);
  cardDate.innerText = new Date().toLocaleString();
}
function addCardTitle(card, title) {
  const cardTitle = document.createElement('h2');
  card.appendChild(cardTitle);
  cardTitle.innerText = title;
}
function addCardDescription(card, description) {
  const cardDescription = document.createElement('p');
  card.appendChild(cardDescription);
  cardDescription.innerText = description;
}
function addStamp(card) {
  const stamp = document.createElement('span');
  stamp.innerText = 'Completed';
  stamp.classList.add('stamp', 'stamp--completed');
  card.appendChild(stamp);
}
function addRemoveButton(card) {
  const removeButton = document.createElement('button');
  card.appendChild(removeButton);
  removeButton.innerText = 'Remove';
  removeButton.classList.add('remove');
}


document.getElementById('add-item').addEventListener('click', (event) => {
  event.preventDefault();
  addInputToCard();
});

function appendItemToDom(title, description) {
  const card = document.createElement('div');
  addDateStamp(card);
  addCardTitle(card, title);
  addCardDescription(card, description);
  addStamp(card);
  addRemoveButton(card);
  card.classList.add('card', 'card__todo');
  const container = document.getElementById('container');
  cards.push(card.outerHTML);
  container.innerHTML = cards.join('');
}
