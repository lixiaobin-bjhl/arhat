'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _shippingAddress = require('./../service/shippingAddress.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShippingAddress = function (_wepy$page) {
    _inherits(ShippingAddress, _wepy$page);

    function ShippingAddress() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ShippingAddress);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShippingAddress.__proto__ || Object.getPrototypeOf(ShippingAddress)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '地址管理'
        }, _this.data = {
            shippingAddressList: null
        }, _this.methods = {
            /**
             * 设置默认收货地址 
             */
            selectShippingAddress: function selectShippingAddress(item) {
                // 如果当前本身就是默认地址，就不用操作数据库直接返回
                if (item.isDefault) {
                    wx.navigateBack();
                    return;
                }

                var isCurrentDefaultId = 0;
                this.shippingAddressList.some(function (n) {
                    if (n.isDefault) {
                        isCurrentDefaultId = n._id;
                        return true;
                    }
                });

                var ps = [(0, _shippingAddress.setDefault)(item._id, true)];

                // 将当前默认的状态去掉
                if (isCurrentDefaultId) {
                    ps.push((0, _shippingAddress.setDefault)(isCurrentDefaultId, false));
                }

                Promise.all(ps).then(function () {
                    wx.navigateBack();
                });
            },


            /**
             * 添加收货地址 
             */
            addShippingAddress: function addShippingAddress() {
                wx.navigateTo({
                    url: 'fillShippingAddress'
                });
            },


            /**
             * 编辑地址 
             */
            modify: function modify(item) {
                wx.navigateTo({
                    url: 'fillShippingAddress?id=' + item._id
                });
            },


            /**
             * 删除收货地址 
             */
            del: function del(item) {
                var _this2 = this;

                (0, _shippingAddress.remove)(item._id).then(function () {
                    wx.showToast({
                        title: '保存成功'
                    });
                    _this2.methods.getShippingAddressList();
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
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ShippingAddress, [{
        key: 'onShow',
        value: function onShow() {
            this.methods.getShippingAddressList();
        }
    }]);

    return ShippingAddress;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ShippingAddress , 'pages/shippingAddress'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nQWRkcmVzcy5qcyJdLCJuYW1lcyI6WyJTaGlwcGluZ0FkZHJlc3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNoaXBwaW5nQWRkcmVzc0xpc3QiLCJtZXRob2RzIiwic2VsZWN0U2hpcHBpbmdBZGRyZXNzIiwiaXRlbSIsImlzRGVmYXVsdCIsInd4IiwibmF2aWdhdGVCYWNrIiwiaXNDdXJyZW50RGVmYXVsdElkIiwic29tZSIsIm4iLCJfaWQiLCJwcyIsInB1c2giLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImFkZFNoaXBwaW5nQWRkcmVzcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJtb2RpZnkiLCJkZWwiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImdldFNoaXBwaW5nQWRkcmVzc0xpc3QiLCJyZXMiLCJsaXN0IiwiJGFwcGx5IiwiY2F0Y2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFSTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozs0TUFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQVFUQyxJLEdBQU87QUFDSEMsaUNBQXFCO0FBRGxCLFMsUUFJUEMsTyxHQUFVO0FBQ047OztBQUdBQyxpQ0FKTSxpQ0FJaUJDLElBSmpCLEVBSXVCO0FBQ3pCO0FBQ0Esb0JBQUlBLEtBQUtDLFNBQVQsRUFBb0I7QUFDaEJDLHVCQUFHQyxZQUFIO0FBQ0E7QUFDSDs7QUFFRCxvQkFBSUMscUJBQXFCLENBQXpCO0FBQ0EscUJBQUtQLG1CQUFMLENBQXlCUSxJQUF6QixDQUE4QixVQUFDQyxDQUFELEVBQU07QUFDaEMsd0JBQUlBLEVBQUVMLFNBQU4sRUFBaUI7QUFDYkcsNkNBQXFCRSxFQUFFQyxHQUF2QjtBQUNBLCtCQUFPLElBQVA7QUFDSDtBQUNKLGlCQUxEOztBQU9BLG9CQUFJQyxLQUFLLENBQUMsaUNBQVdSLEtBQUtPLEdBQWhCLEVBQXFCLElBQXJCLENBQUQsQ0FBVDs7QUFFQTtBQUNBLG9CQUFJSCxrQkFBSixFQUF3QjtBQUNwQkksdUJBQUdDLElBQUgsQ0FBUSxpQ0FBV0wsa0JBQVgsRUFBK0IsS0FBL0IsQ0FBUjtBQUNIOztBQUVETSx3QkFBUUMsR0FBUixDQUFZSCxFQUFaLEVBQ0tJLElBREwsQ0FDVSxZQUFLO0FBQ1BWLHVCQUFHQyxZQUFIO0FBQ0gsaUJBSEw7QUFJSCxhQTlCSzs7O0FBZ0NOOzs7QUFHQVUsOEJBbkNNLGdDQW1DZ0I7QUFDbEJYLG1CQUFHWSxVQUFILENBQWM7QUFDWEMseUJBQUs7QUFETSxpQkFBZDtBQUdILGFBdkNLOzs7QUF5Q047OztBQUdBQyxrQkE1Q00sa0JBNENFaEIsSUE1Q0YsRUE0Q1E7QUFDVkUsbUJBQUdZLFVBQUgsQ0FBYztBQUNYQyx5QkFBSyw0QkFBNEJmLEtBQUtPO0FBRDNCLGlCQUFkO0FBR0gsYUFoREs7OztBQWtETjs7O0FBR0FVLGVBckRNLGVBcUREakIsSUFyREMsRUFxREs7QUFBQTs7QUFDUCw2Q0FBT0EsS0FBS08sR0FBWixFQUNLSyxJQURMLENBQ1UsWUFBSztBQUNQVix1QkFBR2dCLFNBQUgsQ0FBYTtBQUNUQywrQkFBTztBQURFLHFCQUFiO0FBR0EsMkJBQUtyQixPQUFMLENBQWFzQixzQkFBYjtBQUNILGlCQU5MO0FBT0gsYUE3REs7OztBQStETjs7O0FBR0FBLG9DQUF3QixrQ0FBSztBQUN6Qiw2Q0FDS1IsSUFETCxDQUNVLFVBQUNTLEdBQUQsRUFBUTtBQUNWLDBCQUFLeEIsbUJBQUwsR0FBMkJ3QixJQUFJekIsSUFBSixDQUFTMEIsSUFBcEM7QUFDQSwwQkFBS0MsTUFBTDtBQUNILGlCQUpMLEVBS0tDLEtBTEwsQ0FLVyxZQUFLO0FBQ1IsMEJBQUszQixtQkFBTCxHQUEyQixFQUEzQjtBQUNBLDBCQUFLMEIsTUFBTDtBQUNILGlCQVJMO0FBU0g7QUE1RUssUzs7Ozs7aUNBUkE7QUFDTixpQkFBS3pCLE9BQUwsQ0FBYXNCLHNCQUFiO0FBQ0g7Ozs7RUFSd0MsZUFBS0ssSTs7a0JBQTdCaEMsZSIsImZpbGUiOiJzaGlwcGluZ0FkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgbGlzdCwgc2V0RGVmYXVsdCwgcmVtb3ZlfSBmcm9tICcuLi9zZXJ2aWNlL3NoaXBwaW5nQWRkcmVzcydcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nQWRkcmVzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIFxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Zyw5Z2A566h55CGJ1xuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRTaGlwcGluZ0FkZHJlc3NMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdDogbnVsbCBcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiuvue9rum7mOiupOaUtui0p+WcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5b2T5YmN5pys6Lqr5bCx5piv6buY6K6k5Zyw5Z2A77yM5bCx5LiN55So5pON5L2c5pWw5o2u5bqT55u05o6l6L+U5ZueXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBpc0N1cnJlbnREZWZhdWx0SWQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdC5zb21lKChuKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnREZWZhdWx0SWQgPSBuLl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHMgPSBbc2V0RGVmYXVsdChpdGVtLl9pZCwgdHJ1ZSldO1xuXG4gICAgICAgICAgICAgICAgLy8g5bCG5b2T5YmN6buY6K6k55qE54q25oCB5Y675o6JXG4gICAgICAgICAgICAgICAgaWYgKGlzQ3VycmVudERlZmF1bHRJZCkge1xuICAgICAgICAgICAgICAgICAgICBwcy5wdXNoKHNldERlZmF1bHQoaXNDdXJyZW50RGVmYXVsdElkLCBmYWxzZSkpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDmt7vliqDmlLbotKflnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGFkZFNoaXBwaW5nQWRkcmVzcyAoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgdXJsOiAnZmlsbFNoaXBwaW5nQWRkcmVzcydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog57yW6L6R5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtb2RpZnkgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICB1cmw6ICdmaWxsU2hpcHBpbmdBZGRyZXNzP2lkPScgKyBpdGVtLl9pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDliKDpmaTmlLbotKflnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlbCAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZShpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6I635Y+W5pS26LSn5Zyw5Z2A5YiX6KGoXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldFNoaXBwaW5nQWRkcmVzc0xpc3Q6ICgpPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IHJlcy5kYXRhLmxpc3Q7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICB9XG4iXX0=