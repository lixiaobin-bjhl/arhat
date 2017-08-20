'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _shippingAddress = require('./../service/shippingAddress.js');

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

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
        }, _this.components = {
            copyright: _copyright2.default
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
             * 跳转地址 
             */
            redirect: function redirect(url) {
                wx.redirectTo({
                    url: url
                });
            },


            /**
             * 编辑地址 
             */
            modify: function modify(item) {
                _this.methods.redirect('fillShippingAddress?id=' + item._id);
            },

            /**
             * 删除收货地址 
             */
            del: function del(item) {
                var _this2 = this;

                wx.showModal({
                    title: '提示',
                    content: '确认删除?',
                    success: function success(res) {
                        if (res.confirm) {
                            (0, _shippingAddress.remove)(item._id).then(function () {
                                wx.showToast({
                                    title: '保存成功'
                                });
                                _this2.methods.getShippingAddressList();
                            });
                        }
                    }
                });
            },


            /**
             * 获取收货地址列表
             */
            getShippingAddressList: function getShippingAddressList() {
                wx.showLoading({ title: '加载中' });
                (0, _shippingAddress.list)().then(function (res) {
                    wx.hideLoading();
                    _this.shippingAddressList = res.data;
                    _this.$apply();
                }).catch(function () {
                    wx.hideLoading();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nQWRkcmVzcy5qcyJdLCJuYW1lcyI6WyJTaGlwcGluZ0FkZHJlc3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNoaXBwaW5nQWRkcmVzc0xpc3QiLCJjb21wb25lbnRzIiwiY29weXJpZ2h0IiwibWV0aG9kcyIsInNlbGVjdFNoaXBwaW5nQWRkcmVzcyIsIml0ZW0iLCJpc0RlZmF1bHQiLCJ3eCIsIm5hdmlnYXRlQmFjayIsImlzQ3VycmVudERlZmF1bHRJZCIsInNvbWUiLCJuIiwiX2lkIiwicHMiLCJwdXNoIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJyZWRpcmVjdCIsInVybCIsInJlZGlyZWN0VG8iLCJtb2RpZnkiLCJkZWwiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInNob3dUb2FzdCIsImdldFNoaXBwaW5nQWRkcmVzc0xpc3QiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwiJGFwcGx5IiwiY2F0Y2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFSTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7OzRNQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBUVRDLEksR0FBTztBQUNIQyxpQ0FBcUI7QUFEbEIsUyxRQUlQQyxVLEdBQWE7QUFDVEM7QUFEUyxTLFFBSWJDLE8sR0FBVTtBQUNOOzs7QUFHQUMsaUNBSk0saUNBSWlCQyxJQUpqQixFQUl1QjtBQUN6QjtBQUNBLG9CQUFJQSxLQUFLQyxTQUFULEVBQW9CO0FBQ2hCQyx1QkFBR0MsWUFBSDtBQUNBO0FBQ0g7O0FBRUQsb0JBQUlDLHFCQUFxQixDQUF6QjtBQUNBLHFCQUFLVCxtQkFBTCxDQUF5QlUsSUFBekIsQ0FBOEIsVUFBQ0MsQ0FBRCxFQUFNO0FBQ2hDLHdCQUFJQSxFQUFFTCxTQUFOLEVBQWlCO0FBQ2JHLDZDQUFxQkUsRUFBRUMsR0FBdkI7QUFDQSwrQkFBTyxJQUFQO0FBQ0g7QUFDSixpQkFMRDs7QUFPQSxvQkFBSUMsS0FBSyxDQUFDLGlDQUFXUixLQUFLTyxHQUFoQixFQUFxQixJQUFyQixDQUFELENBQVQ7O0FBRUE7QUFDQSxvQkFBSUgsa0JBQUosRUFBd0I7QUFDcEJJLHVCQUFHQyxJQUFILENBQVEsaUNBQVdMLGtCQUFYLEVBQStCLEtBQS9CLENBQVI7QUFDSDs7QUFFRE0sd0JBQVFDLEdBQVIsQ0FBWUgsRUFBWixFQUNLSSxJQURMLENBQ1UsWUFBSztBQUNQVix1QkFBR0MsWUFBSDtBQUNILGlCQUhMO0FBSUgsYUE5Qks7OztBQWdDTjs7O0FBR0FVLG9CQW5DTSxvQkFtQ0lDLEdBbkNKLEVBbUNTO0FBQ1haLG1CQUFHYSxVQUFILENBQWM7QUFDVkQseUJBQUtBO0FBREssaUJBQWQ7QUFHSCxhQXZDSzs7O0FBeUNOOzs7QUFHQUUsb0JBQVEsZ0JBQUNoQixJQUFELEVBQVM7QUFDYixzQkFBS0YsT0FBTCxDQUFhZSxRQUFiLENBQXNCLDRCQUE0QmIsS0FBS08sR0FBdkQ7QUFDSCxhQTlDSzs7QUFnRE47OztBQUdBVSxlQW5ETSxlQW1ERGpCLElBbkRDLEVBbURLO0FBQUE7O0FBQ1BFLG1CQUFHZ0IsU0FBSCxDQUFhO0FBQ1RDLDJCQUFPLElBREU7QUFFVEMsNkJBQVMsT0FGQTtBQUdUQyw2QkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2QsNEJBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDYix5REFBT3ZCLEtBQUtPLEdBQVosRUFDS0ssSUFETCxDQUNVLFlBQUs7QUFDUFYsbUNBQUdzQixTQUFILENBQWE7QUFDVEwsMkNBQU87QUFERSxpQ0FBYjtBQUdBLHVDQUFLckIsT0FBTCxDQUFhMkIsc0JBQWI7QUFDSCw2QkFOTDtBQU9IO0FBQ0o7QUFiUSxpQkFBYjtBQWVILGFBbkVLOzs7QUFxRU47OztBQUdBQSxvQ0FBd0Isa0NBQUs7QUFDekJ2QixtQkFBR3dCLFdBQUgsQ0FBZSxFQUFDUCxPQUFPLEtBQVIsRUFBZjtBQUNBLDZDQUNLUCxJQURMLENBQ1UsVUFBQ1UsR0FBRCxFQUFRO0FBQ1ZwQix1QkFBR3lCLFdBQUg7QUFDQSwwQkFBS2hDLG1CQUFMLEdBQTJCMkIsSUFBSTVCLElBQS9CO0FBQ0EsMEJBQUtrQyxNQUFMO0FBQ0gsaUJBTEwsRUFNS0MsS0FOTCxDQU1XLFlBQUs7QUFDUjNCLHVCQUFHeUIsV0FBSDtBQUNBLDBCQUFLaEMsbUJBQUwsR0FBMkIsRUFBM0I7QUFDQSwwQkFBS2lDLE1BQUw7QUFDSCxpQkFWTDtBQVdIO0FBckZLLFM7Ozs7O2lDQVpBO0FBQ04saUJBQUs5QixPQUFMLENBQWEyQixzQkFBYjtBQUNIOzs7O0VBUndDLGVBQUtLLEk7O2tCQUE3QnZDLGUiLCJmaWxlIjoic2hpcHBpbmdBZGRyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGxpc3QsIHNldERlZmF1bHQsIHJlbW92ZX0gZnJvbSAnLi4vc2VydmljZS9zaGlwcGluZ0FkZHJlc3MnXG4gICAgaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nQWRkcmVzcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIFxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Zyw5Z2A566h55CGJ1xuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRTaGlwcGluZ0FkZHJlc3NMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdDogbnVsbCBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjb3B5cmlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiuvue9rum7mOiupOaUtui0p+WcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5b2T5YmN5pys6Lqr5bCx5piv6buY6K6k5Zyw5Z2A77yM5bCx5LiN55So5pON5L2c5pWw5o2u5bqT55u05o6l6L+U5ZueXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBpc0N1cnJlbnREZWZhdWx0SWQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdC5zb21lKChuKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnREZWZhdWx0SWQgPSBuLl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHMgPSBbc2V0RGVmYXVsdChpdGVtLl9pZCwgdHJ1ZSldO1xuXG4gICAgICAgICAgICAgICAgLy8g5bCG5b2T5YmN6buY6K6k55qE54q25oCB5Y675o6JXG4gICAgICAgICAgICAgICAgaWYgKGlzQ3VycmVudERlZmF1bHRJZCkge1xuICAgICAgICAgICAgICAgICAgICBwcy5wdXNoKHNldERlZmF1bHQoaXNDdXJyZW50RGVmYXVsdElkLCBmYWxzZSkpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog57yW6L6R5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtb2RpZnk6IChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ2ZpbGxTaGlwcGluZ0FkZHJlc3M/aWQ9JyArIGl0ZW0uX2lkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5Yig6Zmk5pS26LSn5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZWwgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfnoa7orqTliKDpmaQ/JyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKGl0ZW0uX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkv53lrZjmiJDlip8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRTaGlwcGluZ0FkZHJlc3NMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluaUtui0p+WcsOWdgOWIl+ihqFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRTaGlwcGluZ0FkZHJlc3NMaXN0OiAoKT0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7dGl0bGU6ICfliqDovb3kuK0nfSk7XG4gICAgICAgICAgICAgICAgbGlzdCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IHJlcy5kYXRhOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgIH1cbiJdfQ==