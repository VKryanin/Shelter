import { selectors, pets } from './utils.js';
import { Popup } from './popup.js';

const ourFriendsLeft = document.querySelector('.ourFriendsLeft');
const ourFriendsRight = document.querySelector('.ourFriendsRight');
const ourFriendsCards = document.querySelector('.ourFriendsCards');

function ShowElement(element) {
    element.classList.toggle('Show')
    selectors.burgerMenu.classList.contains('Show')
        ? selectors.headerBurger.classList.add('rotate')
        : selectors.headerBurger.classList.remove('rotate');
}

selectors.headerBurger.addEventListener('click', () => ShowElement(selectors.burgerMenu));

for (let index = 0; index < selectors.ourFriendsItem.length; index++) {
    let popup = new Popup(selectors.ourFriends, '#templateCard', { ...selectors.ourFriendsItem[index], ...pets[index] })
    popup.addPopup()
    selectors.ourFriendsItem[index].addEventListener('click', () => {
        const popups = document.querySelectorAll('.popup')
        popups[index].classList.add('popupOpened')
        document.querySelector('.root').classList.add('blocked')
    })
}
let offSet = ourFriendsCards.offsetLeft;

function moveLeft() {
    // console.log(ourFriendsCards.offsetLeft);
    if (ourFriendsCards.offsetLeft >= -1679) {
        offSet -= 336;
        return ourFriendsCards.style.left = offSet + 'px'
    } else {
        ourFriendsLeft.disabled = true;
    }
};

function moveRight() {
    console.log(ourFriendsCards.offsetLeft);
    if (ourFriendsCards.offsetLeft == 0) {
        ourFriendsRight.disabled = true;
    } else {
        offSet += 336;
        return ourFriendsCards.style.left = offSet + 'px'
    }
    
};

console.log(ourFriendsCards.offsetLeft);

ourFriendsLeft.addEventListener('click', () => moveLeft());
ourFriendsRight.addEventListener('click', () => moveRight());


