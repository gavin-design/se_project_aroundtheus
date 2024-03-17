class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    this.enableValidation();
  }

  hasInvalidInput(inputList) {
    return !inputList.every((inputEl) => inputEl.validity.valid);
  }

  showInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  hideInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.remove(this._errorClass);
  }

  checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      return this.showInputError(inputEl);
    }
    this.hideInputError(inputEl);
  }

  toggleButtonState() {
    const hasInvalidInputResult = this.hasInvalidInput(this._inputEls);
    this._submitButton.classList.toggle(
      this._inactiveButtonClass,
      hasInvalidInputResult
    );
    this._submitButton.disabled = hasInvalidInputResult;
  }

  setEventListeners() {
    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        this.checkInputValidity(inputEl);
        this.toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._inputEls.forEach((inputEl) => this.hideInputError(inputEl));
    this.toggleButtonState();
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this.setEventListeners();
  }
}
export default FormValidator;
