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

                console.log(params);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsImdldFN0YXR1c1N0ciIsInN0YXR1cyIsIm9wdGlvbiIsIk9SREVSX1NUQVRVUyIsInJlc3VsdCIsIm5hbWUiLCJwYXkiLCJpdGVtIiwicGFyYW1zIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiX2lkIiwiY291bnQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5IiwidGl0bGUiLCJqb2luIiwic2xpY2UiLCJtb2JpbGUiLCJyZW1hcmsiLCJtY2hJZCIsIm91dFRyYWRlTm8iLCJleHByZXNzTW9uZXkiLCJ0b3RhbEZlZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRPcmRlckxpc3QiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsInN0YXR1c1N0ciIsIiRhcHBseSIsImNhdGNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFRVEMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBREgsUyxRQUlQQyxPLEdBQVU7QUFDTjs7O0FBR0FDLHdCQUpNLHdCQUlRQyxNQUpSLEVBSWdCO0FBQ2xCLG9CQUFJQyxTQUFTLHVCQUFRLGlCQUFXQyxZQUFuQixFQUFpQyxJQUFqQyxFQUF1Q0YsTUFBdkMsQ0FBYjtBQUNBLG9CQUFJRyxTQUFTLEVBQWI7QUFDQSxvQkFBSUYsTUFBSixFQUFZO0FBQ1JFLDZCQUFTRixPQUFPRyxJQUFoQjtBQUNIO0FBQ0QsdUJBQU9ELE1BQVA7QUFDSCxhQVhLOztBQVlOOzs7QUFHQUUsZUFmTSxlQWVEQyxJQWZDLEVBZUs7QUFDUCxvQkFBSUMsU0FBUztBQUNUQyw4QkFBVUYsS0FBS0UsUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUNILElBQUQsRUFBUztBQUNqQywrQkFBTztBQUNISSxxQ0FBU0osS0FBS0ksT0FBTCxDQUFhQyxHQURuQjtBQUVIQyxtQ0FBT04sS0FBS007QUFGVCx5QkFBUDtBQUlILHFCQUxTLENBREQ7QUFPVEMscUNBQWlCUCxLQUFLTyxlQUFMLENBQXFCRixHQVA3QjtBQVFURyxtQ0FBZSxDQVJOO0FBU1RDLDJCQUFPVCxLQUFLRSxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0gsSUFBRCxFQUFTO0FBQzlCLCtCQUFPQSxLQUFLSSxPQUFMLENBQWFLLEtBQXBCO0FBQ0gscUJBRk0sRUFFSkMsSUFGSSxDQUVDLEdBRkQsRUFFTUMsS0FGTixDQUVZLENBRlosRUFFZSxFQUZmLENBVEU7QUFZVGpCLDRCQUFRLENBWkM7QUFhVGtCLDRCQUFRLGlCQUFPQSxNQWJOO0FBY1RDLDRCQUFRYixLQUFLYSxNQWRKO0FBZVRDLDJCQUFPLGlCQUFPQSxLQWZMO0FBZ0JUQyxnQ0FBWSxrQ0FoQkg7QUFpQlRDLGtDQUFjLENBakJMO0FBa0JUQyw4QkFBVSx3QkFBU2pCLEtBQUtpQixRQUFkLEVBQXdCLEdBQXhCO0FBbEJELGlCQUFiOztBQXFCQUMsd0JBQVFDLEdBQVIsQ0FBWWxCLE1BQVo7O0FBRUEsd0NBQVNBLE1BQVQ7QUFDSCxhQXhDSzs7QUF5Q047OztBQUdBbUIsMEJBQWMsd0JBQUs7QUFDZixtQ0FDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLHdCQUFJaEMsT0FBT2dDLElBQUloQyxJQUFmO0FBQ0FBLHlCQUFLaUMsT0FBTCxDQUFhLFVBQUN2QixJQUFELEVBQVM7QUFDbEJBLDZCQUFLd0IsU0FBTCxHQUFpQixNQUFLaEMsT0FBTCxDQUFhQyxZQUFiLENBQTBCTyxLQUFLTixNQUEvQixDQUFqQjtBQUNILHFCQUZEO0FBR0EsMEJBQUtILElBQUwsR0FBWUQsSUFBWjtBQUNBLDBCQUFLbUMsTUFBTDtBQUNILGlCQVJMLEVBU0tDLEtBVEwsQ0FTVyxZQUFLO0FBQ1IsMEJBQUtuQyxJQUFMLEdBQVksRUFBWjtBQUNBLDBCQUFLa0MsTUFBTDtBQUNILGlCQVpMO0FBYUg7QUExREssUzs7Ozs7aUNBUkE7QUFDTixpQkFBS2pDLE9BQUwsQ0FBYTRCLFlBQWI7QUFDSDs7OztFQVI4QixlQUFLTyxJOztrQkFBbkJ4QyxLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL29yZGVyJ1xuICAgIGltcG9ydCBwYWdlQ29uZmlnICBmcm9tICcuL2NvbmZpZydcbiAgICBpbXBvcnQgbXVsdGlwbHkgZnJvbSAnLi4vZnVuY3Rpb24vbXVsdGlwbHknXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuICAgIGltcG9ydCBpbmRleEJ5IGZyb20gJy4uL2Z1bmN0aW9uL2luZGV4QnknXG4gICAgaW1wb3J0IGNyZWF0ZU9yZGVyTnVtYmVyIGZyb20gJy4uL2Z1bmN0aW9uL2NyZWF0ZU9yZGVyTnVtYmVyJ1xuICAgIGltcG9ydCBwdXJjaGFzZSBmcm9tICcuLi9mdW5jdGlvbi9wdXJjaGFzZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTorqLljZUnXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldE9yZGVyTGlzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3Q6IG51bGwgXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDojrflj5bmlK/ku5jnirbmgIFcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0U3RhdHVzU3RyIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gaW5kZXhCeShwYWdlQ29uZmlnLk9SREVSX1NUQVRVUywgJ2lkJylbc3RhdHVzXTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBvcHRpb24ubmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOS7mOasviBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGF5IChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IGl0ZW0ucHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogaXRlbS5wcm9kdWN0Ll9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiBpdGVtLnNoaXBwaW5nQWRkcmVzcy5faWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50TW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm9kdWN0LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJywnKS5zbGljZSgwLCA1MCksXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICByZW1hcms6IGl0ZW0ucmVtYXJrLFxuICAgICAgICAgICAgICAgICAgICBtY2hJZDogY29uZmlnLm1jaElkLFxuICAgICAgICAgICAgICAgICAgICBvdXRUcmFkZU5vOiBjcmVhdGVPcmRlck51bWJlcigpLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzTW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsRmVlOiBtdWx0aXBseShpdGVtLnRvdGFsRmVlLCAxMDApXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICBwdXJjaGFzZShwYXJhbXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6I635Y+W5pS26LSn5Zyw5Z2A5YiX6KGoXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldE9yZGVyTGlzdDogKCk9PiB7XG4gICAgICAgICAgICAgICAgbGlzdCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGF0dXNTdHIgPSB0aGlzLm1ldGhvZHMuZ2V0U3RhdHVzU3RyKGl0ZW0uc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gZGF0YTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgIH1cbiJdfQ==