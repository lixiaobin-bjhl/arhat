'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _indexBy = require('./../function/indexBy.js');

var _indexBy2 = _interopRequireDefault(_indexBy);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

var _shippingAddress = require('./../service/shippingAddress.js');

var _order = require('./../service/order.js');

var order = _interopRequireWildcard(_order);

var _message = require('./../service/message.js');

var message = _interopRequireWildcard(_message);

var _multiply = require('./../function/multiply.js');

var _multiply2 = _interopRequireDefault(_multiply);

var _plus = require('./../function/plus.js');

var _plus2 = _interopRequireDefault(_plus);

var _currency = require('./../function/currency.js');

var _currency2 = _interopRequireDefault(_currency);

var _config3 = require('./../config.js');

var _config4 = _interopRequireDefault(_config3);

var _adaptProductList = require('./../function/adaptProductList.js');

var _adaptProductList2 = _interopRequireDefault(_adaptProductList);

var _purchase = require('./../function/purchase.js');

var _purchase2 = _interopRequireDefault(_purchase);

var _createOrderNumber = require('./../function/createOrderNumber.js');

var _createOrderNumber2 = _interopRequireDefault(_createOrderNumber);

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

var _toast = require('./../function/toast.js');

var _toast2 = _interopRequireDefault(_toast);

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
            navigationBarTitleText: '订单详情'
        }, _this.data = {
            info: {}
        }, _this.components = {
            copyright: _copyright2.default,
            footer: _footer2.default
        }, _this.getStatusStr = function (status) {
            var option = (0, _indexBy2.default)(_config2.default.ORDER_STATUS, 'id')[status];
            var result = '';
            if (option) {
                result = option.name;
            }
            return result;
        }, _this.getDetail = function (id) {
            order.detail(id).then(function (res) {
                var data = res.data;
                data.products = (0, _adaptProductList2.default)(data.products);
                data.statusStr = _this.getStatusStr(data.status);
                _this.info = data;
                _this.$apply();
            });
        }, _this.methods = {
            /**
             * 付款 
             */
            pay: function pay() {
                var item = this.info;
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
            },


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
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OrderConfirm, [{
        key: 'onShow',
        value: function onShow() {}

        /**
        * 获取支付状态
        */


        /**
         * 获取订单详情 
         */

    }, {
        key: 'onLoad',
        value: function onLoad(p) {
            var id = p.id;
            this.getDetail(id);
        }
    }]);

    return OrderConfirm;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(OrderConfirm , 'pages/orderDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyRGV0YWlsLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwibWVzc2FnZSIsIk9yZGVyQ29uZmlybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW5mbyIsImNvbXBvbmVudHMiLCJjb3B5cmlnaHQiLCJmb290ZXIiLCJnZXRTdGF0dXNTdHIiLCJzdGF0dXMiLCJvcHRpb24iLCJPUkRFUl9TVEFUVVMiLCJyZXN1bHQiLCJuYW1lIiwiZ2V0RGV0YWlsIiwiaWQiLCJkZXRhaWwiLCJ0aGVuIiwicmVzIiwicHJvZHVjdHMiLCJzdGF0dXNTdHIiLCIkYXBwbHkiLCJtZXRob2RzIiwicGF5IiwiaXRlbSIsInBhcmFtcyIsIm1hcCIsInByb2R1Y3QiLCJfaWQiLCJjb3VudCIsInNoaXBwaW5nQWRkcmVzcyIsImRpc2NvdW50TW9uZXkiLCJ0aXRsZSIsImpvaW4iLCJzbGljZSIsIm1vYmlsZSIsInJlbWFyayIsIm1jaElkIiwib3V0VHJhZGVObyIsImV4cHJlc3NNb25leSIsInRvdGFsRmVlIiwicmVkaXJlY3RQcm9kdWN0RGV0YWlsIiwicmVkaXJlY3QiLCJ1cmwiLCJ3eCIsInJlZGlyZWN0VG8iLCJwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLEs7O0FBQ1o7O0lBQVlDLE87O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQyxZOzs7Ozs7Ozs7Ozs7OztzTUFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSkMsa0JBQU07QUFERixTLFFBT1BDLFUsR0FBYTtBQUNUQywwQ0FEUztBQUVUQztBQUZTLFMsUUFRYkMsWSxHQUFlLFVBQUNDLE1BQUQsRUFBWTtBQUN2QixnQkFBSUMsU0FBUyx1QkFBUSxpQkFBV0MsWUFBbkIsRUFBaUMsSUFBakMsRUFBdUNGLE1BQXZDLENBQWI7QUFDQSxnQkFBSUcsU0FBUyxFQUFiO0FBQ0EsZ0JBQUlGLE1BQUosRUFBWTtBQUNSRSx5QkFBU0YsT0FBT0csSUFBaEI7QUFDSDtBQUNELG1CQUFPRCxNQUFQO0FBQ0gsUyxRQUtERSxTLEdBQVksVUFBQ0MsRUFBRCxFQUFPO0FBQ2ZqQixrQkFBTWtCLE1BQU4sQ0FBYUQsRUFBYixFQUNLRSxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysb0JBQUlmLE9BQU9lLElBQUlmLElBQWY7QUFDQUEscUJBQUtnQixRQUFMLEdBQWdCLGdDQUFpQmhCLEtBQUtnQixRQUF0QixDQUFoQjtBQUNBaEIscUJBQUtpQixTQUFMLEdBQWlCLE1BQUtaLFlBQUwsQ0FBa0JMLEtBQUtNLE1BQXZCLENBQWpCO0FBQ0Esc0JBQUtMLElBQUwsR0FBWUQsSUFBWjtBQUNBLHNCQUFLa0IsTUFBTDtBQUNILGFBUEw7QUFRSCxTLFFBRURDLE8sR0FBVTtBQUNOOzs7QUFHQUMsZUFKTSxpQkFJQztBQUNILG9CQUFJQyxPQUFPLEtBQUtwQixJQUFoQjtBQUNBLG9CQUFJcUIsU0FBUztBQUNUTiw4QkFBVUssS0FBS0wsUUFBTCxDQUFjTyxHQUFkLENBQWtCLFVBQUNGLElBQUQsRUFBUztBQUNqQywrQkFBTztBQUNIRyxxQ0FBU0gsS0FBS0ksR0FEWDtBQUVIQyxtQ0FBT0wsS0FBS0s7QUFGVCx5QkFBUDtBQUlILHFCQUxTLENBREQ7QUFPVGQsd0JBQUlTLEtBQUtJLEdBUEE7QUFRVEUscUNBQWlCTixLQUFLTSxlQUFMLElBQXdCTixLQUFLTSxlQUFMLENBQXFCRixHQVJyRDtBQVNURyxtQ0FBZSxDQVROO0FBVVRDLDJCQUFPUixLQUFLTCxRQUFMLENBQWNPLEdBQWQsQ0FBa0IsVUFBQ0YsSUFBRCxFQUFTO0FBQzlCLCtCQUFPQSxLQUFLRyxPQUFMLENBQWFLLEtBQXBCO0FBQ0gscUJBRk0sRUFFSkMsSUFGSSxDQUVDLEdBRkQsRUFFTUMsS0FGTixDQUVZLENBRlosRUFFZSxFQUZmLENBVkU7QUFhVHpCLDRCQUFRLENBYkM7QUFjVDBCLDRCQUFRLGlCQUFPQSxNQWROO0FBZVRDLDRCQUFRWixLQUFLWSxNQWZKO0FBZ0JUQywyQkFBTyxpQkFBT0EsS0FoQkw7QUFpQlRDLGdDQUFZLGtDQWpCSDtBQWtCVEMsa0NBQWMsQ0FsQkw7QUFtQlRDLDhCQUFVaEIsS0FBS2dCO0FBbkJOLGlCQUFiO0FBcUJBLHdDQUFTZixNQUFUO0FBQ0gsYUE1Qks7OztBQThCTjs7O0FBR0FnQixtQ0FBdUIsU0FBU0EscUJBQVQsQ0FBK0JqQixJQUEvQixFQUFxQztBQUN4RCxxQkFBS0YsT0FBTCxDQUFhb0IsUUFBYixDQUFzQix1QkFBdUJsQixLQUFLRyxPQUFMLENBQWFDLEdBQTFEO0FBQ0gsYUFuQ0s7QUFvQ047OztBQUdBYyxvQkF2Q00sb0JBdUNJQyxHQXZDSixFQXVDUztBQUNYQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZGLHlCQUFLQTtBQURLLGlCQUFkO0FBR0g7QUEzQ0ssUzs7Ozs7aUNBbENBLENBQ1Q7O0FBT0E7Ozs7O0FBWUQ7Ozs7OzsrQkE0RFFHLEMsRUFBRztBQUNQLGdCQUFJL0IsS0FBSytCLEVBQUUvQixFQUFYO0FBQ0EsaUJBQUtELFNBQUwsQ0FBZUMsRUFBZjtBQUNIOzs7O0VBN0ZzQyxlQUFLZ0MsSTs7a0JBQTNCL0MsWSIsImZpbGUiOiJvcmRlckRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgaW5kZXhCeSBmcm9tICcuLi9mdW5jdGlvbi9pbmRleEJ5J1xuICAgIGltcG9ydCBwYWdlQ29uZmlnICBmcm9tICcuL2NvbmZpZydcbiAgICBpbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vc2VydmljZS9zaGlwcGluZ0FkZHJlc3MnXG4gICAgaW1wb3J0ICogYXMgb3JkZXIgZnJvbSAnLi4vc2VydmljZS9vcmRlcidcbiAgICBpbXBvcnQgKiBhcyBtZXNzYWdlIGZyb20gJy4uL3NlcnZpY2UvbWVzc2FnZSdcbiAgICBpbXBvcnQgbXVsdGlwbHkgZnJvbSAnLi4vZnVuY3Rpb24vbXVsdGlwbHknXG4gICAgaW1wb3J0IHBsdXMgZnJvbSAnLi4vZnVuY3Rpb24vcGx1cydcbiAgICBpbXBvcnQgY3VycmVuY3kgZnJvbSAnLi4vZnVuY3Rpb24vY3VycmVuY3knXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG4gICAgaW1wb3J0IGFkYXB0UHJvZHVjdExpc3QgZnJvbSAnLi4vZnVuY3Rpb24vYWRhcHRQcm9kdWN0TGlzdCdcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnXG4gICAgaW1wb3J0IGNyZWF0ZU9yZGVyTnVtYmVyIGZyb20gJy4uL2Z1bmN0aW9uL2NyZWF0ZU9yZGVyTnVtYmVyJ1xuICAgIGltcG9ydCBjb3B5cmlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnXG4gICAgaW1wb3J0IHRvYXN0IGZyb20gJy4uL2Z1bmN0aW9uL3RvYXN0J1xuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJDb25maXJtICBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIFxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i5Y2V6K+m5oOFJ1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgaW5mbzoge31cbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY29weXJpZ2h0LFxuICAgICAgICAgICAgZm9vdGVyXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W5pSv5LuY54q25oCBXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTdGF0dXNTdHIgPSAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gaW5kZXhCeShwYWdlQ29uZmlnLk9SREVSX1NUQVRVUywgJ2lkJylbc3RhdHVzXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBvcHRpb24ubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5borqLljZXor6bmg4UgXG4gICAgICAgICAqL1xuICAgICAgICBnZXREZXRhaWwgPSAoaWQpPT4ge1xuICAgICAgICAgICAgb3JkZXIuZGV0YWlsKGlkKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnByb2R1Y3RzID0gYWRhcHRQcm9kdWN0TGlzdChkYXRhLnByb2R1Y3RzKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zdGF0dXNTdHIgPSB0aGlzLmdldFN0YXR1c1N0cihkYXRhLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mbyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDku5jmrL4gXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBheSAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmluZm87XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IGl0ZW0ucHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGl0ZW0uY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBpdGVtLnNoaXBwaW5nQWRkcmVzcyAmJiBpdGVtLnNoaXBwaW5nQWRkcmVzcy5faWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50TW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm9kdWN0LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJywnKS5zbGljZSgwLCA1MCksXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICByZW1hcms6IGl0ZW0ucmVtYXJrLFxuICAgICAgICAgICAgICAgICAgICBtY2hJZDogY29uZmlnLm1jaElkLFxuICAgICAgICAgICAgICAgICAgICBvdXRUcmFkZU5vOiBjcmVhdGVPcmRlck51bWJlcigpLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzTW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsRmVlOiBpdGVtLnRvdGFsRmVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBwdXJjaGFzZShwYXJhbXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazliLDkuqflk4Hor6bmg4UgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0UHJvZHVjdERldGFpbDogZnVuY3Rpb24gcmVkaXJlY3RQcm9kdWN0RGV0YWlsKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ3Byb2R1Y3REZXRhaWw/cGlkPScgKyBpdGVtLnByb2R1Y3QuX2lkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBwLmlkO1xuICAgICAgICAgICAgdGhpcy5nZXREZXRhaWwoaWQpOyAgIFxuICAgICAgICB9XG4gICAgfVxuIl19