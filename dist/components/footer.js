'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _card = require('./../service/card.js');

var _common = require('./../mixins/common.js');

var _common2 = _interopRequireDefault(_common);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_common2.default], _this.data = {
            cardCount: 0
        }, _this.props = {
            from: String
        }, _this.methods = {
            // /**
            //  * 页面跳转 
            //  */
            // redirect (url) {
            //     // 本来就在当前页，就不跳转了
            //     if (url == this.from) {
            //         return;
            //     }
            //     wx.redirectTo({
            //         url: url
            //     });
            // },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJtaXhpbnMiLCJkYXRhIiwiY2FyZENvdW50IiwicHJvcHMiLCJmcm9tIiwiU3RyaW5nIiwibWV0aG9kcyIsImdldENvdW50QnlPcGVuZElkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUk7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFFakJDLE0sR0FBUyxrQixRQUVUQyxJLEdBQU87QUFDSEMsdUJBQVc7QUFEUixTLFFBSVBDLEssR0FBUTtBQUNKQyxrQkFBTUM7QUFERixTLFFBSVJDLE8sR0FBVztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQUMsK0JBQW1CLDZCQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQXRCTSxTOzs7O0VBWnFCLGVBQUtDLFM7O2tCQUFwQlQsTSIsImZpbGUiOiJmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuICAgIGltcG9ydCB7IGdldENvdW50QnlPcGVuZElkIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJztcbiAgICBpbXBvcnQgQ29tbW9uTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2NvbW1vbic7XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cbiAgICAgICAgbWl4aW5zID0gW0NvbW1vbk1peGluXTtcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY2FyZENvdW50OiAwXG4gICAgICAgIH1cblxuICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGZyb206IFN0cmluZ1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9ICB7XG4gICAgICAgICAgICAvLyAvKipcbiAgICAgICAgICAgIC8vICAqIOmhtemdoui3s+i9rCBcbiAgICAgICAgICAgIC8vICAqL1xuICAgICAgICAgICAgLy8gcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgLy8gICAgIC8vIOacrOadpeWwseWcqOW9k+WJjemhte+8jOWwseS4jei3s+i9rOS6hlxuICAgICAgICAgICAgLy8gICAgIGlmICh1cmwgPT0gdGhpcy5mcm9tKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAvLyAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDnu5/orqHotK3nianovabnmoTmlbDmlbBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0Q291bnRCeU9wZW5kSWQ6ICgpPT4ge1xuICAgICAgICAgICAgICAgIC8vIGdldENvdW50QnlPcGVuZElkKClcbiAgICAgICAgICAgICAgICAvLyAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmNhcmRDb3VudCA9IHJlcy5kYXRhLmNvdW50O1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=