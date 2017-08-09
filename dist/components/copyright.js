'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        }, _this.getCountByOpendId = function () {
            var p = (0, _card.getCountByOpendId)();
            p && p.then(function (res) {
                _this.cardCount = res.data.count;
                _this.$apply();
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * 统计购物车的数数
     */


    _createClass(Footer, [{
        key: 'onLoad',
        value: function onLoad() {
            this.getCountByOpendId();
        }
    }]);

    return Footer;
}(_wepy2.default.component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcHlyaWdodC5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJtaXhpbnMiLCJkYXRhIiwiY2FyZENvdW50IiwicHJvcHMiLCJmcm9tIiwiU3RyaW5nIiwiZ2V0Q291bnRCeU9wZW5kSWQiLCJwIiwidGhlbiIsInJlcyIsImNvdW50IiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFSTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7OzBMQUVqQkMsTSxHQUFTLGtCLFFBRVRDLEksR0FBTztBQUNIQyx1QkFBVztBQURSLFMsUUFJUEMsSyxHQUFRO0FBQ0pDLGtCQUFNQztBQURGLFMsUUFPUkMsaUIsR0FBb0IsWUFBSztBQUNyQixnQkFBSUMsSUFBSSw4QkFBUjtBQUNBQSxpQkFBS0EsRUFBRUMsSUFBRixDQUFPLFVBQUNDLEdBQUQsRUFBUTtBQUNoQixzQkFBS1AsU0FBTCxHQUFpQk8sSUFBSVIsSUFBSixDQUFTUyxLQUExQjtBQUNBLHNCQUFLQyxNQUFMO0FBQ0gsYUFISSxDQUFMO0FBSUgsUzs7O0FBVEQ7Ozs7Ozs7aUNBV1M7QUFDTixpQkFBS0wsaUJBQUw7QUFDRjs7OztFQXpCK0IsZUFBS00sUzs7a0JBQXBCYixNIiwiZmlsZSI6ImNvcHlyaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHsgZ2V0Q291bnRCeU9wZW5kSWQgfSBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnO1xuICAgIGltcG9ydCBDb21tb25NaXhpbiBmcm9tICcuLi9taXhpbnMvY29tbW9uJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuICAgICAgICBtaXhpbnMgPSBbQ29tbW9uTWl4aW5dO1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjYXJkQ291bnQ6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgZnJvbTogU3RyaW5nXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog57uf6K6h6LSt54mp6L2m55qE5pWw5pWwXG4gICAgICAgICAqL1xuICAgICAgICBnZXRDb3VudEJ5T3BlbmRJZCA9ICgpPT4ge1xuICAgICAgICAgICAgdmFyIHAgPSBnZXRDb3VudEJ5T3BlbmRJZCgpO1xuICAgICAgICAgICAgcCAmJiBwLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkQ291bnQgPSByZXMuZGF0YS5jb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgIHRoaXMuZ2V0Q291bnRCeU9wZW5kSWQoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuIl19