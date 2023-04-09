export class Popup {
    constructor(selector, template, { ...data }) {
        this._selector = selector;
        this._template = template;
        this._data = data;
    }

    _templatePopup() {
        this.template = document.querySelector(this._template)
            .content.querySelector('.popup')
            .cloneNode(true)
        return this.template
    }

    _createPopup() {
        this.body = document.querySelector('body')
        this.popup = this._templatePopup();
        this.container = this.popup.querySelector('.popupContainer')
        this.popupImage = this.popup.querySelector('.popupImage')
        this.popupTitle = this.popup.querySelector('.popupTitle');
        this.popupSubtitle = this.popup.querySelector('.popupSubtitle');
        this.popupDescription = this.popup.querySelector('.popupDescription');
        this.age = this.popup.querySelector('.age');
        this.inoculations = this.popup.querySelector('.inoculations');
        this.diseases = this.popup.querySelector('.diseases');
        this.parasites = this.popup.querySelector('.parasites');
        this.popupClose = this.popup.querySelector('.popupClose');
        this.popupTitle.textContent = this._data.name;
        this.popupSubtitle.textContent = `${this._data.type} - ${this._data.breed}`;
        this.popupDescription.textContent = this._data.description;
        this.container.style.backgroundImage = `url(${this._data.img})`
        this.age.textContent = this._data.age;
        this.inoculations.textContent = this._data.inoculations;
        this.diseases.textContent = this._data.diseases;
        this.parasites.textContent = this._data.parasites;
        this.popupClose.addEventListener('click', () => this.hidePopup(this.popup, this.body))
        return this.popup
    }
    addPopup() {
        this._selector.append(this._createPopup())
    }

    showPopup() {
        this._createPopup().classList.add('popupOpened');
        this.body.classList.add('blocked');
    }

    hidePopup(element, body) {
        element.classList.remove('popupOpened');
        body.classList.remove('blocked')
    }
}