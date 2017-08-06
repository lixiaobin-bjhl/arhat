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

var _adaptProductList = require('./../function/adaptProductList.js');

var _adaptProductList2 = _interopRequireDefault(_adaptProductList);

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
                    totalFee: (0, _multiply2.default)(item.totalFee, 100)
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
            (0, _order.list)().then(function (res) {
                var data = res.data;
                data.forEach(function (item) {
                    item.statusStr = _this.getStatusStr(item.status);
                    item.products = (0, _adaptProductList2.default)(item.products);
                    item.payStr = (0, _currency2.default)((0, _divide2.default)(item.totalFee, 100));
                });
                _this.list = data;
                _this.$apply();
            }).catch(function () {
                _this.list = [];
                _this.$apply();
            });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsInBheSIsIml0ZW0iLCJwYXJhbXMiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJfaWQiLCJjb3VudCIsImlkIiwic2hpcHBpbmdBZGRyZXNzIiwiZGlzY291bnRNb25leSIsInRpdGxlIiwiam9pbiIsInNsaWNlIiwic3RhdHVzIiwibW9iaWxlIiwicmVtYXJrIiwibWNoSWQiLCJvdXRUcmFkZU5vIiwiZXhwcmVzc01vbmV5IiwidG90YWxGZWUiLCJnZXRTdGF0dXNTdHIiLCJvcHRpb24iLCJPUkRFUl9TVEFUVVMiLCJyZXN1bHQiLCJuYW1lIiwiZ2V0T3JkZXJMaXN0IiwidGhlbiIsInJlcyIsImZvckVhY2giLCJzdGF0dXNTdHIiLCJwYXlTdHIiLCIkYXBwbHkiLCJjYXRjaCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBUVRDLEksR0FBTztBQUNIQyxrQkFBTTtBQURILFMsUUFJUEMsTyxHQUFVO0FBQ047OztBQUdBQyxlQUpNLGVBSURDLElBSkMsRUFJSztBQUNQLG9CQUFJQyxTQUFTO0FBQ1RDLDhCQUFVRixLQUFLRSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0gsSUFBRCxFQUFTO0FBQ2pDLCtCQUFPO0FBQ0hJLHFDQUFTSixLQUFLSyxHQURYO0FBRUhDLG1DQUFPTixLQUFLTTtBQUZULHlCQUFQO0FBSUgscUJBTFMsQ0FERDtBQU9UQyx3QkFBSVAsS0FBS0ssR0FQQTtBQVFURyxxQ0FBaUJSLEtBQUtRLGVBQUwsSUFBd0JSLEtBQUtRLGVBQUwsQ0FBcUJILEdBUnJEO0FBU1RJLG1DQUFlLENBVE47QUFVVEMsMkJBQU9WLEtBQUtFLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDSCxJQUFELEVBQVM7QUFDOUIsK0JBQU9BLEtBQUtJLE9BQUwsQ0FBYU0sS0FBcEI7QUFDSCxxQkFGTSxFQUVKQyxJQUZJLENBRUMsR0FGRCxFQUVNQyxLQUZOLENBRVksQ0FGWixFQUVlLEVBRmYsQ0FWRTtBQWFUQyw0QkFBUSxDQWJDO0FBY1RDLDRCQUFRLGlCQUFPQSxNQWROO0FBZVRDLDRCQUFRZixLQUFLZSxNQWZKO0FBZ0JUQywyQkFBTyxpQkFBT0EsS0FoQkw7QUFpQlRDLGdDQUFZLGtDQWpCSDtBQWtCVEMsa0NBQWMsQ0FsQkw7QUFtQlRDLDhCQUFVLHdCQUFTbkIsS0FBS21CLFFBQWQsRUFBd0IsR0FBeEI7QUFuQkQsaUJBQWI7QUFxQkEsd0NBQVNsQixNQUFUO0FBQ0g7QUEzQkssUyxRQWlDVm1CLFksR0FBZSxVQUFDUCxNQUFELEVBQVk7QUFDdkIsZ0JBQUlRLFNBQVMsdUJBQVEsaUJBQVdDLFlBQW5CLEVBQWlDLElBQWpDLEVBQXVDVCxNQUF2QyxDQUFiO0FBQ0EsZ0JBQUlVLFNBQVMsRUFBYjtBQUNBLGdCQUFJRixNQUFKLEVBQVk7QUFDUkUseUJBQVNGLE9BQU9HLElBQWhCO0FBQ0g7QUFDRCxtQkFBT0QsTUFBUDtBQUNILFMsUUFLREUsWSxHQUFlLFlBQUs7QUFDaEIsK0JBQ0tDLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVixvQkFBSS9CLE9BQU8rQixJQUFJL0IsSUFBZjtBQUNBQSxxQkFBS2dDLE9BQUwsQ0FBYSxVQUFDNUIsSUFBRCxFQUFTO0FBQ2xCQSx5QkFBSzZCLFNBQUwsR0FBaUIsTUFBS1QsWUFBTCxDQUFrQnBCLEtBQUthLE1BQXZCLENBQWpCO0FBQ0FiLHlCQUFLRSxRQUFMLEdBQWdCLGdDQUFpQkYsS0FBS0UsUUFBdEIsQ0FBaEI7QUFDQUYseUJBQUs4QixNQUFMLEdBQWMsd0JBQVMsc0JBQU85QixLQUFLbUIsUUFBWixFQUFzQixHQUF0QixDQUFULENBQWQ7QUFDSCxpQkFKRDtBQUtBLHNCQUFLdEIsSUFBTCxHQUFZRCxJQUFaO0FBQ0Esc0JBQUttQyxNQUFMO0FBQ0gsYUFWTCxFQVdLQyxLQVhMLENBV1csWUFBSztBQUNSLHNCQUFLbkMsSUFBTCxHQUFZLEVBQVo7QUFDQSxzQkFBS2tDLE1BQUw7QUFDSCxhQWRMO0FBZUgsUzs7Ozs7aUNBckVTO0FBQ04saUJBQUtOLFlBQUw7QUFDSDs7QUFvQ0Q7Ozs7O0FBWUE7Ozs7Ozs7RUF4RCtCLGVBQUtRLEk7O2tCQUFuQnhDLEsiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgbGlzdCB9IGZyb20gJy4uL3NlcnZpY2Uvb3JkZXInXG4gICAgaW1wb3J0IHBhZ2VDb25maWcgIGZyb20gJy4vY29uZmlnJ1xuICAgIGltcG9ydCBtdWx0aXBseSBmcm9tICcuLi9mdW5jdGlvbi9tdWx0aXBseSdcbiAgICBpbXBvcnQgZGl2aWRlIGZyb20gJy4uL2Z1bmN0aW9uL2RpdmlkZSdcbiAgICBpbXBvcnQgY3VycmVuY3kgZnJvbSAnLi4vZnVuY3Rpb24vY3VycmVuY3knXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuICAgIGltcG9ydCBpbmRleEJ5IGZyb20gJy4uL2Z1bmN0aW9uL2luZGV4QnknXG4gICAgaW1wb3J0IGNyZWF0ZU9yZGVyTnVtYmVyIGZyb20gJy4uL2Z1bmN0aW9uL2NyZWF0ZU9yZGVyTnVtYmVyJ1xuICAgIGltcG9ydCBhZGFwdFByb2R1Y3RMaXN0IGZyb20gJy4uL2Z1bmN0aW9uL2FkYXB0UHJvZHVjdExpc3QnXG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlSdcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9yZGVyTGlzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3Q6IG51bGwgXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDku5jmrL4gXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBheSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBpdGVtLnByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5faWQsXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogaXRlbS5zaGlwcGluZ0FkZHJlc3MgJiYgaXRlbS5zaGlwcGluZ0FkZHJlc3MuX2lkLFxuICAgICAgICAgICAgICAgICAgICBkaXNjb3VudE1vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5wcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvZHVjdC50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcsJykuc2xpY2UoMCwgNTApLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZTogY29uZmlnLm1vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtYXJrOiBpdGVtLnJlbWFyayxcbiAgICAgICAgICAgICAgICAgICAgbWNoSWQ6IGNvbmZpZy5tY2hJZCxcbiAgICAgICAgICAgICAgICAgICAgb3V0VHJhZGVObzogY3JlYXRlT3JkZXJOdW1iZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc01vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEZlZTogbXVsdGlwbHkoaXRlbS50b3RhbEZlZSwgMTAwKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcHVyY2hhc2UocGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bmlK/ku5jnirbmgIFcbiAgICAgICAgICovXG4gICAgICAgIGdldFN0YXR1c1N0ciA9IChzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSBpbmRleEJ5KHBhZ2VDb25maWcuT1JERVJfU1RBVFVTLCAnaWQnKVtzdGF0dXNdO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9wdGlvbi5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bmlLbotKflnLDlnYDliJfooahcbiAgICAgICAgICovXG4gICAgICAgIGdldE9yZGVyTGlzdCA9ICgpPT4ge1xuICAgICAgICAgICAgbGlzdCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXR1c1N0ciA9IHRoaXMuZ2V0U3RhdHVzU3RyKGl0ZW0uc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvZHVjdHMgPSBhZGFwdFByb2R1Y3RMaXN0KGl0ZW0ucHJvZHVjdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXlTdHIgPSBjdXJyZW5jeShkaXZpZGUoaXRlbS50b3RhbEZlZSwgMTAwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBkYXRhOyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgfVxuIl19