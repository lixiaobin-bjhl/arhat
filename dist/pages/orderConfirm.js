'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _product = require('./../service/product.js');

var _shippingAddress = require('./../service/shippingAddress.js');

var _plus = require('./../function/plus.js');

var _plus2 = _interopRequireDefault(_plus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderConfirm = function (_wepy$page) {
    _inherits(OrderConfirm, _wepy$page);

    function OrderConfirm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, OrderConfirm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderConfirm.__proto__ || Object.getPrototypeOf(OrderConfirm)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '确认定单'
        }, _this.data = {
            products: null,
            shippingAddressList: null
        }, _this.computed = {
            // 默认收货地地址
            defaultShippingAddress: function defaultShippingAddress() {
                var result = null;
                var shippingAddressList = _this.shippingAddressList;
                if (shippingAddressList && shippingAddressList.length) {
                    // 如果只有一个收货地址，不管是不是默认的，就当默认的使用
                    if (shippingAddressList.length == 1) {
                        result = shippingAddressList[0];
                    } else {
                        shippingAddressList.some(function (item) {
                            if (item.isDefault) {
                                result = item;
                                return true;
                            }
                        });
                    }
                }
                return result;
            }
        }, _this.methods = {
            /**
             * 选择配送地址 
             */
            selectShipingAddress: function selectShipingAddress() {
                wx.navigateTo({
                    url: 'shippingAddress'
                });
            },


            /**
             * 获取收货地址列表
             */
            getShippingAddressList: function getShippingAddressList() {
                (0, _shippingAddress.list)().then(function (res) {
                    _this.shippingAddressList = res.data.list;
                    _this.$apply();
                }).catch(function () {
                    _this.shippingAddressList = [];
                    _this.$apply();
                });
            },

            /**
             * 根据产品ids获取商品信息 
             */
            getProductsByIds: function getProductsByIds(ids) {
                wx.showLoading();
                (0, _product.listByIds)({
                    products: [{
                        count: 1,
                        id: ids
                    }]
                }).then(function (res) {
                    wx.hideLoading();
                    _this.products = res.data.list;
                    _this.$apply();
                }).catch(function () {
                    _this.products = [];
                    _this.$apply();
                    wx.hideLoading();
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OrderConfirm, [{
        key: 'onShow',
        value: function onShow() {
            this.methods.getShippingAddressList();
        }
    }, {
        key: 'onLoad',
        value: function onLoad(p) {
            var pids = p.pids;
            // 直接购买产品 
            this.methods.getProductsByIds(pids);
        }
    }]);

    return OrderConfirm;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(OrderConfirm , 'pages/orderConfirm'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJPcmRlckNvbmZpcm0iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInByb2R1Y3RzIiwic2hpcHBpbmdBZGRyZXNzTGlzdCIsImNvbXB1dGVkIiwiZGVmYXVsdFNoaXBwaW5nQWRkcmVzcyIsInJlc3VsdCIsImxlbmd0aCIsInNvbWUiLCJpdGVtIiwiaXNEZWZhdWx0IiwibWV0aG9kcyIsInNlbGVjdFNoaXBpbmdBZGRyZXNzIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCIsInRoZW4iLCJyZXMiLCJsaXN0IiwiJGFwcGx5IiwiY2F0Y2giLCJnZXRQcm9kdWN0c0J5SWRzIiwiaWRzIiwic2hvd0xvYWRpbmciLCJjb3VudCIsImlkIiwiaGlkZUxvYWRpbmciLCJwIiwicGlkcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7Ozs7c01BRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsSSxHQUFPO0FBQ0pDLHNCQUFVLElBRE47QUFFSkMsaUNBQXFCO0FBRmpCLFMsUUFTUEMsUSxHQUFXO0FBQ1A7QUFDQUMsb0NBQXdCLGtDQUFLO0FBQ3pCLG9CQUFJQyxTQUFTLElBQWI7QUFDQSxvQkFBSUgsc0JBQXNCLE1BQUtBLG1CQUEvQjtBQUNBLG9CQUFJQSx1QkFBdUJBLG9CQUFvQkksTUFBL0MsRUFBdUQ7QUFDbkQ7QUFDQSx3QkFBSUosb0JBQW9CSSxNQUFwQixJQUE4QixDQUFsQyxFQUFxQztBQUNqQ0QsaUNBQVNILG9CQUFvQixDQUFwQixDQUFUO0FBQ0gscUJBRkQsTUFFTztBQUNIQSw0Q0FBb0JLLElBQXBCLENBQXlCLFVBQUNDLElBQUQsRUFBUztBQUM5QixnQ0FBSUEsS0FBS0MsU0FBVCxFQUFvQjtBQUNoQkoseUNBQVNHLElBQVQ7QUFDQSx1Q0FBTyxJQUFQO0FBQ0g7QUFDSix5QkFMRDtBQU1IO0FBQ0o7QUFDRCx1QkFBT0gsTUFBUDtBQUNIO0FBbkJNLFMsUUFzQlhLLE8sR0FBVTtBQUNOOzs7QUFHQUMsZ0NBSk0sa0NBSWtCO0FBQ3BCQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1hDLHlCQUFLO0FBRE0saUJBQWQ7QUFHSCxhQVJLOzs7QUFVTjs7O0FBR0FDLG9DQUF3QixrQ0FBSztBQUN6Qiw2Q0FDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLDBCQUFLZixtQkFBTCxHQUEyQmUsSUFBSWpCLElBQUosQ0FBU2tCLElBQXBDO0FBQ0EsMEJBQUtDLE1BQUw7QUFDSCxpQkFKTCxFQUtLQyxLQUxMLENBS1csWUFBSztBQUNSLDBCQUFLbEIsbUJBQUwsR0FBMkIsRUFBM0I7QUFDQSwwQkFBS2lCLE1BQUw7QUFDSCxpQkFSTDtBQVVILGFBeEJLOztBQTBCTjs7O0FBR0FFLDhCQUFrQiwwQkFBQ0MsR0FBRCxFQUFTO0FBQ3ZCVixtQkFBR1csV0FBSDtBQUNBLHdDQUFVO0FBQ050Qiw4QkFBVSxDQUNOO0FBQ0l1QiwrQkFBTyxDQURYO0FBRUlDLDRCQUFJSDtBQUZSLHFCQURNO0FBREosaUJBQVYsRUFRS04sSUFSTCxDQVFVLFVBQUNDLEdBQUQsRUFBUTtBQUNWTCx1QkFBR2MsV0FBSDtBQUNBLDBCQUFLekIsUUFBTCxHQUFnQmdCLElBQUlqQixJQUFKLENBQVNrQixJQUF6QjtBQUNBLDBCQUFLQyxNQUFMO0FBQ0gsaUJBWkwsRUFhS0MsS0FiTCxDQWFXLFlBQUs7QUFDUiwwQkFBS25CLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSwwQkFBS2tCLE1BQUw7QUFDQVAsdUJBQUdjLFdBQUg7QUFDSCxpQkFqQkw7QUFrQkg7QUFqREssUzs7Ozs7aUNBMUJBO0FBQ04saUJBQUtoQixPQUFMLENBQWFLLHNCQUFiO0FBQ0g7OzsrQkE0RU9ZLEMsRUFBRztBQUNQLGdCQUFJQyxPQUFPRCxFQUFFQyxJQUFiO0FBQ0E7QUFDQSxpQkFBS2xCLE9BQUwsQ0FBYVcsZ0JBQWIsQ0FBOEJPLElBQTlCO0FBQ0g7Ozs7RUE3RnNDLGVBQUtDLEk7O2tCQUEzQmhDLFkiLCJmaWxlIjoib3JkZXJDb25maXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGxpc3RCeUlkcyB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCdcbiAgICBpbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vc2VydmljZS9zaGlwcGluZ0FkZHJlc3MnXG4gICAgaW1wb3J0IHBsdXMgZnJvbSAnLi4vZnVuY3Rpb24vcGx1cydcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckNvbmZpcm0gIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnoa7orqTlrprljZUnXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICBwcm9kdWN0czogbnVsbCxcbiAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRTaGlwcGluZ0FkZHJlc3NMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIC8vIOm7mOiupOaUtui0p+WcsOWcsOWdgFxuICAgICAgICAgICAgZGVmYXVsdFNoaXBwaW5nQWRkcmVzczogKCk9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHNoaXBwaW5nQWRkcmVzc0xpc3QgPSB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBwaW5nQWRkcmVzc0xpc3QgJiYgc2hpcHBpbmdBZGRyZXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5Y+q5pyJ5LiA5Liq5pS26LSn5Zyw5Z2A77yM5LiN566h5piv5LiN5piv6buY6K6k55qE77yM5bCx5b2T6buY6K6k55qE5L2/55SoXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwcGluZ0FkZHJlc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzaGlwcGluZ0FkZHJlc3NMaXN0WzBdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdC5zb21lKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDpgInmi6nphY3pgIHlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdFNoaXBpbmdBZGRyZXNzICgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICB1cmw6ICdzaGlwcGluZ0FkZHJlc3MnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluaUtui0p+WcsOWdgOWIl+ihqFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRTaGlwcGluZ0FkZHJlc3NMaXN0OiAoKT0+IHtcbiAgICAgICAgICAgICAgICBsaXN0KClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSByZXMuZGF0YS5saXN0OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDmoLnmja7kuqflk4FpZHPojrflj5bllYblk4Hkv6Hmga8gXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldFByb2R1Y3RzQnlJZHM6IChpZHMpID0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xuICAgICAgICAgICAgICAgIGxpc3RCeUlkcyh7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlcy5kYXRhLmxpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB2YXIgcGlkcyA9IHAucGlkcztcbiAgICAgICAgICAgIC8vIOebtOaOpei0reS5sOS6p+WTgSBcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRQcm9kdWN0c0J5SWRzKHBpZHMpO1xuICAgICAgICB9XG4gICAgfVxuIl19