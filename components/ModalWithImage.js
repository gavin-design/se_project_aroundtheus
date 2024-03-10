import Modal from "./Modal.js";
class ModalWithImage extends Modal {
  constructor({ name, link }) {
    this._name = data.name;
    this._link = data.link;
    //
  }

  // data should be an object containing the name and link
  //open(data) {
  // set the image's src and alt
  // set the caption's textContent
  //super.open();
  //}
  openModal(data) {
    this._data = data;
    // image src and alt text
    super.openModal();
  }
}
