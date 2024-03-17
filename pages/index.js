import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import ModalWithForm from "../components/ModalWithForm.js";
import ModalWithImage from "../components/ModalWithImage.js"; 
import UserInfo from "../components/UserInfo.js"; 
import initialCards from "../utils/constants.js";
import Section from "../components/Section.js";
import {Modal, modals} from "../components/Modal.js";


/* -------------------------------------------------------------------------- */
/*                              Form Settings                               */
/* -------------------------------------------------------------------------- */
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",  
  inactiveButtonClass: "modal__save-button-disabled",
  inputErrorClass: "modal__input_type-error",
  errorClass: "modal__input-type-visable-error",
};

const addCardFormEl = document.forms["add-card-edit-form"];
const editProfileFormEl = document.forms["profile-edit-form"];

const addCardFormValidator = new FormValidator(settings, addCardFormEl);
const editProfileFormValidator = new FormValidator(settings, editProfileFormEl);

/* -------------------------------------------------------------------------- */
/*                                  TEMPLATES                                 */
/* -------------------------------------------------------------------------- */

const cardListEl = document.querySelector(".cards__list");

function renderCard(card, cardListEl) {
  cardListEl.prepend(card);
}

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */
const userInfo = new UserInfo(".profile__title", ".profile__description") 
const profileEditButton = document.querySelector("#profile-edit-button");

const editProfileForm = new ModalWithForm(
  "#profile-edit-modal",
  editProfileFormValidator
);
editProfileForm.setEventListeners(function(title, description)  {
  console.log(title, description)
   userInfo.setUserInfo(title.value, description.value) 
  editProfileForm.closeModal();

});   

profileEditButton.addEventListener("click", () => {
 const [title, description] = userInfo.getUserInfo();
 console.log(title, description);
  profileTitleInput.value = title;
   profileDescriptionInput.value = description;

  editProfileFormValidator.resetValidation();
  editProfileForm.openModal();
});

const addCardButton = document.querySelector("#add-card-button");
const editAddCardForm = new ModalWithForm("#add-card-modal",addCardFormValidator); 
editAddCardForm.setEventListeners(function ( addCardTitleInput, addCardUrlInput) {
  const name = addCardTitleInput.value;
  const link = addCardUrlInput.value;
  generateCard({ name, link });
  editAddCardForm.closeModal();
  addCardFormValidator.resetValidation();
}
);

addCardButton.addEventListener("click", () => editAddCardForm.openModal());

/* -------------------------------------------------------------------------- */
/*                               Add Card Button                              */
/* -------------------------------------------------------------------------- */


const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const generateCard = (data) => {
  const card = new Card(data, "#card-template", (name, link) => {
     const preview = new ModalWithImage("#preview-image-modal", name, link);
     preview.openModal();

  });

  const cardNode = card.getView();
  renderCard(cardNode, cardListEl);
};

initialCards.forEach((data) => {
  generateCard(data);
});


modals.forEach((modal) => {
  modal._modalElement.addEventListener("mousedown", (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    ) {
     modal.closeModal();
    }
  });
});



