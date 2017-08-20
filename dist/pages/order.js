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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsInJlZGlyZWN0UHJvZHVjdERldGFpbCIsIml0ZW0iLCJyZWRpcmVjdCIsInByb2R1Y3QiLCJfaWQiLCJmb3J3YXJkT3JkZXJEZXRhaWwiLCJ1cmwiLCJ3eCIsInJlZGlyZWN0VG8iLCJwYXkiLCJwYXJhbXMiLCJwcm9kdWN0cyIsIm1hcCIsImNvdW50IiwiaWQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5IiwidGl0bGUiLCJqb2luIiwic2xpY2UiLCJzdGF0dXMiLCJtb2JpbGUiLCJyZW1hcmsiLCJtY2hJZCIsIm91dFRyYWRlTm8iLCJleHByZXNzTW9uZXkiLCJ0b3RhbEZlZSIsImdldFN0YXR1c1N0ciIsIm9wdGlvbiIsIk9SREVSX1NUQVRVUyIsInJlc3VsdCIsIm5hbWUiLCJnZXRPcmRlckxpc3QiLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJmb3JFYWNoIiwic3RhdHVzU3RyIiwicGF5U3RyIiwiaGlkZUxvYWRpbmciLCIkYXBwbHkiLCJjYXRjaCIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFSTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFRVEMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBREgsUyxRQUlQQyxPLEdBQVU7QUFDTjs7O0FBR0FDLGlDQUpNLGlDQUlpQkMsSUFKakIsRUFJdUI7QUFDekIscUJBQUtGLE9BQUwsQ0FBYUcsUUFBYixDQUFzQix1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dGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgbGlzdCB9IGZyb20gJy4uL3NlcnZpY2Uvb3JkZXInXG4gICAgaW1wb3J0IHBhZ2VDb25maWcgIGZyb20gJy4vY29uZmlnJ1xuICAgIGltcG9ydCBtdWx0aXBseSBmcm9tICcuLi9mdW5jdGlvbi9tdWx0aXBseSdcbiAgICBpbXBvcnQgZGl2aWRlIGZyb20gJy4uL2Z1bmN0aW9uL2RpdmlkZSdcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuICAgIGltcG9ydCBjdXJyZW5jeSBmcm9tICcuLi9mdW5jdGlvbi9jdXJyZW5jeSdcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG4gICAgaW1wb3J0IGluZGV4QnkgZnJvbSAnLi4vZnVuY3Rpb24vaW5kZXhCeSdcbiAgICBpbXBvcnQgY3JlYXRlT3JkZXJOdW1iZXIgZnJvbSAnLi4vZnVuY3Rpb24vY3JlYXRlT3JkZXJOdW1iZXInXG4gICAgaW1wb3J0IGFkYXB0UHJvZHVjdExpc3QgZnJvbSAnLi4vZnVuY3Rpb24vYWRhcHRQcm9kdWN0TGlzdCdcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnXG4gICAgaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTorqLljZUnXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRPcmRlckxpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBsaXN0OiBudWxsIFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Yiw5Lqn5ZOB6K+m5oOFIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdFByb2R1Y3REZXRhaWwgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ3Byb2R1Y3REZXRhaWw/cGlkPScgKyBpdGVtLnByb2R1Y3QuX2lkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Yiw6K6i5Y2V6K+m5oOFIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmb3J3YXJkT3JkZXJEZXRhaWwgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLnJlZGlyZWN0KCdvcmRlckRldGFpbD9pZD0nICsgaXRlbS5faWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5LuY5qy+IFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwYXkgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogaXRlbS5wcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBpdGVtLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uX2lkLFxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IGl0ZW0uc2hpcHBpbmdBZGRyZXNzICYmIGl0ZW0uc2hpcHBpbmdBZGRyZXNzLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnRNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb2R1Y3QudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbignLCcpLnNsaWNlKDAsIDUwKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IGNvbmZpZy5tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgIHJlbWFyazogaXRlbS5yZW1hcmssXG4gICAgICAgICAgICAgICAgICAgIG1jaElkOiBjb25maWcubWNoSWQsXG4gICAgICAgICAgICAgICAgICAgIG91dFRyYWRlTm86IGNyZWF0ZU9yZGVyTnVtYmVyKCksXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3NNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxGZWU6IGl0ZW0udG90YWxGZWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHB1cmNoYXNlKHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W5pSv5LuY54q25oCBXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTdGF0dXNTdHIgPSAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gaW5kZXhCeShwYWdlQ29uZmlnLk9SREVSX1NUQVRVUywgJ2lkJylbc3RhdHVzXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBvcHRpb24ubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W5pS26LSn5Zyw5Z2A5YiX6KGoXG4gICAgICAgICAqL1xuICAgICAgICBnZXRPcmRlckxpc3QgPSAoKT0+IHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTogJ+WKoOi9veS4rSd9KTtcbiAgICAgICAgICAgIGxpc3QoKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGF0dXNTdHIgPSB0aGlzLmdldFN0YXR1c1N0cihpdGVtLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb2R1Y3RzID0gYWRhcHRQcm9kdWN0TGlzdChpdGVtLnByb2R1Y3RzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGF5U3RyID0gY3VycmVuY3koZGl2aWRlKGl0ZW0udG90YWxGZWUsIDEwMCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gZGF0YTsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGZvb3RlcixcbiAgICAgICAgICAgIGNvcHlyaWdodFxuICAgICAgICB9XG4gICAgIH1cbiJdfQ==