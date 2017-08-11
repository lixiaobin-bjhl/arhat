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
            product: {},
            submitting: false
        }, _this.$props = { "numberInput": { "v-bind:num.sync": "product.count" } }, _this.$events = {}, _this.components = {
            numberInput: _numberInput2.default
        }, _this.methods = {
            /**
             * 显示添加购物车对话框
             */
            show: function show(product) {
                var _this2 = this;

                this.product = product;
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
                    _this.$parent.$invoke('footer', 'getCountByOpendId');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRvQ2FyZC5qcyJdLCJuYW1lcyI6WyJjYXJkUmVxdWVzdCIsIkFkZFRvQ2FyZCIsImRhdGEiLCJzaG93TW9kYWxTdGF0dXMiLCJhbmltYXRpb25EYXRhIiwicHJvZHVjdCIsInN1Ym1pdHRpbmciLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm51bWJlcklucHV0IiwibWV0aG9kcyIsInNob3ciLCJhbmltYXRpb24iLCJ3eCIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJkZWxheSIsInRyYW5zbGF0ZVkiLCJzdGVwIiwiZXhwb3J0Iiwic2V0VGltZW91dCIsIiRhcHBseSIsImhpZGUiLCJzdWJtaXQiLCJjb3VudCIsIiRpbnZva2UiLCJzaG93TG9hZGluZyIsImFkZFRvQ2FyZCIsIl9pZCIsInRoZW4iLCJoaWRlTG9hZGluZyIsIiRlbWl0IiwiJHBhcmVudCIsInNob3dUb2FzdCIsInRpdGxlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxXOzs7Ozs7Ozs7Ozs7SUFFU0MsUzs7Ozs7Ozs7Ozs7Ozs7Z01BRWpCQyxJLEdBQU87QUFDSEMsNkJBQWlCLEtBRGQ7QUFFSEMsMkJBQWdCLEVBRmI7QUFHSEMscUJBQVMsRUFITjtBQUlIQyx3QkFBWTtBQUpULFMsUUFPUkMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLG1CQUFrQixlQUFuQixFQUFmLEUsUUFDaEJDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQztBQURFLFMsUUFJTkMsTyxHQUFVO0FBQ047OztBQUdBQyxrQkFBTSxjQUFVUCxPQUFWLEVBQW1CO0FBQUE7O0FBQ3JCLHFCQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxvQkFBSVEsWUFBWUMsR0FBR0MsZUFBSCxDQUFtQjtBQUMvQkMsOEJBQVUsR0FEcUI7QUFFL0JDLG9DQUFnQixRQUZlO0FBRy9CQywyQkFBTztBQUh3QixpQkFBbkIsQ0FBaEI7QUFLQSxxQkFBS0wsU0FBTCxHQUFpQkEsU0FBakI7QUFDQUEsMEJBQVVNLFVBQVYsQ0FBcUIsR0FBckIsRUFBMEJDLElBQTFCO0FBQ0EscUJBQUtoQixhQUFMLEdBQXFCUyxVQUFVUSxNQUFWLEVBQXJCO0FBQ0EscUJBQUtsQixlQUFMLEdBQXVCLElBQXZCO0FBQ0FtQiwyQkFBVyxZQUFLO0FBQ1pULDhCQUFVTSxVQUFWLENBQXFCLENBQXJCLEVBQXdCQyxJQUF4QjtBQUNBLDJCQUFLaEIsYUFBTCxHQUFxQlMsVUFBVVEsTUFBVixFQUFyQjtBQUNBLDJCQUFLRSxNQUFMO0FBQ0gsaUJBSkQsRUFJRyxHQUpIO0FBS0gsYUFwQks7O0FBc0JOOzs7QUFHQUMsa0JBQU8sZ0JBQUs7QUFDUjtBQUNBLG9CQUFJWCxZQUFZQyxHQUFHQyxlQUFILENBQW1CO0FBQy9CQyw4QkFBVSxHQURxQjtBQUUvQkMsb0NBQWdCLFFBRmU7QUFHL0JDLDJCQUFPO0FBSHdCLGlCQUFuQixDQUFoQjtBQUtBLHNCQUFLTCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBQSwwQkFBVU0sVUFBVixDQUFxQixHQUFyQixFQUEwQkMsSUFBMUI7QUFDQSxzQkFBS2hCLGFBQUwsR0FBcUJTLFVBQVVRLE1BQVYsRUFBckI7QUFDQUMsMkJBQVcsWUFBSztBQUNaVCw4QkFBVU0sVUFBVixDQUFxQixDQUFyQixFQUF3QkMsSUFBeEI7QUFDQSwwQkFBS2hCLGFBQUwsR0FBcUJTLFVBQVVRLE1BQVYsRUFBckI7QUFDQSwwQkFBS2xCLGVBQUwsR0FBdUIsS0FBdkI7QUFDQSwwQkFBS29CLE1BQUw7QUFDSCxpQkFMRCxFQUtHLEdBTEg7QUFNSCxhQXpDSzs7QUEyQ047OztBQUdBRSxvQkFBUSxrQkFBSztBQUNULHNCQUFLbkIsVUFBTCxHQUFrQixJQUFsQjtBQUNBLG9CQUFJb0IsUUFBUSxNQUFLQyxPQUFMLENBQWEsYUFBYixFQUE0QixRQUE1QixDQUFaO0FBQ0Esb0JBQUl0QixVQUFVLE1BQUtBLE9BQW5CO0FBQ0Esc0JBQUtBLE9BQUwsQ0FBYXFCLEtBQWIsR0FBcUJBLEtBQXJCOztBQUVBWixtQkFBR2MsV0FBSDtBQUNBNUIsNEJBQVk2QixTQUFaLENBQXNCO0FBQ2xCeEIsNkJBQVNBLFFBQVF5QixHQURDO0FBRWxCSiwyQkFBT3JCLFFBQVFxQjtBQUZHLGlCQUF0QixFQUlDSyxJQUpELENBSU0sWUFBSztBQUNQakIsdUJBQUdrQixXQUFIO0FBQ0EsMEJBQUtDLEtBQUwsQ0FBVyxrQkFBWCxFQUErQjVCLE9BQS9CO0FBQ0EsMEJBQUtNLE9BQUwsQ0FBYWEsSUFBYjtBQUNBLDBCQUFLbEIsVUFBTCxHQUFrQixLQUFsQjtBQUNBLDBCQUFLaUIsTUFBTDtBQUNBLDBCQUFLVyxPQUFMLENBQWFQLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0IsbUJBQS9CO0FBQ0FiLHVCQUFHcUIsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHSCxpQkFkRDtBQWVIO0FBcEVLLFM7Ozs7RUFmeUIsZUFBS0MsUzs7a0JBQXZCcEMsUyIsImZpbGUiOiJhZGRUb0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgbnVtYmVySW5wdXQgZnJvbSAnLi9udW1iZXJJbnB1dCdcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCAqIGFzIGNhcmRSZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2UvY2FyZCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFRvQ2FyZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2hvd01vZGFsU3RhdHVzOiBmYWxzZSxcbiAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6ICB7fSxcbiAgICAgICAgICAgIHByb2R1Y3Q6IHt9LCBcbiAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICRwcm9wcyA9IHtcIm51bWJlcklucHV0XCI6e1widi1iaW5kOm51bS5zeW5jXCI6XCJwcm9kdWN0LmNvdW50XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIG51bWJlcklucHV0XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDmmL7npLrmt7vliqDotK3nianovablr7nor53moYZcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2hvdzogZnVuY3Rpb24gKHByb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICB0aW1pbmdGdW5jdGlvbjogXCJsaW5lYXJcIixcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDIwMCkuc3RlcCgpXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWxTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmakOiXj+a3u+WKoOi0reeJqei9puWvueivneahhlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBoaWRlOiAgKCk9PiB7XG4gICAgICAgICAgICAgICAgLy8g6ZqQ6JeP6YGu572p5bGCXG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMzAwKS5zdGVwKClcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgwKS5zdGVwKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsU3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5o+Q5LqkIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzdWJtaXQ6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gdGhpcy4kaW52b2tlKCdudW1iZXJJbnB1dCcsICdnZXROdW0nKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHRoaXMucHJvZHVjdDtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QuY291bnQgPSBjb3VudDtcblxuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgY2FyZFJlcXVlc3QuYWRkVG9DYXJkKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdC5faWQsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBwcm9kdWN0LmNvdW50XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWRkdG9jYXJkc3VjY2VzcycsIHByb2R1Y3QpOyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5bey5oiQ5Yqf5Yqg5Yiw6LSt54mp6L2mJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==