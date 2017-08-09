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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJvcmRlciIsIk9yZGVyQ29uZmlybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicHJvZHVjdHMiLCJtZXNzYWdlIiwiZXhwcmVzc01vbmV5Iiwic2hpcHBpbmdBZGRyZXNzTGlzdCIsImNvbXB1dGVkIiwiZGVmYXVsdFNoaXBwaW5nQWRkcmVzcyIsInJlc3VsdCIsImxlbmd0aCIsInNvbWUiLCJpdGVtIiwiaXNEZWZhdWx0IiwidG90YWxNb25leSIsImdldFRvdGFsTW9uZXkiLCJjb21wb25lbnRzIiwiY29weXJpZ2h0IiwibWV0aG9kcyIsInJlZGlyZWN0IiwidXJsIiwid3giLCJyZWRpcmVjdFRvIiwiYmluZElucHV0TWVzc2FnZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNyZWF0ZU9yZGVyIiwib3V0VHJhZGVObyIsInNob3dUb2FzdCIsInRpdGxlIiwicGFyYW1zIiwibWFwIiwicHJvZHVjdCIsIl9pZCIsImNvdW50Iiwic2hpcHBpbmdBZGRyZXNzIiwiZGlzY291bnRNb25leSIsImpvaW4iLCJzbGljZSIsInN0YXR1cyIsIm1vYmlsZSIsInRyaW0iLCJtY2hJZCIsInRvdGFsRmVlIiwiYWRkIiwidGhlbiIsInJlcyIsImlkIiwic2VsZWN0U2hpcGluZ0FkZHJlc3MiLCJuYXZpZ2F0ZVRvIiwiZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCIsIiRhcHBseSIsImNhdGNoIiwiZ2V0UHJvZHVjdHNCeUlkcyIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJmb3JFYWNoIiwicGF5UHJpY2UiLCJwIiwiSlNPTiIsInBhcnNlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7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VDtBQUNILGFBRkQ7QUFHQSxtQkFBT0EsTUFBUDtBQUNILFM7Ozs7O2lDQXpKUztBQUNOLGlCQUFLMEMsc0JBQUw7QUFDSDs7QUEwR0Q7Ozs7O0FBZUE7Ozs7O0FBb0JBOzs7Ozs7K0JBWVFRLEMsRUFBRztBQUNQLGdCQUFJeEQsV0FBV3dELEVBQUV4RCxRQUFqQjtBQUNBQSx1QkFBV3lELEtBQUtDLEtBQUwsQ0FBVzFELFFBQVgsQ0FBWDs7QUFFQTtBQUNBLGlCQUFLbUQsZ0JBQUwsQ0FBc0JuRCxRQUF0QjtBQUNIOzs7O0VBOUtzQyxlQUFLMkQsSTs7a0JBQTNCL0QsWSIsImZpbGUiOiJvcmRlckNvbmZpcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgbGlzdEJ5SWRzIH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0J1xuICAgIGltcG9ydCB7IHJlbW92ZUJ5UGlkcyB9IGZyb20gJy4uL3NlcnZpY2UvY2FyZCdcbiAgICBpbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vc2VydmljZS9zaGlwcGluZ0FkZHJlc3MnXG4gICAgaW1wb3J0ICogYXMgb3JkZXIgZnJvbSAnLi4vc2VydmljZS9vcmRlcidcbiAgICBpbXBvcnQgbXVsdGlwbHkgZnJvbSAnLi4vZnVuY3Rpb24vbXVsdGlwbHknXG4gICAgaW1wb3J0IHBsdXMgZnJvbSAnLi4vZnVuY3Rpb24vcGx1cydcbiAgICBpbXBvcnQgY3VycmVuY3kgZnJvbSAnLi4vZnVuY3Rpb24vY3VycmVuY3knXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG4gICAgaW1wb3J0IGFkYXB0UHJvZHVjdExpc3QgZnJvbSAnLi4vZnVuY3Rpb24vYWRhcHRQcm9kdWN0TGlzdCdcbiAgICBpbXBvcnQgY3JlYXRlT3JkZXJOdW1iZXIgZnJvbSAnLi4vZnVuY3Rpb24vY3JlYXRlT3JkZXJOdW1iZXInXG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJ1xuICAgIGltcG9ydCBjb3B5cmlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJDb25maXJtICBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIFxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56Gu6K6k5a6a5Y2VJ1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgcHJvZHVjdHM6IG51bGwsXG4gICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICBleHByZXNzTW9uZXk6IGN1cnJlbmN5KDApLFxuICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NMaXN0OiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRTaGlwcGluZ0FkZHJlc3NMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIC8vIOm7mOiupOaUtui0p+WcsOWcsOWdgFxuICAgICAgICAgICAgZGVmYXVsdFNoaXBwaW5nQWRkcmVzczogKCk9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHNoaXBwaW5nQWRkcmVzc0xpc3QgPSB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBwaW5nQWRkcmVzc0xpc3QgJiYgc2hpcHBpbmdBZGRyZXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5Y+q5pyJ5LiA5Liq5pS26LSn5Zyw5Z2A77yM5LiN566h5piv5LiN5piv6buY6K6k55qE77yM5bCx5b2T6buY6K6k55qE5L2/55SoXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwcGluZ0FkZHJlc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzaGlwcGluZ0FkZHJlc3NMaXN0WzBdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdC5zb21lKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3RhbE1vbmV5ICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kodGhpcy5nZXRUb3RhbE1vbmV5KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNvcHlyaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWhq+WGmeWkh+azqOS/oeaBryBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYmluZElucHV0TWVzc2FnZTogKGUpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDliJvlu7rorqLljZUgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNyZWF0ZU9yZGVyOiAoKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgb3V0VHJhZGVObyA9IGNyZWF0ZU9yZGVyTnVtYmVyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7floavlhpnmlLbotKflnLDlnYAnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0cyA9IHRoaXMucHJvZHVjdHM7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHRoaXMuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcy5faWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50TW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywnKVxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgNTApLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgbWNoSWQ6IGNvbmZpZy5tY2hJZCxcbiAgICAgICAgICAgICAgICAgICAgb3V0VHJhZGVObzogb3V0VHJhZGVObyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc01vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEZlZTogbXVsdGlwbHkodGhpcy5nZXRUb3RhbE1vbmV5KCksIDEwMClcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgb3JkZXIuYWRkKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmlkID0gZGF0YS5faWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDkuIvljZXlkI7vvIzmiorotK3nianovabnmoTkuK3llYblk4HliKDpmaTmjolcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUJ5UGlkcyhwcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2UocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmAieaLqemFjemAgeWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0U2hpcGluZ0FkZHJlc3MgKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgIHVybDogJ3NoaXBwaW5nQWRkcmVzcydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W5pS26LSn5Zyw5Z2A5YiX6KGoXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTaGlwcGluZ0FkZHJlc3NMaXN0ID0gKCk9PiB7XG4gICAgICAgICAgICBsaXN0KClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0ID0gcmVzLmRhdGE7IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmoLnmja7kuqflk4FpZHPojrflj5bllYblk4Hkv6Hmga8gXG4gICAgICAgICAqL1xuICAgICAgICBnZXRQcm9kdWN0c0J5SWRzID0gKHByb2R1Y3RzKSA9PiB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xuICAgICAgICAgICAgbGlzdEJ5SWRzKHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBhZGFwdFByb2R1Y3RMaXN0KHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPluS6p+WTgeaAu+S7t1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0VG90YWxNb25leSA9ICAoKT0+IHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgdmFyIHByb2R1Y3RzID0gdGhpcy5wcm9kdWN0cyB8fCBbXTtcbiAgICAgICAgICAgIHByb2R1Y3RzLmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBsdXMobXVsdGlwbHkoaXRlbS5wYXlQcmljZSwgaXRlbS5jb3VudCksIHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHZhciBwcm9kdWN0cyA9IHAucHJvZHVjdHM7XG4gICAgICAgICAgICBwcm9kdWN0cyA9IEpTT04ucGFyc2UocHJvZHVjdHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDojrflj5botK3kubDkuqflk4HnmoTkv6Hmga8gXG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RzQnlJZHMocHJvZHVjdHMpO1xuICAgICAgICB9XG4gICAgfVxuIl19