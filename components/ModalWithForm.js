import Modal from "./Modal.js";

export default class ModalWithForm extends Modal {
  constructor(modalSelector, handleFormSubmit) {
    super({ modalSelector });
    this._modalForm = this._modalElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    // this._handelAddCardFormSubmit = this._modalForm.document.querySelector(
    //   "#add-card-edit-form"
    // );
    this._handleProfileEditFormSubmit =
      this._modalForm.querySelector("#profile-edit-form");
  }

  // _handleProfileEditFormSubmit(e) {
  //   e.preventDefault();
  //   handleFormSubmit("#profile-edit-form");
  //   profileTitle.textContent = profileTitleInput.value;
  //   profileDescription.textContent = profileDescriptionInput.value;
  //   console.log(profileTitleInput.value);
  //   console.log(profileDescription.value);
  //   closeModal(profileEditModal);
  // }
  // _handleAddCardFormSubmit(e) {
  //   e.preventDefault();
  //   const name = addCardTitleInput.value;
  //   const link = addCardUrlInput.value;
  //   generateCard({ name, link });
  //   handleFormSubmit("#add-card-modal");
  //   closeModal(addCardModal);
  //   e.target.reset();
  //   addCardFormValidator.resetValidation();
  // }

  // _handleEsc(e) {
  //   if (e.key === "Escape") {
  //     const openedModal = document.querySelector(".modal_opened");
  //     closeModal(openedModal);
  //     console.log(e);
  //   }
  // }

  closeModal() {
    this._modalForm.reset();
    super.closeModal();
  }

  setEventListeners() {
    // add a submit event listener for this._modalForm
  }
}

// The PopupWithForm should be a child of Popup, and it should comply with the following requirements:

// It accepts two arguments: the popup selector and a callback function, which PopupWithForm calls when the form’s submit event fires.
// It has a private method named _getInputValues(), which collects data from all the input fields and returns it as an object. This data should then be passed to the submission handler as an argument.
// It overrides the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm class should add a submit event listener to the form and call the setEventListeners() method of the parent class.
// Create an instance of the PopupWithForm class for each popup that contains a form, and call their setEventListeners() method.
// index.js

// const newCardModal = new ModalWithForm("#add-card-modal", () => {});
// newCardModal.modalOpen();

// newCardModal.modalClosed();
