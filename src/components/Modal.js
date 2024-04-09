
class Modal {
  constructor(modalSelector) {
    this._modalElement = document.querySelector(modalSelector); 
    //this.setEventListeners()
  
   
  }

  open() {
    this._modalElement.classList.add("modal_opened");
    this._callBack = (e) => {
         this._handleEscClose(e)
      }
    document.addEventListener("keydown", this._callBack );
  }

  close() {
    this._modalElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._callBack);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
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