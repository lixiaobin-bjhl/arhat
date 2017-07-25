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
                    }).join(','),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJvcmRlciIsIk9yZGVyQ29uZmlybSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicHJvZHVjdHMiLCJyZW1hcmsiLCJzaGlwcGluZ0FkZHJlc3NMaXN0IiwiY29tcHV0ZWQiLCJkZWZhdWx0U2hpcHBpbmdBZGRyZXNzIiwicmVzdWx0IiwibGVuZ3RoIiwic29tZSIsIml0ZW0iLCJpc0RlZmF1bHQiLCJ0b3RhbE1vbmV5IiwiZm9yRWFjaCIsInBheVByaWNlIiwibWV0aG9kcyIsImJpbmRJbnB1dFJlbWFyayIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNyZWF0ZU9yZGVyIiwib3V0VHJhZGVObyIsInBhcmFtcyIsIm1hcCIsInByb2R1Y3QiLCJfaWQiLCJjb3VudCIsInNoaXBwaW5nQWRkcmVzcyIsImRpc2NvdW50TW9uZXkiLCJ0aXRsZSIsImpvaW4iLCJzdGF0dXMiLCJtb2JpbGUiLCJ0cmltIiwibWNoSWQiLCJleHByZXNzTW9uZXkiLCJ0b3RhbEZlZSIsImFkZCIsInRoZW4iLCJyZXMiLCJzZWxlY3RTaGlwaW5nQWRkcmVzcyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImdldFNoaXBwaW5nQWRkcmVzc0xpc3QiLCJsaXN0IiwiJGFwcGx5IiwiY2F0Y2giLCJnZXRQcm9kdWN0c0J5SWRzIiwiaWRzIiwic2hvd0xvYWRpbmciLCJpZCIsImhpZGVMb2FkaW5nIiwicCIsInBpZHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFSTs7OztBQUNBOztBQUNBOztBQUNBOztJQUFZQSxLOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQyxZOzs7Ozs7Ozs7Ozs7OztzTUFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSkMsc0JBQVUsSUFETjtBQUVKQyxvQkFBUSxFQUZKO0FB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QkFBR1MsV0FBSDtBQUNBLHdDQUFVO0FBQ05oRCw4QkFBVSxDQUNOO0FBQ0l3QiwrQkFBTyxDQURYO0FBRUl5Qiw0QkFBSUY7QUFGUixxQkFETTtBQURKLGlCQUFWLEVBUUtYLElBUkwsQ0FRVSxVQUFDQyxHQUFELEVBQVE7QUFDVkUsdUJBQUdXLFdBQUg7QUFDQSwwQkFBS2xELFFBQUwsR0FBZ0JxQyxJQUFJdEMsSUFBSixDQUFTNEMsSUFBekI7QUFDQSwwQkFBS0MsTUFBTDtBQUNILGlCQVpMLEVBYUtDLEtBYkwsQ0FhVyxZQUFLO0FBQ1IsMEJBQUs3QyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsMEJBQUs0QyxNQUFMO0FBQ0FMLHVCQUFHVyxXQUFIO0FBQ0gsaUJBakJMO0FBa0JIO0FBekZLLFM7Ozs7O2lDQWxDQTtBQUNOLGlCQUFLckMsT0FBTCxDQUFhNkIsc0JBQWI7QUFDSDs7OytCQTRIT1MsQyxFQUFHO0FBQ1AsZ0JBQUlDLE9BQU9ELEVBQUVDLElBQWI7QUFDQTtBQUNBLGlCQUFLdkMsT0FBTCxDQUFhaUMsZ0JBQWIsQ0FBOEJNLElBQTlCO0FBQ0g7Ozs7RUE5SXNDLGVBQUtDLEk7O2tCQUEzQnpELFkiLCJmaWxlIjoib3JkZXJDb25maXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGxpc3RCeUlkcyB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCdcbiAgICBpbXBvcnQgeyBsaXN0IH0gZnJvbSAnLi4vc2VydmljZS9zaGlwcGluZ0FkZHJlc3MnXG4gICAgaW1wb3J0ICogYXMgb3JkZXIgZnJvbSAnLi4vc2VydmljZS9vcmRlcic7XG4gICAgaW1wb3J0IG11bHRpcGx5IGZyb20gJy4uL2Z1bmN0aW9uL211bHRpcGx5JztcbiAgICBpbXBvcnQgcGx1cyBmcm9tICcuLi9mdW5jdGlvbi9wbHVzJztcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG4gICAgaW1wb3J0IGdldE9yZGVyTnVtYmVyIGZyb20gJy4uL2Z1bmN0aW9uL2dldE9yZGVyTnVtYmVyJztcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnO1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyQ29uZmlybSAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ehruiupOWumuWNlSdcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgIHByb2R1Y3RzOiBudWxsLFxuICAgICAgICAgICByZW1hcms6ICcnLFxuICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NMaXN0OiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFNoaXBwaW5nQWRkcmVzc0xpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgLy8g6buY6K6k5pS26LSn5Zyw5Zyw5Z2AXG4gICAgICAgICAgICBkZWZhdWx0U2hpcHBpbmdBZGRyZXNzOiAoKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgc2hpcHBpbmdBZGRyZXNzTGlzdCA9IHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdDtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcHBpbmdBZGRyZXNzTGlzdCAmJiBzaGlwcGluZ0FkZHJlc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzlj6rmnInkuIDkuKrmlLbotKflnLDlnYDvvIzkuI3nrqHmmK/kuI3mmK/pu5jorqTnmoTvvIzlsLHlvZPpu5jorqTnmoTkvb/nlKhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBwaW5nQWRkcmVzc0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNoaXBwaW5nQWRkcmVzc0xpc3RbMF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NMaXN0LnNvbWUoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlzRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdGFsTW9uZXkgKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0cyA9IHRoaXMucHJvZHVjdHMgfHwgW107XG4gICAgICAgICAgICAgICAgcHJvZHVjdHMuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBsdXMoaXRlbS5wYXlQcmljZSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5aGr5YaZ5aSH5rOo5L+h5oGvIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBiaW5kSW5wdXRSZW1hcms6IChlKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbWFyayA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDliJvlu7rorqLljZUgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNyZWF0ZU9yZGVyOiAoKT0+IHtcblxuICAgICAgICAgICAgICAgIHZhciBvdXRUcmFkZU5vID0gZ2V0T3JkZXJOdW1iZXIoKTtcblxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB0aGlzLnByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IGl0ZW0uX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBpdGVtLmNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHRoaXMuZGVmYXVsdFNoaXBwaW5nQWRkcmVzcy5faWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2NvdW50TW9uZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnByb2R1Y3RzLm1hcCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9KS5qb2luKCcsJyksXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICByZW1hcms6IHRoaXMucmVtYXJrLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgbWNoSWQ6IGNvbmZpZy5tY2hJZCxcbiAgICAgICAgICAgICAgICAgICAgb3V0VHJhZGVObzogb3V0VHJhZGVObyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc01vbmV5OiAwLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEZlZTogbXVsdGlwbHkodGhpcy50b3RhbE1vbmV5LCAxMDApXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIG9yZGVyLmFkZChwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHVyY2hhc2UocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOmAieaLqemFjemAgeWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0U2hpcGluZ0FkZHJlc3MgKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgIHVybDogJ3NoaXBwaW5nQWRkcmVzcydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6I635Y+W5pS26LSn5Zyw5Z2A5YiX6KGoXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldFNoaXBwaW5nQWRkcmVzc0xpc3Q6ICgpPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IHJlcy5kYXRhLmxpc3Q7IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5qC55o2u5Lqn5ZOBaWRz6I635Y+W5ZWG5ZOB5L+h5oGvIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRQcm9kdWN0c0J5SWRzOiAoaWRzKSA9PiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBsaXN0QnlJZHMoe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSByZXMuZGF0YS5saXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIG9uTG9hZCAocCkge1xuICAgICAgICAgICAgdmFyIHBpZHMgPSBwLnBpZHM7XG4gICAgICAgICAgICAvLyDnm7TmjqXotK3kubDkuqflk4EgXG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0UHJvZHVjdHNCeUlkcyhwaWRzKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==