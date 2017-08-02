'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _card = require('./../service/card.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_wepy$component) {
    _inherits(Footer, _wepy$component);

    function Footer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Footer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            cardCount: 0
        }, _this.props = {
            from: String
        }, _this.methods = {
            /**
             * 页面跳转 
             */
            redirect: function redirect(url) {
                // 本来就在当前页，就不跳转了
                if (url == this.from) {
                    return;
                }
                wx.redirectTo({
                    url: url
                });
            },

            /**
             * 统计购物车的数数
             */
            getCountByOpendId: function getCountByOpendId() {
                // getCountByOpendId()
                //     .then((res)=> {
                //         this.cardCount = res.data.count;
                //         this.$apply();
                //     });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Footer;
}(_wepy2.default.component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJkYXRhIiwiY2FyZENvdW50IiwicHJvcHMiLCJmcm9tIiwiU3RyaW5nIiwibWV0aG9kcyIsInJlZGlyZWN0IiwidXJsIiwid3giLCJyZWRpcmVjdFRvIiwiZ2V0Q291bnRCeU9wZW5kSWQiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFSTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFDakJDLEksR0FBTztBQUNIQyx1QkFBVztBQURSLFMsUUFJUEMsSyxHQUFRO0FBQ0pDLGtCQUFNQztBQURGLFMsUUFJUkMsTyxHQUFXO0FBQ1A7OztBQUdBQyxvQkFKTyxvQkFJR0MsR0FKSCxFQUlRO0FBQ1g7QUFDQSxvQkFBSUEsT0FBTyxLQUFLSixJQUFoQixFQUFzQjtBQUNsQjtBQUNIO0FBQ0RLLG1CQUFHQyxVQUFILENBQWM7QUFDVkYseUJBQUtBO0FBREssaUJBQWQ7QUFHSCxhQVpNOztBQWFQOzs7QUFHQUcsK0JBQW1CLDZCQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQXRCTSxTOzs7O0VBVHFCLGVBQUtDLFM7O2tCQUFwQlosTSIsImZpbGUiOiJmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCB7IGdldENvdW50QnlPcGVuZElkIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGNhcmRDb3VudDogMFxuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBmcm9tOiBTdHJpbmdcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSAge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDpobXpnaLot7PovawgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICAvLyDmnKzmnaXlsLHlnKjlvZPliY3pobXvvIzlsLHkuI3ot7PovazkuoZcbiAgICAgICAgICAgICAgICBpZiAodXJsID09IHRoaXMuZnJvbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog57uf6K6h6LSt54mp6L2m55qE5pWw5pWwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldENvdW50QnlPcGVuZElkOiAoKT0+IHtcbiAgICAgICAgICAgICAgICAvLyBnZXRDb3VudEJ5T3BlbmRJZCgpXG4gICAgICAgICAgICAgICAgLy8gICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5jYXJkQ291bnQgPSByZXMuZGF0YS5jb3VudDtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19