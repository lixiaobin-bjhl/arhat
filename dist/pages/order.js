'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _order = require('./../service/order.js');

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

var _multiply = require('./../function/multiply.js');

var _multiply2 = _interopRequireDefault(_multiply);

var _divide = require('./../function/divide.js');

var _divide2 = _interopRequireDefault(_divide);

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _currency = require('./../function/currency.js');

var _currency2 = _interopRequireDefault(_currency);

var _config3 = require('./../config.js');

var _config4 = _interopRequireDefault(_config3);

var _indexBy = require('./../function/indexBy.js');

var _indexBy2 = _interopRequireDefault(_indexBy);

var _createOrderNumber = require('./../function/createOrderNumber.js');

var _createOrderNumber2 = _interopRequireDefault(_createOrderNumber);

var _adaptProductList = require('./../function/adaptProductList.js');

var _adaptProductList2 = _interopRequireDefault(_adaptProductList);

var _purchase = require('./../function/purchase.js');

var _purchase2 = _interopRequireDefault(_purchase);

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

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
             * 跳转到产品详情 
             */
            redirectProductDetail: function redirectProductDetail(item) {
                this.methods.redirect('productDetail?pid=' + item.product._id);
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
             * 付款 
             */
            pay: function pay(item) {
                var params = {
                    products: item.products.map(function (item) {
                        return {
                            product: item._id,
                            count: item.count
                        };
                    }),
                    id: item._id,
                    shippingAddress: item.shippingAddress && item.shippingAddress._id,
                    discountMoney: 0,
                    title: item.products.map(function (item) {
                        return item.product.title;
                    }).join(',').slice(0, 50),
                    status: 0,
                    mobile: _config4.default.mobile,
                    remark: item.remark,
                    mchId: _config4.default.mchId,
                    outTradeNo: (0, _createOrderNumber2.default)(),
                    expressMoney: 0,
                    totalFee: item.totalFee
                };
                (0, _purchase2.default)(params);
            }
        }, _this.getStatusStr = function (status) {
            var option = (0, _indexBy2.default)(_config2.default.ORDER_STATUS, 'id')[status];
            var result = '';
            if (option) {
                result = option.name;
            }
            return result;
        }, _this.getOrderList = function () {
            (0, _order.list)().then(function (res) {
                var data = res.data;
                data.forEach(function (item) {
                    item.statusStr = _this.getStatusStr(item.status);
                    item.products = (0, _adaptProductList2.default)(item.products);
                    item.payStr = (0, _currency2.default)((0, _divide2.default)(item.totalFee, 100));
                });
                _this.list = data;
                _this.$apply();
            }).catch(function () {
                _this.list = [];
                _this.$apply();
            });
        }, _this.components = {
            footer: _footer2.default,
            copyright: _copyright2.default
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Order, [{
        key: 'onShow',
        value: function onShow() {
            this.getOrderList();
        }

        /**
         * 获取支付状态
         */


        /**
         * 获取收货地址列表
         */

    }]);

    return Order;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Order , 'pages/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsInJlZGlyZWN0UHJvZHVjdERldGFpbCIsIml0ZW0iLCJyZWRpcmVjdCIsInByb2R1Y3QiLCJfaWQiLCJ1cmwiLCJ3eCIsInJlZGlyZWN0VG8iLCJwYXkiLCJwYXJhbXMiLCJwcm9kdWN0cyIsIm1hcCIsImNvdW50IiwiaWQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5IiwidGl0bGUiLCJqb2luIiwic2xpY2UiLCJzdGF0dXMiLCJtb2JpbGUiLCJyZW1hcmsiLCJtY2hJZCIsIm91dFRyYWRlTm8iLCJleHByZXNzTW9uZXkiLCJ0b3RhbEZlZSIsImdldFN0YXR1c1N0ciIsIm9wdGlvbiIsIk9SREVSX1NUQVRVUyIsInJlc3VsdCIsIm5hbWUiLCJnZXRPcmRlckxpc3QiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsInN0YXR1c1N0ciIsInBheVN0ciIsIiRhcHBseSIsImNhdGNoIiwiY29tcG9uZW50cyIsImZvb3RlciIsImNvcHlyaWdodCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQVFUQyxJLEdBQU87QUFDSEMsa0JBQU07QUFESCxTLFFBSVBDLE8sR0FBVTtBQUNOOzs7QUFHQUMsaUNBSk0saUNBSWlCQyxJQUpqQixFQUl1QjtBQUN6QixxQkFBS0YsT0FBTCxDQUFhRyxRQUFiLENBQXNCLHVCQUF1QkQsS0FBS0UsT0FBTCxDQUFhQyxHQUExRDtBQUNILGFBTks7OztBQVFOOzs7QUFHQUYsb0JBWE0sb0JBV0lHLEdBWEosRUFXUztBQUNYQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZGLHlCQUFLQTtBQURLLGlCQUFkO0FBR0gsYUFmSzs7O0FBaUJOOzs7QUFHQUcsZUFwQk0sZUFvQkRQLElBcEJDLEVBb0JLO0FBQ1Asb0JBQUlRLFNBQVM7QUFDVEMsOEJBQVVULEtBQUtTLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDVixJQUFELEVBQVM7QUFDakMsK0JBQU87QUFDSEUscUNBQVNGLEtBQUtHLEdBRFg7QUFFSFEsbUNBQU9YLEtBQUtXO0FBRlQseUJBQVA7QUFJSCxxQkFMUyxDQUREO0FBT1RDLHdCQUFJWixLQUFLRyxHQVBBO0FBUVRVLHFDQUFpQmIsS0FBS2EsZUFBTCxJQUF3QmIsS0FBS2EsZUFBTCxDQUFxQlYsR0FSckQ7QUFTVFcsbUNBQWUsQ0FUTjtBQVVUQywyQkFBT2YsS0FBS1MsUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNWLElBQUQsRUFBUztBQUM5QiwrQkFBT0EsS0FBS0UsT0FBTCxDQUFhYSxLQUFwQjtBQUNILHFCQUZNLEVBRUpDLElBRkksQ0FFQyxHQUZELEVBRU1DLEtBRk4sQ0FFWSxDQUZaLEVBRWUsRUFGZixDQVZFO0FBYVRDLDRCQUFRLENBYkM7QUFjVEMsNEJBQVEsaUJBQU9BLE1BZE47QUFlVEMsNEJBQVFwQixLQUFLb0IsTUFmSjtBQWdCVEMsMkJBQU8saUJBQU9BLEtBaEJMO0FBaUJUQyxnQ0FBWSxrQ0FqQkg7QUFrQlRDLGtDQUFjLENBbEJMO0FBbUJUQyw4QkFBVXhCLEtBQUt3QjtBQW5CTixpQkFBYjtBQXFCQSx3Q0FBU2hCLE1BQVQ7QUFDSDtBQTNDSyxTLFFBaURWaUIsWSxHQUFlLFVBQUNQLE1BQUQsRUFBWTtBQUN2QixnQkFBSVEsU0FBUyx1QkFBUSxpQkFBV0MsWUFBbkIsRUFBaUMsSUFBakMsRUFBdUNULE1BQXZDLENBQWI7QUFDQSxnQkFBSVUsU0FBUyxFQUFiO0FBQ0EsZ0JBQUlGLE1BQUosRUFBWTtBQUNSRSx5QkFBU0YsT0FBT0csSUFBaEI7QUFDSDtBQUNELG1CQUFPRCxNQUFQO0FBQ0gsUyxRQUtERSxZLEdBQWUsWUFBSztBQUNoQiwrQkFDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLG9CQUFJcEMsT0FBT29DLElBQUlwQyxJQUFmO0FBQ0FBLHFCQUFLcUMsT0FBTCxDQUFhLFVBQUNqQyxJQUFELEVBQVM7QUFDbEJBLHlCQUFLa0MsU0FBTCxHQUFpQixNQUFLVCxZQUFMLENBQWtCekIsS0FBS2tCLE1BQXZCLENBQWpCO0FBQ0FsQix5QkFBS1MsUUFBTCxHQUFnQixnQ0FBaUJULEtBQUtTLFFBQXRCLENBQWhCO0FBQ0FULHlCQUFLbUMsTUFBTCxHQUFjLHdCQUFTLHNCQUFPbkMsS0FBS3dCLFFBQVosRUFBc0IsR0FBdEIsQ0FBVCxDQUFkO0FBQ0gsaUJBSkQ7QUFLQSxzQkFBSzNCLElBQUwsR0FBWUQsSUFBWjtBQUNBLHNCQUFLd0MsTUFBTDtBQUNILGFBVkwsRUFXS0MsS0FYTCxDQVdXLFlBQUs7QUFDUixzQkFBS3hDLElBQUwsR0FBWSxFQUFaO0FBQ0Esc0JBQUt1QyxNQUFMO0FBQ0gsYUFkTDtBQWVILFMsUUFFREUsVSxHQUFhO0FBQ1RDLG9DQURTO0FBRVRDO0FBRlMsUzs7Ozs7aUNBdkZIO0FBQ04saUJBQUtWLFlBQUw7QUFDSDs7QUFvREQ7Ozs7O0FBWUE7Ozs7Ozs7RUF4RStCLGVBQUtXLEk7O2tCQUFuQmhELEsiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgbGlzdCB9IGZyb20gJy4uL3NlcnZpY2Uvb3JkZXInXG4gICAgaW1wb3J0IHBhZ2VDb25maWcgIGZyb20gJy4vY29uZmlnJ1xuICAgIGltcG9ydCBtdWx0aXBseSBmcm9tICcuLi9mdW5jdGlvbi9tdWx0aXBseSdcbiAgICBpbXBvcnQgZGl2aWRlIGZyb20gJy4uL2Z1bmN0aW9uL2RpdmlkZSdcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuICAgIGltcG9ydCBjdXJyZW5jeSBmcm9tICcuLi9mdW5jdGlvbi9jdXJyZW5jeSdcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG4gICAgaW1wb3J0IGluZGV4QnkgZnJvbSAnLi4vZnVuY3Rpb24vaW5kZXhCeSdcbiAgICBpbXBvcnQgY3JlYXRlT3JkZXJOdW1iZXIgZnJvbSAnLi4vZnVuY3Rpb24vY3JlYXRlT3JkZXJOdW1iZXInXG4gICAgaW1wb3J0IGFkYXB0UHJvZHVjdExpc3QgZnJvbSAnLi4vZnVuY3Rpb24vYWRhcHRQcm9kdWN0TGlzdCdcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnXG4gICAgaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTorqLljZUnXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRPcmRlckxpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBsaXN0OiBudWxsIFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Yiw5Lqn5ZOB6K+m5oOFIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdFByb2R1Y3REZXRhaWwgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ3Byb2R1Y3REZXRhaWw/cGlkPScgKyBpdGVtLnByb2R1Y3QuX2lkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOS7mOasviBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGF5IChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IGl0ZW0ucHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGl0ZW0uY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBpdGVtLnNoaXBwaW5nQWRkcmVzcyAmJiBpdGVtLnNoaXBwaW5nQWRkcmVzcy5faWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50TW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm9kdWN0LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJywnKS5zbGljZSgwLCA1MCksXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICByZW1hcms6IGl0ZW0ucmVtYXJrLFxuICAgICAgICAgICAgICAgICAgICBtY2hJZDogY29uZmlnLm1jaElkLFxuICAgICAgICAgICAgICAgICAgICBvdXRUcmFkZU5vOiBjcmVhdGVPcmRlck51bWJlcigpLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzTW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsRmVlOiBpdGVtLnRvdGFsRmVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBwdXJjaGFzZShwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPluaUr+S7mOeKtuaAgVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0U3RhdHVzU3RyID0gKHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGluZGV4QnkocGFnZUNvbmZpZy5PUkRFUl9TVEFUVVMsICdpZCcpW3N0YXR1c107XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gb3B0aW9uLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPluaUtui0p+WcsOWdgOWIl+ihqFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0T3JkZXJMaXN0ID0gKCk9PiB7XG4gICAgICAgICAgICBsaXN0KClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhdHVzU3RyID0gdGhpcy5nZXRTdGF0dXNTdHIoaXRlbS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9kdWN0cyA9IGFkYXB0UHJvZHVjdExpc3QoaXRlbS5wcm9kdWN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBheVN0ciA9IGN1cnJlbmN5KGRpdmlkZShpdGVtLnRvdGFsRmVlLCAxMDApKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IGRhdGE7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBmb290ZXIsXG4gICAgICAgICAgICBjb3B5cmlnaHRcbiAgICAgICAgfVxuICAgICB9XG4iXX0=