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
                (0, _card.getCountByOpendId)().then(function (res) {
                    _this.cardCount = res.data.count;
                    _this.$apply();
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Footer;
}(_wepy2.default.component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJkYXRhIiwiY2FyZENvdW50IiwicHJvcHMiLCJmcm9tIiwiU3RyaW5nIiwibWV0aG9kcyIsInJlZGlyZWN0IiwidXJsIiwid3giLCJyZWRpcmVjdFRvIiwiZ2V0Q291bnRCeU9wZW5kSWQiLCJ0aGVuIiwicmVzIiwiY291bnQiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFSTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFDakJDLEksR0FBTztBQUNIQyx1QkFBVztBQURSLFMsUUFJUEMsSyxHQUFRO0FBQ0pDLGtCQUFNQztBQURGLFMsUUFJUkMsTyxHQUFXO0FBQ1A7OztBQUdBQyxvQkFKTyxvQkFJR0MsR0FKSCxFQUlRO0FBQ1g7QUFDQSxvQkFBSUEsT0FBTyxLQUFLSixJQUFoQixFQUFzQjtBQUNsQjtBQUNIO0FBQ0RLLG1CQUFHQyxVQUFILENBQWM7QUFDVkYseUJBQUtBO0FBREssaUJBQWQ7QUFHSCxhQVpNOztBQWFQOzs7QUFHQUcsK0JBQW1CLDZCQUFLO0FBQ3BCLCtDQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1YsMEJBQUtYLFNBQUwsR0FBaUJXLElBQUlaLElBQUosQ0FBU2EsS0FBMUI7QUFDQSwwQkFBS0MsTUFBTDtBQUNILGlCQUpMO0FBS0g7QUF0Qk0sUzs7OztFQVRxQixlQUFLQyxTOztrQkFBcEJoQixNIiwiZmlsZSI6ImZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHsgZ2V0Q291bnRCeU9wZW5kSWQgfSBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY2FyZENvdW50OiAwXG4gICAgICAgIH1cblxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGZyb206IFN0cmluZ1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9ICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmhtemdoui3s+i9rCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIC8vIOacrOadpeWwseWcqOW9k+WJjemhte+8jOWwseS4jei3s+i9rOS6hlxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT0gdGhpcy5mcm9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDnu5/orqHotK3nianovabnmoTmlbDmlbBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0Q291bnRCeU9wZW5kSWQ6ICgpPT4ge1xuICAgICAgICAgICAgICAgIGdldENvdW50QnlPcGVuZElkKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRDb3VudCA9IHJlcy5kYXRhLmNvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=