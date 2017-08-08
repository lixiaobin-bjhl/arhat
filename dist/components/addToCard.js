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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRvQ2FyZC5qcyJdLCJuYW1lcyI6WyJjYXJkUmVxdWVzdCIsIkFkZFRvQ2FyZCIsImRhdGEiLCJzaG93TW9kYWxTdGF0dXMiLCJhbmltYXRpb25EYXRhIiwic3VibWl0dGluZyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibnVtYmVySW5wdXQiLCJwcm9wcyIsInByb2R1Y3QiLCJ0eXBlIiwiT2JqZWN0IiwidHdvV2F5IiwiZGVmYXVsdCIsImNvdW50IiwibWV0aG9kcyIsInNob3ciLCJhbmltYXRpb24iLCJ3eCIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJkZWxheSIsInRyYW5zbGF0ZVkiLCJzdGVwIiwiZXhwb3J0Iiwic2V0VGltZW91dCIsIiRhcHBseSIsImhpZGUiLCJzdWJtaXQiLCIkaW52b2tlIiwic2hvd0xvYWRpbmciLCJhZGRUb0NhcmQiLCJfaWQiLCJ0aGVuIiwiaGlkZUxvYWRpbmciLCIkZW1pdCIsIiRwYXJlbnQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsVzs7Ozs7Ozs7Ozs7O0lBRVNDLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUVqQkMsSSxHQUFPO0FBQ0hDLDZCQUFpQixLQURkO0FBRUhDLDJCQUFnQixFQUZiO0FBR0hDLHdCQUFZO0FBSFQsUyxRQU1SQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsbUJBQWtCLGVBQW5CLEVBQWYsRSxRQUNoQkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQUlOQyxLLEdBQVE7QUFDTEMscUJBQVM7QUFDTEMsc0JBQU1DLE1BREQ7QUFFTEMsd0JBQVEsSUFGSDtBQUdMQyx1QkFISyxzQkFHTTtBQUNQLDJCQUFPO0FBQ0hDLCtCQUFPO0FBREoscUJBQVA7QUFHSDtBQVBJO0FBREosUyxRQVlSQyxPLEdBQVU7QUFDTjs7O0FBR0FDLGtCQUFNLGdCQUFZO0FBQUE7O0FBQ2Qsb0JBQUlDLFlBQVlDLEdBQUdDLGVBQUgsQ0FBbUI7QUFDL0JDLDhCQUFVLEdBRHFCO0FBRS9CQyxvQ0FBZ0IsUUFGZTtBQUcvQkMsMkJBQU87QUFId0IsaUJBQW5CLENBQWhCO0FBS0EscUJBQUtMLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0FBLDBCQUFVTSxVQUFWLENBQXFCLEdBQXJCLEVBQTBCQyxJQUExQjtBQUNBLHFCQUFLdEIsYUFBTCxHQUFxQmUsVUFBVVEsTUFBVixFQUFyQjtBQUNBLHFCQUFLeEIsZUFBTCxHQUF1QixJQUF2QjtBQUNBeUIsMkJBQVcsWUFBSztBQUNaVCw4QkFBVU0sVUFBVixDQUFxQixDQUFyQixFQUF3QkMsSUFBeEI7QUFDQSwyQkFBS3RCLGFBQUwsR0FBcUJlLFVBQVVRLE1BQVYsRUFBckI7QUFDQSwyQkFBS0UsTUFBTDtBQUNILGlCQUpELEVBSUcsR0FKSDtBQUtILGFBbkJLOztBQXFCTjs7O0FBR0FDLGtCQUFPLGdCQUFLO0FBQ1I7QUFDQSxvQkFBSVgsWUFBWUMsR0FBR0MsZUFBSCxDQUFtQjtBQUMvQkMsOEJBQVUsR0FEcUI7QUFFL0JDLG9DQUFnQixRQUZlO0FBRy9CQywyQkFBTztBQUh3QixpQkFBbkIsQ0FBaEI7QUFLQSxzQkFBS0wsU0FBTCxHQUFpQkEsU0FBakI7QUFDQUEsMEJBQVVNLFVBQVYsQ0FBcUIsR0FBckIsRUFBMEJDLElBQTFCO0FBQ0Esc0JBQUt0QixhQUFMLEdBQXFCZSxVQUFVUSxNQUFWLEVBQXJCO0FBQ0FDLDJCQUFXLFlBQUs7QUFDWlQsOEJBQVVNLFVBQVYsQ0FBcUIsQ0FBckIsRUFBd0JDLElBQXhCO0FBQ0EsMEJBQUt0QixhQUFMLEdBQXFCZSxVQUFVUSxNQUFWLEVBQXJCO0FBQ0EsMEJBQUt4QixlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsMEJBQUswQixNQUFMO0FBQ0gsaUJBTEQsRUFLRyxHQUxIO0FBTUgsYUF4Q0s7O0FBMENOOzs7QUFHQUUsb0JBQVEsa0JBQUs7QUFDVCxzQkFBSzFCLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxvQkFBSVcsUUFBUSxNQUFLZ0IsT0FBTCxDQUFhLGFBQWIsRUFBNEIsUUFBNUIsQ0FBWjtBQUNBLG9CQUFJckIsVUFBVSxNQUFLQSxPQUFuQjtBQUNBLHNCQUFLQSxPQUFMLENBQWFLLEtBQWIsR0FBcUJBLEtBQXJCOztBQUVBSSxtQkFBR2EsV0FBSDtBQUNBakMsNEJBQVlrQyxTQUFaLENBQXNCO0FBQ2xCdkIsNkJBQVNBLFFBQVF3QixHQURDO0FBRWxCbkIsMkJBQU9MLFFBQVFLO0FBRkcsaUJBQXRCLEVBSUNvQixJQUpELENBSU0sWUFBSztBQUNQaEIsdUJBQUdpQixXQUFIO0FBQ0EsMEJBQUtDLEtBQUwsQ0FBVyxrQkFBWCxFQUErQjNCLE9BQS9CO0FBQ0EsMEJBQUtNLE9BQUwsQ0FBYWEsSUFBYjtBQUNBLDBCQUFLekIsVUFBTCxHQUFrQixLQUFsQjtBQUNBLDBCQUFLd0IsTUFBTDtBQUNBLDBCQUFLVSxPQUFMLENBQWFQLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0IsbUJBQS9CO0FBQ0FaLHVCQUFHb0IsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHSCxpQkFkRDtBQWVIO0FBbkVLLFM7Ozs7RUExQnlCLGVBQUtDLFM7O2tCQUF2QnpDLFMiLCJmaWxlIjoiYWRkVG9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IG51bWJlcklucHV0IGZyb20gJy4vbnVtYmVySW5wdXQnXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgKiBhcyBjYXJkUmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRUb0NhcmQgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHNob3dNb2RhbFN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICBhbmltYXRpb25EYXRhOiAge30sXG4gICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAkcHJvcHMgPSB7XCJudW1iZXJJbnB1dFwiOntcInYtYmluZDpudW0uc3luY1wiOlwicHJvZHVjdC5jb3VudFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBudW1iZXJJbnB1dFxuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgIHR3b1dheTogdHJ1ZSxcbiAgICAgICAgICAgICAgIGRlZmF1bHQgKCkge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiA1XG4gICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOaYvuekuua3u+WKoOi0reeJqei9puWvueivneahhlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMjAwKS5zdGVwKClcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6ZqQ6JeP5re75Yqg6LSt54mp6L2m5a+56K+d5qGGXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGhpZGU6ICAoKT0+IHtcbiAgICAgICAgICAgICAgICAvLyDpmpDol4/pga7nvanlsYJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgICAgICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgzMDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWxTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDmj5DkuqQgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHN1Ym1pdDogKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSB0aGlzLiRpbnZva2UoJ251bWJlcklucHV0JywgJ2dldE51bScpO1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gdGhpcy5wcm9kdWN0O1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdC5jb3VudCA9IGNvdW50O1xuXG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBjYXJkUmVxdWVzdC5hZGRUb0NhcmQoe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0Ll9pZCxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHByb2R1Y3QuY291bnRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhZGR0b2NhcmRzdWNjZXNzJywgcHJvZHVjdCk7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflt7LmiJDlip/liqDliLDotK3nianovaYnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19