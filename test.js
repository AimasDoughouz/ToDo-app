// function getSavedCards() {

//     let savedCards = localStorage.getItem('cards');
    
//     if(savedCards) {
//         let container = document.getElementById('container');
//         container.innerHTML = JSON.parse(savedCards).toString();
//         addRemoveCardListener();
//         addCheckCardListener();
//         return JSON.parse(savedCards);
//     } else {
//         return [];
//     }
    
// }
// // let savedCards = [];

// function saveCard(cardArr) {
//     let savedCards = getSavedCards();
//     console.log(cardArr);
    
//     for (let j = 0; j < cardArr.length; j++) {
//         if(!cardArr[j] || savedCards.indexOf(cardArr[j]) === -1) {
//             return false;
//         }
//         savedCards.push(cardArr[j]);
//         // localStorage.setItem('cards', cardstr.outerHTML);
        
//         localStorage.setItem('cards', JSON.stringify(savedCards));
       
//         return true;
//     }
    
// }


// // window.onload = function() {
// //     getSavedCards();
// // }