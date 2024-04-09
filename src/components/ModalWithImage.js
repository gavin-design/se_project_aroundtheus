import Modal from "./Modal.js";
export default class ModalWithImage extends Modal {
  constructor(modalSelector) {
    super(modalSelector);
    this.previewImageModalImg = this._modalElement.querySelector(".modal__card-image");
    this.previewModalHeading = this._modalElement.querySelector(".modal__preview-heading");
    this.setEventListeners()
  }

  open(options) {
    this.previewImageModalImg.src = options.link;
    this.previewImageModalImg.alt = options.name;
    this.previewModalHeading.textContent = options.name;
    super.open();



  }


}