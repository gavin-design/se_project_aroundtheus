export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = [items];
    this._renderedItems = data;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(".modal__form");
  }

  setItem(element) {
    this._containerSelector.append(element);
  }

  clear() {
    this._containerSelector.innerHTML = "";
  }

  renderItems() {
    this.clear();

    this._renderedItems.forEach((item) => {
      this._renderer(item);
      addItem();
    });
  }
}
