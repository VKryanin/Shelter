import { selectors, pets } from './utils.js';
import { Popup } from './popup.js';

function ShowElement(element) {
    element.classList.toggle('Show')
    selectors.burgerMenu.classList.contains('Show')
        ? selectors.headerBurger.classList.add('rotate')
        : selectors.headerBurger.classList.remove('rotate');
}

selectors.headerBurger.addEventListener('click', () => ShowElement(selectors.burgerMenu));

for (let index = 0; index < selectors.petsItem.length; index++) {
    let popup = new Popup(selectors.petsContent, '#templateCard', { ...selectors.petsItem[index], ...pets[index] })
    popup.addPopup()
    selectors.petsItem[index].addEventListener('click', () => {
        const popups = document.querySelectorAll('.popup')
        popups[index].classList.add('popupOpened')
        document.querySelector('.rootWhite').classList.add('blocked')
    })
}