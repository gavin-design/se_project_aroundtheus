"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo =
/*#__PURE__*/
function () {
  function UserInfo(titleSelector, descriptionSelector) {
    _classCallCheck(this, UserInfo);

    this.title = document.querySelector(titleSelector);
    this.description = document.querySelector(descriptionSelector);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return [this.title.textContent, this.description.textContent];
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(title, decription) {
      this.title.textContent = title;
      this.description.textContent = decription;
    }
  }]);

  return UserInfo;
}();

exports["default"] = UserInfo;