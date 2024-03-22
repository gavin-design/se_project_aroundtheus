export default class Section {
  constructor(render, containerSelector) {
    this._items = [];
    this._render = render;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItem(item) {
    this._container.prepend(item);
  }


  renderItems() {

    this._items.forEach((item) => {
      this.renderItem(item)

    });
  }
}