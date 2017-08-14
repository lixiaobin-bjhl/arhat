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
            wx.showLoading();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJvcmRlciIsIm1lc3NhZ2UiLCJPcmRlckNvbmZpcm0iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInByb2R1Y3RzIiwiZXhwcmVzc01vbmV5Iiwic2hpcHBpbmdBZGRyZXNzTGlzdCIsImNvbXB1dGVkIiwiZGVmYXVsdFNoaXBwaW5nQWRkcmVzcyIsInJlc3VsdCIsImxlbmd0aCIsInNvbWUiLCJpdGVtIiwiaXNEZWZhdWx0IiwidG90YWxNb25leSIsImdldFRvdGFsTW9uZXkiLCJjb21wb25lbnRzIiwiY29weXJpZ2h0IiwibWV0aG9kcyIsInJlZGlyZWN0IiwidXJsIiwid3giLCJyZWRpcmVjdFRvIiwiYmluZElucHV0TWVzc2FnZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNyZWF0ZU9yZGVyIiwiZm9ybUlkIiwib3V0VHJhZGVObyIsInBhcmFtcyIsIm1hcCIsInByb2R1Y3QiLCJfaWQiLCJjb3VudCIsInNoaXBwaW5nQWRkcmVzcyIsImRpc2NvdW50TW9uZXkiLCJ0aXRsZSIsImpvaW4iLCJzbGljZSIsInN0YXR1cyIsIm1vYmlsZSIsInRyaW0iLCJtY2hJZCIsInRvdGFsRmVlIiwiYWRkIiwidGhlbiIsInJlcyIsImlkIiwic2VuZENyZWF0ZU9yZGVyTWVzc2FnZSIsInNlbGVjdFNoaXBpbmdBZGRyZXNzIiwibmF2aWdhdGVUbyIsImdldFNoaXBwaW5nQWRkcmVzc0xpc3QiLCIkYXBwbHkiLCJjYXRjaCIsImdldFByb2R1Y3RzQnlJZHMiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwiZm9yRWFjaCIsInBheVByaWNlIiwicCIsIkpTT04iLCJwYXJzZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLEs7O0FBQ1o7O0lBQVlDLE87O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7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QUFMLElBQWlCLEVBQWhDO0FBQ0FBLHFCQUFTc0QsT0FBVCxDQUFpQixVQUFDOUMsSUFBRCxFQUFTO0FBQ3RCSCx5QkFBUyxvQkFBSyx3QkFBU0csS0FBSytDLFFBQWQsRUFBd0IvQyxLQUFLc0IsS0FBN0IsQ0FBTCxFQUEwQ3pCLE1BQTFDLENBQVQ7QUFDSCxhQUZEO0FBR0EsbUJBQU9BLE1BQVA7QUFDSCxTOzs7OztpQ0E1SlM7QUFDTixpQkFBSzJDLHNCQUFMO0FBQ0g7O0FBNkdEOzs7OztBQWVBOzs7OztBQW9CQTs7Ozs7OytCQVlRUSxDLEVBQUc7QUFDUCxnQkFBSXhELFdBQVd3RCxFQUFFeEQsUUFBakI7QUFDQUEsdUJBQVd5RCxLQUFLQyxLQUFMLENBQVcxRCxRQUFYLENBQVg7O0FBRUE7QUFDQSxpQkFBS21ELGdCQUFMLENBQXNCbkQsUUFBdEI7QUFDSDs7OztFQWpMc0MsZUFBSzJELEk7O2tCQUEzQi9ELFkiLCJmaWxlIjoib3JkZXJDb25maXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGxpc3RCeUlkcyB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCdcbiAgICBpbXBvcnQgeyByZW1vdmVCeVBpZHMgfSBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnXG4gICAgaW1wb3J0IHsgbGlzdCB9IGZyb20gJy4uL3NlcnZpY2Uvc2hpcHBpbmdBZGRyZXNzJ1xuICAgIGltcG9ydCAqIGFzIG9yZGVyIGZyb20gJy4uL3NlcnZpY2Uvb3JkZXInXG4gICAgaW1wb3J0ICogYXMgbWVzc2FnZSBmcm9tICcuLi9zZXJ2aWNlL21lc3NhZ2UnXG4gICAgaW1wb3J0IG11bHRpcGx5IGZyb20gJy4uL2Z1bmN0aW9uL211bHRpcGx5J1xuICAgIGltcG9ydCBwbHVzIGZyb20gJy4uL2Z1bmN0aW9uL3BsdXMnXG4gICAgaW1wb3J0IGN1cnJlbmN5IGZyb20gJy4uL2Z1bmN0aW9uL2N1cnJlbmN5J1xuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuICAgIGltcG9ydCBhZGFwdFByb2R1Y3RMaXN0IGZyb20gJy4uL2Z1bmN0aW9uL2FkYXB0UHJvZHVjdExpc3QnXG4gICAgaW1wb3J0IGNyZWF0ZU9yZGVyTnVtYmVyIGZyb20gJy4uL2Z1bmN0aW9uL2NyZWF0ZU9yZGVyTnVtYmVyJ1xuICAgIGltcG9ydCBwdXJjaGFzZSBmcm9tICcuLi9mdW5jdGlvbi9wdXJjaGFzZSdcbiAgICBpbXBvcnQgY29weXJpZ2h0IGZyb20gJy4uL2NvbXBvbmVudHMvY29weXJpZ2h0J1xuICAgIGltcG9ydCB0b2FzdCBmcm9tICcuLi9mdW5jdGlvbi90b2FzdCdcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckNvbmZpcm0gIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnoa7orqTlrprljZUnXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICBwcm9kdWN0czogbnVsbCxcbiAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgIGV4cHJlc3NNb25leTogY3VycmVuY3koMCksXG4gICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc0xpc3Q6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFNoaXBwaW5nQWRkcmVzc0xpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgLy8g6buY6K6k5pS26LSn5Zyw5Zyw5Z2AXG4gICAgICAgICAgICBkZWZhdWx0U2hpcHBpbmdBZGRyZXNzOiAoKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgc2hpcHBpbmdBZGRyZXNzTGlzdCA9IHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdDtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHBpbmdBZGRyZXNzTGlzdCAmJiBzaGlwcGluZ0FkZHJlc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzlj6rmnInkuIDkuKrmlLbotKflnLDlnYDvvIzkuI3nrqHmmK/kuI3mmK/pu5jorqTnmoTvvIzlsLHlvZPpu5jorqTnmoTkvb/nlKhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBwaW5nQWRkcmVzc0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNoaXBwaW5nQWRkcmVzc0xpc3RbMF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NMaXN0LnNvbWUoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdGFsTW9uZXkgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeSh0aGlzLmdldFRvdGFsTW9uZXkoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY29weXJpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5aGr5YaZ5aSH5rOo5L+h5oGvIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBiaW5kSW5wdXRNZXNzYWdlOiAoZSk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWIm+W7uuiuouWNlSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY3JlYXRlT3JkZXI6IChlKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybUlkID0gZS5kZXRhaWwuZm9ybUlkO1xuICAgICAgICAgICAgICAgIHZhciBvdXRUcmFkZU5vID0gY3JlYXRlT3JkZXJOdW1iZXIoKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZWZhdWx0U2hpcHBpbmdBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCfor7floavlhpnmlLbotKflnLDlnYAnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzO1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBpdGVtLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB0aGlzLmRlZmF1bHRTaGlwcGluZ0FkZHJlc3MuX2lkLFxuICAgICAgICAgICAgICAgICAgICBkaXNjb3VudE1vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcsJylcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIDUwKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IGNvbmZpZy5tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZS50cmltKCksXG4gICAgICAgICAgICAgICAgICAgIG1jaElkOiBjb25maWcubWNoSWQsXG4gICAgICAgICAgICAgICAgICAgIG91dFRyYWRlTm86IG91dFRyYWRlTm8sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3NNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxGZWU6IG11bHRpcGx5KHRoaXMuZ2V0VG90YWxNb25leSgpLCAxMDApXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHBhcmFtcy5mb3JtSWQgPSBmb3JtSWQ7XG5cbiAgICAgICAgICAgICAgICBvcmRlci5hZGQocGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOe7meWVhuWutuWPkemAgeS4gOS4quWIm+W7uuiuouWNlea2iOaBr1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zZW5kQ3JlYXRlT3JkZXJNZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDkuIvljZXlkI7vvIzmiorotK3nianovabnmoTkuK3llYblk4HliKDpmaTmjolcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ5UGlkcyhwcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2UocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmAieaLqemFjemAgeWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0U2hpcGluZ0FkZHJlc3MgKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgIHVybDogJ3NoaXBwaW5nQWRkcmVzcydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W5pS26LSn5Zyw5Z2A5YiX6KGoXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTaGlwcGluZ0FkZHJlc3NMaXN0ID0gKCk9PiB7XG4gICAgICAgICAgICBsaXN0KClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0ID0gcmVzLmRhdGE7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmoLnmja7kuqflk4FpZHPojrflj5bllYblk4Hkv6Hmga8gXG4gICAgICAgICAqL1xuICAgICAgICBnZXRQcm9kdWN0c0J5SWRzID0gKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xuICAgICAgICAgICAgbGlzdEJ5SWRzKHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBhZGFwdFByb2R1Y3RMaXN0KHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPluS6p+WTgeaAu+S7t1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0VG90YWxNb25leSA9ICAoKT0+IHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgdmFyIHByb2R1Y3RzID0gdGhpcy5wcm9kdWN0cyB8fCBbXTtcbiAgICAgICAgICAgIHByb2R1Y3RzLmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBsdXMobXVsdGlwbHkoaXRlbS5wYXlQcmljZSwgaXRlbS5jb3VudCksIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHZhciBwcm9kdWN0cyA9IHAucHJvZHVjdHM7XG4gICAgICAgICAgICBwcm9kdWN0cyA9IEpTT04ucGFyc2UocHJvZHVjdHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDojrflj5botK3kubDkuqflk4HnmoTkv6Hmga8gXG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RzQnlJZHMocHJvZHVjdHMpO1xuICAgICAgICB9XG4gICAgfVxuIl19