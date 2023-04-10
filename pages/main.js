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
    if (ourFriendsCards.offsetLeft > -1350) {
        offSet -= 336;
        ourFriendsLeft.classList.remove('disable')
        return ourFriendsCards.style.left = offSet + 'px'
    } else {
        ourFriendsLeft.disabled = true;
        ourFriendsLeft.classList.add('disable')
    }
};

function moveRight() {
    if (ourFriendsCards.offsetLeft > -1) {
        ourFriendsRight.disabled = true;
        ourFriendsRight.classList.add('disable')
    } else {
        offSet += 336;
        ourFriendsRight.classList.remove('disable')
        return ourFriendsCards.style.left = offSet + 'px'
    }
};

ourFriendsLeft.addEventListener('click', () => {
    moveLeft();
    ourFriendsRight.classList.remove('disable');
});
ourFriendsRight.addEventListener('click', () => {
    ourFriendsLeft.classList.remove('disable');
    moveRight();
});


