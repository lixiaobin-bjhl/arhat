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

var _getOrderNumber = require('./../function/getOrderNumber.js');

var _getOrderNumber2 = _interopRequireDefault(_getOrderNumber);

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

                var outTradeNo = (0, _getOrderNumber2.default)();

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
                    // title: this.products.map((item)=> {
                    //     return item.title
                    // }).join(','),
                    title: '你妹啊',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJvcmRlciIsIk9yZGVyQ29uZmlybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicHJvZHVjdHMiLCJyZW1hcmsiLCJzaGlwcGluZ0FkZHJlc3NMaXN0IiwiY29tcHV0ZWQiLCJkZWZhdWx0U2hpcHBpbmdBZGRyZXNzIiwicmVzdWx0IiwibGVuZ3RoIiwic29tZSIsIml0ZW0iLCJpc0RlZmF1bHQiLCJ0b3RhbE1vbmV5IiwiZm9yRWFjaCIsInBheVByaWNlIiwibWV0aG9kcyIsImJpbmRJbnB1dFJlbWFyayIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNyZWF0ZU9yZGVyIiwib3V0VHJhZGVObyIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJwYXJhbXMiLCJtYXAiLCJwcm9kdWN0IiwiX2lkIiwiY291bnQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5Iiwic3RhdHVzIiwibW9iaWxlIiwidHJpbSIsIm1jaElkIiwiZXhwcmVzc01vbmV5IiwidG90YWxGZWUiLCJhZGQiLCJ0aGVuIiwicmVzIiwic2VsZWN0U2hpcGluZ0FkZHJlc3MiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCIsImxpc3QiLCIkYXBwbHkiLCJjYXRjaCIsImdldFByb2R1Y3RzQnlJZHMiLCJpZHMiLCJzaG93TG9hZGluZyIsImlkIiwiaGlkZUxvYWRpbmciLCJwIiwicGlkcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLEs7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJDLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVRDLEksR0FBTztBQUNKQyxzQkFBVSxJQUROO0FBRUpDLG9CQUFRLEVB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QUQsRUFBUztBQUN2QjNCLG1CQUFHNEIsV0FBSDtBQUNBLHdDQUFVO0FBQ05oRCw4QkFBVSxDQUNOO0FBQ0kyQiwrQkFBTyxDQURYO0FBRUlzQiw0QkFBSUY7QUFGUixxQkFETTtBQURKLGlCQUFWLEVBUUtWLElBUkwsQ0FRVSxVQUFDQyxHQUFELEVBQVE7QUFDVmxCLHVCQUFHOEIsV0FBSDtBQUNBLDBCQUFLbEQsUUFBTCxHQUFnQnNDLElBQUl2QyxJQUFKLENBQVM0QyxJQUF6QjtBQUNBLDBCQUFLQyxNQUFMO0FBQ0gsaUJBWkwsRUFhS0MsS0FiTCxDQWFXLFlBQUs7QUFDUiwwQkFBSzdDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSwwQkFBSzRDLE1BQUw7QUFDQXhCLHVCQUFHOEIsV0FBSDtBQUNILGlCQWpCTDtBQWtCSDtBQWpHSyxTOzs7OztpQ0FsQ0E7QUFDTixpQkFBS3JDLE9BQUwsQ0FBYTZCLHNCQUFiO0FBQ0g7OzsrQkFvSU9TLEMsRUFBRztBQUNQLGdCQUFJQyxPQUFPRCxFQUFFQyxJQUFiO0FBQ0E7QUFDQSxpQkFBS3ZDLE9BQUwsQ0FBYWlDLGdCQUFiLENBQThCTSxJQUE5QjtBQUNIOzs7O0VBdEpzQyxlQUFLQyxJOztrQkFBM0J6RCxZIiwiZmlsZSI6Im9yZGVyQ29uZmlybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBsaXN0QnlJZHMgfSBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3QnXG4gICAgaW1wb3J0IHsgbGlzdCB9IGZyb20gJy4uL3NlcnZpY2Uvc2hpcHBpbmdBZGRyZXNzJ1xuICAgIGltcG9ydCAqIGFzIG9yZGVyIGZyb20gJy4uL3NlcnZpY2Uvb3JkZXInO1xuICAgIGltcG9ydCBtdWx0aXBseSBmcm9tICcuLi9mdW5jdGlvbi9tdWx0aXBseSc7XG4gICAgaW1wb3J0IHBsdXMgZnJvbSAnLi4vZnVuY3Rpb24vcGx1cyc7XG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuICAgIGltcG9ydCBnZXRPcmRlck51bWJlciBmcm9tICcuLi9mdW5jdGlvbi9nZXRPcmRlck51bWJlcic7XG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJztcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlckNvbmZpcm0gIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnoa7orqTlrprljZUnXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICBwcm9kdWN0czogbnVsbCxcbiAgICAgICAgICAgcmVtYXJrOiAnJyxcbiAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRTaGlwcGluZ0FkZHJlc3NMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIC8vIOm7mOiupOaUtui0p+WcsOWcsOWdgFxuICAgICAgICAgICAgZGVmYXVsdFNoaXBwaW5nQWRkcmVzczogKCk9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHNoaXBwaW5nQWRkcmVzc0xpc3QgPSB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBwaW5nQWRkcmVzc0xpc3QgJiYgc2hpcHBpbmdBZGRyZXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5Y+q5pyJ5LiA5Liq5pS26LSn5Zyw5Z2A77yM5LiN566h5piv5LiN5piv6buY6K6k55qE77yM5bCx5b2T6buY6K6k55qE5L2/55SoXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwcGluZ0FkZHJlc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBzaGlwcGluZ0FkZHJlc3NMaXN0WzBdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdC5zb21lKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3RhbE1vbmV5ICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzIHx8IFtdO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzLmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwbHVzKGl0ZW0ucGF5UHJpY2UsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWhq+WGmeWkh+azqOS/oeaBryBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgYmluZElucHV0UmVtYXJrOiAoZSk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1hcmsgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5Yib5bu66K6i5Y2VIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjcmVhdGVPcmRlcjogKCk9PiB7XG5cbiAgICAgICAgICAgICAgICB2YXIgb3V0VHJhZGVObyA9IGdldE9yZGVyTnVtYmVyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7floavlhpnmlLbotKflnLDlnYAnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMucHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGl0ZW0uY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogdGhpcy5kZWZhdWx0U2hpcHBpbmdBZGRyZXNzLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnRNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGU6IHRoaXMucHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBpdGVtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pLmpvaW4oJywnKSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkvaDlprnllYonLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrOiB0aGlzLnJlbWFyay50cmltKCksXG4gICAgICAgICAgICAgICAgICAgIG1jaElkOiBjb25maWcubWNoSWQsXG4gICAgICAgICAgICAgICAgICAgIG91dFRyYWRlTm86IG91dFRyYWRlTm8sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3NNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxGZWU6IG11bHRpcGx5KHRoaXMudG90YWxNb25leSwgMTAwKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBvcmRlci5hZGQocGFyYW1zKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cmNoYXNlKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDpgInmi6nphY3pgIHlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdFNoaXBpbmdBZGRyZXNzICgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICB1cmw6ICdzaGlwcGluZ0FkZHJlc3MnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluaUtui0p+WcsOWdgOWIl+ihqFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRTaGlwcGluZ0FkZHJlc3NMaXN0OiAoKT0+IHtcbiAgICAgICAgICAgICAgICBsaXN0KClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSByZXMuZGF0YS5saXN0OyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOagueaNruS6p+WTgWlkc+iOt+WPluWVhuWTgeS/oeaBryBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0UHJvZHVjdHNCeUlkczogKGlkcykgPT4ge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SWRzKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzLmRhdGEubGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHZhciBwaWRzID0gcC5waWRzO1xuICAgICAgICAgICAgLy8g55u05o6l6LSt5Lmw5Lqn5ZOBIFxuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFByb2R1Y3RzQnlJZHMocGlkcyk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=