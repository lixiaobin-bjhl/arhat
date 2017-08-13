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
            createOrder: function createOrder() {
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

                order.add(params).then(function (res) {
                    var data = res.data;
                    params.id = data._id;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJvcmRlciIsIk9yZGVyQ29uZmlybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicHJvZHVjdHMiLCJtZXNzYWdlIiwiZXhwcmVzc01vbmV5Iiwic2hpcHBpbmdBZGRyZXNzTGlzdCIsImNvbXB1dGVkIiwiZGVmYXVsdFNoaXBwaW5nQWRkcmVzcyIsInJlc3VsdCIsImxlbmd0aCIsInNvbWUiLCJpdGVtIiwiaXNEZWZhdWx0IiwidG90YWxNb25leSIsImdldFRvdGFsTW9uZXkiLCJjb21wb25lbnRzIiwiY29weXJpZ2h0IiwibWV0aG9kcyIsInJlZGlyZWN0IiwidXJsIiwid3giLCJyZWRpcmVjdFRvIiwiYmluZElucHV0TWVzc2FnZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNyZWF0ZU9yZGVyIiwib3V0VHJhZGVObyIsInBhcmFtcyIsIm1hcCIsInByb2R1Y3QiLCJfaWQiLCJjb3VudCIsInNoaXBwaW5nQWRkcmVzcyIsImRpc2NvdW50TW9uZXkiLCJ0aXRsZSIsImpvaW4iLCJzbGljZSIsInN0YXR1cyIsIm1vYmlsZSIsInRyaW0iLCJtY2hJZCIsInRvdGFsRmVlIiwiYWRkIiwidGhlbiIsInJlcyIsImlkIiwic2VsZWN0U2hpcGluZ0FkZHJlc3MiLCJuYXZpZ2F0ZVRvIiwiZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCIsIiRhcHBseSIsImNhdGNoIiwiZ2V0UHJvZHVjdHNCeUlkcyIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJmb3JFYWNoIiwicGF5UHJpY2UiLCJwIiwiSlNPTiIsInBhcnNlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7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Uzs7Ozs7aUNBdkpTO0FBQ04saUJBQUt5QyxzQkFBTDtBQUNIOztBQXdHRDs7Ozs7QUFlQTs7Ozs7QUFvQkE7Ozs7OzsrQkFZUVEsQyxFQUFHO0FBQ1AsZ0JBQUl2RCxXQUFXdUQsRUFBRXZELFFBQWpCO0FBQ0FBLHVCQUFXd0QsS0FBS0MsS0FBTCxDQUFXekQsUUFBWCxDQUFYOztBQUVBO0FBQ0EsaUJBQUtrRCxnQkFBTCxDQUFzQmxELFFBQXRCO0FBQ0g7Ozs7RUE1S3NDLGVBQUswRCxJOztrQkFBM0I5RCxZIiwiZmlsZSI6Im9yZGVyQ29uZmlybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBsaXN0QnlJZHMgfSBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3QnXG4gICAgaW1wb3J0IHsgcmVtb3ZlQnlQaWRzIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xuICAgIGltcG9ydCB7IGxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL3NoaXBwaW5nQWRkcmVzcydcbiAgICBpbXBvcnQgKiBhcyBvcmRlciBmcm9tICcuLi9zZXJ2aWNlL29yZGVyJ1xuICAgIGltcG9ydCBtdWx0aXBseSBmcm9tICcuLi9mdW5jdGlvbi9tdWx0aXBseSdcbiAgICBpbXBvcnQgcGx1cyBmcm9tICcuLi9mdW5jdGlvbi9wbHVzJ1xuICAgIGltcG9ydCBjdXJyZW5jeSBmcm9tICcuLi9mdW5jdGlvbi9jdXJyZW5jeSdcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcbiAgICBpbXBvcnQgYWRhcHRQcm9kdWN0TGlzdCBmcm9tICcuLi9mdW5jdGlvbi9hZGFwdFByb2R1Y3RMaXN0J1xuICAgIGltcG9ydCBjcmVhdGVPcmRlck51bWJlciBmcm9tICcuLi9mdW5jdGlvbi9jcmVhdGVPcmRlck51bWJlcidcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnXG4gICAgaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcbiAgICBpbXBvcnQgdG9hc3QgZnJvbSAnLi4vZnVuY3Rpb24vdG9hc3QnXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJDb25maXJtICBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIFxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56Gu6K6k5a6a5Y2VJ1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgcHJvZHVjdHM6IG51bGwsXG4gICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICBleHByZXNzTW9uZXk6IGN1cnJlbmN5KDApLFxuICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NMaXN0OiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRTaGlwcGluZ0FkZHJlc3NMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIC8vIOm7mOiupOaUtui0p+WcsOWcsOWdgFxuICAgICAgICAgICAgZGVmYXVsdFNoaXBwaW5nQWRkcmVzczogKCk9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHNoaXBwaW5nQWRkcmVzc0xpc3QgPSB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBwaW5nQWRkcmVzc0xpc3QgJiYgc2hpcHBpbmdBZGRyZXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5Y+q5pyJ5LiA5Liq5pS26LSn5Zyw5Z2A77yM5LiN566h5piv5LiN5piv6buY6K6k55qE77yM5bCx5b2T6buY6K6k55qE5L2/55SoXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwcGluZ0FkZHJlc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzaGlwcGluZ0FkZHJlc3NMaXN0WzBdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdC5zb21lKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3RhbE1vbmV5ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kodGhpcy5nZXRUb3RhbE1vbmV5KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNvcHlyaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWhq+WGmeWkh+azqOS/oeaBryBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYmluZElucHV0TWVzc2FnZTogKGUpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDliJvlu7rorqLljZUgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNyZWF0ZU9yZGVyOiAoKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgb3V0VHJhZGVObyA9IGNyZWF0ZU9yZGVyTnVtYmVyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgn6K+35aGr5YaZ5pS26LSn5Zyw5Z2AJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RzID0gdGhpcy5wcm9kdWN0cztcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGl0ZW0uY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogdGhpcy5kZWZhdWx0U2hpcHBpbmdBZGRyZXNzLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnRNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuam9pbignLCcpXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1MCksXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICBtY2hJZDogY29uZmlnLm1jaElkLFxuICAgICAgICAgICAgICAgICAgICBvdXRUcmFkZU5vOiBvdXRUcmFkZU5vLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzTW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsRmVlOiBtdWx0aXBseSh0aGlzLmdldFRvdGFsTW9uZXkoKSwgMTAwKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBvcmRlci5hZGQocGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS4i+WNleWQju+8jOaKiui0reeJqei9pueahOS4reWVhuWTgeWIoOmZpOaOiVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnlQaWRzKHByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6YCJ5oup6YWN6YCB5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3RTaGlwaW5nQWRkcmVzcyAoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgdXJsOiAnc2hpcHBpbmdBZGRyZXNzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bmlLbotKflnLDlnYDliJfooahcbiAgICAgICAgICovXG4gICAgICAgIGdldFNoaXBwaW5nQWRkcmVzc0xpc3QgPSAoKT0+IHtcbiAgICAgICAgICAgIGxpc3QoKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSByZXMuZGF0YTsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOagueaNruS6p+WTgWlkc+iOt+WPluWVhuWTgeS/oeaBryBcbiAgICAgICAgICovXG4gICAgICAgIGdldFByb2R1Y3RzQnlJZHMgPSAocHJvZHVjdHMpID0+IHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICBsaXN0QnlJZHMoe1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGFkYXB0UHJvZHVjdExpc3QocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W5Lqn5ZOB5oC75Lu3XG4gICAgICAgICAqL1xuICAgICAgICBnZXRUb3RhbE1vbmV5ID0gICgpPT4ge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICB2YXIgcHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzIHx8IFtdO1xuICAgICAgICAgICAgcHJvZHVjdHMuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGx1cyhtdWx0aXBseShpdGVtLnBheVByaWNlLCBpdGVtLmNvdW50KSwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCAocCkge1xuICAgICAgICAgICAgdmFyIHByb2R1Y3RzID0gcC5wcm9kdWN0cztcbiAgICAgICAgICAgIHByb2R1Y3RzID0gSlNPTi5wYXJzZShwcm9kdWN0cyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOiOt+WPlui0reS5sOS6p+WTgeeahOS/oeaBryBcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdHNCeUlkcyhwcm9kdWN0cyk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=