import {Modal} from "./Modal.js";

export default class ModalWithForm extends Modal {
  constructor(modalSelector, formValidator) {
    super({ modalSelector });
    this._modalForm = this._modalElement.querySelector(".modal__form");
    this._formValidator = formValidator;
  }

  closeModal() {
    this._modalForm.reset();
    super.closeModal();
  }

  _getInputValues() {
    //this._inputEls;
    return this._formValidator._inputEls;
  }

  setEventListeners(callBack) {
    super.setEventListeners(callBack);
    const inputValues = this._getInputValues();

    this._modalForm.addEventListener("submit", function (e) {
      e.preventDefault();

      callBack(...inputValues);
      //callBack();
    });
  }
}

// The ModalWithForm should be a child of Modal, and it should comply with the following requirements:

// It accepts two arguments: the Modal selector and a callback function, which ModalWithForm calls when the form’s submit event fires.
// It has a private method named _getInputValues(), which collects data from all the input fields and returns it as an object.
//This data should then be passed to the submission handler as an argument.
// It overrides the setEventListeners() parent method. The setEventListeners() method of the ModalWithForm class should add a submit event listener to the form
//and call the setEventListeners() method of the parent class.

// Create an instance of the ModalWithForm class for each Modal that contains a form, and call their setEventListeners() method.
// index.js
