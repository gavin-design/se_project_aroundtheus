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
const deleteButtons = document.querySelectorAll(".card__delete-button");
const addCardButton = document.querySelector("#add-card-button");
const addCardModal = document.querySelector("#add-card-modal");
const previewImageModal = document.querySelector("#preview-image-modal");
const addCardModalClosedButton = addCardModal.querySelector(
  "#add-card-modal-closed-button"
);
const previewImageModalClosedButton = document.querySelector(
  "#preview-image-modal-closed-button"
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
}
function openModal(modal) {
  modal.classList.add("modal_opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardImageEl.addEventListener("click", () => openModal(previewImageModal));

  //add click listener to the cardImage element
  // open cardImageModal with the previewImageModal must be added to html
  // smooth opening and closing of the modals and images
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

  profileTitleInput.textContent = profileTitle.value;
  profileDescriptionInput.textContent = profileDescription.value;

  closeModal(profileEditModal);
}
function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  closeModal(addCardModal);
}
function handlepreviewImage(e) {
  e.preventDefault();
  const name = previewImageTitleInput.value;
  const link = previewImageUrlInput.value;
  // renderCard({ name, link }, cardListEl);
  closeModal(previewImageModal);
}

/* -------------------------------------------------------------------------- */
/*                               Event Listeners                              */
/* -------------------------------------------------------------------------- */
profileEditForm.addEventListener("submit", handleProfileEditFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileModalClosedButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);

addCardButton.addEventListener("click", () => openModal(addCardModal));
addCardModalClosedButton.addEventListener("click", () =>
  closeModal(addCardModal)
);

initialCards.forEach((data) => renderCard(data, cardListEl));
const likeButtons = document.querySelectorAll(".card__like-button");

// likeButtons.forEach((likeButton) => {
//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like-button_active");
//   });
// });
