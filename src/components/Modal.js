const modal = {}

class Modal {
  constructor(modalSelector) {
    this._modalElement = document.querySelector(modalSelector);
    modal.onCreateModal(this);
  }

  openModal() {
    this._modalElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closeModal() {
    this._modalElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.closeModal();
    }
  }

  setEventListeners() {}
}
modal.Modal = Modal
export default modal;