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

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _createOrderNumber = require('./../function/createOrderNumber.js');

var _createOrderNumber2 = _interopRequireDefault(_createOrderNumber);

var _purchase = require('./../function/purchase.js');

var _purchase2 = _interopRequireDefault(_purchase);

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
            remark: '',
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
                var result = 0;
                var products = this.products || [];
                products.forEach(function (item) {
                    result = (0, _plus2.default)((0, _multiply2.default)(item.payPrice, item.count), result);
                });
                return result;
            }
        }, _this.methods = {
            /**
             * 填写备注信息 
             */
            bindInputRemark: function bindInputRemark(e) {
                _this.remark = e.detail.value;
            },

            /**
             * 创建订单 
             */
            createOrder: function createOrder() {

                var outTradeNo = (0, _createOrderNumber2.default)();

                if (!_this.defaultShippingAddress) {
                    wx.showToast({
                        title: '请填写收货地址'
                    });
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
                    remark: _this.remark.trim(),
                    mchId: _config2.default.mchId,
                    outTradeNo: outTradeNo,
                    expressMoney: 0,
                    totalFee: (0, _multiply2.default)(_this.totalMoney, 100)
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
            },


            /**
             * 获取收货地址列表
             */
            getShippingAddressList: function getShippingAddressList() {
                (0, _shippingAddress.list)().then(function (res) {
                    _this.shippingAddressList = res.data.list;
                    _this.$apply();
                }).catch(function () {
                    _this.shippingAddressList = [];
                    _this.$apply();
                });
            },

            /**
             * 根据产品ids获取商品信息 
             */
            getProductsByIds: function getProductsByIds(products) {
                wx.showLoading();
                (0, _product.listByIds)({
                    products: products
                }).then(function (res) {
                    wx.hideLoading();
                    _this.products = res.data.list;
                    _this.$apply();
                }).catch(function () {
                    _this.products = [];
                    _this.$apply();
                    wx.hideLoading();
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(OrderConfirm, [{
        key: 'onShow',
        value: function onShow() {
            this.methods.getShippingAddressList();
        }
    }, {
        key: 'onLoad',
        value: function onLoad(p) {
            var products = p.products;
            products = JSON.parse(products);

            // 直接购买产品 
            this.methods.getProductsByIds(products);
        }
    }]);

    return OrderConfirm;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(OrderConfirm , 'pages/orderConfirm'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJvcmRlciIsIk9yZGVyQ29uZmlybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicHJvZHVjdHMiLCJyZW1hcmsiLCJzaGlwcGluZ0FkZHJlc3NMaXN0IiwiY29tcHV0ZWQiLCJkZWZhdWx0U2hpcHBpbmdBZGRyZXNzIiwicmVzdWx0IiwibGVuZ3RoIiwic29tZSIsIml0ZW0iLCJpc0RlZmF1bHQiLCJ0b3RhbE1vbmV5IiwiZm9yRWFjaCIsInBheVByaWNlIiwiY291bnQiLCJtZXRob2RzIiwiYmluZElucHV0UmVtYXJrIiwiZSIsImRldGFpbCIsInZhbHVlIiwiY3JlYXRlT3JkZXIiLCJvdXRUcmFkZU5vIiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsInBhcmFtcyIsIm1hcCIsInByb2R1Y3QiLCJfaWQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5Iiwiam9pbiIsInNsaWNlIiwic3RhdHVzIiwibW9iaWxlIiwidHJpbSIsIm1jaElkIiwiZXhwcmVzc01vbmV5IiwidG90YWxGZWUiLCJhZGQiLCJ0aGVuIiwicmVzIiwiaWQiLCJzZWxlY3RTaGlwaW5nQWRkcmVzcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRTaGlwcGluZ0FkZHJlc3NMaXN0IiwibGlzdCIsIiRhcHBseSIsImNhdGNoIiwiZ2V0UHJvZHVjdHNCeUlkcyIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJwIiwiSlNPTiIsInBhcnNlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkMsWTs7Ozs7Ozs7Ozs7Ozs7c01BRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsSSxHQUFPO0FBQ0pDLHNC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ZmlybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBsaXN0QnlJZHMgfSBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3QnXG4gICAgaW1wb3J0IHsgcmVtb3ZlQnlQaWRzIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xuICAgIGltcG9ydCB7IGxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL3NoaXBwaW5nQWRkcmVzcydcbiAgICBpbXBvcnQgKiBhcyBvcmRlciBmcm9tICcuLi9zZXJ2aWNlL29yZGVyJztcbiAgICBpbXBvcnQgbXVsdGlwbHkgZnJvbSAnLi4vZnVuY3Rpb24vbXVsdGlwbHknO1xuICAgIGltcG9ydCBwbHVzIGZyb20gJy4uL2Z1bmN0aW9uL3BsdXMnO1xuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbiAgICBpbXBvcnQgY3JlYXRlT3JkZXJOdW1iZXIgZnJvbSAnLi4vZnVuY3Rpb24vY3JlYXRlT3JkZXJOdW1iZXInO1xuICAgIGltcG9ydCBwdXJjaGFzZSBmcm9tICcuLi9mdW5jdGlvbi9wdXJjaGFzZSc7XG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJDb25maXJtICBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIFxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56Gu6K6k5a6a5Y2VJ1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgcHJvZHVjdHM6IG51bGwsXG4gICAgICAgICAgIHJlbWFyazogJycsXG4gICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc0xpc3Q6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICAvLyDpu5jorqTmlLbotKflnLDlnLDlnYBcbiAgICAgICAgICAgIGRlZmF1bHRTaGlwcGluZ0FkZHJlc3M6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBzaGlwcGluZ0FkZHJlc3NMaXN0ID0gdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0O1xuICAgICAgICAgICAgICAgIGlmIChzaGlwcGluZ0FkZHJlc3NMaXN0ICYmIHNoaXBwaW5nQWRkcmVzc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWPquacieS4gOS4quaUtui0p+WcsOWdgO+8jOS4jeeuoeaYr+S4jeaYr+m7mOiupOeahO+8jOWwseW9k+m7mOiupOeahOS9v+eUqFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHBpbmdBZGRyZXNzTGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc2hpcHBpbmdBZGRyZXNzTGlzdFswXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc0xpc3Quc29tZSgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG90YWxNb25leSAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RzID0gdGhpcy5wcm9kdWN0cyB8fCBbXTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcGx1cyhtdWx0aXBseShpdGVtLnBheVByaWNlLCBpdGVtLmNvdW50KSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5aGr5YaZ5aSH5rOo5L+h5oGvIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBiaW5kSW5wdXRSZW1hcms6IChlKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDliJvlu7rorqLljZUgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNyZWF0ZU9yZGVyOiAoKT0+IHtcblxuICAgICAgICAgICAgICAgIHZhciBvdXRUcmFkZU5vID0gY3JlYXRlT3JkZXJOdW1iZXIoKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZWZhdWx0U2hpcHBpbmdBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+Whq+WGmeaUtui0p+WcsOWdgCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RzID0gdGhpcy5wcm9kdWN0cztcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGl0ZW0uY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogdGhpcy5kZWZhdWx0U2hpcHBpbmdBZGRyZXNzLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnRNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuam9pbignLCcpXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCA1MCksXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICByZW1hcms6IHRoaXMucmVtYXJrLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgbWNoSWQ6IGNvbmZpZy5tY2hJZCxcbiAgICAgICAgICAgICAgICAgICAgb3V0VHJhZGVObzogb3V0VHJhZGVObyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc01vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEZlZTogbXVsdGlwbHkodGhpcy50b3RhbE1vbmV5LCAxMDApXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIG9yZGVyLmFkZChwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5pZCA9IGRhdGEuX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5LiL5Y2V5ZCO77yM5oqK6LSt54mp6L2m55qE5Lit5ZWG5ZOB5Yig6Zmk5o6JXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVCeVBpZHMocHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5faWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDpgInmi6nphY3pgIHlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdFNoaXBpbmdBZGRyZXNzICgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICB1cmw6ICdzaGlwcGluZ0FkZHJlc3MnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluaUtui0p+WcsOWdgOWIl+ihqFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRTaGlwcGluZ0FkZHJlc3NMaXN0OiAoKT0+IHtcbiAgICAgICAgICAgICAgICBsaXN0KClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSByZXMuZGF0YS5saXN0OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOagueaNruS6p+WTgWlkc+iOt+WPluWVhuWTgeS/oeaBryBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0UHJvZHVjdHNCeUlkczogKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBsaXN0QnlJZHMoe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzLmRhdGEubGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHZhciBwcm9kdWN0cyA9IHAucHJvZHVjdHM7XG4gICAgICAgICAgICBwcm9kdWN0cyA9IEpTT04ucGFyc2UocHJvZHVjdHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDnm7TmjqXotK3kubDkuqflk4EgXG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0UHJvZHVjdHNCeUlkcyhwcm9kdWN0cyk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=