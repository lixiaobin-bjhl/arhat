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
             * 跳转到订单详情 
             */
            forwardOrderDetail: function forwardOrderDetail(item) {
                this.methods.redirect('orderDetail?id=' + item._id);
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
            wx.showLoading({ title: '加载中' });
            (0, _order.list)().then(function (res) {
                var data = res.data;
                data.forEach(function (item) {
                    item.statusStr = _this.getStatusStr(item.status);
                    item.products = (0, _adaptProductList2.default)(item.products);
                    item.payStr = (0, _currency2.default)((0, _divide2.default)(item.totalFee, 100));
                });
                wx.hideLoading();
                _this.list = data;
                _this.$apply();
            }).catch(function () {
                _this.list = [];
                wx.hideLoading();
                _this.$apply();
            });
        }, _this.$props = { "copyright": {} }, _this.$events = {}, _this.components = {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsInJlZGlyZWN0UHJvZHVjdERldGFpbCIsIml0ZW0iLCJyZWRpcmVjdCIsInByb2R1Y3QiLCJfaWQiLCJmb3J3YXJkT3JkZXJEZXRhaWwiLCJ1cmwiLCJ3eCIsInJlZGlyZWN0VG8iLCJwYXkiLCJwYXJhbXMiLCJwcm9kdWN0cyIsIm1hcCIsImNvdW50IiwiaWQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5IiwidGl0bGUiLCJqb2luIiwic2xpY2UiLCJzdGF0dXMiLCJtb2JpbGUiLCJyZW1hcmsiLCJtY2hJZCIsIm91dFRyYWRlTm8iLCJleHByZXNzTW9uZXkiLCJ0b3RhbEZlZSIsImdldFN0YXR1c1N0ciIsIm9wdGlvbiIsIk9SREVSX1NUQVRVUyIsInJlc3VsdCIsIm5hbWUiLCJnZXRPcmRlckxpc3QiLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJmb3JFYWNoIiwic3RhdHVzU3RyIiwicGF5U3RyIiwiaGlkZUxvYWRpbmciLCIkYXBwbHkiLCJjYXRjaCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBUVRDLEksR0FBTztBQUNIQyxrQkFBTTtBQURILFMsUUFJUEMsTyxHQUFVO0FBQ047OztBQUdBQyxpQ0FKTSxpQ0FJaUJDLElBSmpCLEVBSXVCO0FBQ3pCLHFCQUFLRixPQUFM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QTs7Ozs7OztFQS9FK0IsZUFBS2UsSTs7a0JBQW5CckQsSyIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vc2VydmljZS9vcmRlcidcbiAgICBpbXBvcnQgcGFnZUNvbmZpZyAgZnJvbSAnLi9jb25maWcnXG4gICAgaW1wb3J0IG11bHRpcGx5IGZyb20gJy4uL2Z1bmN0aW9uL211bHRpcGx5J1xuICAgIGltcG9ydCBkaXZpZGUgZnJvbSAnLi4vZnVuY3Rpb24vZGl2aWRlJ1xuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG4gICAgaW1wb3J0IGN1cnJlbmN5IGZyb20gJy4uL2Z1bmN0aW9uL2N1cnJlbmN5J1xuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbiAgICBpbXBvcnQgaW5kZXhCeSBmcm9tICcuLi9mdW5jdGlvbi9pbmRleEJ5J1xuICAgIGltcG9ydCBjcmVhdGVPcmRlck51bWJlciBmcm9tICcuLi9mdW5jdGlvbi9jcmVhdGVPcmRlck51bWJlcidcbiAgICBpbXBvcnQgYWRhcHRQcm9kdWN0TGlzdCBmcm9tICcuLi9mdW5jdGlvbi9hZGFwdFByb2R1Y3RMaXN0J1xuICAgIGltcG9ydCBwdXJjaGFzZSBmcm9tICcuLi9mdW5jdGlvbi9wdXJjaGFzZSdcbiAgICBpbXBvcnQgY29weXJpZ2h0IGZyb20gJy4uL2NvbXBvbmVudHMvY29weXJpZ2h0J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlSdcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9yZGVyTGlzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3Q6IG51bGwgXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazliLDkuqflk4Hor6bmg4UgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0UHJvZHVjdERldGFpbCAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5yZWRpcmVjdCgncHJvZHVjdERldGFpbD9waWQ9JyArIGl0ZW0ucHJvZHVjdC5faWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazliLDorqLljZXor6bmg4UgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZvcndhcmRPcmRlckRldGFpbCAoaXRlbSkge1xuICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ29yZGVyRGV0YWlsP2lkPScgKyBpdGVtLl9pZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDku5jmrL4gXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBheSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBpdGVtLnByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogaXRlbS5zaGlwcGluZ0FkZHJlc3MgJiYgaXRlbS5zaGlwcGluZ0FkZHJlc3MuX2lkLFxuICAgICAgICAgICAgICAgICAgICBkaXNjb3VudE1vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5wcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvZHVjdC50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcsJykuc2xpY2UoMCwgNTApLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrOiBpdGVtLnJlbWFyayxcbiAgICAgICAgICAgICAgICAgICAgbWNoSWQ6IGNvbmZpZy5tY2hJZCxcbiAgICAgICAgICAgICAgICAgICAgb3V0VHJhZGVObzogY3JlYXRlT3JkZXJOdW1iZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc01vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEZlZTogaXRlbS50b3RhbEZlZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcHVyY2hhc2UocGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bmlK/ku5jnirbmgIFcbiAgICAgICAgICovXG4gICAgICAgIGdldFN0YXR1c1N0ciA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSBpbmRleEJ5KHBhZ2VDb25maWcuT1JERVJfU1RBVFVTLCAnaWQnKVtzdGF0dXNdO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9wdGlvbi5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bmlLbotKflnLDlnYDliJfooahcbiAgICAgICAgICovXG4gICAgICAgIGdldE9yZGVyTGlzdCA9ICgpPT4ge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOiAn5Yqg6L295LitJ30pO1xuICAgICAgICAgICAgbGlzdCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXR1c1N0ciA9IHRoaXMuZ2V0U3RhdHVzU3RyKGl0ZW0uc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvZHVjdHMgPSBhZGFwdFByb2R1Y3RMaXN0KGl0ZW0ucHJvZHVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXlTdHIgPSBjdXJyZW5jeShkaXZpZGUoaXRlbS50b3RhbEZlZSwgMTAwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBkYXRhOyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICRwcm9wcyA9IHtcImNvcHlyaWdodFwiOnt9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGZvb3RlcixcbiAgICAgICAgICAgIGNvcHlyaWdodFxuICAgICAgICB9XG4gICAgIH1cbiJdfQ==