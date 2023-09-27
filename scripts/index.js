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

// function handleEsc(evt) {
//   if (evt.key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");
//     closeModal(openedModal);
//     console.log(evt);
//   }
// }
function handleMouseEvt(evt) {
  if (evt === "onclick") {
    modalBackground.addEventListener("click", closeModal);
    //     evt.target.classList.contains(".modal");
    console.log("click evt fired");
    const modalBackground = document.querySelector(".modal");
    //     closeModal(openedModal);
    //     console.log("click");
  }
}
// I created a  functon called handleMouseEvt
// I tried to squeez the mouse event in here
// the handleEsc and the keydown work ok
function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEsc);
}
handleMouseEvt(".modal"); // where does this belong?

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
    previewModalHeading.textContent = cardTitleEl.textContent;
    openModal(previewImageModal);
  });
  previewImageModal.addEventListener("click", () => {
    closeModal(previewImageModal);
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
function handlepreviewImage(e) {
  e.preventDefault();
  closeModal(previewImageModal);
}

function handleEsc(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
    console.log(evt);
  }
}

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

profileModalClosedButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);

addCardButton.addEventListener("click", () => openModal(addCardModal));
addCardModalClosedButton.addEventListener("click", () =>
  closeModal(addCardModal)
);

initialCards.forEach((data) => renderCard(data, cardListEl));
const likeButtons = document.querySelectorAll(".card__like-button");

/* -------------------------------------------------------------------------- */
/*                                  QUESTIONS                                 */
/* -------------------------------------------------------------------------- */
/*1.
 function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener (handleMouseEvt);
} 
   my best thinking has me wanting to do somthing like this up at the top of the page with the other functions
   but then im afraid it's not DRY and i also have a problem just letting myself go and make a mess !
   and when i try to figure out how we did this in the past i draw a blank  someone suggested i use this 
   evt.target.classList.contains('modal') or something like it 
   
   What I'm hoping for is that you can guide me with a recipie if you will 
   and I'll take a stab at it

               MOUSE EVENT
   
   1. Identify the class you want to target .modal 
   2. const modalBackground = document.querySelector(".modal");
   3. create an eventlistener 
   4. modalBackground.addEventListener("click", closeModal);
   5. Try to log it to console
   6.  evt.target.classList.contains(".modal");
   7. console.log("click evt fired"); 
   8. assign it to the opened modal???
   9. */

//  function handleMouseEvt(evt) {
//   if (evt === "click") {
//     modalBackground.addEventListener("click", closeModal);
//     evt.target.classList.contains(".modal");
//     console.log("click evt fired");
//     const modalBackground = document.querySelector(".modal");

//     closeModal(openedModal);
//     console.log("click");
//   }
// }

//  THIS IS THE FUNCTION OF  ESCAPE KEY SHOULD I USE THIS TO DO THE WORK FOR MY MOUSE?

// function handleEsc(evt) {
//   if (evt.key === "Escape") { switch this to "onclick"
//     const openedModal = document.querySelector(".modal_opened");
//     closeModal(openedModal);
//     console.log(evt);
//   }
// }
