"use strict";

var _Card = _interopRequireDefault(require("../components/Card.js"));

var _FormValidator = _interopRequireDefault(require("../components/FormValidator.js"));

var _ModalWithForm = _interopRequireDefault(require("../components/ModalWithForm.js"));

var _ModalWithImage = _interopRequireDefault(require("../components/ModalWithImage.js"));

var _UserInfo = _interopRequireDefault(require("../components/UserInfo.js"));

var _initialCards = _interopRequireDefault(require("../utils/initialCards.js"));

var _Section = _interopRequireDefault(require("../components/Section.js"));

var _Modal = _interopRequireDefault(require("../components/Modal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_Modal["default"].onCreateModal = function (modal) {
  modal._modalElement.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("modal") || e.target.classList.contains("modal__close")) {
      modal.closeModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.closeModal();
    }
  });
};
/* -------------------------------------------------------------------------- */

/*                              Form Settings                               */

/* -------------------------------------------------------------------------- */


var settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button-disabled",
  inputErrorClass: "modal__input_type-error",
  errorClass: "modal__input-type-visable-error"
};
var addCardFormEl = document.forms["add-card-edit-form"];
var editProfileFormEl = document.forms["profile-edit-form"];
var addCardFormValidator = new _FormValidator["default"](settings, addCardFormEl);
var editProfileFormValidator = new _FormValidator["default"](settings, editProfileFormEl);
/* -------------------------------------------------------------------------- */

/*                                  TEMPLATES                                 */

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */

/*                                  Elements                                  */

/* -------------------------------------------------------------------------- */

var userInfo = new _UserInfo["default"](".profile__title", ".profile__description");
var profileEditButton = document.querySelector("#profile-edit-button");
var editProfileForm = new _ModalWithForm["default"]("#profile-edit-modal", editProfileFormValidator);
editProfileForm.setEventListeners(function (title, description) {
  userInfo.setUserInfo(title.value, description.value);
  editProfileForm.closeModal();
});
profileEditButton.addEventListener("click", function () {
  var _userInfo$getUserInfo = userInfo.getUserInfo(),
      _userInfo$getUserInfo2 = _slicedToArray(_userInfo$getUserInfo, 2),
      title = _userInfo$getUserInfo2[0],
      description = _userInfo$getUserInfo2[1];

  profileTitleInput.value = title;
  profileDescriptionInput.value = description;
  editProfileFormValidator.resetValidation();
  editProfileForm.openModal();
});
var addCardButton = document.querySelector("#add-card-button");
var editAddCardForm = new _ModalWithForm["default"]("#add-card-modal", addCardFormValidator);
editAddCardForm.setEventListeners(function (addCardTitleInput, addCardUrlInput) {
  var name = addCardTitleInput.value;
  var link = addCardUrlInput.value;
  generateCard(name, link);
  editAddCardForm.closeModal();
  addCardFormValidator.resetValidation();
});
addCardButton.addEventListener("click", function () {
  return editAddCardForm.openModal();
});
/* -------------------------------------------------------------------------- */

/*                               Add Card Button                              */

/* -------------------------------------------------------------------------- */

var cardListEl = document.querySelector(".cards__list");
var profileTitleInput = document.querySelector("#profile-title-input");
var profileDescriptionInput = document.querySelector("#profile-description-input");
var section = new _Section["default"](function (card) {
  console.log(card);
  cardListEl.prepend(card);
}, ".cards__list");

function generateCard(name, link) {
  var card = new _Card["default"](name, link, "#card-template", function (name, link) {
    var preview = new _ModalWithImage["default"]("#preview-image-modal", name, link);
    preview.openModal();
  });
  section.addItem(card.getView());
}

_initialCards["default"].forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      link = _ref2[1];

  generateCard(name, link);
});

section.renderItems();