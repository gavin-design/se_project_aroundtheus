import Modal from "./Modal.js";

export default class ModalWithForm extends Modal {
  constructor(modalSelector, formValidator, handleSubmit) {
    super(modalSelector);
    this._modalForm = this._modalElement.querySelector(".modal__form");
    this._formValidator = formValidator;
    this._handleSubmit = handleSubmit;
   this.setEventListeners()
    
  }

 
 

_getInputValues() {
  const values = {}
    const inputEls = this._formValidator.getInputEls();
    for (let i = 0 ; i< inputEls.length; ++i) {
      console.log(inputEls[i].name)
      values[inputEls[i].name] = inputEls[i].value
    
    }
    return values
  }

  setEventListeners() {
    console.log(this._modalForm)
    console.log(this._modalElement)
   super.setEventListeners();
    

    this._modalForm.addEventListener("submit", (e) => {
      const inputValues = this._getInputValues();
      this._handleSubmit(inputValues);
     this._modalForm.reset();
    this._formValidator.toggleButtonState();
    });
  }
}