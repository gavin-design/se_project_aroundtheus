import Modal from "./Modal.js";

export default class ModalWithForm extends Modal {
  constructor(modalSelector, formValidator, handleSubmit) {
    super(modalSelector);
    this._modalForm = this._modalElement.querySelector(".modal__form");
    this._formValidator = formValidator;
    this.setEventListeners(handleSubmit)
  }

  close() {

    super.close();
    
  }

_getInputValues() {
  const values = []
    const inputEls = this._formValidator.getInputEls();
    for (let i = 0 ; i< inputEls.length; ++i) {
      values.push(inputEls[i].value)
    
    }
    return values
  }

  setEventListeners(callBack) {
    super.setEventListeners(callBack);
    

    this._modalForm.addEventListener("submit", (e) => {
      const inputValues = this._getInputValues();
      callBack(...inputValues);
     this._modalForm.reset();
    this._formValidator.toggleButtonState();
    });
  }
}