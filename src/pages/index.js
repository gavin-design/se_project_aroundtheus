import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import ModalWithForm from "../components/ModalWithForm.js";
import ModalWithImage from "../components/ModalWithImage.js";
import UserInfo from "../components/UserInfo.js";
import constants from "../utils/constants.js";
import Section from "../components/Section.js";
import "../pages/index.css";

/* -------------------------------------------------------------------------- */
/*                              Form Settings                               */
/* -------------------------------------------------------------------------- */

const addCardFormEl = document.forms["add-card-edit-form"];
const editProfileFormEl = document.forms["profile-edit-form"];

const addCardFormValidator = new FormValidator(constants.settings, addCardFormEl);
const editProfileFormValidator = new FormValidator(constants.settings, editProfileFormEl);

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
  
  function (options) {
    console.log(options.title, options.description)
    userInfo.setUserInfo(options.title, options.description)
    editProfileModal.close();
  
  }
);

editProfileButton.addEventListener("click", () => {
  const options = userInfo.getUserInfo();
  profileTitleInput.value = options.title;
  profileDescriptionInput.value = options.description;

  editProfileFormValidator.resetValidation();
  editProfileModal.open();
});

const addCardButton = document.querySelector("#add-card-button");
const addCardModal = new ModalWithForm("#add-card-modal", addCardFormValidator, function (options) {
  generateCard(options);
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
    //
  },
  ".cards__list"
)

function generateCard(options) {
  const card = new Card(options, "#card-template", () => {
    const preview = new ModalWithImage("#preview-image-modal", options);
    preview.open();
// can i have clarification opening and closing ModalImages in a more efficient manner
  });
  section.addItem(card.getView());
}

constants.initialCards.forEach((options) => {
  generateCard(options)
});

section.renderItems()