'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        }, _this.methods = {
            /**
             * 统计购物车的数数
             */
            getCountByOpendId: function getCountByOpendId() {
                (0, _card.getCountByOpendId)().then(function (res) {
                    _this.cardCount = res.data.count;
                    _this.$apply();
                    // console.log(res.data.count);
                });
            }
        }, _this.events = {
            /**
             * 购物车信息变更后，更新一下统计 
             */
            'updatecard': function updatecard() {
                this.methods.getCountByOpendId();
            },

            /**
             * opendid加载后，获取一下购物车信息 
             */
            'openidloaded': function openidloaded() {
                this.methods.getCountByOpendId();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Footer, [{
        key: 'onLoad',
        value: function onLoad() {
            // console.log(1231);
            // this.methods.getCountByOpendId();
        }
    }]);

    return Footer;
}(_wepy2.default.component);

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJkYXRhIiwiY2FyZENvdW50IiwibWV0aG9kcyIsImdldENvdW50QnlPcGVuZElkIiwidGhlbiIsInJlcyIsImNvdW50IiwiJGFwcGx5IiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFSTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFDakJDLEksR0FBTztBQUNIQyx1QkFBVztBQURSLFMsUUFHUEMsTyxHQUFXO0FBQ1A7OztBQUdBQywrQkFBbUIsNkJBQUs7QUFDcEIsK0NBQ0tDLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDViwwQkFBS0osU0FBTCxHQUFpQkksSUFBSUwsSUFBSixDQUFTTSxLQUExQjtBQUNBLDBCQUFLQyxNQUFMO0FBQ0E7QUFDSCxpQkFMTDtBQU1IO0FBWE0sUyxRQWFYQyxNLEdBQVM7QUFDTDs7O0FBR0Esd0JBSkssd0JBSVc7QUFDWCxxQkFBS04sT0FBTCxDQUFhQyxpQkFBYjtBQUNKLGFBTkk7O0FBT0w7OztBQUdBLDBCQVZLLDBCQVVhO0FBQ2IscUJBQUtELE9BQUwsQ0FBYUMsaUJBQWI7QUFDSjtBQVpJLFM7Ozs7O2lDQWNDO0FBQ047QUFDQTtBQUNIOzs7O0VBbEMrQixlQUFLTSxTOztrQkFBcEJWLE0iLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbiAgICBpbXBvcnQgeyBnZXRDb3VudEJ5T3BlbmRJZCB9IGZyb20gJy4uL3NlcnZpY2UvY2FyZCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBjYXJkQ291bnQ6IDBcbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0gIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog57uf6K6h6LSt54mp6L2m55qE5pWw5pWwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldENvdW50QnlPcGVuZElkOiAoKT0+IHtcbiAgICAgICAgICAgICAgICBnZXRDb3VudEJ5T3BlbmRJZCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkQ291bnQgPSByZXMuZGF0YS5jb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YS5jb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50cyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6LSt54mp6L2m5L+h5oGv5Y+Y5pu05ZCO77yM5pu05paw5LiA5LiL57uf6K6hIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAndXBkYXRlY2FyZCcgKCkge1xuICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q291bnRCeU9wZW5kSWQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIG9wZW5kaWTliqDovb3lkI7vvIzojrflj5bkuIDkuIvotK3nianovabkv6Hmga8gXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICdvcGVuaWRsb2FkZWQnICgpIHtcbiAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldENvdW50QnlPcGVuZElkKCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCAoKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygxMjMxKTtcbiAgICAgICAgICAgIC8vIHRoaXMubWV0aG9kcy5nZXRDb3VudEJ5T3BlbmRJZCgpO1xuICAgICAgICB9XG4gICAgfVxuIl19