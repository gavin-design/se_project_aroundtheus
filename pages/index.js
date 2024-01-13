import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button-disabled",
  inputErrorClass: "modal__input_type-error",
  errorClass: "modal__input-type-visable-error",
};

const addCardFormEl = document.querySelector("#add-card-form");
const editProfileFormEl = document.querySelector("#profile-edit-form");

const addCardFormValidator = new FormValidator(settings, addCardFormEl);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(settings, editProfileFormEl);
editProfileFormValidator.enableValidation();
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  TEMPLATES                                 */
/* -------------------------------------------------------------------------- */
const cardListEl = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const modals = [...document.querySelectorAll(".modal")];
modals.forEach((modal) => {
  modal.addEventListener("mousedown", (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    ) {
      closeModal(modal);
    }
  });
});

/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileModalClosedButton = profileEditModal.querySelector(
  "#profile-modal-closed-button"
);
/* -------------------------------------------------------------------------- */
/*                               Add Card Button                              */
/* -------------------------------------------------------------------------- */
const addCardButton = document.querySelector("#add-card-button");
const addCardModal = document.querySelector("#add-card-modal");
const previewImageModal = document.querySelector("#preview-image-modal");
const addCardModalClosedButton = addCardModal.querySelector(
  "#add-card-modal-closed-button"
);
const previewImageModalClosedButton = document.querySelector(
  "#preview-image-modal-closed-button"
);
const previewImageModalImg =
  previewImageModal.querySelector(".modal__card-image");
const previewModalHeading = previewImageModal.querySelector(
  ".modal__preview-heading"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = document.forms["profile-edit-form"];
const addCardFormElement = document.forms["add-card-edit-form"];
const addCardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_name"
);
const addCardUrlInput = addCardFormElement.querySelector(
  ".modal__input_type_url"
);

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEsc);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEsc);
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button-active");
  });
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardImageEl.addEventListener("click", () => {});

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;
  return cardElement;
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function renderCard(card, cardListEl) {
  cardListEl.prepend(card);
}

function handleProfileEditFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;

  console.log(profileTitleInput.value);
  console.log(profileDescription.value);
  closeModal(profileEditModal);
}
function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardUrlInput.value;
  generateCard({ name, link });
  e.target.reset();
  closeModal(addCardModal);
}

function handleEsc(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
    console.log(e);
  }
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

addCardButton.addEventListener("click", () => openModal(addCardModal));
profileEditForm.addEventListener("submit", handleProfileEditFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent.trim();
  profileDescriptionInput.value = profileDescription.textContent.trim();
  openModal(profileEditModal);
});

const generateCard = (data) => {
  const card = new Card(data, "#card-template", (name, link) => {
    previewImageModalImg.src = link;
    previewImageModalImg.alt = name;
    previewModalHeading.textContent = name;
    openModal(previewImageModal);
  });

  const cardNode = card.getView();
  renderCard(cardNode, cardListEl);
};

initialCards.forEach((data) => {
  generateCard(data);
});
