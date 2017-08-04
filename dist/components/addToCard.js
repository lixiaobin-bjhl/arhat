'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _numberInput = require('./numberInput.js');

var _numberInput2 = _interopRequireDefault(_numberInput);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddToCard = function (_wepy$component) {
    _inherits(AddToCard, _wepy$component);

    function AddToCard() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AddToCard);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddToCard.__proto__ || Object.getPrototypeOf(AddToCard)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            showModalStatus: false,
            animationData: {},
            submitting: false
        }, _this.$props = { "numberInput": { "v-bind:num.sync": "product.count" } }, _this.$events = {}, _this.components = {
            numberInput: _numberInput2.default
        }, _this.props = {
            product: {
                type: Object,
                twoWay: true,
                default: function _default() {
                    return {
                        count: 5
                    };
                }
            }
        }, _this.methods = {
            /**
             * 显示添加购物车对话框
             */
            show: function show() {
                var _this2 = this;

                var animation = wx.createAnimation({
                    duration: 200,
                    timingFunction: "linear",
                    delay: 0
                });
                this.animation = animation;
                animation.translateY(200).step();
                this.animationData = animation.export();
                this.showModalStatus = true;
                setTimeout(function () {
                    animation.translateY(0).step();
                    _this2.animationData = animation.export();
                    _this2.$apply();
                }, 200);
            },

            /**
             * 隐藏添加购物车对话框
             */
            hide: function hide() {
                // 隐藏遮罩层
                var animation = wx.createAnimation({
                    duration: 200,
                    timingFunction: "linear",
                    delay: 0
                });
                _this.animation = animation;
                animation.translateY(300).step();
                _this.animationData = animation.export();
                setTimeout(function () {
                    animation.translateY(0).step();
                    _this.animationData = animation.export();
                    _this.showModalStatus = false;
                    _this.$apply();
                }, 200);
            },

            /**
             * 提交 
             */
            submit: function submit() {
                _this.submitting = true;
                var count = _this.$invoke('numberInput', 'getNum');
                _this.product.count = count;
                _this.$emit('addtocard', _this.product);
                _this.methods.hide();
                _this.submitting = false;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return AddToCard;
}(_wepy2.default.component);

exports.default = AddToCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRvQ2FyZC5qcyJdLCJuYW1lcyI6WyJBZGRUb0NhcmQiLCJkYXRhIiwic2hvd01vZGFsU3RhdHVzIiwiYW5pbWF0aW9uRGF0YSIsInN1Ym1pdHRpbmciLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm51bWJlcklucHV0IiwicHJvcHMiLCJwcm9kdWN0IiwidHlwZSIsIk9iamVjdCIsInR3b1dheSIsImRlZmF1bHQiLCJjb3VudCIsIm1ldGhvZHMiLCJzaG93IiwiYW5pbWF0aW9uIiwid3giLCJjcmVhdGVBbmltYXRpb24iLCJkdXJhdGlvbiIsInRpbWluZ0Z1bmN0aW9uIiwiZGVsYXkiLCJ0cmFuc2xhdGVZIiwic3RlcCIsImV4cG9ydCIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJoaWRlIiwic3VibWl0IiwiJGludm9rZSIsIiRlbWl0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7OztnTUFFakJDLEksR0FBTztBQUNIQyw2QkFBaUIsS0FEZDtBQUVIQywyQkFBZ0IsRUFGYjtBQUdIQyx3QkFBWTtBQUhULFMsUUFNUkMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLG1CQUFrQixlQUFuQixFQUFmLEUsUUFDaEJDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQztBQURFLFMsUUFJTkMsSyxHQUFRO0FBQ0xDLHFCQUFTO0FBQ0xDLHNCQUFNQyxNQUREO0FBRUxDLHdCQUFRLElBRkg7QUFHTEMsdUJBSEssc0JBR007QUFDUCwyQkFBTztBQUNIQywrQkFBTztBQURKLHFCQUFQO0FBR0g7QUFQSTtBQURKLFMsUUFZUkMsTyxHQUFVO0FBQ047OztBQUdBQyxrQkFBTSxnQkFBWTtBQUFBOztBQUNkLG9CQUFJQyxZQUFZQyxHQUFHQyxlQUFILENBQW1CO0FBQy9CQyw4QkFBVSxHQURxQjtBQUUvQkMsb0NBQWdCLFFBRmU7QUFHL0JDLDJCQUFPO0FBSHdCLGlCQUFuQixDQUFoQjtBQUtBLHFCQUFLTCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBQSwwQkFBVU0sVUFBVixDQUFxQixHQUFyQixFQUEwQkMsSUFBMUI7QUFDQSxxQkFBS3RCLGFBQUwsR0FBcUJlLFVBQVVRLE1BQVYsRUFBckI7QUFDQSxxQkFBS3hCLGVBQUwsR0FBdUIsSUFBdkI7QUFDQXlCLDJCQUFXLFlBQUs7QUFDWlQsOEJBQVVNLFVBQVYsQ0FBcUIsQ0FBckIsRUFBd0JDLElBQXhCO0FBQ0EsMkJBQUt0QixhQUFMLEdBQXFCZSxVQUFVUSxNQUFWLEVBQXJCO0FBQ0EsMkJBQUtFLE1BQUw7QUFDSCxpQkFKRCxFQUlHLEdBSkg7QUFLSCxhQW5CSzs7QUFxQk47OztBQUdBQyxrQkFBTyxnQkFBSztBQUNSO0FBQ0Esb0JBQUlYLFlBQVlDLEdBQUdDLGVBQUgsQ0FBbUI7QUFDL0JDLDhCQUFVLEdBRHFCO0FBRS9CQyxvQ0FBZ0IsUUFGZTtBQUcvQkMsMkJBQU87QUFId0IsaUJBQW5CLENBQWhCO0FBS0Esc0JBQUtMLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0FBLDBCQUFVTSxVQUFWLENBQXFCLEdBQXJCLEVBQTBCQyxJQUExQjtBQUNBLHNCQUFLdEIsYUFBTCxHQUFxQmUsVUFBVVEsTUFBVixFQUFyQjtBQUNBQywyQkFBVyxZQUFLO0FBQ1pULDhCQUFVTSxVQUFWLENBQXFCLENBQXJCLEVBQXdCQyxJQUF4QjtBQUNBLDBCQUFLdEIsYUFBTCxHQUFxQmUsVUFBVVEsTUFBVixFQUFyQjtBQUNBLDBCQUFLeEIsZUFBTCxHQUF1QixLQUF2QjtBQUNBLDBCQUFLMEIsTUFBTDtBQUNILGlCQUxELEVBS0csR0FMSDtBQU1ILGFBeENLOztBQTBDTjs7O0FBR0FFLG9CQUFRLGtCQUFLO0FBQ1Qsc0JBQUsxQixVQUFMLEdBQWtCLElBQWxCO0FBQ0Esb0JBQUlXLFFBQVEsTUFBS2dCLE9BQUwsQ0FBYSxhQUFiLEVBQTRCLFFBQTVCLENBQVo7QUFDQSxzQkFBS3JCLE9BQUwsQ0FBYUssS0FBYixHQUFxQkEsS0FBckI7QUFDQSxzQkFBS2lCLEtBQUwsQ0FBVyxXQUFYLEVBQXdCLE1BQUt0QixPQUE3QjtBQUNBLHNCQUFLTSxPQUFMLENBQWFhLElBQWI7QUFDQSxzQkFBS3pCLFVBQUwsR0FBa0IsS0FBbEI7QUFDSDtBQXBESyxTOzs7O0VBMUJ5QixlQUFLNkIsUzs7a0JBQXZCakMsUyIsImZpbGUiOiJhZGRUb0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgbnVtYmVySW5wdXQgZnJvbSAnLi9udW1iZXJJbnB1dCc7XG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkVG9DYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzaG93TW9kYWxTdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgYW5pbWF0aW9uRGF0YTogIHt9LFxuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgJHByb3BzID0ge1wibnVtYmVySW5wdXRcIjp7XCJ2LWJpbmQ6bnVtLnN5bmNcIjpcInByb2R1Y3QuY291bnRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgbnVtYmVySW5wdXRcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICB0d29XYXk6IHRydWUsXG4gICAgICAgICAgICAgICBkZWZhdWx0ICgpIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogNVxuICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDmmL7npLrmt7vliqDotK3nianovablr7nor53moYZcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogXCJsaW5lYXJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDIwMCkuc3RlcCgpXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWxTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmakOiXj+a3u+WKoOi0reeJqei9puWvueivneahhlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBoaWRlOiAgKCk9PiB7XG4gICAgICAgICAgICAgICAgLy8g6ZqQ6JeP6YGu572p5bGCXG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMzAwKS5zdGVwKClcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgwKS5zdGVwKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5o+Q5LqkIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzdWJtaXQ6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gdGhpcy4kaW52b2tlKCdudW1iZXJJbnB1dCcsICdnZXROdW0nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QuY291bnQgPSBjb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhZGR0b2NhcmQnLCB0aGlzLnByb2R1Y3QpO1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=