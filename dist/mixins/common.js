'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommonMixin = function (_wepy$mixin) {
    _inherits(CommonMixin, _wepy$mixin);

    function CommonMixin() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CommonMixin);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CommonMixin.__proto__ || Object.getPrototypeOf(CommonMixin)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
            /**
             * 跳转地址 
             */
            redirect: function redirect(url) {
                wx.redirectTo({
                    url: url
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return CommonMixin;
}(_wepy2.default.mixin);

exports.default = CommonMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyJDb21tb25NaXhpbiIsIm1ldGhvZHMiLCJyZWRpcmVjdCIsInVybCIsInd4IiwicmVkaXJlY3RUbyIsIm1peGluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxPLEdBQVU7QUFDTjs7O0FBR0FDLG9CQUpNLG9CQUlJQyxHQUpKLEVBSVM7QUFDWEMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWRix5QkFBS0E7QUFESyxpQkFBZDtBQUdIO0FBUkssUzs7OztFQUQyQixlQUFLRyxLOztrQkFBekJOLFciLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbk1peGluIGV4dGVuZHMgd2VweS5taXhpbiB7XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOi3s+i9rOWcsOWdgCBcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWRpcmVjdCAodXJsKSB7XHJcbiAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==