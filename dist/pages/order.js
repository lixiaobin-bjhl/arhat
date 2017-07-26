'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _order = require('./../service/order.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Order = function (_wepy$page) {
    _inherits(Order, _wepy$page);

    function Order() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Order);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Order.__proto__ || Object.getPrototypeOf(Order)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的订单'
        }, _this.data = {
            list: null
        }, _this.methods = {
            /**
             * 获取收货地址列表
             */
            getOrderList: function getOrderList() {
                (0, _order.list)().then(function (res) {
                    _this.list = res.data;
                    _this.$apply();
                }).catch(function () {
                    _this.list = [];
                    _this.$apply();
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Order, [{
        key: 'onShow',
        value: function onShow() {
            this.methods.getOrderList();
        }
    }]);

    return Order;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Order , 'pages/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsImdldE9yZGVyTGlzdCIsInRoZW4iLCJyZXMiLCIkYXBwbHkiLCJjYXRjaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBUVRDLEksR0FBTztBQUNIQyxrQkFBTTtBQURILFMsUUFJUEMsTyxHQUFVO0FBQ047OztBQUdBQywwQkFBYyx3QkFBSztBQUNmLG1DQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1YsMEJBQUtKLElBQUwsR0FBWUksSUFBSUwsSUFBaEI7QUFDQSwwQkFBS00sTUFBTDtBQUNILGlCQUpMLEVBS0tDLEtBTEwsQ0FLVyxZQUFLO0FBQ1IsMEJBQUtOLElBQUwsR0FBWSxFQUFaO0FBQ0EsMEJBQUtLLE1BQUw7QUFDSCxpQkFSTDtBQVNIO0FBZEssUzs7Ozs7aUNBUkE7QUFDTixpQkFBS0osT0FBTCxDQUFhQyxZQUFiO0FBQ0g7Ozs7RUFSOEIsZUFBS0ssSTs7a0JBQW5CWCxLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL29yZGVyJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlSdcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0T3JkZXJMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbGlzdDogbnVsbCBcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluaUtui0p+WcsOWdgOWIl+ihqFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRPcmRlckxpc3Q6ICgpPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IHJlcy5kYXRhOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgfVxuIl19