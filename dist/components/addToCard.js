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

var _common = require('./../mixins/common.js');

var _common2 = _interopRequireDefault(_common);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddToCard.__proto__ || Object.getPrototypeOf(AddToCard)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_common2.default], _this.data = {
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
             * 跳转地址 
             */
            redirect: function redirect(url) {
                wx.redirectTo({
                    url: url
                });
            },


            /**
             * 购买
             */
            pay: function pay(item) {
                var product = this.product;
                var count = this.$invoke('numberInput', 'getNum');
                this.product.count = count;
                this.submitting = true;
                this.methods.redirect('orderConfirm?products=' + JSON.stringify([{
                    count: product.count,
                    id: product._id
                }]));
            },


            /**
             * 提交 
             */
            submit: function submit() {
                _this.submitting = true;
                var count = _this.$invoke('numberInput', 'getNum');
                var product = _this.product;
                _this.product.count = count;

                wx.showLoading({ title: '加载中' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRvQ2FyZC5qcyJdLCJuYW1lcyI6WyJjYXJkUmVxdWVzdCIsIkFkZFRvQ2FyZCIsIm1peGlucyIsImRhdGEiLCJzaG93TW9kYWxTdGF0dXMiLCJhbmltYXRpb25EYXRhIiwicHJvZHVjdCIsInN1Ym1pdHRpbmciLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm51bWJlcklucHV0IiwibWV0aG9kcyIsInNob3ciLCJhbmltYXRpb24iLCJ3eCIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJkZWxheSIsInRyYW5zbGF0ZVkiLCJzdGVwIiwiZXhwb3J0Iiwic2V0VGltZW91dCIsIiRhcHBseSIsImhpZGUiLCJyZWRpcmVjdCIsInVybCIsInJlZGlyZWN0VG8iLCJwYXkiLCJpdGVtIiwiY291bnQiLCIkaW52b2tlIiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwiX2lkIiwic3VibWl0Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImFkZFRvQ2FyZCIsInRoZW4iLCJoaWRlTG9hZGluZyIsIiRlbWl0IiwiJHBhcmVudCIsInNob3dUb2FzdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsVzs7QUFDWjs7Ozs7Ozs7Ozs7Ozs7SUFFcUJDLFM7Ozs7Ozs7Ozs7Ozs7O2dNQUVqQkMsTSxHQUFTLGtCLFFBRVRDLEksR0FBTztBQUNIQyw2QkFBaUIsS0FEZDtBQUVIQywyQkFBZ0IsRUFGYjtBQUdIQyxxQkFBUyxFQUhOO0FBSUhDLHdCQUFZO0FBSlQsUyxRQU9SQyxNLEdBQVMsRUFBQyxlQUFjLEVBQUMsbUJBQWtCLGVBQW5CLEVBQWYsRSxRQUNoQkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQUlOQyxPLEdBQVU7QUFDTjs7O0FBR0FDLGtCQUFNLGNBQVVQLE9BQVYsRUFBbUI7QUFBQTs7QUFDckIscUJBQUtBLE9BQUwsR0FBZUEs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QixRQUFyQixFQUErQixtQkFBL0I7QUFDQWpCLHVCQUFHOEIsU0FBSCxDQUFhO0FBQ1ROLCtCQUFPO0FBREUscUJBQWI7QUFHSCxpQkFkRDtBQWVIO0FBNUZLLFM7Ozs7RUFqQnlCLGVBQUtPLFM7O2tCQUF2QjdDLFMiLCJmaWxlIjoiYWRkVG9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IG51bWJlcklucHV0IGZyb20gJy4vbnVtYmVySW5wdXQnXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgKiBhcyBjYXJkUmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnXG4gICAgaW1wb3J0IENvbW1vbk1peGluIGZyb20gJy4uL21peGlucy9jb21tb24nO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkVG9DYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIFxuICAgICAgICBtaXhpbnMgPSBbQ29tbW9uTWl4aW5dO1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzaG93TW9kYWxTdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgYW5pbWF0aW9uRGF0YTogIHt9LFxuICAgICAgICAgICAgcHJvZHVjdDoge30sIFxuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgJHByb3BzID0ge1wibnVtYmVySW5wdXRcIjp7XCJ2LWJpbmQ6bnVtLnN5bmNcIjpcInByb2R1Y3QuY291bnRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgbnVtYmVySW5wdXRcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOaYvuekuua3u+WKoOi0reeJqei9puWvueivneahhlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzaG93OiBmdW5jdGlvbiAocHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMjAwKS5zdGVwKClcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6ZqQ6JeP5re75Yqg6LSt54mp6L2m5a+56K+d5qGGXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGhpZGU6ICAoKT0+IHtcbiAgICAgICAgICAgICAgICAvLyDpmpDol4/pga7nvanlsYJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgICAgICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgzMDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWxTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6LSt5LmwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBheSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gdGhpcy5wcm9kdWN0OyAgXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gdGhpcy4kaW52b2tlKCdudW1iZXJJbnB1dCcsICdnZXROdW0nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QuY291bnQgPSBjb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5yZWRpcmVjdCgnb3JkZXJDb25maXJtP3Byb2R1Y3RzPScgKyBKU09OLnN0cmluZ2lmeShbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHByb2R1Y3QuY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcHJvZHVjdC5faWRcbiAgICAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5o+Q5LqkIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzdWJtaXQ6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gdGhpcy4kaW52b2tlKCdudW1iZXJJbnB1dCcsICdnZXROdW0nKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHRoaXMucHJvZHVjdDtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QuY291bnQgPSBjb3VudDtcblxuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTogJ+WKoOi9veS4rSd9KTtcbiAgICAgICAgICAgICAgICBjYXJkUmVxdWVzdC5hZGRUb0NhcmQoe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0Ll9pZCxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHByb2R1Y3QuY291bnRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhZGR0b2NhcmRzdWNjZXNzJywgcHJvZHVjdCk7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflt7LmiJDlip/liqDliLDotK3nianovaYnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19