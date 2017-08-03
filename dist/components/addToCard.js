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
                    return {};
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
                _this.$emit('addtocard', _this.product);
                _this.methods.hide();
                _this.submitting = false;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return AddToCard;
}(_wepy2.default.component);

exports.default = AddToCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFRvQ2FyZC5qcyJdLCJuYW1lcyI6WyJBZGRUb0NhcmQiLCJkYXRhIiwic2hvd01vZGFsU3RhdHVzIiwiYW5pbWF0aW9uRGF0YSIsInN1Ym1pdHRpbmciLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm51bWJlcklucHV0IiwicHJvcHMiLCJwcm9kdWN0IiwidHlwZSIsIk9iamVjdCIsInR3b1dheSIsImRlZmF1bHQiLCJtZXRob2RzIiwic2hvdyIsImFuaW1hdGlvbiIsInd4IiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsImRlbGF5IiwidHJhbnNsYXRlWSIsInN0ZXAiLCJleHBvcnQiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwiaGlkZSIsInN1Ym1pdCIsIiRlbWl0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7OztnTUFFakJDLEksR0FBTztBQUNIQyw2QkFBaUIsS0FEZDtBQUVIQywyQkFBZ0IsRUFGYjtBQUdIQyx3QkFBWTtBQUhULFMsUUFNUkMsTSxHQUFTLEVBQUMsZUFBYyxFQUFDLG1CQUFrQixlQUFuQixFQUFmLEUsUUFDaEJDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQztBQURFLFMsUUFJTkMsSyxHQUFRO0FBQ0xDLHFCQUFTO0FBQ0xDLHNCQUFNQyxNQUREO0FBRUxDLHdCQUFRLElBRkg7QUFHTEMsdUJBSEssc0JBR007QUFDUCwyQkFBTyxFQUFQO0FBQ0g7QUFMSTtBQURKLFMsUUFVUkMsTyxHQUFVOztBQUVOOzs7QUFHQUMsa0JBQU0sZ0JBQVk7QUFBQTs7QUFDZCxvQkFBSUMsWUFBWUMsR0FBR0MsZUFBSCxDQUFtQjtBQUMvQkMsOEJBQVUsR0FEcUI7QUFFL0JDLG9DQUFnQixRQUZlO0FBRy9CQywyQkFBTztBQUh3QixpQkFBbkIsQ0FBaEI7O0FBTUEscUJBQUtMLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0FBLDBCQUFVTSxVQUFWLENBQXFCLEdBQXJCLEVBQTBCQyxJQUExQjtBQUNBLHFCQUFLckIsYUFBTCxHQUFxQmMsVUFBVVEsTUFBVixFQUFyQjtBQUNBLHFCQUFLdkIsZUFBTCxHQUF1QixJQUF2QjtBQUNBd0IsMkJBQVcsWUFBSztBQUNaVCw4QkFBVU0sVUFBVixDQUFxQixDQUFyQixFQUF3QkMsSUFBeEI7QUFDQSwyQkFBS3JCLGFBQUwsR0FBcUJjLFVBQVVRLE1BQVYsRUFBckI7QUFDQSwyQkFBS0UsTUFBTDtBQUNILGlCQUpELEVBSUcsR0FKSDtBQUtILGFBckJLOztBQXVCTjs7O0FBR0FDLGtCQUFPLGdCQUFLO0FBQ1I7QUFDQSxvQkFBSVgsWUFBWUMsR0FBR0MsZUFBSCxDQUFtQjtBQUMvQkMsOEJBQVUsR0FEcUI7QUFFL0JDLG9DQUFnQixRQUZlO0FBRy9CQywyQkFBTztBQUh3QixpQkFBbkIsQ0FBaEI7QUFLQSxzQkFBS0wsU0FBTCxHQUFpQkEsU0FBakI7QUFDQUEsMEJBQVVNLFVBQVYsQ0FBcUIsR0FBckIsRUFBMEJDLElBQTFCO0FBQ0Esc0JBQUtyQixhQUFMLEdBQXFCYyxVQUFVUSxNQUFWLEVBQXJCO0FBQ0FDLDJCQUFXLFlBQUs7QUFDWlQsOEJBQVVNLFVBQVYsQ0FBcUIsQ0FBckIsRUFBd0JDLElBQXhCO0FBQ0EsMEJBQUtyQixhQUFMLEdBQXFCYyxVQUFVUSxNQUFWLEVBQXJCO0FBQ0EsMEJBQUt2QixlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsMEJBQUt5QixNQUFMO0FBQ0gsaUJBTEQsRUFLRyxHQUxIO0FBTUgsYUExQ0s7O0FBNENOOzs7QUFHQUUsb0JBQVEsa0JBQUs7QUFDVCxzQkFBS3pCLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxzQkFBSzBCLEtBQUwsQ0FBVyxXQUFYLEVBQXdCLE1BQUtwQixPQUE3QjtBQUNBLHNCQUFLSyxPQUFMLENBQWFhLElBQWI7QUFDQSxzQkFBS3hCLFVBQUwsR0FBa0IsS0FBbEI7QUFDSDtBQXBESyxTOzs7O0VBeEJ5QixlQUFLMkIsUzs7a0JBQXZCL0IsUyIsImZpbGUiOiJhZGRUb0NhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgbnVtYmVySW5wdXQgZnJvbSAnLi9udW1iZXJJbnB1dCc7XG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkVG9DYXJkIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzaG93TW9kYWxTdGF0dXM6IGZhbHNlLFxuICAgICAgICAgICAgYW5pbWF0aW9uRGF0YTogIHt9LFxuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgJHByb3BzID0ge1wibnVtYmVySW5wdXRcIjp7XCJ2LWJpbmQ6bnVtLnN5bmNcIjpcInByb2R1Y3QuY291bnRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgbnVtYmVySW5wdXRcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICB0d29XYXk6IHRydWUsXG4gICAgICAgICAgICAgICBkZWZhdWx0ICgpIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOaYvuekuua3u+WKoOi0reeJqei9puWvueivneahhlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgICAgICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgyMDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmakOiXj+a3u+WKoOi0reeJqei9puWvueivneahhlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBoaWRlOiAgKCk9PiB7XG4gICAgICAgICAgICAgICAgLy8g6ZqQ6JeP6YGu572p5bGCXG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHd4LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiBcImxpbmVhclwiLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgICAgICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgzMDApLnN0ZXAoKVxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YSA9IGFuaW1hdGlvbi5leHBvcnQoKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgwKS5zdGVwKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhID0gYW5pbWF0aW9uLmV4cG9ydCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNb2RhbFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOaPkOS6pCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc3VibWl0OiAoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZHRvY2FyZCcsIHRoaXMucHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==