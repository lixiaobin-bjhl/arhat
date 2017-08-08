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

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

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
             * 跳转到产品详情 
             */
            redirectProductDetail: function redirectProductDetail(item) {
                this.methods.redirect('productDetail?pid=' + item.product._id);
            },


            /**
             * 跳转地址 
             */
            redirect: function redirect(url) {
                wx.redirectTo({
                    url: url
                });
            },


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
                    totalFee: item.totalFee
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
        }, _this.components = {
            footer: _footer2.default
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsInJlZGlyZWN0UHJvZHVjdERldGFpbCIsIml0ZW0iLCJyZWRpcmVjdCIsInByb2R1Y3QiLCJfaWQiLCJ1cmwiLCJ3eCIsInJlZGlyZWN0VG8iLCJwYXkiLCJwYXJhbXMiLCJwcm9kdWN0cyIsIm1hcCIsImNvdW50IiwiaWQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5IiwidGl0bGUiLCJqb2luIiwic2xpY2UiLCJzdGF0dXMiLCJtb2JpbGUiLCJyZW1hcmsiLCJtY2hJZCIsIm91dFRyYWRlTm8iLCJleHByZXNzTW9uZXkiLCJ0b3RhbEZlZSIsImdldFN0YXR1c1N0ciIsIm9wdGlvbiIsIk9SREVSX1NUQVRVUyIsInJlc3VsdCIsIm5hbWUiLCJnZXRPcmRlckxpc3QiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsInN0YXR1c1N0ciIsInBheVN0ciIsIiRhcHBseSIsImNhdGNoIiwiY29tcG9uZW50cyIsImZvb3RlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFRVEMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBREgsUyxRQUlQQyxPLEdBQVU7QUFDTjs7O0FBR0FDLGlDQUpNLGlDQUlpQkMsSUFKakIsRUFJdUI7QUFDekIscUJBQUtGLE9BQUwsQ0FBYUcsUUFBYixDQUFzQix1QkFBdUJELEtBQUtFLE9BQUwsQ0FBYUMsR0FBMUQ7QUFDSCxhQU5LOzs7QUFRTjs7O0FBR0FGLG9CQVhNLG9CQVdJRyxHQVhKLEVBV1M7QUFDWEMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWRix5QkFBS0E7QUFESyxpQkFBZDtBQUdILGFBZks7OztBQWlCTjs7O0FBR0FHLGVBcEJNLGVBb0JEUCxJQXBCQyxFQW9CSztBQUNQLG9CQUFJUSxTQUFTO0FBQ1RDLDhCQUFVVCxLQUFLUyxRQUFMLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ1YsSUFBRCxFQUFTO0FBQ2pDLCtCQUFPO0FBQ0hFLHFDQUFTRixLQUFLRyxHQURYO0FBRUhRLG1DQUFPWCxLQUFLVztBQUZULHlCQUFQO0FBSUgscUJBTFMsQ0FERDtBQU9UQyx3QkFBSVosS0FBS0csR0FQQTtBQVFUVSxxQ0FBaUJiLEtBQUthLGVBQUwsSUFBd0JiLEtBQUthLGVBQUwsQ0FBcUJWLEdBUnJEO0FBU1RXLG1DQUFlLENBVE47QUFVVEMsMkJBQU9mLEtBQUtTLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDVixJQUFELEVBQVM7QUFDOUIsK0JBQU9BLEtBQUtFLE9BQUwsQ0FBYWEsS0FBcEI7QUFDSCxxQkFGTSxFQUVKQyxJQUZJLENBRUMsR0FGRCxFQUVNQyxLQUZOLENBRVksQ0FGWixFQUVlLEVBRmYsQ0FWRTtBQWFUQyw0QkFBUSxDQWJDO0FBY1RDLDRCQUFRLGlCQUFPQSxNQWROO0FBZVRDLDRCQUFRcEIsS0FBS29CLE1BZko7QUFnQlRDLDJCQUFPLGlCQUFPQSxLQWhCTDtBQWlCVEMsZ0NBQVksa0NBakJIO0FBa0JUQyxrQ0FBYyxDQWxCTDtBQW1CVEMsOEJBQVV4QixLQUFLd0I7QUFuQk4saUJBQWI7QUFxQkEsd0NBQVNoQixNQUFUO0FBQ0g7QUEzQ0ssUyxRQWlEVmlCLFksR0FBZSxVQUFDUCxNQUFELEVBQVk7QUFDdkIsZ0JBQUlRLFNBQVMsdUJBQVEsaUJBQVdDLFlBQW5CLEVBQWlDLElBQWpDLEVBQXVDVCxNQUF2QyxDQUFiO0FBQ0EsZ0JBQUlVLFNBQVMsRUFBYjtBQUNBLGdCQUFJRixNQUFKLEVBQVk7QUFDUkUseUJBQVNGLE9BQU9HLElBQWhCO0FBQ0g7QUFDRCxtQkFBT0QsTUFBUDtBQUNILFMsUUFLREUsWSxHQUFlLFlBQUs7QUFDaEIsK0JBQ0tDLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVixvQkFBSXBDLE9BQU9vQyxJQUFJcEMsSUFBZjtBQUNBQSxxQkFBS3FDLE9BQUwsQ0FBYSxVQUFDakMsSUFBRCxFQUFTO0FBQ2xCQSx5QkFBS2tDLFNBQUwsR0FBaUIsTUFBS1QsWUFBTCxDQUFrQnpCLEtBQUtrQixNQUF2QixDQUFqQjtBQUNBbEIseUJBQUtTLFFBQUwsR0FBZ0IsZ0NBQWlCVCxLQUFLUyxRQUF0QixDQUFoQjtBQUNBVCx5QkFBS21DLE1BQUwsR0FBYyx3QkFBUyxzQkFBT25DLEtBQUt3QixRQUFaLEVBQXNCLEdBQXRCLENBQVQsQ0FBZDtBQUNILGlCQUpEO0FBS0Esc0JBQUszQixJQUFMLEdBQVlELElBQVo7QUFDQSxzQkFBS3dDLE1BQUw7QUFDSCxhQVZMLEVBV0tDLEtBWEwsQ0FXVyxZQUFLO0FBQ1Isc0JBQUt4QyxJQUFMLEdBQVksRUFBWjtBQUNBLHNCQUFLdUMsTUFBTDtBQUNILGFBZEw7QUFlSCxTLFFBRURFLFUsR0FBYTtBQUNUQztBQURTLFM7Ozs7O2lDQXZGSDtBQUNOLGlCQUFLVCxZQUFMO0FBQ0g7O0FBb0REOzs7OztBQVlBOzs7Ozs7O0VBeEUrQixlQUFLVSxJOztrQkFBbkIvQyxLIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGxpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL29yZGVyJ1xuICAgIGltcG9ydCBwYWdlQ29uZmlnICBmcm9tICcuL2NvbmZpZydcbiAgICBpbXBvcnQgbXVsdGlwbHkgZnJvbSAnLi4vZnVuY3Rpb24vbXVsdGlwbHknXG4gICAgaW1wb3J0IGRpdmlkZSBmcm9tICcuLi9mdW5jdGlvbi9kaXZpZGUnXG4gICAgaW1wb3J0IGZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcbiAgICBpbXBvcnQgY3VycmVuY3kgZnJvbSAnLi4vZnVuY3Rpb24vY3VycmVuY3knXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuICAgIGltcG9ydCBpbmRleEJ5IGZyb20gJy4uL2Z1bmN0aW9uL2luZGV4QnknXG4gICAgaW1wb3J0IGNyZWF0ZU9yZGVyTnVtYmVyIGZyb20gJy4uL2Z1bmN0aW9uL2NyZWF0ZU9yZGVyTnVtYmVyJ1xuICAgIGltcG9ydCBhZGFwdFByb2R1Y3RMaXN0IGZyb20gJy4uL2Z1bmN0aW9uL2FkYXB0UHJvZHVjdExpc3QnXG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlSdcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9yZGVyTGlzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGxpc3Q6IG51bGwgXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazliLDkuqflk4Hor6bmg4UgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0UHJvZHVjdERldGFpbCAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5yZWRpcmVjdCgncHJvZHVjdERldGFpbD9waWQ9JyArIGl0ZW0ucHJvZHVjdC5faWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5LuY5qy+IFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwYXkgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogaXRlbS5wcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBpdGVtLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uX2lkLFxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IGl0ZW0uc2hpcHBpbmdBZGRyZXNzICYmIGl0ZW0uc2hpcHBpbmdBZGRyZXNzLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgZGlzY291bnRNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ucHJvZHVjdHMubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb2R1Y3QudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbignLCcpLnNsaWNlKDAsIDUwKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IGNvbmZpZy5tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgIHJlbWFyazogaXRlbS5yZW1hcmssXG4gICAgICAgICAgICAgICAgICAgIG1jaElkOiBjb25maWcubWNoSWQsXG4gICAgICAgICAgICAgICAgICAgIG91dFRyYWRlTm86IGNyZWF0ZU9yZGVyTnVtYmVyKCksXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3NNb25leTogMCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWxGZWU6IGl0ZW0udG90YWxGZWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHB1cmNoYXNlKHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W5pSv5LuY54q25oCBXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTdGF0dXNTdHIgPSAoc3RhdHVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gaW5kZXhCeShwYWdlQ29uZmlnLk9SREVSX1NUQVRVUywgJ2lkJylbc3RhdHVzXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICAgICAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBvcHRpb24ubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W5pS26LSn5Zyw5Z2A5YiX6KGoXG4gICAgICAgICAqL1xuICAgICAgICBnZXRPcmRlckxpc3QgPSAoKT0+IHtcbiAgICAgICAgICAgIGxpc3QoKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGF0dXNTdHIgPSB0aGlzLmdldFN0YXR1c1N0cihpdGVtLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb2R1Y3RzID0gYWRhcHRQcm9kdWN0TGlzdChpdGVtLnByb2R1Y3RzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGF5U3RyID0gY3VycmVuY3koZGl2aWRlKGl0ZW0udG90YWxGZWUsIDEwMCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gZGF0YTsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGZvb3RlclxuICAgICAgICB9XG4gICAgIH1cbiJdfQ==