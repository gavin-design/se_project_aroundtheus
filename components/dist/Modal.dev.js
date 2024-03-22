"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var modal = {};

var Modal =
/*#__PURE__*/
function () {
  function Modal(modalSelector) {
    _classCallCheck(this, Modal);

    this._modalElement = document.querySelector(modalSelector);
    modal.onCreateModal(this);
  }

  _createClass(Modal, [{
    key: "openModal",
    value: function openModal() {
      this._modalElement.classList.add("modal_opened");

      document.addEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this._modalElement.classList.remove("modal_opened");

      document.removeEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(e) {
      if (e.key === "Escape") {
        this.closeModal();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {}
  }]);

  return Modal;
}();

modal.Modal = Modal;
var _default = modal;
exports["default"] = _default;