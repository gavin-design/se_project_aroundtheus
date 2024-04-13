export default class Section {
  constructor({items, render}, containerSelector) {
    
    this._container = document.querySelector(containerSelector);
    this._render = render
    //this.renderItems(options.items)
    this._items = items
  }
  addItem(item) {
    this._container.prepend(item);
  }

  renderItems(item) {
    this._render(item);
  }

  renderItems(items) {
    this._items.forEach((item) => {
      this.renderItem(item)
    });
  }
}