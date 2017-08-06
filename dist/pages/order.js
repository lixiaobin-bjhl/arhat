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
                    totalFee: (0, _multiply2.default)(item.totalFee, 100)
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsInJlZGlyZWN0UHJvZHVjdERldGFpbCIsIml0ZW0iLCJyZWRpcmVjdCIsInByb2R1Y3QiLCJfaWQiLCJ1cmwiLCJ3eCIsInJlZGlyZWN0VG8iLCJwYXkiLCJwYXJhbXMiLCJwcm9kdWN0cyIsIm1hcCIsImNvdW50IiwiaWQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5IiwidGl0bGUiLCJqb2luIiwic2xpY2UiLCJzdGF0dXMiLCJtb2JpbGUiLCJyZW1hcmsiLCJtY2hJZCIsIm91dFRyYWRlTm8iLCJleHByZXNzTW9uZXkiLCJ0b3RhbEZlZSIsImdldFN0YXR1c1N0ciIsIm9wdGlvbiIsIk9SREVSX1NUQVRVUyIsInJlc3VsdCIsIm5hbWUiLCJnZXRPcmRlckxpc3QiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsInN0YXR1c1N0ciIsInBheVN0ciIsIiRhcHBseSIsImNhdGNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFRVEMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBREgsUyxRQUlQQyxPLEdBQVU7QUFDTjs7O0FBR0FDLGlDQUpNLGlDQUlpQkMsSUFKakIsRUFJdUI7QUFDekIscUJBQUtGLE9BQUwsQ0FBYUcsUUFBYixDQUFzQix1QkFBdUJELEtBQUtFLE9BQUwsQ0FBYUMsR0FBMUQ7QUFDSCxhQU5LOzs7QUFRTjs7O0FBR0FGLG9CQVhNLG9CQVdJRyxHQVhKLEVBV1M7QUFDWEMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWRix5QkFBS0E7QUFESyxpQkFBZDtBQUdILGFBZks7OztBQWlCTjs7O0FBR0FHLGVBcEJNLGVBb0JEUCxJQXBCQyxFQW9CSztBQUNQLG9CQUFJUSxTQUFTO0FBQ1RDLDhCQUFVVCxLQUFLUyxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ1YsSUFBRCxFQUFTO0FBQ2pDLCtCQUFPO0FBQ0hFLHFDQUFTRixLQUFLRyxHQURYO0FBRUhRLG1DQUFPWCxLQUFLVztBQUZULHlCQUFQO0FBSUgscUJBTFMsQ0FERDtBQU9UQyx3QkFBSVosS0FBS0csR0FQQTtBQVFUVSxxQ0FBaUJiLEtBQUthLGVBQUwsSUFBd0JiLEtBQUthLGVBQUwsQ0FBcUJWLEdBUnJEO0FBU1RXLG1DQUFlLENBVE47QUFVVEMsMkJBQU9mLEtBQUtTLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDVixJQUFELEVBQVM7QUFDOUIsK0JBQU9BLEtBQUtFLE9BQUwsQ0FBYWEsS0FBcEI7QUFDSCxxQkFGTSxFQUVKQyxJQUZJLENBRUMsR0FGRCxFQUVNQyxLQUZOLENBRVksQ0FGWixFQUVlLEVBRmYsQ0FWRTtBQWFUQyw0QkFBUSxDQWJDO0FBY1RDLDRCQUFRLGlCQUFPQSxNQWROO0FBZVRDLDRCQUFRcEIsS0FBS29CLE1BZko7QUFnQlRDLDJCQUFPLGlCQUFPQSxLQWhCTDtBQWlCVEMsZ0NBQVksa0NBakJIO0FBa0JUQyxrQ0FBYyxDQWxCTDtBQW1CVEMsOEJBQVUsd0JBQVN4QixLQUFLd0IsUUFBZCxFQUF3QixHQUF4QjtBQW5CRCxpQkFBYjtBQXFCQSx3Q0FBU2hCLE1BQVQ7QUFDSDtBQTNDSyxTLFFBaURWaUIsWSxHQUFlLFVBQUNQLE1BQUQsRUFBWTtBQUN2QixnQkFBSVEsU0FBUyx1QkFBUSxpQkFBV0MsWUFBbkIsRUFBaUMsSUFBakMsRUFBdUNULE1BQXZDLENBQWI7QUFDQSxnQkFBSVUsU0FBUyxFQUFiO0FBQ0EsZ0JBQUlGLE1BQUosRUFBWTtBQUNSRSx5QkFBU0YsT0FBT0csSUFBaEI7QUFDSDtBQUNELG1CQUFPRCxNQUFQO0FBQ0gsUyxRQUtERSxZLEdBQWUsWUFBSztBQUNoQiwrQkFDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLG9CQUFJcEMsT0FBT29DLElBQUlwQyxJQUFmO0FBQ0FBLHFCQUFLcUMsT0FBTCxDQUFhLFVBQUNqQyxJQUFELEVBQVM7QUFDbEJBLHlCQUFLa0MsU0FBTCxHQUFpQixNQUFLVCxZQUFMLENBQWtCekIsS0FBS2tCLE1BQXZCLENBQWpCO0FBQ0FsQix5QkFBS1MsUUFBTCxHQUFnQixnQ0FBaUJULEtBQUtTLFFBQXRCLENBQWhCO0FBQ0FULHlCQUFLbUMsTUFBTCxHQUFjLHdCQUFTLHNCQUFPbkMsS0FBS3dCLFFBQVosRUFBc0IsR0FBdEIsQ0FBVCxDQUFkO0FBQ0gsaUJBSkQ7QUFLQSxzQkFBSzNCLElBQUwsR0FBWUQsSUFBWjtBQUNBLHNCQUFLd0MsTUFBTDtBQUNILGFBVkwsRUFXS0MsS0FYTCxDQVdXLFlBQUs7QUFDUixzQkFBS3hDLElBQUwsR0FBWSxFQUFaO0FBQ0Esc0JBQUt1QyxNQUFMO0FBQ0gsYUFkTDtBQWVILFM7Ozs7O2lDQXJGUztBQUNOLGlCQUFLTixZQUFMO0FBQ0g7O0FBb0REOzs7OztBQVlBOzs7Ozs7O0VBeEUrQixlQUFLUSxJOztrQkFBbkI3QyxLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL29yZGVyJ1xuICAgIGltcG9ydCBwYWdlQ29uZmlnICBmcm9tICcuL2NvbmZpZydcbiAgICBpbXBvcnQgbXVsdGlwbHkgZnJvbSAnLi4vZnVuY3Rpb24vbXVsdGlwbHknXG4gICAgaW1wb3J0IGRpdmlkZSBmcm9tICcuLi9mdW5jdGlvbi9kaXZpZGUnXG4gICAgaW1wb3J0IGN1cnJlbmN5IGZyb20gJy4uL2Z1bmN0aW9uL2N1cnJlbmN5J1xuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbiAgICBpbXBvcnQgaW5kZXhCeSBmcm9tICcuLi9mdW5jdGlvbi9pbmRleEJ5J1xuICAgIGltcG9ydCBjcmVhdGVPcmRlck51bWJlciBmcm9tICcuLi9mdW5jdGlvbi9jcmVhdGVPcmRlck51bWJlcidcbiAgICBpbXBvcnQgYWRhcHRQcm9kdWN0TGlzdCBmcm9tICcuLi9mdW5jdGlvbi9hZGFwdFByb2R1Y3RMaXN0J1xuICAgIGltcG9ydCBwdXJjaGFzZSBmcm9tICcuLi9mdW5jdGlvbi9wdXJjaGFzZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTorqLljZUnXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRPcmRlckxpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBsaXN0OiBudWxsIFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Yiw5Lqn5ZOB6K+m5oOFIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdFByb2R1Y3REZXRhaWwgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ3Byb2R1Y3REZXRhaWw/cGlkPScgKyBpdGVtLnByb2R1Y3QuX2lkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOS7mOasviBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGF5IChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IGl0ZW0ucHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGl0ZW0uY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBpdGVtLnNoaXBwaW5nQWRkcmVzcyAmJiBpdGVtLnNoaXBwaW5nQWRkcmVzcy5faWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50TW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm9kdWN0LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJywnKS5zbGljZSgwLCA1MCksXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICByZW1hcms6IGl0ZW0ucmVtYXJrLFxuICAgICAgICAgICAgICAgICAgICBtY2hJZDogY29uZmlnLm1jaElkLFxuICAgICAgICAgICAgICAgICAgICBvdXRUcmFkZU5vOiBjcmVhdGVPcmRlck51bWJlcigpLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzTW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsRmVlOiBtdWx0aXBseShpdGVtLnRvdGFsRmVlLCAxMDApXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBwdXJjaGFzZShwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPluaUr+S7mOeKtuaAgVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0U3RhdHVzU3RyID0gKHN0YXR1cykgPT4ge1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGluZGV4QnkocGFnZUNvbmZpZy5PUkRFUl9TVEFUVVMsICdpZCcpW3N0YXR1c107XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gb3B0aW9uLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPluaUtui0p+WcsOWdgOWIl+ihqFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0T3JkZXJMaXN0ID0gKCk9PiB7XG4gICAgICAgICAgICBsaXN0KClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhdHVzU3RyID0gdGhpcy5nZXRTdGF0dXNTdHIoaXRlbS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9kdWN0cyA9IGFkYXB0UHJvZHVjdExpc3QoaXRlbS5wcm9kdWN0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBheVN0ciA9IGN1cnJlbmN5KGRpdmlkZShpdGVtLnRvdGFsRmVlLCAxMDApKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IGRhdGE7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICB9XG4iXX0=