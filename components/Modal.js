const modals = [];
 class Modal {
  constructor({ modalSelector }) {
    this._modalElement = document.querySelector(modalSelector);
    modals.push(this)
  }

  openModal() {
    this._modalElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
      }
  // opens modal

  closeModal() {
    this._modalElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  // closes modal

  _handleEscClose(e) {
    if (e.key === "Escape") {
          this.closeModal();
          console.log(e);
    }
  }
  // listens for Esc  key

  setEventListeners() {
    // editProfileFormEl.addEventListener("submit", handleProfileEditFormSubmit);
    // (".modal__save-button");
    // addCardFormEl.addEventListener("submit", handleAddCardFormSubmit);
  }
  //  listens for click event
}
export {Modal, modals};

// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", handleEsc);
// }

// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", handleEsc);
//   const inputElements = modal.querySelectorAll("input");
//   console.log(inputElements);
// }

// function handleEsc(e) {
//   if (e.key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");
//     closeModal(openedModal);
//     console.log(e);
//   }
// }

// The constructor accepts a single parameter, the popup selector.
// It has public methods called open() and close() to open and close the popup.
//The open() method should be called in the preexisting event handlers in index.js.
// It has a private method named _handleEscClose() that stores the logic for closing the popup by pressing the Esc key.
// It has a public method named setEventListeners() that adds a click event listener to the close icon of the popup.
//The modal window should also close when users click on the shaded area around the form.
// You won’t instantiate your Popup class directly in index.js; instead, you’ll instantiate its children classes, as described below.
