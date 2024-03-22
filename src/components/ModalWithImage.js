import modal from "./Modal.js";
export default class ModalWithImage extends modal.Modal {
  constructor(modalSelector, name, link) {
    console.log(modalSelector)
    super(modalSelector);
    this._name = name;
    this._link = link;
    const previewImageModalImg = this._modalElement.querySelector(".modal__card-image");
    previewImageModalImg.src = link;
    previewImageModalImg.alt = name;
    const previewModalHeading = this._modalElement.querySelector(".modal__preview-heading");
    previewModalHeading.textContent = name;
  }

  openModal(data) {
    this._data = data;
    super.openModal();



  }


}