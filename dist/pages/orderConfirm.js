'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _product = require('./../service/product.js');

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
                    result = (0, _plus2.default)(item.payPrice, result);
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

                var params = {
                    products: _this.products.map(function (item) {
                        return {
                            product: item._id,
                            count: item.count
                        };
                    }),
                    shippingAddress: _this.defaultShippingAddress._id,
                    discountMoney: 0,
                    title: _this.products.map(function (item) {
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
            getProductsByIds: function getProductsByIds(ids) {
                wx.showLoading();
                (0, _product.listByIds)({
                    products: [{
                        count: 1,
                        id: ids
                    }]
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
            var pids = p.pids;
            // 直接购买产品 
            this.methods.getProductsByIds(pids);
        }
    }]);

    return OrderConfirm;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(OrderConfirm , 'pages/orderConfirm'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJvcmRlciIsIk9yZGVyQ29uZmlybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicHJvZHVjdHMiLCJyZW1hcmsiLCJzaGlwcGluZ0FkZHJlc3NMaXN0IiwiY29tcHV0ZWQiLCJkZWZhdWx0U2hpcHBpbmdBZGRyZXNzIiwicmVzdWx0IiwibGVuZ3RoIiwic29tZSIsIml0ZW0iLCJpc0RlZmF1bHQiLCJ0b3RhbE1vbmV5IiwiZm9yRWFjaCIsInBheVByaWNlIiwibWV0aG9kcyIsImJpbmRJbnB1dFJlbWFyayIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNyZWF0ZU9yZGVyIiwib3V0VHJhZGVObyIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJwYXJhbXMiLCJtYXAiLCJwcm9kdWN0IiwiX2lkIiwiY291bnQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5Iiwiam9pbiIsInNsaWNlIiwic3RhdHVzIiwibW9iaWxlIiwidHJpbSIsIm1jaElkIiwiZXhwcmVzc01vbmV5IiwidG90YWxGZWUiLCJhZGQiLCJ0aGVuIiwicmVzIiwic2VsZWN0U2hpcGluZ0FkZHJlc3MiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCIsImxpc3QiLCIkYXBwbHkiLCJjYXRjaCIsImdldFByb2R1Y3RzQnlJZHMiLCJpZHMiLCJzaG93TG9hZGluZyIsImlkIiwiaGlkZUxvYWRpbmciLCJwIiwicGlkcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLEs7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJDLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVRDLEksR0FBTztBQUNKQyxzQkFBVSxJQURO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TDtBQUNILGlCQUpMLEVBS0tDLEtBTEwsQ0FLVyxZQUFLO0FBQ1IsMEJBQUs3QyxtQkFBTCxHQUEyQixFQUEzQjtBQUNBLDBCQUFLNEMsTUFBTDtBQUNILGlCQVJMO0FBU0gsYUF2RUs7O0FBeUVOOzs7QUFHQUUsOEJBQWtCLDBCQUFDQyxHQUFELEVBQVM7QUFDdkI3QixtQkFBRzhCLFdBQUg7QUFDQSx3Q0FBVTtBQUNObEQsOEJBQVUsQ0FDTjtBQUNJMkIsK0JBQU8sQ0FEWDtBQUVJd0IsNEJBQUlGO0FBRlIscUJBRE07QUFESixpQkFBVixFQVFLVixJQVJMLENBUVUsVUFBQ0MsR0FBRCxFQUFRO0FBQ1ZwQix1QkFBR2dDLFdBQUg7QUFDQSwwQkFBS3BELFFBQUwsR0FBZ0J3QyxJQUFJekMsSUFBSixDQUFTOEMsSUFBekI7QUFDQSwwQkFBS0MsTUFBTDtBQUNILGlCQVpMLEVBYUtDLEtBYkwsQ0FhVyxZQUFLO0FBQ1IsMEJBQUsvQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsMEJBQUs4QyxNQUFMO0FBQ0ExQix1QkFBR2dDLFdBQUg7QUFDSCxpQkFqQkw7QUFrQkg7QUFoR0ssUzs7Ozs7aUNBbENBO0FBQ04saUJBQUt2QyxPQUFMLENBQWErQixzQkFBYjtBQUNIOzs7K0JBbUlPUyxDLEVBQUc7QUFDUCxnQkFBSUMsT0FBT0QsRUFBRUMsSUFBYjtBQUNBO0FBQ0EsaUJBQUt6QyxPQUFMLENBQWFtQyxnQkFBYixDQUE4Qk0sSUFBOUI7QUFDSDs7OztFQXJKc0MsZUFBS0MsSTs7a0JBQTNCM0QsWSIsImZpbGUiOiJvcmRlckNvbmZpcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgbGlzdEJ5SWRzIH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0J1xuICAgIGltcG9ydCB7IGxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL3NoaXBwaW5nQWRkcmVzcydcbiAgICBpbXBvcnQgKiBhcyBvcmRlciBmcm9tICcuLi9zZXJ2aWNlL29yZGVyJztcbiAgICBpbXBvcnQgbXVsdGlwbHkgZnJvbSAnLi4vZnVuY3Rpb24vbXVsdGlwbHknO1xuICAgIGltcG9ydCBwbHVzIGZyb20gJy4uL2Z1bmN0aW9uL3BsdXMnO1xuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbiAgICBpbXBvcnQgZ2V0T3JkZXJOdW1iZXIgZnJvbSAnLi4vZnVuY3Rpb24vZ2V0T3JkZXJOdW1iZXInO1xuICAgIGltcG9ydCBwdXJjaGFzZSBmcm9tICcuLi9mdW5jdGlvbi9wdXJjaGFzZSc7XG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJDb25maXJtICBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIFxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56Gu6K6k5a6a5Y2VJ1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgcHJvZHVjdHM6IG51bGwsXG4gICAgICAgICAgIHJlbWFyazogJycsXG4gICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc0xpc3Q6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICAvLyDpu5jorqTmlLbotKflnLDlnLDlnYBcbiAgICAgICAgICAgIGRlZmF1bHRTaGlwcGluZ0FkZHJlc3M6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBzaGlwcGluZ0FkZHJlc3NMaXN0ID0gdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0O1xuICAgICAgICAgICAgICAgIGlmIChzaGlwcGluZ0FkZHJlc3NMaXN0ICYmIHNoaXBwaW5nQWRkcmVzc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOWPquacieS4gOS4quaUtui0p+WcsOWdgO+8jOS4jeeuoeaYr+S4jeaYr+m7mOiupOeahO+8jOWwseW9k+m7mOiupOeahOS9v+eUqFxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHBpbmdBZGRyZXNzTGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc2hpcHBpbmdBZGRyZXNzTGlzdFswXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc0xpc3Quc29tZSgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXNEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG90YWxNb25leSAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RzID0gdGhpcy5wcm9kdWN0cyB8fCBbXTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcGx1cyhpdGVtLnBheVByaWNlLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDloavlhpnlpIfms6jkv6Hmga8gXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGJpbmRJbnB1dFJlbWFyazogKGUpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtYXJrID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWIm+W7uuiuouWNlSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY3JlYXRlT3JkZXI6ICgpPT4ge1xuXG4gICAgICAgICAgICAgICAgdmFyIG91dFRyYWRlTm8gPSBnZXRPcmRlck51bWJlcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRTaGlwcGluZ0FkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35aGr5YaZ5pS26LSn5Zyw5Z2AJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB0aGlzLnByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHRoaXMuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcy5faWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50TW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcsJykuc2xpY2UoMCwgNTApLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrOiB0aGlzLnJlbWFyay50cmltKCksXG4gICAgICAgICAgICAgICAgICAgIG1jaElkOiBjb25maWcubWNoSWQsXG4gICAgICAgICAgICAgICAgICAgIG91dFRyYWRlTm86IG91dFRyYWRlTm8sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3NNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxGZWU6IG11bHRpcGx5KHRoaXMudG90YWxNb25leSwgMTAwKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBvcmRlci5hZGQocGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDpgInmi6nphY3pgIHlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdFNoaXBpbmdBZGRyZXNzICgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICB1cmw6ICdzaGlwcGluZ0FkZHJlc3MnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluaUtui0p+WcsOWdgOWIl+ihqFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRTaGlwcGluZ0FkZHJlc3NMaXN0OiAoKT0+IHtcbiAgICAgICAgICAgICAgICBsaXN0KClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSByZXMuZGF0YS5saXN0OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOagueaNruS6p+WTgWlkc+iOt+WPluWVhuWTgeS/oeaBryBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0UHJvZHVjdHNCeUlkczogKGlkcykgPT4ge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SWRzKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzLmRhdGEubGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHZhciBwaWRzID0gcC5waWRzO1xuICAgICAgICAgICAgLy8g55u05o6l6LSt5Lmw5Lqn5ZOBIFxuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFByb2R1Y3RzQnlJZHMocGlkcyk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=