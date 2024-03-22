"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card =
/*#__PURE__*/
function () {
  function Card(name, link, cardSelector, handleImageClick) {
    _classCallCheck(this, Card);

    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _createClass(Card, [{
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._cardElement.querySelector(".card__like-button").addEventListener("click", function () {
        _this._handleLikeIcon();
      });

      this._cardElement.querySelector(".card__delete-button").addEventListener("click", function () {
        _this._handleDeleteCard();
      });

      this._cardElement.querySelector(".card__image").addEventListener("click", function () {
        _this._handleImageClick(_this._name, _this._link);
      });
    }
  }, {
    key: "_handleDeleteCard",
    value: function _handleDeleteCard() {
      this._cardElement.remove();

      this._cardElement = null;
    }
  }, {
    key: "_handleLikeIcon",
    value: function _handleLikeIcon() {
      this._cardElement.querySelector(".card__like-button").classList.toggle("card__like-button-active");
    }
  }, {
    key: "getView",
    value: function getView() {
      this._cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
      this._cardElement.querySelector(".card__image").src = this._link;
      this._cardElement.querySelector(".card__image").alt = this._name;
      this._cardElement.querySelector(".card__title").textContent = this._name;

      this._setEventListeners();

      return this._cardElement;
    }
  }]);

  return Card;
}();

exports["default"] = Card;