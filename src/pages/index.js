import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import ModalWithForm from "../components/ModalWithForm.js";
import ModalWithImage from "../components/ModalWithImage.js";
import UserInfo from "../components/UserInfo.js";
import initialCards from "../utils/initialCards.js";
import Section from "../components/Section.js";
import modal from "../components/Modal.js";
import "../pages/index.css";

modal.onCreateModal = (modal) => {
  modal._modalElement.addEventListener("mousedown", (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    ) {
      modal.closeModal();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.closeModal();
    }
  })
};
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
const profileEditButton = document.querySelector("#profile-edit-button");

const editProfileForm = new ModalWithForm(
  "#profile-edit-modal",
  editProfileFormValidator
);
editProfileForm.setEventListeners(function (title, description) {
  userInfo.setUserInfo(title.value, description.value)
  editProfileForm.closeModal();

});

profileEditButton.addEventListener("click", () => {
  const [title, description] = userInfo.getUserInfo();
  profileTitleInput.value = title;
  profileDescriptionInput.value = description;

  editProfileFormValidator.resetValidation();
  editProfileForm.openModal();
});

const addCardButton = document.querySelector("#add-card-button");
const editAddCardForm = new ModalWithForm("#add-card-modal", addCardFormValidator);
editAddCardForm.setEventListeners(function (addCardTitleInput, addCardUrlInput) {
  const name = addCardTitleInput.value;
  const link = addCardUrlInput.value;
  generateCard(
    name,
    link
  );
  editAddCardForm.closeModal();
  addCardFormValidator.resetValidation();
});

addCardButton.addEventListener("click", () => editAddCardForm.openModal());

/* -------------------------------------------------------------------------- */
/*                               Add Card Button                              */
/* -------------------------------------------------------------------------- */

const cardListEl = document.querySelector(".cards__list");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const section = new Section(

  function (card) {
    console.log(card)
    cardListEl.prepend(card);
  },
  ".cards__list"
)

function generateCard(name, link) {
  const card = new Card(name, link, "#card-template", (name, link) => {
    const preview = new ModalWithImage("#preview-image-modal", name, link);
    preview.openModal();

  });
  section.addItem(card.getView());
}

initialCards.forEach(([name, link]) => {
  generateCard(name, link)
});

section.renderItems()