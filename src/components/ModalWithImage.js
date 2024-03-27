import Modal from "./Modal.js";
export default class ModalWithImage extends Modal {
  constructor(modalSelector, options) {
    super(modalSelector);
    this._name = options.name;
    this._link = options.link;
    const previewImageModalImg = this._modalElement.querySelector(".modal__card-image");
    previewImageModalImg.src = options.link;
    previewImageModalImg.alt = options.name;
    const previewModalHeading = this._modalElement.querySelector(".modal__preview-heading");
    previewModalHeading.textContent = options.name;
  }

  open(options) {
    this._name = options.name;
    this._link = options.link;
    super.open();



  }


}