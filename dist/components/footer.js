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
                });
            }
        }, _this.events = {
            /**
             * 购物车信息变更后，更新一下统计 
             */
            'updatecard': function updatecard() {
                //  this.methods.getCountByOpendId();
            },

            /**
             * opendid加载后，获取一下购物车信息 
             */
            'openidloaded': function openidloaded() {
                //  this.methods.getCountByOpendId();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJkYXRhIiwiY2FyZENvdW50IiwibWV0aG9kcyIsImdldENvdW50QnlPcGVuZElkIiwidGhlbiIsInJlcyIsImNvdW50IiwiJGFwcGx5IiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFSTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFDakJDLEksR0FBTztBQUNIQyx1QkFBVztBQURSLFMsUUFHUEMsTyxHQUFXO0FBQ1A7OztBQUdBQywrQkFBbUIsNkJBQUs7QUFDcEIsK0NBQ0tDLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDViwwQkFBS0osU0FBTCxHQUFpQkksSUFBSUwsSUFBSixDQUFTTSxLQUExQjtBQUNBLDBCQUFLQyxNQUFMO0FBQ0gsaUJBSkw7QUFLSDtBQVZNLFMsUUFZWEMsTSxHQUFTO0FBQ0w7OztBQUdBLHdCQUpLLHdCQUlXO0FBQ1o7QUFDSCxhQU5JOztBQU9MOzs7QUFHQSwwQkFWSywwQkFVYTtBQUNkO0FBQ0g7QUFaSSxTOzs7OztpQ0FjQztBQUNOO0FBQ0E7QUFDSDs7OztFQWpDK0IsZUFBS0MsUzs7a0JBQXBCVixNIiwiZmlsZSI6ImZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgaW1wb3J0IHsgZ2V0Q291bnRCeU9wZW5kSWQgfSBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgY2FyZENvdW50OiAwXG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9ICB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOe7n+iuoei0reeJqei9pueahOaVsOaVsFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRDb3VudEJ5T3BlbmRJZDogKCk9PiB7XG4gICAgICAgICAgICAgICAgZ2V0Q291bnRCeU9wZW5kSWQoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZENvdW50ID0gcmVzLmRhdGEuY291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBldmVudHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi0reeJqei9puS/oeaBr+WPmOabtOWQju+8jOabtOaWsOS4gOS4i+e7n+iuoSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgJ3VwZGF0ZWNhcmQnICgpIHtcbiAgICAgICAgICAgICAgICAvLyAgdGhpcy5tZXRob2RzLmdldENvdW50QnlPcGVuZElkKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBvcGVuZGlk5Yqg6L295ZCO77yM6I635Y+W5LiA5LiL6LSt54mp6L2m5L+h5oGvIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAnb3BlbmlkbG9hZGVkJyAoKSB7XG4gICAgICAgICAgICAgICAgLy8gIHRoaXMubWV0aG9kcy5nZXRDb3VudEJ5T3BlbmRJZCgpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBvbkxvYWQgKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coMTIzMSk7XG4gICAgICAgICAgICAvLyB0aGlzLm1ldGhvZHMuZ2V0Q291bnRCeU9wZW5kSWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==