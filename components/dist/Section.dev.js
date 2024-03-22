"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section =
/*#__PURE__*/
function () {
  function Section(render, containerSelector) {
    _classCallCheck(this, Section);

    this._items = [];
    this._render = render;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(item) {
      this._container.prepend(item);
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      this._container.prepend(item);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._items.forEach(function (item) {
        _this.renderItem(item);
      });
    }
  }]);

  return Section;
}();

exports["default"] = Section;