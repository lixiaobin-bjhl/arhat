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
        }, _this.$props = { "copyright": {} }, _this.$events = {}, _this.components = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nQWRkcmVzcy5qcyJdLCJuYW1lcyI6WyJTaGlwcGluZ0FkZHJlc3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNoaXBwaW5nQWRkcmVzc0xpc3QiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvcHlyaWdodCIsIm1ldGhvZHMiLCJzZWxlY3RTaGlwcGluZ0FkZHJlc3MiLCJpdGVtIiwiaXNEZWZhdWx0Iiwid3giLCJuYXZpZ2F0ZUJhY2siLCJpc0N1cnJlbnREZWZhdWx0SWQiLCJzb21lIiwibiIsIl9pZCIsInBzIiwicHVzaCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwicmVkaXJlY3QiLCJ1cmwiLCJyZWRpcmVjdFRvIiwibW9kaWZ5IiwiZGVsIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJzaG93VG9hc3QiLCJnZXRTaGlwcGluZ0FkZHJlc3NMaXN0Iiwic2hvd0xvYWRpbmciLCJoaWRlTG9hZGluZyIsIiRhcHBseSIsImNhdGNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7Ozs7Ozs0TUFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQVFUQyxJLEdBQU87QUFDSEMsaUNBQXFCO0FBRGxCLFMsUUFJUkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFiLEUsUUFDaEJDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQztBQURFLFMsUUFJTkMsTyxHQUFVO0FBQ047OztBQUdBQyxpQ0FKTSxpQ0FJaUJDLElBSmpCLEVBSXVCO0FBQ3pCO0FBQ0Esb0JBQUlBLEtBQUtDLFNBQVQsRUFBb0I7QUFDaEJDLHVCQUFHQyxZQUFIO0FBQ0E7QUFDSDs7QUFFRCxvQkFBSUMscUJBQXFCLENBQXpCO0FBQ0EscUJBQUtYLG1CQUFMLENBQXlCWSxJQUF6QixDQUE4QixVQUFDQyxDQUFELEVBQU07QUFDaEMsd0JBQUlBLEVBQUVMLFNBQU4sRUFBaUI7QUFDYkcsNkNBQXFCRSxFQUFFQyxHQUF2QjtBQUNBLCtCQUFPLElBQVA7QUFDSDtBQUNKLGlCQUxEOztBQU9BLG9CQUFJQyxLQUFLLENBQUMsaUNBQVdSLEtBQUtPLEdBQWhCLEVBQXFCLElBQXJCLENBQUQsQ0FBVDs7QUFFQTtBQUNBLG9CQUFJSCxrQkFBSixFQUF3QjtBQUNwQkksdUJBQUdDLElBQUgsQ0FBUSxpQ0FBV0wsa0JBQVgsRUFBK0IsS0FBL0IsQ0FBUjtBQUNIOztBQUVETSx3QkFBUUMsR0FBUixDQUFZSCxFQUFaLEVBQ0tJLElBREwsQ0FDVSxZQUFLO0FBQ1BWLHVCQUFHQyxZQUFIO0FBQ0gsaUJBSEw7QUFJSCxhQTlCSzs7O0FBZ0NOOzs7QUFHQVUsb0JBbkNNLG9CQW1DSUMsR0FuQ0osRUFtQ1M7QUFDWFosbUJBQUdhLFVBQUgsQ0FBYztBQUNWRCx5QkFBS0E7QUFESyxpQkFBZDtBQUdILGFBdkNLOzs7QUF5Q047OztBQUdBRSxvQkFBUSxnQkFBQ2hCLElBQUQsRUFBUztBQUNiLHNCQUFLRixPQUFMLENBQWFlLFFBQWIsQ0FBc0IsNEJBQTRCYixLQUFLTyxHQUF2RDtBQUNILGFBOUNLOztBQWdETjs7O0FBR0FVLGVBbkRNLGVBbUREakIsSUFuREMsRUFtREs7QUFBQTs7QUFDUEUsbUJBQUdnQixTQUFILENBQWE7QUFDVEMsMkJBQU8sSUFERTtBQUVUQyw2QkFBUyxPQUZBO0FBR1RDLDZCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDZCw0QkFBSUEsSUFBSUMsT0FBUixFQUFpQjtBQUNiLHlEQUFPdkIsS0FBS08sR0FBWixFQUNLSyxJQURMLENBQ1UsWUFBSztBQUNQVixtQ0FBR3NCLFNBQUgsQ0FBYTtBQUNUTCwyQ0FBTztBQURFLGlDQUFiO0FBR0EsdUNBQUtyQixPQUFMLENBQWEyQixzQkFBYjtBQUNILDZCQU5MO0FBT0g7QUFDSjtBQWJRLGlCQUFiO0FBZUgsYUFuRUs7OztBQXFFTjs7O0FBR0FBLG9DQUF3QixrQ0FBSztBQUN6QnZCLG1CQUFHd0IsV0FBSCxDQUFlLEVBQUNQLE9BQU8sS0FBUixFQUFmO0FBQ0EsNkNBQ0tQLElBREwsQ0FDVSxVQUFDVSxHQUFELEVBQVE7QUFDVnBCLHVCQUFHeUIsV0FBSDtBQUNBLDBCQUFLbEMsbUJBQUwsR0FBMkI2QixJQUFJOUIsSUFBL0I7QUFDQSwwQkFBS29DLE1BQUw7QUFDSCxpQkFMTCxFQU1LQyxLQU5MLENBTVcsWUFBSztBQUNSM0IsdUJBQUd5QixXQUFIO0FBQ0EsMEJBQUtsQyxtQkFBTCxHQUEyQixFQUEzQjtBQUNBLDBCQUFLbUMsTUFBTDtBQUNILGlCQVZMO0FBV0g7QUFyRkssUzs7Ozs7aUNBZEE7QUFDTixpQkFBSzlCLE9BQUwsQ0FBYTJCLHNCQUFiO0FBQ0g7Ozs7RUFSd0MsZUFBS0ssSTs7a0JBQTdCekMsZSIsImZpbGUiOiJzaGlwcGluZ0FkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgbGlzdCwgc2V0RGVmYXVsdCwgcmVtb3ZlfSBmcm9tICcuLi9zZXJ2aWNlL3NoaXBwaW5nQWRkcmVzcydcbiAgICBpbXBvcnQgY29weXJpZ2h0IGZyb20gJy4uL2NvbXBvbmVudHMvY29weXJpZ2h0J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdBZGRyZXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflnLDlnYDnrqHnkIYnXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFNoaXBwaW5nQWRkcmVzc0xpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NMaXN0OiBudWxsIFxuICAgICAgICB9XG5cbiAgICAgICAkcHJvcHMgPSB7XCJjb3B5cmlnaHRcIjp7fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjb3B5cmlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiuvue9rum7mOiupOaUtui0p+WcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0U2hpcHBpbmdBZGRyZXNzIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5b2T5YmN5pys6Lqr5bCx5piv6buY6K6k5Zyw5Z2A77yM5bCx5LiN55So5pON5L2c5pWw5o2u5bqT55u05o6l6L+U5ZueXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBpc0N1cnJlbnREZWZhdWx0SWQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdC5zb21lKChuKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0N1cnJlbnREZWZhdWx0SWQgPSBuLl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHMgPSBbc2V0RGVmYXVsdChpdGVtLl9pZCwgdHJ1ZSldO1xuXG4gICAgICAgICAgICAgICAgLy8g5bCG5b2T5YmN6buY6K6k55qE54q25oCB5Y675o6JXG4gICAgICAgICAgICAgICAgaWYgKGlzQ3VycmVudERlZmF1bHRJZCkge1xuICAgICAgICAgICAgICAgICAgICBwcy5wdXNoKHNldERlZmF1bHQoaXNDdXJyZW50RGVmYXVsdElkLCBmYWxzZSkpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog57yW6L6R5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBtb2RpZnk6IChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ2ZpbGxTaGlwcGluZ0FkZHJlc3M/aWQ9JyArIGl0ZW0uX2lkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5Yig6Zmk5pS26LSn5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkZWwgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfnoa7orqTliKDpmaQ/JyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKGl0ZW0uX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkv53lrZjmiJDlip8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRTaGlwcGluZ0FkZHJlc3NMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluaUtui0p+WcsOWdgOWIl+ihqFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRTaGlwcGluZ0FkZHJlc3NMaXN0OiAoKT0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7dGl0bGU6ICfliqDovb3kuK0nfSk7XG4gICAgICAgICAgICAgICAgbGlzdCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IHJlcy5kYXRhOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgIH1cbiJdfQ==