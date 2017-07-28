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
                    var data = res.data;
                    params.id = data._id;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJvcmRlciIsIk9yZGVyQ29uZmlybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicHJvZHVjdHMiLCJyZW1hcmsiLCJzaGlwcGluZ0FkZHJlc3NMaXN0IiwiY29tcHV0ZWQiLCJkZWZhdWx0U2hpcHBpbmdBZGRyZXNzIiwicmVzdWx0IiwibGVuZ3RoIiwic29tZSIsIml0ZW0iLCJpc0RlZmF1bHQiLCJ0b3RhbE1vbmV5IiwiZm9yRWFjaCIsInBheVByaWNlIiwibWV0aG9kcyIsImJpbmRJbnB1dFJlbWFyayIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNyZWF0ZU9yZGVyIiwib3V0VHJhZGVObyIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJwYXJhbXMiLCJtYXAiLCJwcm9kdWN0IiwiX2lkIiwiY291bnQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5Iiwiam9pbiIsInNsaWNlIiwic3RhdHVzIiwibW9iaWxlIiwidHJpbSIsIm1jaElkIiwiZXhwcmVzc01vbmV5IiwidG90YWxGZWUiLCJhZGQiLCJ0aGVuIiwicmVzIiwiaWQiLCJzZWxlY3RTaGlwaW5nQWRkcmVzcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRTaGlwcGluZ0FkZHJlc3NMaXN0IiwibGlzdCIsIiRhcHBseSIsImNhdGNoIiwiZ2V0UHJvZHVjdHNCeUlkcyIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJwIiwiSlNPTiIsInBhcnNlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7SUFBWUEsSzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkMsWTs7Ozs7Ozs7Ozs7Ozs7c01BRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsSSxHQUFPO0FBQ0pDLHNCQUFVLElB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LEVBQVE7QUFDViwwQkFBS3RDLG1CQUFMLEdBQTJCc0MsSUFBSXpDLElBQUosQ0FBUytDLElBQXBDO0FBQ0EsMEJBQUtDLE1BQUw7QUFDSCxpQkFKTCxFQUtLQyxLQUxMLENBS1csWUFBSztBQUNSLDBCQUFLOUMsbUJBQUwsR0FBMkIsRUFBM0I7QUFDQSwwQkFBSzZDLE1BQUw7QUFDSCxpQkFSTDtBQVNILGFBekVLOztBQTJFTjs7O0FBR0FFLDhCQUFrQiwwQkFBQ2pELFFBQUQsRUFBYztBQUM1Qm9CLG1CQUFHOEIsV0FBSDtBQUNBLHdDQUFVO0FBQ05sRCw4QkFBVUE7QUFESixpQkFBVixFQUdLdUMsSUFITCxDQUdVLFVBQUNDLEdBQUQsRUFBUTtBQUNWcEIsdUJBQUcrQixXQUFIO0FBQ0EsMEJBQUtuRCxRQUFMLEdBQWdCd0MsSUFBSXpDLElBQUosQ0FBUytDLElBQXpCO0FBQ0EsMEJBQUtDLE1BQUw7QUFDSCxpQkFQTCxFQVFLQyxLQVJMLENBUVcsWUFBSztBQUNSLDBCQUFLaEQsUUFBTCxHQUFnQixFQUFoQjtBQUNBLDBCQUFLK0MsTUFBTDtBQUNBM0IsdUJBQUcrQixXQUFIO0FBQ0gsaUJBWkw7QUFhSDtBQTdGSyxTOzs7OztpQ0FsQ0E7QUFDTixpQkFBS3RDLE9BQUwsQ0FBYWdDLHNCQUFiO0FBQ0g7OzsrQkFnSU9PLEMsRUFBRztBQUNQLGdCQUFJcEQsV0FBV29ELEVBQUVwRCxRQUFqQjtBQUNBQSx1QkFBV3FELEtBQUtDLEtBQUwsQ0FBV3RELFFBQVgsQ0FBWDs7QUFFQTtBQUNBLGlCQUFLYSxPQUFMLENBQWFvQyxnQkFBYixDQUE4QmpELFFBQTlCO0FBQ0g7Ozs7RUFwSnNDLGVBQUt1RCxJOztrQkFBM0IzRCxZIiwiZmlsZSI6Im9yZGVyQ29uZmlybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBsaXN0QnlJZHMgfSBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3QnXG4gICAgaW1wb3J0IHsgbGlzdCB9IGZyb20gJy4uL3NlcnZpY2Uvc2hpcHBpbmdBZGRyZXNzJ1xuICAgIGltcG9ydCAqIGFzIG9yZGVyIGZyb20gJy4uL3NlcnZpY2Uvb3JkZXInO1xuICAgIGltcG9ydCBtdWx0aXBseSBmcm9tICcuLi9mdW5jdGlvbi9tdWx0aXBseSc7XG4gICAgaW1wb3J0IHBsdXMgZnJvbSAnLi4vZnVuY3Rpb24vcGx1cyc7XG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuICAgIGltcG9ydCBjcmVhdGVPcmRlck51bWJlciBmcm9tICcuLi9mdW5jdGlvbi9jcmVhdGVPcmRlck51bWJlcic7XG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJztcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckNvbmZpcm0gIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnoa7orqTlrprljZUnXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICBwcm9kdWN0czogbnVsbCxcbiAgICAgICAgICAgcmVtYXJrOiAnJyxcbiAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRTaGlwcGluZ0FkZHJlc3NMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIC8vIOm7mOiupOaUtui0p+WcsOWcsOWdgFxuICAgICAgICAgICAgZGVmYXVsdFNoaXBwaW5nQWRkcmVzczogKCk9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHNoaXBwaW5nQWRkcmVzc0xpc3QgPSB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBwaW5nQWRkcmVzc0xpc3QgJiYgc2hpcHBpbmdBZGRyZXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5Y+q5pyJ5LiA5Liq5pS26LSn5Zyw5Z2A77yM5LiN566h5piv5LiN5piv6buY6K6k55qE77yM5bCx5b2T6buY6K6k55qE5L2/55SoXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwcGluZ0FkZHJlc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzaGlwcGluZ0FkZHJlc3NMaXN0WzBdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdC5zb21lKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3RhbE1vbmV5ICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzIHx8IFtdO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzLmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwbHVzKGl0ZW0ucGF5UHJpY2UsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWhq+WGmeWkh+azqOS/oeaBryBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYmluZElucHV0UmVtYXJrOiAoZSk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1hcmsgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5Yib5bu66K6i5Y2VIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjcmVhdGVPcmRlcjogKCk9PiB7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3V0VHJhZGVObyA9IGNyZWF0ZU9yZGVyTnVtYmVyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7floavlhpnmlLbotKflnLDlnYAnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMucHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGl0ZW0uY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogdGhpcy5kZWZhdWx0U2hpcHBpbmdBZGRyZXNzLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnRNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMucHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJywnKS5zbGljZSgwLCA1MCksXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICByZW1hcms6IHRoaXMucmVtYXJrLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgbWNoSWQ6IGNvbmZpZy5tY2hJZCxcbiAgICAgICAgICAgICAgICAgICAgb3V0VHJhZGVObzogb3V0VHJhZGVObyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc01vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEZlZTogbXVsdGlwbHkodGhpcy50b3RhbE1vbmV5LCAxMDApXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIG9yZGVyLmFkZChwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5pZCA9IGRhdGEuX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2UocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmAieaLqemFjemAgeWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0U2hpcGluZ0FkZHJlc3MgKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgIHVybDogJ3NoaXBwaW5nQWRkcmVzcydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6I635Y+W5pS26LSn5Zyw5Z2A5YiX6KGoXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldFNoaXBwaW5nQWRkcmVzc0xpc3Q6ICgpPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IHJlcy5kYXRhLmxpc3Q7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5qC55o2u5Lqn5ZOBaWRz6I635Y+W5ZWG5ZOB5L+h5oGvIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRQcm9kdWN0c0J5SWRzOiAocHJvZHVjdHMpID0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xuICAgICAgICAgICAgICAgIGxpc3RCeUlkcyh7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSByZXMuZGF0YS5saXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIG9uTG9hZCAocCkge1xuICAgICAgICAgICAgdmFyIHByb2R1Y3RzID0gcC5wcm9kdWN0cztcbiAgICAgICAgICAgIHByb2R1Y3RzID0gSlNPTi5wYXJzZShwcm9kdWN0cyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIOebtOaOpei0reS5sOS6p+WTgSBcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRQcm9kdWN0c0J5SWRzKHByb2R1Y3RzKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==