export default class Section {
  constructor(render, containerSelector) {
    this._items = [];
    this._render = render;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.append(item);
  }

  renderItem(item) {
    this._container.append(item);
  }
//const cardListEl = document.querySelector(".cards__list");
 //cardListEl.prepend(card);  
  renderItems() {

    this._items.forEach((item) => {
      this.renderItem(item)

    });
  }
}