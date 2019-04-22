"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mobxReact = require("mobx-react");

var _reactTabify = require("react-tabify");

var _util = require("../../util");

var _ = _interopRequireDefault(require("./"));

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabbedSections = (_dec = (0, _mobxReact.inject)('instance', 'hideFormTitle', 'hideSubsectionTitles', 'hideSubsectionSubtitles', 'submitButtonLabel'), _dec(_class = (0, _mobxReact.observer)(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(TabbedSections, _Component);

  function TabbedSections() {
    _classCallCheck(this, TabbedSections);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabbedSections).apply(this, arguments));
  }

  _createClass(TabbedSections, [{
    key: "getDerivedSectionTitle",
    value: function getDerivedSectionTitle(instance, section) {
      return _react["default"].createElement("span", null, section.title, "\xA0", instance.validationMap.sections[section.id] ? _react["default"].createElement(_util.Asterisk, null) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var instance = this.props.instance;
      return _react["default"].createElement(_reactTabify.Tabs, {
        stacked: true,
        id: "form-tabs-".concat(instance.getId()),
        defaultActiveKey: 0
      }, instance.getSections().map(function (section, index) {
        return _react["default"].createElement(_reactTabify.Tab, {
          key: index,
          eventKey: index,
          label: _this.getDerivedSectionTitle(instance, section)
        }, _react["default"].createElement(_["default"], {
          section: section,
          isTabbed: true
        }));
      }));
    }
  }]);

  return TabbedSections;
}(_react.Component), _class2.propTypes = {
  instance: _propTypes["default"].instanceOf(Object).isRequired,
  hideFormTitle: _propTypes["default"].bool,
  submitButtonLabel: _propTypes["default"].string
}, _temp)) || _class) || _class);
var _default = TabbedSections;
exports["default"] = _default;