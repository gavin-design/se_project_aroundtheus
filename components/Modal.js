export default class Modal {
  constructor({ modalSelector }) {
    this._modalElement = document.querySelector(modalSelector);
  }

  openModal() {}
  // opens modal

  closeModal() {}
  // closes modal

  _handleEscClose() {}
  // listens for Esc  key

  setEventListeners() {
    editProfileFormEl.addEventListener("submit", handleProfileEditFormSubmit);
    addCardFormEl.addEventListener("submit", handleAddCardFormSubmit);
  }
  //  listens for click event
}
// The constructor accepts a single parameter, the popup selector.
// It has public methods called open() and close() to open and close the popup.
//The open() method should be called in the preexisting event handlers in index.js.
// It has a private method named _handleEscClose() that stores the logic for closing the popup by pressing the Esc key.
// It has a public method named setEventListeners() that adds a click event listener to the close icon of the popup.
//The modal window should also close when users click on the shaded area around the form.
// You won’t instantiate your Popup class directly in index.js; instead, you’ll instantiate its children classes, as described below.
