import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import ModalWithForm from "../components/ModalWithForm.js";
import ModalWithImage from "../components/ModalWithImage.js";
import UserInfo from "../components/UserInfo.js";
import initialCards from "../utils/constants.js";
import Section from "../components/Section.js";
import "../pages/index.css";

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



/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */
const userInfo = new UserInfo(".profile__title", ".profile__description")
const editProfileButton = document.querySelector("#profile-edit-button");

const editProfileModal = new ModalWithForm(
  "#profile-edit-modal",
  editProfileFormValidator, 
  
  function (title, description) {
    console.log(title, description)
    userInfo.setUserInfo(title, description)
    editProfileModal.close();
  
  }
);

editProfileButton.addEventListener("click", () => {
  const [title, description] = userInfo.getUserInfo();
  profileTitleInput.value = title;
  profileDescriptionInput.value = description;

  editProfileFormValidator.resetValidation();
  editProfileModal.open();
});

const addCardButton = document.querySelector("#add-card-button");
const addCardModal = new ModalWithForm("#add-card-modal", addCardFormValidator, function (name, link) {
  generateCard(
    name,
    link
  );
  addCardModal.close();
 
});

addCardButton.addEventListener("click", () => addCardModal.open());

/* -------------------------------------------------------------------------- */
/*                               Add Card Button                              */
/* -------------------------------------------------------------------------- */

//const cardListEl = document.querySelector(".cards__list");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const section = new Section(

  function (card) {
    console.log(card)
    //cardListEl.prepend(card);
  },
  ".cards__list"
)

function generateCard(name, link) {
  const card = new Card(name, link, "#card-template", (name, link) => {
    const preview = new ModalWithImage("#preview-image-modal", name, link);
    preview.open();

  });
  section.addItem(card.getView());
}

initialCards.forEach(([name, link]) => {
  generateCard(name, link)
});

section.renderItems()