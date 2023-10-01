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
// const deleteButtons = document.querySelectorAll(".card__delete-button");
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
  cardImageEl.addEventListener("click", () => {
    previewImageModalImg.src = data.link;
    previewImageModalImg.alt = data.name;
    previewModalHeading.textContent = cardTitleEl.textContent;
    openModal(previewImageModal);
  });

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;
  return cardElement;
}

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */

function renderCard(data, cardListEl) {
  const cardElement = getCardElement(data);
  cardListEl.prepend(cardElement);
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
  renderCard({ name, link }, cardListEl);
  closeModal(addCardModal);
}

function handleEsc(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
    console.log(e);
  }
}

addCardButton.addEventListener("click", () => openModal(addCardModal));

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */

profileEditForm.addEventListener("submit", handleProfileEditFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent.trim();
  profileDescriptionInput.value = profileDescription.textContent.trim();
  openModal(profileEditModal);
});

initialCards.forEach((data) => renderCard(data, cardListEl));
//const likeButtons = document.querySelectorAll(".card__like-button");

// The link input in not correctly validated. I can type numbers there but it should be only a link https://disk.yandex.ru/i/ezCiM4j85wEBUg
// The image modal should not close when clicked inside it
// See here https://disk.yandex.ru/i/3gtjt0oKTZBLZg please, make the modals match the design on 320px screens
// The cards are initially liked but the heart should be white when I add cards
// If a variable doesn’t change (is not reassigned), it is declared using const.
// Every tag img should have an informative attribute alt (the name of the image is usually there) to show the alternative text if the image is not uploaded and it’s needed for screen readers
// You should clear the inputs after a successful adding of a new card to let the user add the 2nd card again without having to remove the old data manually.
// Every variable in the project should be in camelCase
