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

var _currency = require('./../function/currency.js');

var _currency2 = _interopRequireDefault(_currency);

var _config3 = require('./../config.js');

var _config4 = _interopRequireDefault(_config3);

var _indexBy = require('./../function/indexBy.js');

var _indexBy2 = _interopRequireDefault(_indexBy);

var _createOrderNumber = require('./../function/createOrderNumber.js');

var _createOrderNumber2 = _interopRequireDefault(_createOrderNumber);

var _purchase = require('./../function/purchase.js');

var _purchase2 = _interopRequireDefault(_purchase);

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
             * 获取支付状态
             */
            getStatusStr: function getStatusStr(status) {
                var option = (0, _indexBy2.default)(_config2.default.ORDER_STATUS, 'id')[status];
                var result = '';
                if (option) {
                    result = option.name;
                }
                return result;
            },

            /**
             * 付款 
             */
            pay: function pay(item) {
                var params = {
                    products: item.products.map(function (item) {
                        return {
                            product: item.product._id,
                            count: item.count
                        };
                    }),
                    id: item._id,
                    shippingAddress: item.shippingAddress._id,
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
                    totalFee: (0, _multiply2.default)(item.totalFee, 100)
                };
                (0, _purchase2.default)(params);
            },

            /**
             * 获取收货地址列表
             */
            getOrderList: function getOrderList() {
                (0, _order.list)().then(function (res) {
                    var data = res.data;
                    data.forEach(function (item) {
                        item.statusStr = _this.methods.getStatusStr(item.status);
                        item.payStr = (0, _currency2.default)((0, _divide2.default)(item.totalFee, 100));
                    });
                    _this.list = data;
                    _this.$apply();
                }).catch(function () {
                    _this.list = [];
                    _this.$apply();
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Order, [{
        key: 'onShow',
        value: function onShow() {
            this.methods.getOrderList();
        }
    }]);

    return Order;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Order , 'pages/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsImdldFN0YXR1c1N0ciIsInN0YXR1cyIsIm9wdGlvbiIsIk9SREVSX1NUQVRVUyIsInJlc3VsdCIsIm5hbWUiLCJwYXkiLCJpdGVtIiwicGFyYW1zIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiX2lkIiwiY291bnQiLCJpZCIsInNoaXBwaW5nQWRkcmVzcyIsImRpc2NvdW50TW9uZXkiLCJ0aXRsZSIsImpvaW4iLCJzbGljZSIsIm1vYmlsZSIsInJlbWFyayIsIm1jaElkIiwib3V0VHJhZGVObyIsImV4cHJlc3NNb25leSIsInRvdGFsRmVlIiwiZ2V0T3JkZXJMaXN0IiwidGhlbiIsInJlcyIsImZvckVhY2giLCJzdGF0dXNTdHIiLCJwYXlTdHIiLCIkYXBwbHkiLCJjYXRjaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQVFUQyxJLEdBQU87QUFDSEMsa0JBQU07QUFESCxTLFFBSVBDLE8sR0FBVTtBQUNOOzs7QUFHQUMsd0JBSk0sd0JBSVFDLE1BSlIsRUFJZ0I7QUFDbEIsb0JBQUlDLFNBQVMsdUJBQVEsaUJBQVdDLFlBQW5CLEVBQWlDLElBQWpDLEVBQXVDRixNQUF2QyxDQUFiO0FBQ0Esb0JBQUlHLFNBQVMsRUFBYjtBQUNBLG9CQUFJRixNQUFKLEVBQVk7QUFDUkUsNkJBQVNGLE9BQU9HLElBQWhCO0FBQ0g7QUFDRCx1QkFBT0QsTUFBUDtBQUNILGFBWEs7O0FBWU47OztBQUdBRSxlQWZNLGVBZURDLElBZkMsRUFlSztBQUNQLG9CQUFJQyxTQUFTO0FBQ1RDLDhCQUFVRixLQUFLRSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0gsSUFBRCxFQUFTO0FBQ2pDLCtCQUFPO0FBQ0hJLHFDQUFTSixLQUFLSSxPQUFMLENBQWFDLEdBRG5CO0FBRUhDLG1DQUFPTixLQUFLTTtBQUZULHlCQUFQO0FBSUgscUJBTFMsQ0FERDtBQU9UQyx3QkFBSVAsS0FBS0ssR0FQQTtBQVFURyxxQ0FBaUJSLEtBQUtRLGVBQUwsQ0FBcUJILEdBUjdCO0FBU1RJLG1DQUFlLENBVE47QUFVVEMsMkJBQU9WLEtBQUtFLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDSCxJQUFELEVBQVM7QUFDOUIsK0JBQU9BLEtBQUtJLE9BQUwsQ0FBYU0sS0FBcEI7QUFDSCxxQkFGTSxFQUVKQyxJQUZJLENBRUMsR0FGRCxFQUVNQyxLQUZOLENBRVksQ0FGWixFQUVlLEVBRmYsQ0FWRTtBQWFUbEIsNEJBQVEsQ0FiQztBQWNUbUIsNEJBQVEsaUJBQU9BLE1BZE47QUFlVEMsNEJBQVFkLEtBQUtjLE1BZko7QUFnQlRDLDJCQUFPLGlCQUFPQSxLQWhCTDtBQWlCVEMsZ0NBQVksa0NBakJIO0FBa0JUQyxrQ0FBYyxDQWxCTDtBQW1CVEMsOEJBQVUsd0JBQVNsQixLQUFLa0IsUUFBZCxFQUF3QixHQUF4QjtBQW5CRCxpQkFBYjtBQXFCQSx3Q0FBU2pCLE1BQVQ7QUFDSCxhQXRDSzs7QUF1Q047OztBQUdBa0IsMEJBQWMsd0JBQUs7QUFDZixtQ0FDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLHdCQUFJL0IsT0FBTytCLElBQUkvQixJQUFmO0FBQ0FBLHlCQUFLZ0MsT0FBTCxDQUFhLFVBQUN0QixJQUFELEVBQVM7QUFDbEJBLDZCQUFLdUIsU0FBTCxHQUFpQixNQUFLL0IsT0FBTCxDQUFhQyxZQUFiLENBQTBCTyxLQUFLTixNQUEvQixDQUFqQjtBQUNBTSw2QkFBS3dCLE1BQUwsR0FBYyx3QkFBUyxzQkFBT3hCLEtBQUtrQixRQUFaLEVBQXNCLEdBQXRCLENBQVQsQ0FBZDtBQUNILHFCQUhEO0FBSUEsMEJBQUszQixJQUFMLEdBQVlELElBQVo7QUFDQSwwQkFBS21DLE1BQUw7QUFDSCxpQkFUTCxFQVVLQyxLQVZMLENBVVcsWUFBSztBQUNSLDBCQUFLbkMsSUFBTCxHQUFZLEVBQVo7QUFDQSwwQkFBS2tDLE1BQUw7QUFDSCxpQkFiTDtBQWNIO0FBekRLLFM7Ozs7O2lDQVJBO0FBQ04saUJBQUtqQyxPQUFMLENBQWEyQixZQUFiO0FBQ0g7Ozs7RUFSOEIsZUFBS1EsSTs7a0JBQW5CeEMsSyIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vc2VydmljZS9vcmRlcidcbiAgICBpbXBvcnQgcGFnZUNvbmZpZyAgZnJvbSAnLi9jb25maWcnXG4gICAgaW1wb3J0IG11bHRpcGx5IGZyb20gJy4uL2Z1bmN0aW9uL211bHRpcGx5J1xuICAgIGltcG9ydCBkaXZpZGUgZnJvbSAnLi4vZnVuY3Rpb24vZGl2aWRlJ1xuICAgIGltcG9ydCBjdXJyZW5jeSBmcm9tICcuLi9mdW5jdGlvbi9jdXJyZW5jeSdcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG4gICAgaW1wb3J0IGluZGV4QnkgZnJvbSAnLi4vZnVuY3Rpb24vaW5kZXhCeSdcbiAgICBpbXBvcnQgY3JlYXRlT3JkZXJOdW1iZXIgZnJvbSAnLi4vZnVuY3Rpb24vY3JlYXRlT3JkZXJOdW1iZXInXG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlSdcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0T3JkZXJMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgbGlzdDogbnVsbCBcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluaUr+S7mOeKtuaAgVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRTdGF0dXNTdHIgKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBpbmRleEJ5KHBhZ2VDb25maWcuT1JERVJfU1RBVFVTLCAnaWQnKVtzdGF0dXNdO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9wdGlvbi5uYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5LuY5qy+IFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwYXkgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogaXRlbS5wcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBpdGVtLnByb2R1Y3QuX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogaXRlbS5zaGlwcGluZ0FkZHJlc3MuX2lkLFxuICAgICAgICAgICAgICAgICAgICBkaXNjb3VudE1vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5wcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvZHVjdC50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcsJykuc2xpY2UoMCwgNTApLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrOiBpdGVtLnJlbWFyayxcbiAgICAgICAgICAgICAgICAgICAgbWNoSWQ6IGNvbmZpZy5tY2hJZCxcbiAgICAgICAgICAgICAgICAgICAgb3V0VHJhZGVObzogY3JlYXRlT3JkZXJOdW1iZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc01vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEZlZTogbXVsdGlwbHkoaXRlbS50b3RhbEZlZSwgMTAwKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcHVyY2hhc2UocGFyYW1zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluaUtui0p+WcsOWdgOWIl+ihqFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRPcmRlckxpc3Q6ICgpPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhdHVzU3RyID0gdGhpcy5tZXRob2RzLmdldFN0YXR1c1N0cihpdGVtLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXlTdHIgPSBjdXJyZW5jeShkaXZpZGUoaXRlbS50b3RhbEZlZSwgMTAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IGRhdGE7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICB9XG4iXX0=