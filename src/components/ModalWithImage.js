import Modal from "./Modal.js";
export default class ModalWithImage extends Modal {
  constructor(modalSelector, name, link) {
    super(modalSelector);
    this._name = name;
    this._link = link;
    const previewImageModalImg = this._modalElement.querySelector(".modal__card-image");
    previewImageModalImg.src = link;
    previewImageModalImg.alt = name;
    const previewModalHeading = this._modalElement.querySelector(".modal__preview-heading");
    previewModalHeading.textContent = name;
  }

  open(name, link) {
    this._name = name;
    this._link = link;
    super.open();



  }


}