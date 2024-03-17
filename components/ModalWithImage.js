import {Modal} from "./Modal.js";
export default class ModalWithImage extends Modal {
  constructor(modalSelector, name, link ) {
    super({ modalSelector });
    this._name = name;
    this._link = link;
    console.log(name, link);
    const previewImageModalImg =  this._modalElement.querySelector(".modal__card-image");
    previewImageModalImg.src = link;
    previewImageModalImg.alt = name;
    const previewModalHeading = this._modalElement.querySelector(".modal__preview-heading");
    previewModalHeading.textContent = name;
  }
  // const card = new Card(data, "#card-template", (name, link) => {
  //   previewImageModalImg.src = link;
  //   previewImageModalImg.alt = name;
  //   previewModalHeading.textContent = name;
  //   openModal(previewImageModal);
  // });

  // const previewImageModalClosedButton = document.querySelector(
  //   "#preview-image-modal-closed-button"
  // );
  // const previewImageModalImg =
  //   previewImageModal.querySelector(".modal__card-image");
  // const previewModalHeading = previewImageModal.querySelector(
  //   ".modal__preview-heading"
  // );
  
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
// The PopupWithImage class should be a child class of Popup. 

// This class will need to override the parent’s open() method. 
//The open() method of the PopupWithImage class will need to accept the name and 
//link of the card as arguments and add an image to the popup and the corresponding image src attribute along with a caption for the image. 
//This method should be called in your image click handler in index.js.

// Here’s an example of what the method declaration might look like:

// // data should be an object containing the name and link
// open(data) {
//    // set the image's src and alt
//    // set the caption's textContent
//    super.open();
//  }
// Create one instance of this class in index.js and call its parent’s setEventListeners() method.