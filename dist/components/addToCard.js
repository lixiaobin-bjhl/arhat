'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _numberInput = require('./numberInput.js');

var _numberInput2 = _interopRequireDefault(_numberInput);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _card = require('./../service/card.js');

var cardRequest = _interopRequireWildcard(_card);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
                var product = _this.product;
                _this.product.count = count;

                wx.showLoading();
                cardRequest.addToCard({
                    product: product._id,
                    count: product.count
                }).then(function () {
                    wx.hideLoading();
                    _this.$emit('addtocardsuccess', product);
                    _this.methods.hide();
                    _this.submitting = false;
                    _this.$apply();
                    wx.showToast({
                        title: '已成功加到购物车'
                    });
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return AddToCard;
}(_wepy2.default.component);

exports.default = AddToCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRvQ2FyZC5qcyJdLCJuYW1lcyI6WyJjYXJkUmVxdWVzdCIsIkFkZFRvQ2FyZCIsImRhdGEiLCJzaG93TW9kYWxTdGF0dXMiLCJhbmltYXRpb25EYXRhIiwic3VibWl0dGluZyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibnVtYmVySW5wdXQiLCJwcm9wcyIsInByb2R1Y3QiLCJ0eXBlIiwiT2JqZWN0IiwidHdvV2F5IiwiZGVmYXVsdCIsImNvdW50IiwibWV0aG9kcyIsInNob3ciLCJhbmltYXRpb24iLCJ3eCIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJkZWxheSIsInRyYW5zbGF0ZVkiLCJzdGVwIiwiZXhwb3J0Iiwic2V0VGltZW91dCIsIiRhcHBseSIsImhpZGUiLCJzdWJtaXQiLCIkaW52b2tlIiwic2hvd0xvYWRpbmciLCJhZGRUb0NhcmQiLCJfaWQiLCJ0aGVuIiwiaGlkZUxvYWRpbmciLCIkZW1pdCIsInNob3dUb2FzdCIsInRpdGxlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxXOzs7Ozs7Ozs7Ozs7SUFFU0MsUzs7Ozs7Ozs7Ozs7Ozs7Z01BRWpCQyxJLEdBQU87QUFDSEMsNkJBQWlCLEtBRGQ7QUFFSEMsMkJBQWdCLEVBRmI7QUFHSEMsd0JBQVk7QUFIVCxTLFFBTVJDLE0sR0FBUyxFQUFDLGVBQWMsRUFBQyxtQkFBa0IsZUFBbkIsRUFBZixFLFFBQ2hCQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkM7QUFERSxTLFFBSU5DLEssR0FBUTtBQUNMQyxxQkFBUztBQUNMQyxzQkFBTUMsTUFERDtBQUVMQyx3QkFBUSxJQUZIO0FBR0xDLHVCQUhLLHNCQUdNO0FBQ1AsMkJBQU87QUFDSEMsK0JBQU87QUFESixxQkFBUDtBQUdIO0FBUEk7QUFESixTLFFBWVJDLE8sR0FBVTtBQUNOOzs7QUFHQUMsa0JBQU0sZ0JBQVk7QUFBQTs7QUFDZCxvQkFBSUMsWUFBWUMsR0FBR0MsZUFBSCxDQUFtQjtBQUMvQkMsOEJBQVUsR0FEcUI7QUFFL0JDLG9DQUFnQixRQUZlO0FBRy9CQywyQkFBTztBQUh3QixpQkFBbkIsQ0FBaEI7QUFLQSxxQkFBS0wsU0FBTCxHQUFpQkEsU0FBakI7QUFDQUEsMEJBQVVNLFVBQVYsQ0FBcUIsR0FBckIsRUFBMEJDLElBQTFCO0FBQ0EscUJBQUt0QixhQUFMLEdBQXFCZSxVQUFVUSxNQUFWLEVBQXJCO0FBQ0EscUJBQUt4QixlQUFMLEdBQXVCLElBQXZCO0FBQ0F5QiwyQkFBVyxZQUFLO0FBQ1pULDhCQUFVTSxVQUFWLENBQXFCLENBQXJCLEVBQXdCQyxJQUF4QjtBQUNBLDJCQUFLdEIsYUFBTCxHQUFxQmUsVUFBVVEsTUFBVixFQUFyQjtBQUNBLDJCQUFLRSxNQUFMO0FBQ0gsaUJBSkQsRUFJRyxHQUpIO0FBS0gsYUFuQks7O0FBcUJOOzs7QUFHQUMsa0JBQU8sZ0JBQUs7QUFDUjtBQUNBLG9CQUFJWCxZQUFZQyxHQUFHQyxlQUFILENBQW1CO0FBQy9CQyw4QkFBVSxHQURxQjtBQUUvQkMsb0NBQWdCLFFBRmU7QUFHL0JDLDJCQUFPO0FBSHdCLGlCQUFuQixDQUFoQjtBQUtBLHNCQUFLTCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBQSwwQkFBVU0sVUFBVixDQUFxQixHQUFyQixFQUEwQkMsSUFBMUI7QUFDQSxzQkFBS3RCLGFBQUwsR0FBcUJlLFVBQVVRLE1BQVYsRUFBckI7QUFDQUMsMkJBQVcsWUFBSztBQUNaVCw4QkFBVU0sVUFBVixDQUFxQixDQUFyQixFQUF3QkMsSUFBeEI7QUFDQSwwQkFBS3RCLGFBQUwsR0FBcUJlLFVBQVVRLE1BQVYsRUFBckI7QUFDQSwwQkFBS3hCLGVBQUwsR0FBdUIsS0FBdkI7QUFDQSwwQkFBSzBCLE1BQUw7QUFDSCxpQkFMRCxFQUtHLEdBTEg7QUFNSCxhQXhDSzs7QUEwQ047OztBQUdBRSxvQkFBUSxrQkFBSztBQUNULHNCQUFLMUIsVUFBTCxHQUFrQixJQUFsQjtBQUNBLG9CQUFJVyxRQUFRLE1BQUtnQixPQUFMLENBQWEsYUFBYixFQUE0QixRQUE1QixDQUFaO0FBQ0Esb0JBQUlyQixVQUFVLE1BQUtBLE9BQW5CO0FBQ0Esc0JBQUtBLE9BQUwsQ0FBYUssS0FBYixHQUFxQkEsS0FBckI7O0FBRUFJLG1CQUFHYSxXQUFIO0FBQ0FqQyw0QkFBWWtDLFNBQVosQ0FBc0I7QUFDbEJ2Qiw2QkFBU0EsUUFBUXdCLEdBREM7QUFFbEJuQiwyQkFBT0wsUUFBUUs7QUFGRyxpQkFBdEIsRUFJQ29CLElBSkQsQ0FJTSxZQUFLO0FBQ1BoQix1QkFBR2lCLFdBQUg7QUFDQSwwQkFBS0MsS0FBTCxDQUFXLGtCQUFYLEVBQStCM0IsT0FBL0I7QUFDQSwwQkFBS00sT0FBTCxDQUFhYSxJQUFiO0FBQ0EsMEJBQUt6QixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsMEJBQUt3QixNQUFMO0FBQ0FULHVCQUFHbUIsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHSCxpQkFiRDtBQWNIO0FBbEVLLFM7Ozs7RUExQnlCLGVBQUtDLFM7O2tCQUF2QnhDLFMiLCJmaWxlIjoiYWRkVG9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IG51bWJlcklucHV0IGZyb20gJy4vbnVtYmVySW5wdXQnXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgKiBhcyBjYXJkUmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRUb0NhcmQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHNob3dNb2RhbFN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICBhbmltYXRpb25EYXRhOiAge30sXG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAkcHJvcHMgPSB7XCJudW1iZXJJbnB1dFwiOntcInYtYmluZDpudW0uc3luY1wiOlwicHJvZHVjdC5jb3VudFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBudW1iZXJJbnB1dFxuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgIHR3b1dheTogdHJ1ZSxcbiAgICAgICAgICAgICAgIGRlZmF1bHQgKCkge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiA1XG4gICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOaYvuekuua3u+WKoOi0reeJqei9puWvueivneahhlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMjAwKS5zdGVwKClcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6ZqQ6JeP5re75Yqg6LSt54mp6L2m5a+56K+d5qGGXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGhpZGU6ICAoKT0+IHtcbiAgICAgICAgICAgICAgICAvLyDpmpDol4/pga7nvanlsYJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgICAgICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgzMDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWxTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDmj5DkuqQgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHN1Ym1pdDogKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSB0aGlzLiRpbnZva2UoJ251bWJlcklucHV0JywgJ2dldE51bScpO1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gdGhpcy5wcm9kdWN0O1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdC5jb3VudCA9IGNvdW50O1xuXG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBjYXJkUmVxdWVzdC5hZGRUb0NhcmQoe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0Ll9pZCxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHByb2R1Y3QuY291bnRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhZGR0b2NhcmRzdWNjZXNzJywgcHJvZHVjdCk7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5bey5oiQ5Yqf5Yqg5Yiw6LSt54mp6L2mJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==