import modal from "./Modal.js";

export default class ModalWithForm extends modal.Modal {
  constructor(modalSelector, formValidator) {
    super(modalSelector);
    this._modalForm = this._modalElement.querySelector(".modal__form");
    this._formValidator = formValidator;
  }

  closeModal() {
    this._modalForm.reset();
    super.closeModal();
  }

  _getInputValues() {
    return this._formValidator._inputEls;
  }

  setEventListeners(callBack) {
    super.setEventListeners(callBack);
    const inputValues = this._getInputValues();

    this._modalForm.addEventListener("submit", function (e) {
      callBack(...inputValues);

    });
  }
}