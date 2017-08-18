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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRvQ2FyZC5qcyJdLCJuYW1lcyI6WyJjYXJkUmVxdWVzdCIsIkFkZFRvQ2FyZCIsImRhdGEiLCJzaG93TW9kYWxTdGF0dXMiLCJhbmltYXRpb25EYXRhIiwicHJvZHVjdCIsInN1Ym1pdHRpbmciLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm51bWJlcklucHV0IiwibWV0aG9kcyIsInNob3ciLCJhbmltYXRpb24iLCJ3eCIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJkZWxheSIsInRyYW5zbGF0ZVkiLCJzdGVwIiwiZXhwb3J0Iiwic2V0VGltZW91dCIsIiRhcHBseSIsImhpZGUiLCJzdWJtaXQiLCJjb3VudCIsIiRpbnZva2UiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiYWRkVG9DYXJkIiwiX2lkIiwidGhlbiIsImhpZGVMb2FkaW5nIiwiJGVtaXQiLCIkcGFyZW50Iiwic2hvd1RvYXN0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxXOzs7Ozs7Ozs7Ozs7SUFFU0MsUzs7Ozs7Ozs7Ozs7Ozs7Z01BRWpCQyxJLEdBQU87QUFDSEMsNkJBQWlCLEtBRGQ7QUFFSEMsMkJBQWdCLEVBRmI7QUFHSEMscUJBQVMsRUFITjtBQUlIQyx3QkFBWTtBQUpULFMsUUFPUkMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLG1CQUFrQixlQUFuQixFQUFmLEUsUUFDaEJDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQztBQURFLFMsUUFJTkMsTyxHQUFVO0FBQ047OztBQUdBQyxrQkFBTSxjQUFVUCxPQUFWLEVBQW1CO0FBQUE7O0FBQ3JCLHFCQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxvQkFBSVEsWUFBWUMsR0FBR0MsZUFBSCxDQUFtQjtBQUMvQkMsOEJBQVUsR0FEcUI7QUFFL0JDLG9DQUFnQixRQUZlO0FBRy9CQywyQkFBTztBQUh3QixpQkFBbkIsQ0FBaEI7QUFLQSxxQkFBS0wsU0FBTCxHQUFpQkEsU0FBakI7QUFDQUEsMEJBQVVNLFVBQVYsQ0FBcUIsR0FBckIsRUFBMEJDLElBQTFCO0FBQ0EscUJBQUtoQixhQUFMLEdBQXFCUyxVQUFVUSxNQUFWLEVBQXJCO0FBQ0EscUJBQUtsQixlQUFMLEdBQXVCLElBQXZCO0FBQ0FtQiwyQkFBVyxZQUFLO0FBQ1pULDhCQUFVTSxVQUFWLENBQXFCLENBQXJCLEVBQXdCQyxJQUF4QjtBQUNBLDJCQUFLaEIsYUFBTCxHQUFxQlMsVUFBVVEsTUFBVixFQUFyQjtBQUNBLDJCQUFLRSxNQUFMO0FBQ0gsaUJBSkQsRUFJRyxHQUpIO0FBS0gsYUFwQks7O0FBc0JOOzs7QUFHQUMsa0JBQU8sZ0JBQUs7QUFDUjtBQUNBLG9CQUFJWCxZQUFZQyxHQUFHQyxlQUFILENBQW1CO0FBQy9CQyw4QkFBVSxHQURxQjtBQUUvQkMsb0NBQWdCLFFBRmU7QUFHL0JDLDJCQUFPO0FBSHdCLGlCQUFuQixDQUFoQjtBQUtBLHNCQUFLTCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBQSwwQkFBVU0sVUFBVixDQUFxQixHQUFyQixFQUEwQkMsSUFBMUI7QUFDQSxzQkFBS2hCLGFBQUwsR0FBcUJTLFVBQVVRLE1BQVYsRUFBckI7QUFDQUMsMkJBQVcsWUFBSztBQUNaVCw4QkFBVU0sVUFBVixDQUFxQixDQUFyQixFQUF3QkMsSUFBeEI7QUFDQSwwQkFBS2hCLGFBQUwsR0FBcUJTLFVBQVVRLE1BQVYsRUFBckI7QUFDQSwwQkFBS2xCLGVBQUwsR0FBdUIsS0FBdkI7QUFDQSwwQkFBS29CLE1BQUw7QUFDSCxpQkFMRCxFQUtHLEdBTEg7QUFNSCxhQXpDSzs7QUEyQ047OztBQUdBRSxvQkFBUSxrQkFBSztBQUNULHNCQUFLbkIsVUFBTCxHQUFrQixJQUFsQjtBQUNBLG9CQUFJb0IsUUFBUSxNQUFLQyxPQUFMLENBQWEsYUFBYixFQUE0QixRQUE1QixDQUFaO0FBQ0Esb0JBQUl0QixVQUFVLE1BQUtBLE9BQW5CO0FBQ0Esc0JBQUtBLE9BQUwsQ0FBYXFCLEtBQWIsR0FBcUJBLEtBQXJCOztBQUVBWixtQkFBR2MsV0FBSCxDQUFlLEVBQUNDLE9BQU8sS0FBUixFQUFmO0FBQ0E3Qiw0QkFBWThCLFNBQVosQ0FBc0I7QUFDbEJ6Qiw2QkFBU0EsUUFBUTBCLEdBREM7QUFFbEJMLDJCQUFPckIsUUFBUXFCO0FBRkcsaUJBQXRCLEVBSUNNLElBSkQsQ0FJTSxZQUFLO0FBQ1BsQix1QkFBR21CLFdBQUg7QUFDQSwwQkFBS0MsS0FBTCxDQUFXLGtCQUFYLEVBQStCN0IsT0FBL0I7QUFDQSwwQkFBS00sT0FBTCxDQUFhYSxJQUFiO0FBQ0EsMEJBQUtsQixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsMEJBQUtpQixNQUFMO0FBQ0EsMEJBQUtZLE9BQUwsQ0FBYVIsT0FBYixDQUFxQixRQUFyQixFQUErQixtQkFBL0I7QUFDQWIsdUJBQUdzQixTQUFILENBQWE7QUFDVFAsK0JBQU87QUFERSxxQkFBYjtBQUdILGlCQWREO0FBZUg7QUFwRUssUzs7OztFQWZ5QixlQUFLUSxTOztrQkFBdkJwQyxTIiwiZmlsZSI6ImFkZFRvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCBudW1iZXJJbnB1dCBmcm9tICcuL251bWJlcklucHV0J1xuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0ICogYXMgY2FyZFJlcXVlc3QgZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkVG9DYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzaG93TW9kYWxTdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgYW5pbWF0aW9uRGF0YTogIHt9LFxuICAgICAgICAgICAgcHJvZHVjdDoge30sIFxuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgJHByb3BzID0ge1wibnVtYmVySW5wdXRcIjp7XCJ2LWJpbmQ6bnVtLnN5bmNcIjpcInByb2R1Y3QuY291bnRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgbnVtYmVySW5wdXRcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOaYvuekuua3u+WKoOi0reeJqei9puWvueivneahhlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzaG93OiBmdW5jdGlvbiAocHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMjAwKS5zdGVwKClcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6ZqQ6JeP5re75Yqg6LSt54mp6L2m5a+56K+d5qGGXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGhpZGU6ICAoKT0+IHtcbiAgICAgICAgICAgICAgICAvLyDpmpDol4/pga7nvanlsYJcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246IFwibGluZWFyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgICAgICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgzMDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWxTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDmj5DkuqQgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHN1Ym1pdDogKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgY291bnQgPSB0aGlzLiRpbnZva2UoJ251bWJlcklucHV0JywgJ2dldE51bScpO1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gdGhpcy5wcm9kdWN0O1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdC5jb3VudCA9IGNvdW50O1xuXG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOiAn5Yqg6L295LitJ30pO1xuICAgICAgICAgICAgICAgIGNhcmRSZXF1ZXN0LmFkZFRvQ2FyZCh7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3QuX2lkLFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogcHJvZHVjdC5jb3VudFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZHRvY2FyZHN1Y2Nlc3MnLCBwcm9kdWN0KTsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+W3suaIkOWKn+WKoOWIsOi0reeJqei9pidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=