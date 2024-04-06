
class Modal {
  constructor(modalSelector) {
    this._modalElement = document.querySelector(modalSelector); 
    //this.setEventListeners()
  
   
  }

  open() {
    this._modalElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._modalElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keydown",  (e) => {
      this._handleEscClose(e)
    })
    this._modalElement.addEventListener("mousedown", (e) => {
      if (
        e.target.classList.contains("modal") ||
        e.target.classList.contains("modal__close")
       ) {
        this.close();
      }
    });
  }
}
export default Modal;