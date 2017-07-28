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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJvcmRlciIsIk9yZGVyQ29uZmlybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicHJvZHVjdHMiLCJyZW1hcmsiLCJzaGlwcGluZ0FkZHJlc3NMaXN0IiwiY29tcHV0ZWQiLCJkZWZhdWx0U2hpcHBpbmdBZGRyZXNzIiwicmVzdWx0IiwibGVuZ3RoIiwic29tZSIsIml0ZW0iLCJpc0RlZmF1bHQiLCJ0b3RhbE1vbmV5IiwiZm9yRWFjaCIsInBheVByaWNlIiwibWV0aG9kcyIsImJpbmRJbnB1dFJlbWFyayIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNyZWF0ZU9yZGVyIiwib3V0VHJhZGVObyIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJwYXJhbXMiLCJtYXAiLCJwcm9kdWN0IiwiX2lkIiwiY291bnQiLCJzaGlwcGluZ0FkZHJlc3MiLCJkaXNjb3VudE1vbmV5Iiwiam9pbiIsInNsaWNlIiwic3RhdHVzIiwibW9iaWxlIiwidHJpbSIsIm1jaElkIiwiZXhwcmVzc01vbmV5IiwidG90YWxGZWUiLCJhZGQiLCJ0aGVuIiwicmVzIiwiaWQiLCJzZWxlY3RTaGlwaW5nQWRkcmVzcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRTaGlwcGluZ0FkZHJlc3NMaXN0IiwibGlzdCIsIiRhcHBseSIsImNhdGNoIiwiZ2V0UHJvZHVjdHNCeUlkcyIsImlkcyIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJwIiwicGlkcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBQVlBLEs7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJDLFk7Ozs7Ozs7Ozs7Ozs7O3NNQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVRDLEksR0FBTztBQUNKQyxzQkFBVSxJQUROO0FBRUpDLG9CQUFRLEVBRko7QUFHSkMsaUNBQXFCO0FBSGpCLFMsUUFVUEMsUSxHQUFXO0FBQ1A7QUFDQUMsb0NBQXdCLGtDQUFLO0FBQ3pCLG9CQUFJQyxTQUFTLElBQWI7QUFDQSxvQkFBSUgsc0JBQXNCLE1BQUtBLG1CQUEvQjtBQUNBLG9CQUFJQSx1QkFBdUJBLG9CQUFvQkksTUFBL0MsRUFBdUQ7QUFDbkQ7QUFDQSx3QkFBSUosb0JBQW9CSSxNQUFwQixJQUE4QixDQUFsQyxFQUFxQztBQUNqQ0QsaUNBQVNILG9CQUFvQixDQUFwQixDQUFUO0FBQ0gscUJBRkQsTUFFTztBQUNIQSw0Q0FBb0JLLElBQXBCLENBQXlCLFVBQUNDLElBQUQsRUFBUztBQUM5QixnQ0FBSUEsS0FBS0MsU0FBVCxFQUFvQjtBQUNoQkoseUNBQVNHLElBQVQ7QUFDQSx1Q0FBTyxJQUFQO0FBQ0g7QUFDSix5QkFMRDtBQU1IO0FBQ0o7QUFDRCx1QkFBT0gsTUFBUDtBQUNILGFBbkJNO0FBb0JQSyxzQkFwQk8sd0JBb0JPO0FBQ1Ysb0JBQUlMLFNBQVMsQ0FBYjtBQUNBLG9CQUFJTCxXQUFXLEtBQUtBLFFBQUwsSUFBaUIsRUFBaEM7QUFDQUEseUJBQVNXLE9BQVQsQ0FBaUIsVUFBQ0gsSUFBRCxFQUFTO0FBQ3RCSCw2QkFBUyxvQkFBS0csS0FBS0ksUUFBVixFQUFvQlAsTUFBcEIsQ0FBVDtBQUNILGlCQUZEO0FBR0EsdUJBQU9BLE1BQVA7QUFDSDtBQTNCTSxTLFFBOEJYUSxPLEdBQVU7QUFDTjs7O0FBR0FDLDZCQUFpQix5QkFBQ0MsQ0FBRCxFQUFNO0FBQ25CLHNCQUFLZCxNQUFMLEdBQWNjLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdkI7QUFDSCxhQU5LOztBQVFOOzs7QUFHQUMseUJBQWEsdUJBQUs7O0FBRWQsb0JBQUlDLGFBQWEsa0NBQWpCOztBQUVBLG9CQUFJLENBQUMsTUFBS2Ysc0JBQVYsRUFBa0M7QUFDOUJnQix1QkFBR0MsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHQTtBQUNIOztBQUVELG9CQUFJQyxTQUFTO0FBQ1R2Qiw4QkFBVSxNQUFLQSxRQUFMLENBQWN3QixHQUFkLENBQWtCLFVBQUNoQixJQUFELEVBQVM7QUFDakMsK0JBQU87QUFDSGlCLHFDQUFTakIsS0FBS2tCLEdBRFg7QUFFSEMsbUNBQU9uQixLQUFLbUI7QUFGVCx5QkFBUDtBQUlILHFCQUxTLENBREQ7QUFPVEMscUNBQWlCLE1BQUt4QixzQkFBTCxDQUE0QnNCLEdBUHBDO0FBUVRHLG1DQUFlLENBUk47QUFTVFAsMkJBQU8sTUFBS3RCLFFBQUwsQ0FBY3dCLEdBQWQsQ0FBa0IsVUFBQ2hCLElBQUQsRUFBUztBQUM5QiwrQkFBT0EsS0FBS2MsS0FBWjtBQUNILHFCQUZNLEVBRUpRLElBRkksQ0FFQyxHQUZELEVBRU1DLEtBRk4sQ0FFWSxDQUZaLEVBRWUsRUFGZixDQVRFO0FBWVRDLDRCQUFRLENBWkM7QUFhVEMsNEJBQVEsaUJBQU9BLE1BYk47QUFjVGhDLDRCQUFRLE1BQUtBLE1BQUwsQ0FBWWlDLElBQVosRUFkQztBQWVUQywyQkFBTyxpQkFBT0EsS0FmTDtBQWdCVGhCLGdDQUFZQSxVQWhCSDtBQWlCVGlCLGtDQUFjLENBakJMO0FBa0JUQyw4QkFBVSx3QkFBUyxNQUFLM0IsVUFBZCxFQUEwQixHQUExQjtBQWxCRCxpQkFBYjs7QUFxQkFmLHNCQUFNMkMsR0FBTixDQUFVZixNQUFWLEVBQ0tnQixJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysd0JBQUl6QyxPQUFPeUMsSUFBSXpDLElBQWY7QUFDQXdCLDJCQUFPa0IsRUFBUCxHQUFZMUMsS0FBSzJCLEdBQWpCO0FBQ0EsNENBQVNILE1BQVQ7QUFDSCxpQkFMTDtBQU1ILGFBakRLOztBQW1ETjs7O0FBR0FtQixnQ0F0RE0sa0NBc0RrQjtBQUNwQnRCLG1CQUFHdUIsVUFBSCxDQUFjO0FBQ1hDLHlCQUFLO0FBRE0saUJBQWQ7QUFHSCxhQTFESzs7O0FBNEROOzs7QUFHQUMsb0NBQXdCLGtDQUFLO0FBQ3pCLDZDQUNLTixJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1YsMEJBQUt0QyxtQkFBTCxHQUEyQnNDLElBQUl6QyxJQUFKLENBQVMrQyxJQUFwQztBQUNBLDBCQUFLQyxNQUFMO0FBQ0gsaUJBSkwsRUFLS0MsS0FMTCxDQUtXLFlBQUs7QUFDUiwwQkFBSzlDLG1CQUFMLEdBQTJCLEVBQTNCO0FBQ0EsMEJBQUs2QyxNQUFMO0FBQ0gsaUJBUkw7QUFTSCxhQXpFSzs7QUEyRU47OztBQUdBRSw4QkFBa0IsMEJBQUNDLEdBQUQsRUFBUztBQUN2QjlCLG1CQUFHK0IsV0FBSDtBQUNBLHdDQUFVO0FBQ05uRCw4QkFBVSxDQUNOO0FBQ0kyQiwrQkFBTyxDQURYO0FBRUljLDRCQUFJUztBQUZSLHFCQURNO0FBREosaUJBQVYsRUFRS1gsSUFSTCxDQVFVLFVBQUNDLEdBQUQsRUFBUTtBQUNWcEIsdUJBQUdnQyxXQUFIO0FBQ0EsMEJBQUtwRCxRQUFMLEdBQWdCd0MsSUFBSXpDLElBQUosQ0FBUytDLElBQXpCO0FBQ0EsMEJBQUtDLE1BQUw7QUFDSCxpQkFaTCxFQWFLQyxLQWJMLENBYVcsWUFBSztBQUNSLDBCQUFLaEQsUUFBTCxHQUFnQixFQUFoQjtBQUNBLDBCQUFLK0MsTUFBTDtBQUNBM0IsdUJBQUdnQyxXQUFIO0FBQ0gsaUJBakJMO0FBa0JIO0FBbEdLLFM7Ozs7O2lDQWxDQTtBQUNOLGlCQUFLdkMsT0FBTCxDQUFhZ0Msc0JBQWI7QUFDSDs7OytCQXFJT1EsQyxFQUFHO0FBQ1AsZ0JBQUlDLE9BQU9ELEVBQUVDLElBQWI7QUFDQTtBQUNBLGlCQUFLekMsT0FBTCxDQUFhb0MsZ0JBQWIsQ0FBOEJLLElBQTlCO0FBQ0g7Ozs7RUF2SnNDLGVBQUtDLEk7O2tCQUEzQjNELFkiLCJmaWxlIjoib3JkZXJDb25maXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGxpc3RCeUlkcyB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCdcbiAgICBpbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vc2VydmljZS9zaGlwcGluZ0FkZHJlc3MnXG4gICAgaW1wb3J0ICogYXMgb3JkZXIgZnJvbSAnLi4vc2VydmljZS9vcmRlcic7XG4gICAgaW1wb3J0IG11bHRpcGx5IGZyb20gJy4uL2Z1bmN0aW9uL211bHRpcGx5JztcbiAgICBpbXBvcnQgcGx1cyBmcm9tICcuLi9mdW5jdGlvbi9wbHVzJztcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG4gICAgaW1wb3J0IGNyZWF0ZU9yZGVyTnVtYmVyIGZyb20gJy4uL2Z1bmN0aW9uL2NyZWF0ZU9yZGVyTnVtYmVyJztcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnO1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyQ29uZmlybSAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ehruiupOWumuWNlSdcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgIHByb2R1Y3RzOiBudWxsLFxuICAgICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NMaXN0OiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFNoaXBwaW5nQWRkcmVzc0xpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgLy8g6buY6K6k5pS26LSn5Zyw5Zyw5Z2AXG4gICAgICAgICAgICBkZWZhdWx0U2hpcHBpbmdBZGRyZXNzOiAoKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgc2hpcHBpbmdBZGRyZXNzTGlzdCA9IHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdDtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHBpbmdBZGRyZXNzTGlzdCAmJiBzaGlwcGluZ0FkZHJlc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzlj6rmnInkuIDkuKrmlLbotKflnLDlnYDvvIzkuI3nrqHmmK/kuI3mmK/pu5jorqTnmoTvvIzlsLHlvZPpu5jorqTnmoTkvb/nlKhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBwaW5nQWRkcmVzc0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNoaXBwaW5nQWRkcmVzc0xpc3RbMF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NMaXN0LnNvbWUoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdGFsTW9uZXkgKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0cyA9IHRoaXMucHJvZHVjdHMgfHwgW107XG4gICAgICAgICAgICAgICAgcHJvZHVjdHMuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBsdXMoaXRlbS5wYXlQcmljZSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5aGr5YaZ5aSH5rOo5L+h5oGvIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBiaW5kSW5wdXRSZW1hcms6IChlKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDliJvlu7rorqLljZUgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNyZWF0ZU9yZGVyOiAoKT0+IHtcblxuICAgICAgICAgICAgICAgIHZhciBvdXRUcmFkZU5vID0gY3JlYXRlT3JkZXJOdW1iZXIoKTtcblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kZWZhdWx0U2hpcHBpbmdBZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+Whq+WGmeaUtui0p+WcsOWdgCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogdGhpcy5wcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBpdGVtLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogaXRlbS5jb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB0aGlzLmRlZmF1bHRTaGlwcGluZ0FkZHJlc3MuX2lkLFxuICAgICAgICAgICAgICAgICAgICBkaXNjb3VudE1vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5wcm9kdWN0cy5tYXAoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbignLCcpLnNsaWNlKDAsIDUwKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAwLFxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6IGNvbmZpZy5tb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgIHJlbWFyazogdGhpcy5yZW1hcmsudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICBtY2hJZDogY29uZmlnLm1jaElkLFxuICAgICAgICAgICAgICAgICAgICBvdXRUcmFkZU5vOiBvdXRUcmFkZU5vLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzTW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsRmVlOiBtdWx0aXBseSh0aGlzLnRvdGFsTW9uZXksIDEwMClcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgb3JkZXIuYWRkKHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmlkID0gZGF0YS5faWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwdXJjaGFzZShwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6YCJ5oup6YWN6YCB5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3RTaGlwaW5nQWRkcmVzcyAoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgdXJsOiAnc2hpcHBpbmdBZGRyZXNzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDojrflj5bmlLbotKflnLDlnYDliJfooahcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdDogKCk9PiB7XG4gICAgICAgICAgICAgICAgbGlzdCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0ID0gcmVzLmRhdGEubGlzdDsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDmoLnmja7kuqflk4FpZHPojrflj5bllYblk4Hkv6Hmga8gXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldFByb2R1Y3RzQnlJZHM6IChpZHMpID0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xuICAgICAgICAgICAgICAgIGxpc3RCeUlkcyh7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlcy5kYXRhLmxpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB2YXIgcGlkcyA9IHAucGlkcztcbiAgICAgICAgICAgIC8vIOebtOaOpei0reS5sOS6p+WTgSBcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRQcm9kdWN0c0J5SWRzKHBpZHMpO1xuICAgICAgICB9XG4gICAgfVxuIl19