'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _product = require('./../service/product.js');

var _card = require('./../service/card.js');

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

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _adaptProductList = require('./../function/adaptProductList.js');

var _adaptProductList2 = _interopRequireDefault(_adaptProductList);

var _createOrderNumber = require('./../function/createOrderNumber.js');

var _createOrderNumber2 = _interopRequireDefault(_createOrderNumber);

var _purchase = require('./../function/purchase.js');

var _purchase2 = _interopRequireDefault(_purchase);

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

var _toast = require('./../function/toast.js');

var _toast2 = _interopRequireDefault(_toast);

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
            navigationBarTitleText: '确认定单'
        }, _this.data = {
            products: null,
            message: '',
            expressMoney: (0, _currency2.default)(0),
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
            },
            totalMoney: function totalMoney() {
                return (0, _currency2.default)(this.getTotalMoney());
            }
        }, _this.components = {
            copyright: _copyright2.default
        }, _this.methods = {
            /**
             * 跳转地址 
             */
            redirect: function redirect(url) {
                wx.redirectTo({
                    url: url
                });
            },


            /**
             * 填写备注信息 
             */
            bindInputMessage: function bindInputMessage(e) {
                _this.message = e.detail.value;
            },

            /**
             * 跳转到产品详情 
             */
            redirectProductDetail: function redirectProductDetail(item) {
                this.methods.redirect('productDetail?pid=' + item.product._id);
            },

            /**
             * 创建订单 
             */
            createOrder: function createOrder(e) {
                var formId = e.detail.formId;
                var outTradeNo = (0, _createOrderNumber2.default)();

                if (!_this.defaultShippingAddress) {
                    (0, _toast2.default)('请填写收货地址');
                    return;
                }
                var products = _this.products;
                var params = {
                    products: products.map(function (item) {
                        return {
                            product: item._id,
                            count: item.count
                        };
                    }),
                    shippingAddress: _this.defaultShippingAddress._id,
                    discountMoney: 0,
                    title: products.map(function (item) {
                        return item.title;
                    }).join(',').slice(0, 50),
                    status: 0,
                    mobile: _config2.default.mobile,
                    message: _this.message.trim(),
                    mchId: _config2.default.mchId,
                    outTradeNo: outTradeNo,
                    expressMoney: 0,
                    totalFee: (0, _multiply2.default)(_this.getTotalMoney(), 100)
                };

                params.formId = formId;

                order.add(params).then(function (res) {
                    var data = res.data;
                    params.id = data._id;
                    // 给商家发送一个创建订单消息
                    message.sendCreateOrderMessage(params);
                    // 下单后，把购物车的中商品删除掉
                    (0, _card.removeByPids)(products.map(function (item) {
                        return item._id;
                    }));
                    (0, _purchase2.default)(params);
                });
            },

            /**
             * 选择配送地址 
             */
            selectShipingAddress: function selectShipingAddress() {
                wx.navigateTo({
                    url: 'shippingAddress'
                });
            }
        }, _this.getShippingAddressList = function () {
            (0, _shippingAddress.list)().then(function (res) {
                _this.shippingAddressList = res.data;
                _this.$apply();
            }).catch(function () {
                _this.shippingAddressList = [];
                _this.$apply();
            });
        }, _this.getProductsByIds = function (products) {
            wx.showLoading({ title: '加载中' });
            (0, _product.listByIds)({
                products: products
            }).then(function (res) {
                wx.hideLoading();
                _this.products = (0, _adaptProductList2.default)(res.data);
                _this.$apply();
            }).catch(function () {
                _this.products = [];
                _this.$apply();
                wx.hideLoading();
            });
        }, _this.getTotalMoney = function () {
            var result = 0;
            var products = _this.products || [];
            products.forEach(function (item) {
                result = (0, _plus2.default)((0, _multiply2.default)(item.payPrice, item.count), result);
            });
            return result;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OrderConfirm, [{
        key: 'onShow',
        value: function onShow() {
            this.getShippingAddressList();
        }

        /**
         * 获取收货地址列表
         */


        /**
         * 根据产品ids获取商品信息 
         */


        /**
         * 获取产品总价
         */

    }, {
        key: 'onLoad',
        value: function onLoad(p) {
            var products = p.products;
            products = JSON.parse(products);

            // 获取购买产品的信息 
            this.getProductsByIds(products);
        }
    }]);

    return OrderConfirm;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(OrderConfirm , 'pages/orderConfirm'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJvcmRlciIsIm1lc3NhZ2UiLCJPcmRlckNvbmZpcm0iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInByb2R1Y3RzIiwiZXhwcmVzc01vbmV5Iiwic2hpcHBpbmdBZGRyZXNzTGlzdCIsImNvbXB1dGVkIiwiZGVmYXVsdFNoaXBwaW5nQWRkcmVzcyIsInJlc3VsdCIsImxlbmd0aCIsInNvbWUiLCJpdGVtIiwiaXNEZWZhdWx0IiwidG90YWxNb25leSIsImdldFRvdGFsTW9uZXkiLCJjb21wb25lbnRzIiwiY29weXJpZ2h0IiwibWV0aG9kcyIsInJlZGlyZWN0IiwidXJsIiwid3giLCJyZWRpcmVjdFRvIiwiYmluZElucHV0TWVzc2FnZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInJlZGlyZWN0UHJvZHVjdERldGFpbCIsInByb2R1Y3QiLCJfaWQiLCJjcmVhdGVPcmRlciIsImZvcm1JZCIsIm91dFRyYWRlTm8iLCJwYXJhbXMiLCJtYXAiLCJjb3VudCIsInNoaXBwaW5nQWRkcmVzcyIsImRpc2NvdW50TW9uZXkiLCJ0aXRsZSIsImpvaW4iLCJzbGljZSIsInN0YXR1cyIsIm1vYmlsZSIsInRyaW0iLCJtY2hJZCIsInRvdGFsRmVlIiwiYWRkIiwidGhlbiIsInJlcyIsImlkIiwic2VuZENyZWF0ZU9yZGVyTWVzc2FnZSIsInNlbGVjdFNoaXBpbmdBZGRyZXNzIiwibmF2aWdhdGVUbyIsImdldFNoaXBwaW5nQWRkcmVzc0xpc3QiLCIkYXBwbHkiLCJjYXRjaCIsImdldFByb2R1Y3RzQnlJZHMiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwiZm9yRWFjaCIsInBheVByaWNlIiwicCIsIkpTT04iLCJwYXJzZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLEs7O0FBQ1o7O0lBQVlDLE87O0FBQ1o7Ozs7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QUNILGFBUEwsRUFRS0MsS0FSTCxDQVFXLFlBQUs7QUFDUixzQkFBS25ELFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxzQkFBS2tELE1BQUw7QUFDQWpDLG1CQUFHcUMsV0FBSDtBQUNILGFBWkw7QUFhSCxTLFFBS0QzQyxhLEdBQWlCLFlBQUs7QUFDbEIsZ0JBQUlOLFNBQVMsQ0FBYjtBQUNBLGdCQUFJTCxXQUFXLE1BQUtBLFFBQUwsSUFBaUIsRUFBaEM7QUFDQUEscUJBQVN1RCxPQUFULENBQWlCLFVBQUMvQyxJQUFELEVBQVM7QUFDdEJILHlCQUFTLG9CQUFLLHdCQUFTRyxLQUFLZ0QsUUFBZCxFQUF3QmhELEtBQUt1QixLQUE3QixDQUFMLEVBQTBDMUIsTUFBMUMsQ0FBVDtBQUNILGFBRkQ7QUFHQSxtQkFBT0EsTUFBUDtBQUNILFM7Ozs7O2lDQW5LUztBQUNOLGlCQUFLNEMsc0JBQUw7QUFDSDs7QUFvSEQ7Ozs7O0FBZUE7Ozs7O0FBb0JBOzs7Ozs7K0JBWVFRLEMsRUFBRztBQUNQLGdCQUFJekQsV0FBV3lELEVBQUV6RCxRQUFqQjtBQUNBQSx1QkFBVzBELEtBQUtDLEtBQUwsQ0FBVzNELFFBQVgsQ0FBWDs7QUFFQTtBQUNBLGlCQUFLb0QsZ0JBQUwsQ0FBc0JwRCxRQUF0QjtBQUNIOzs7O0VBeExzQyxlQUFLNEQsSTs7a0JBQTNCaEUsWSIsImZpbGUiOiJvcmRlckNvbmZpcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgbGlzdEJ5SWRzIH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0J1xuICAgIGltcG9ydCB7IHJlbW92ZUJ5UGlkcyB9IGZyb20gJy4uL3NlcnZpY2UvY2FyZCdcbiAgICBpbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vc2VydmljZS9zaGlwcGluZ0FkZHJlc3MnXG4gICAgaW1wb3J0ICogYXMgb3JkZXIgZnJvbSAnLi4vc2VydmljZS9vcmRlcidcbiAgICBpbXBvcnQgKiBhcyBtZXNzYWdlIGZyb20gJy4uL3NlcnZpY2UvbWVzc2FnZSdcbiAgICBpbXBvcnQgbXVsdGlwbHkgZnJvbSAnLi4vZnVuY3Rpb24vbXVsdGlwbHknXG4gICAgaW1wb3J0IHBsdXMgZnJvbSAnLi4vZnVuY3Rpb24vcGx1cydcbiAgICBpbXBvcnQgY3VycmVuY3kgZnJvbSAnLi4vZnVuY3Rpb24vY3VycmVuY3knXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG4gICAgaW1wb3J0IGFkYXB0UHJvZHVjdExpc3QgZnJvbSAnLi4vZnVuY3Rpb24vYWRhcHRQcm9kdWN0TGlzdCdcbiAgICBpbXBvcnQgY3JlYXRlT3JkZXJOdW1iZXIgZnJvbSAnLi4vZnVuY3Rpb24vY3JlYXRlT3JkZXJOdW1iZXInXG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJ1xuICAgIGltcG9ydCBjb3B5cmlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnXG4gICAgaW1wb3J0IHRvYXN0IGZyb20gJy4uL2Z1bmN0aW9uL3RvYXN0J1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyQ29uZmlybSAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ehruiupOWumuWNlSdcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgIHByb2R1Y3RzOiBudWxsLFxuICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgICAgZXhwcmVzc01vbmV5OiBjdXJyZW5jeSgwKSxcbiAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICAvLyDpu5jorqTmlLbotKflnLDlnLDlnYBcbiAgICAgICAgICAgIGRlZmF1bHRTaGlwcGluZ0FkZHJlc3M6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBzaGlwcGluZ0FkZHJlc3NMaXN0ID0gdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0O1xuICAgICAgICAgICAgICAgIGlmIChzaGlwcGluZ0FkZHJlc3NMaXN0ICYmIHNoaXBwaW5nQWRkcmVzc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWPquacieS4gOS4quaUtui0p+WcsOWdgO+8jOS4jeeuoeaYr+S4jeaYr+m7mOiupOeahO+8jOWwseW9k+m7mOiupOeahOS9v+eUqFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHBpbmdBZGRyZXNzTGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc2hpcHBpbmdBZGRyZXNzTGlzdFswXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc0xpc3Quc29tZSgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG90YWxNb25leSAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5KHRoaXMuZ2V0VG90YWxNb25leSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjb3B5cmlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDloavlhpnlpIfms6jkv6Hmga8gXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGJpbmRJbnB1dE1lc3NhZ2U6IChlKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Yiw5Lqn5ZOB6K+m5oOFIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdFByb2R1Y3REZXRhaWw6IGZ1bmN0aW9uIHJlZGlyZWN0UHJvZHVjdERldGFpbChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLnJlZGlyZWN0KCdwcm9kdWN0RGV0YWlsP3BpZD0nICsgaXRlbS5wcm9kdWN0Ll9pZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWIm+W7uuiuouWNlSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY3JlYXRlT3JkZXI6IChlKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybUlkID0gZS5kZXRhaWwuZm9ybUlkO1xuICAgICAgICAgICAgICAgIHZhciBvdXRUcmFkZU5vID0gY3JlYXRlT3JkZXJOdW1iZXIoKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZWZhdWx0U2hpcHBpbmdBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCfor7floavlhpnmlLbotKflnLDlnYAnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzO1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBpdGVtLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB0aGlzLmRlZmF1bHRTaGlwcGluZ0FkZHJlc3MuX2lkLFxuICAgICAgICAgICAgICAgICAgICBkaXNjb3VudE1vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcsJylcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIDUwKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IGNvbmZpZy5tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZS50cmltKCksXG4gICAgICAgICAgICAgICAgICAgIG1jaElkOiBjb25maWcubWNoSWQsXG4gICAgICAgICAgICAgICAgICAgIG91dFRyYWRlTm86IG91dFRyYWRlTm8sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3NNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxGZWU6IG11bHRpcGx5KHRoaXMuZ2V0VG90YWxNb25leSgpLCAxMDApXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHBhcmFtcy5mb3JtSWQgPSBmb3JtSWQ7XG5cbiAgICAgICAgICAgICAgICBvcmRlci5hZGQocGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOe7meWVhuWutuWPkemAgeS4gOS4quWIm+W7uuiuouWNlea2iOaBr1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zZW5kQ3JlYXRlT3JkZXJNZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDkuIvljZXlkI7vvIzmiorotK3nianovabnmoTkuK3llYblk4HliKDpmaTmjolcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ5UGlkcyhwcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2UocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmAieaLqemFjemAgeWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0U2hpcGluZ0FkZHJlc3MgKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgIHVybDogJ3NoaXBwaW5nQWRkcmVzcydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W5pS26LSn5Zyw5Z2A5YiX6KGoXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTaGlwcGluZ0FkZHJlc3NMaXN0ID0gKCk9PiB7XG4gICAgICAgICAgICBsaXN0KClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0ID0gcmVzLmRhdGE7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmoLnmja7kuqflk4FpZHPojrflj5bllYblk4Hkv6Hmga8gXG4gICAgICAgICAqL1xuICAgICAgICBnZXRQcm9kdWN0c0J5SWRzID0gKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7dGl0bGU6ICfliqDovb3kuK0nfSk7XG4gICAgICAgICAgICBsaXN0QnlJZHMoe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGFkYXB0UHJvZHVjdExpc3QocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W5Lqn5ZOB5oC75Lu3XG4gICAgICAgICAqL1xuICAgICAgICBnZXRUb3RhbE1vbmV5ID0gICgpPT4ge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICB2YXIgcHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzIHx8IFtdO1xuICAgICAgICAgICAgcHJvZHVjdHMuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGx1cyhtdWx0aXBseShpdGVtLnBheVByaWNlLCBpdGVtLmNvdW50KSwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCAocCkge1xuICAgICAgICAgICAgdmFyIHByb2R1Y3RzID0gcC5wcm9kdWN0cztcbiAgICAgICAgICAgIHByb2R1Y3RzID0gSlNPTi5wYXJzZShwcm9kdWN0cyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOiOt+WPlui0reS5sOS6p+WTgeeahOS/oeaBryBcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdHNCeUlkcyhwcm9kdWN0cyk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=