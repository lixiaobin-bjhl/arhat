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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsInJlZGlyZWN0UHJvZHVjdERldGFpbCIsIml0ZW0iLCJyZWRpcmVjdCIsInByb2R1Y3QiLCJfaWQiLCJmb3J3YXJkT3JkZXJEZXRhaWwiLCJ1cmwiLCJ3eCIsInJlZGlyZWN0VG8iLCJwYXkiLCJwYXJhbXMiLCJwcm9kdWN0cyIsIm1hcCIsImNvdW50IiwiaWQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5IiwidGl0bGUiLCJqb2luIiwic2xpY2UiLCJzdGF0dXMiLCJtb2JpbGUiLCJyZW1hcmsiLCJtY2hJZCIsIm91dFRyYWRlTm8iLCJleHByZXNzTW9uZXkiLCJ0b3RhbEZlZSIsImdldFN0YXR1c1N0ciIsIm9wdGlvbiIsIk9SREVSX1NUQVRVUyIsInJlc3VsdCIsIm5hbWUiLCJnZXRPcmRlckxpc3QiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsInN0YXR1c1N0ciIsInBheVN0ciIsIiRhcHBseSIsImNhdGNoIiwiY29tcG9uZW50cyIsImZvb3RlciIsImNvcHlyaWdodCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQVFUQyxJLEdBQU87QUFDSEMsa0JBQU07QUFESCxTLFFBSVBDLE8sR0FBVTtBQUNOOzs7QUFHQUMsaUNBSk0saUNBSWlCQyxJQUpqQixFQUl1QjtBQUN6QixxQkFBS0YsT0FBTCxDQUFhRyxRQUFiLENBQXNCLHVCQUF1QkQsS0FBS0UsT0FBTCxDQUFhQyxHQUExRDtBQUNILGFBTks7OztBQVFOOzs7QUFHQUMsOEJBWE0sOEJBV2NKLElBWGQsRUFXb0I7QUFDckIscUJBQUtGLE9BQUwsQ0FBYUcsUUFBYixDQUFzQixvQkFBb0JELEtBQUtHLEdBQS9DO0FBQ0osYUFiSzs7O0FBZU47OztBQUdBRixvQkFsQk0sb0JBa0JJSSxHQWxCSixFQWtCUztBQUNYQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZGLHlCQUFLQTtBQURLLGlCQUFkO0FBR0gsYUF0Qks7OztBQXdCTjs7O0FBR0FHLGVBM0JNLGVBMkJEUixJQTNCQyxFQTJCSztBQUNQLG9CQUFJUyxTQUFTO0FBQ1RDLDhCQUFVVixLQUFLVSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ1gsSUFBRCxFQUFTO0FBQ2pDLCtCQUFPO0FBQ0hFLHFDQUFTRixLQUFLRyxHQURYO0FBRUhTLG1DQUFPWixLQUFLWTtBQUZULHlCQUFQO0FBSUgscUJBTFMsQ0FERDtBQU9UQyx3QkFBSWIsS0FBS0csR0FQQTtBQVFUVyxxQ0FBaUJkLEtBQUtjLGVBQUwsSUFBd0JkLEtBQUtjLGVBQUwsQ0FBcUJYLEdBUnJEO0FBU1RZLG1DQUFlLENBVE47QUFVVEMsMkJBQU9oQixLQUFLVSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ1gsSUFBRCxFQUFTO0FBQzlCLCtCQUFPQSxLQUFLRSxPQUFMLENBQWFjLEtBQXBCO0FBQ0gscUJBRk0sRUFFSkMsSUFGSSxDQUVDLEdBRkQsRUFFTUMsS0FGTixDQUVZLENBRlosRUFFZSxFQUZmLENBVkU7QUFhVEMsNEJBQVEsQ0FiQztBQWNUQyw0QkFBUSxpQkFBT0EsTUFkTjtBQWVUQyw0QkFBUXJCLEtBQUtxQixNQWZKO0FBZ0JUQywyQkFBTyxpQkFBT0EsS0FoQkw7QUFpQlRDLGdDQUFZLGtDQWpCSDtBQWtCVEMsa0NBQWMsQ0FsQkw7QUFtQlRDLDhCQUFVekIsS0FBS3lCO0FBbkJOLGlCQUFiO0FBcUJBLHdDQUFTaEIsTUFBVDtBQUNIO0FBbERLLFMsUUF3RFZpQixZLEdBQWUsVUFBQ1AsTUFBRCxFQUFZO0FBQ3ZCLGdCQUFJUSxTQUFTLHVCQUFRLGlCQUFXQyxZQUFuQixFQUFpQyxJQUFqQyxFQUF1Q1QsTUFBdkMsQ0FBYjtBQUNBLGdCQUFJVSxTQUFTLEVBQWI7QUFDQSxnQkFBSUYsTUFBSixFQUFZO0FBQ1JFLHlCQUFTRixPQUFPRyxJQUFoQjtBQUNIO0FBQ0QsbUJBQU9ELE1BQVA7QUFDSCxTLFFBS0RFLFksR0FBZSxZQUFLO0FBQ2hCLCtCQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysb0JBQUlyQyxPQUFPcUMsSUFBSXJDLElBQWY7QUFDQUEscUJBQUtzQyxPQUFMLENBQWEsVUFBQ2xDLElBQUQsRUFBUztBQUNsQkEseUJBQUttQyxTQUFMLEdBQWlCLE1BQUtULFlBQUwsQ0FBa0IxQixLQUFLbUIsTUFBdkIsQ0FBakI7QUFDQW5CLHlCQUFLVSxRQUFMLEdBQWdCLGdDQUFpQlYsS0FBS1UsUUFBdEIsQ0FBaEI7QUFDQVYseUJBQUtvQyxNQUFMLEdBQWMsd0JBQVMsc0JBQU9wQyxLQUFLeUIsUUFBWixFQUFzQixHQUF0QixDQUFULENBQWQ7QUFDSCxpQkFKRDtBQUtBLHNCQUFLNUIsSUFBTCxHQUFZRCxJQUFaO0FBQ0Esc0JBQUt5QyxNQUFMO0FBQ0gsYUFWTCxFQVdLQyxLQVhMLENBV1csWUFBSztBQUNSLHNCQUFLekMsSUFBTCxHQUFZLEVBQVo7QUFDQSxzQkFBS3dDLE1BQUw7QUFDSCxhQWRMO0FBZUgsUyxRQUVERSxVLEdBQWE7QUFDVEMsb0NBRFM7QUFFVEM7QUFGUyxTOzs7OztpQ0E5Rkg7QUFDTixpQkFBS1YsWUFBTDtBQUNIOztBQTJERDs7Ozs7QUFZQTs7Ozs7OztFQS9FK0IsZUFBS1csSTs7a0JBQW5CakQsSyIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vc2VydmljZS9vcmRlcidcbiAgICBpbXBvcnQgcGFnZUNvbmZpZyAgZnJvbSAnLi9jb25maWcnXG4gICAgaW1wb3J0IG11bHRpcGx5IGZyb20gJy4uL2Z1bmN0aW9uL211bHRpcGx5J1xuICAgIGltcG9ydCBkaXZpZGUgZnJvbSAnLi4vZnVuY3Rpb24vZGl2aWRlJ1xuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG4gICAgaW1wb3J0IGN1cnJlbmN5IGZyb20gJy4uL2Z1bmN0aW9uL2N1cnJlbmN5J1xuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbiAgICBpbXBvcnQgaW5kZXhCeSBmcm9tICcuLi9mdW5jdGlvbi9pbmRleEJ5J1xuICAgIGltcG9ydCBjcmVhdGVPcmRlck51bWJlciBmcm9tICcuLi9mdW5jdGlvbi9jcmVhdGVPcmRlck51bWJlcidcbiAgICBpbXBvcnQgYWRhcHRQcm9kdWN0TGlzdCBmcm9tICcuLi9mdW5jdGlvbi9hZGFwdFByb2R1Y3RMaXN0J1xuICAgIGltcG9ydCBwdXJjaGFzZSBmcm9tICcuLi9mdW5jdGlvbi9wdXJjaGFzZSdcbiAgICBpbXBvcnQgY29weXJpZ2h0IGZyb20gJy4uL2NvbXBvbmVudHMvY29weXJpZ2h0J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlSdcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9yZGVyTGlzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3Q6IG51bGwgXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazliLDkuqflk4Hor6bmg4UgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0UHJvZHVjdERldGFpbCAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5yZWRpcmVjdCgncHJvZHVjdERldGFpbD9waWQ9JyArIGl0ZW0ucHJvZHVjdC5faWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazliLDorqLljZXor6bmg4UgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZvcndhcmRPcmRlckRldGFpbCAoaXRlbSkge1xuICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ29yZGVyRGV0YWlsP2lkPScgKyBpdGVtLl9pZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDku5jmrL4gXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBheSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBpdGVtLnByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogaXRlbS5zaGlwcGluZ0FkZHJlc3MgJiYgaXRlbS5zaGlwcGluZ0FkZHJlc3MuX2lkLFxuICAgICAgICAgICAgICAgICAgICBkaXNjb3VudE1vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5wcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvZHVjdC50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcsJykuc2xpY2UoMCwgNTApLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrOiBpdGVtLnJlbWFyayxcbiAgICAgICAgICAgICAgICAgICAgbWNoSWQ6IGNvbmZpZy5tY2hJZCxcbiAgICAgICAgICAgICAgICAgICAgb3V0VHJhZGVObzogY3JlYXRlT3JkZXJOdW1iZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc01vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEZlZTogaXRlbS50b3RhbEZlZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcHVyY2hhc2UocGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bmlK/ku5jnirbmgIFcbiAgICAgICAgICovXG4gICAgICAgIGdldFN0YXR1c1N0ciA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSBpbmRleEJ5KHBhZ2VDb25maWcuT1JERVJfU1RBVFVTLCAnaWQnKVtzdGF0dXNdO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9wdGlvbi5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bmlLbotKflnLDlnYDliJfooahcbiAgICAgICAgICovXG4gICAgICAgIGdldE9yZGVyTGlzdCA9ICgpPT4ge1xuICAgICAgICAgICAgbGlzdCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXR1c1N0ciA9IHRoaXMuZ2V0U3RhdHVzU3RyKGl0ZW0uc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvZHVjdHMgPSBhZGFwdFByb2R1Y3RMaXN0KGl0ZW0ucHJvZHVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXlTdHIgPSBjdXJyZW5jeShkaXZpZGUoaXRlbS50b3RhbEZlZSwgMTAwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBkYXRhOyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgZm9vdGVyLFxuICAgICAgICAgICAgY29weXJpZ2h0XG4gICAgICAgIH1cbiAgICAgfVxuIl19