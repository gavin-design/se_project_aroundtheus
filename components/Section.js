export default class Section {
  constructor(items, renderer, containerSelector) {
    this._items = items;
    //this._renderedItems = data;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._items.append(item);
  }

  // clear() {
  //   this._containerSelector.innerHTML = "";
  // }

  renderItems() {
    

    this._items.forEach((item) => {
      item._renderer();
      
    });
  }
}
// The first parameter of its constructor should be an object with two properties (items and renderer).
// The items property should be an array of data, which you must add to the page when it loads.
// The renderer property should be a function that creates and adds a single item to the page.
// Its second constructor parameter should be a CSS class selector where you'll add the card elements.
// It has a public method named renderItems() that renders all elements on the page.
// It should iterate through the items array and call the renderer() function on each item. 
//This method should be called once on page load.
// It has a public method named addItem() that takes a DOM element and adds it to the container.
// This method should be called when adding an individual card to the DOM.