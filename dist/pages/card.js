'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _card = require('./../service/card.js');

var _compressImage = require('./../function/compressImage.js');

var _compressImage2 = _interopRequireDefault(_compressImage);

var _adaptProductList = require('./../function/adaptProductList.js');

var _adaptProductList2 = _interopRequireDefault(_adaptProductList);

var _plus = require('./../function/plus.js');

var _plus2 = _interopRequireDefault(_plus);

var _multiply = require('./../function/multiply.js');

var _multiply2 = _interopRequireDefault(_multiply);

var _currency = require('./../function/currency.js');

var _currency2 = _interopRequireDefault(_currency);

var _purchase = require('./../function/purchase.js');

var _purchase2 = _interopRequireDefault(_purchase);

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

var _toast = require('./../function/toast.js');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_wepy$page) {
    _inherits(Card, _wepy$page);

    function Card() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Card);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '购物车'
        }, _this.data = {
            list: null,
            isSelectAll: true
        }, _this.$props = { "footer": { "from": "card" }, "copyright": {} }, _this.$events = {}, _this.components = {
            footer: _footer2.default,
            copyright: _copyright2.default
        }, _this.computed = {
            totalMoney: function totalMoney() {
                var result = 0;
                var list = this.list;

                if (!list) {
                    return 0;
                }
                list.forEach(function (item) {
                    if (item.selected) {
                        result = (0, _plus2.default)((0, _multiply2.default)(item.product.payPrice, item.count), result);
                    }
                });
                return (0, _currency2.default)(result);
            }
        }, _this.adaptProductList = _adaptProductList2.default, _this.methods = {
            /**
             * 获取产品详情
             */
            getCardList: function getCardList() {
                wx.showLoading({ title: '加载中' });
                (0, _card.getCardByOpenid)().then(function (res) {
                    wx.hideLoading();
                    _this.list = _this.adaptProductList(res.data);
                    // this.methods.selectAll();
                    _this.$apply();
                }).catch(function () {
                    _this.list = [];
                    wx.hideLoading();
                });
            },
            /**
             * 全选 
             */
            selectAll: function selectAll() {
                _this.isSelectAll = !_this.isSelectAll;
                // 将所有产品全选或返选上
                _this.list.forEach(function (item, index) {
                    _this.list[index].selected = _this.isSelectAll;
                });
            },
            /**
             * 购物车中选择商品支付 
             */
            select: function select(card, index) {
                var selected = card.selected ? false : true;
                this.list[index].selected = selected;
                // 判读是否有全选，全选就将全选按钮全选住
                if (this.list.every(function (item) {
                    return item.selected;
                })) {
                    this.isSelectAll = true;
                } else {
                    this.isSelectAll = false;
                }
            },

            /**
             * 将商品从购物车中移除 
             */
            remove: function remove(item) {
                var _this2 = this;

                wx.showModal({
                    title: '提示',
                    content: '确认从购物车中删除？',
                    success: function success(res) {
                        if (res.confirm) {
                            (0, _card.remove)(item._id).then(function () {
                                _this2.methods.getCardList();
                                _this2.$invoke('footer', 'getCountByOpendId');
                            });
                        }
                    }
                });
            },


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
             * 下单 
             */
            pay: function pay() {
                var selectedProducts = _this.getSelectedProducts();
                if (!selectedProducts.length) {
                    (0, _toast2.default)('请选择商品');
                    return;
                }
                wx.navigateTo({
                    url: 'orderConfirm?products=' + JSON.stringify(selectedProducts)
                });
            }
        }, _this.getSelectedProducts = function () {
            var result = [];
            _this.list.forEach(function (item) {
                if (item.selected) {
                    result.push({
                        // 这里默认一个商品只能买1个
                        count: 1,
                        id: item.product._id
                    });
                }
            });
            return result;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Card, [{
        key: 'onShow',
        value: function onShow() {
            this.$invoke('footer', 'getCountByOpendId');
        }

        /**
         * 获取选中的商品 
         */

    }, {
        key: 'onLoad',
        value: function onLoad(p) {
            this.methods.getCardList(p.pid);
        }
    }]);

    return Card;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Card , 'pages/card'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImlzU2VsZWN0QWxsIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJjb21wdXRlZCIsInRvdGFsTW9uZXkiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdGVkIiwicHJvZHVjdCIsInBheVByaWNlIiwiY291bnQiLCJhZGFwdFByb2R1Y3RMaXN0IiwibWV0aG9kcyIsImdldENhcmRMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwiJGFwcGx5IiwiY2F0Y2giLCJzZWxlY3RBbGwiLCJpbmRleCIsInNlbGVjdCIsImNhcmQiLCJldmVyeSIsInJlbW92ZSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uZmlybSIsIl9pZCIsIiRpbnZva2UiLCJyZWRpcmVjdFByb2R1Y3REZXRhaWwiLCJyZWRpcmVjdCIsInVybCIsInJlZGlyZWN0VG8iLCJwYXkiLCJzZWxlY3RlZFByb2R1Y3RzIiwiZ2V0U2VsZWN0ZWRQcm9kdWN0cyIsImxlbmd0aCIsIm5hdmlnYXRlVG8iLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImlkIiwicCIsInBpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVRDLEksR0FBTztBQUNKQyxrQkFBTSxJQURGO0FBRUpDLHlCQUFhO0FBRlQsUyxRQUtSQyxNLEdBQVMsRUFBQyxVQUFTLEVB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YUFuRUs7OztBQXFFTjs7O0FBR0FHLG9CQXhFTSxvQkF3RUlDLEdBeEVKLEVBd0VTO0FBQ1h0QixtQkFBR3VCLFVBQUgsQ0FBYztBQUNWRCx5QkFBS0E7QUFESyxpQkFBZDtBQUdILGFBNUVLOzs7QUE4RU47OztBQUdBRSxpQkFBSyxlQUFLO0FBQ04sb0JBQUlDLG1CQUFtQixNQUFLQyxtQkFBTCxFQUF2QjtBQUNBLG9CQUFJLENBQUNELGlCQUFpQkUsTUFBdEIsRUFBOEI7QUFDMUIseUNBQU0sT0FBTjtBQUNBO0FBQ0g7QUFDRDNCLG1CQUFHNEIsVUFBSCxDQUFjO0FBQ1hOLHlCQUFLLDJCQUEyQk8sS0FBS0MsU0FBTCxDQUFlTCxnQkFBZjtBQURyQixpQkFBZDtBQUdIO0FBMUZLLFMsUUFnR1ZDLG1CLEdBQXNCLFlBQU07QUFDeEIsZ0JBQUlwQyxTQUFTLEVBQWI7QUFDQSxrQkFBS1QsSUFBTCxDQUFVVSxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBUztBQUN2QixvQkFBSUEsS0FBS0MsUUFBVCxFQUFtQjtBQUNmSCwyQkFBT3lDLElBQVAsQ0FBWTtBQUNSO0FBQ0FuQywrQkFBTyxDQUZDO0FBR1JvQyw0QkFBSXhDLEtBQUtFLE9BQUwsQ0FBYXdCO0FBSFQscUJBQVo7QUFLSDtBQUNKLGFBUkQ7QUFTQSxtQkFBTzVCLE1BQVA7QUFDSCxTOzs7OztpQ0FuSVM7QUFDTixpQkFBSzZCLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLG1CQUF2QjtBQUNIOztBQWtIRDs7Ozs7OytCQWlCUWMsQyxFQUFHO0FBQ1AsaUJBQUtuQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUJrQyxFQUFFQyxHQUEzQjtBQUNIOzs7O0VBeko2QixlQUFLQyxJOztrQkFBbEIxRCxJIiwiZmlsZSI6ImNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknIFxuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG4gICAgaW1wb3J0IHsgZ2V0Q2FyZEJ5T3BlbmlkLCByZW1vdmUgfSBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSdcbiAgICBpbXBvcnQgYWRhcHRQcm9kdWN0TGlzdCBmcm9tICcuLi9mdW5jdGlvbi9hZGFwdFByb2R1Y3RMaXN0J1xuICAgIGltcG9ydCBwbHVzIGZyb20gJy4uL2Z1bmN0aW9uL3BsdXMnXG4gICAgaW1wb3J0IG11bHRpcGx5IGZyb20gJy4uL2Z1bmN0aW9uL211bHRpcGx5J1xuICAgIGltcG9ydCBjdXJyZW5jeSBmcm9tICcuLi9mdW5jdGlvbi9jdXJyZW5jeSdcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnXG4gICAgaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcbiAgICBpbXBvcnQgdG9hc3QgZnJvbSAnLi4vZnVuY3Rpb24vdG9hc3QnXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9picgXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICBsaXN0OiBudWxsLFxuICAgICAgICAgICBpc1NlbGVjdEFsbDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAkcHJvcHMgPSB7XCJmb290ZXJcIjp7XCJmcm9tXCI6XCJjYXJkXCJ9LFwiY29weXJpZ2h0XCI6e319O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgZm9vdGVyLFxuICAgICAgICAgICAgY29weXJpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgdG90YWxNb25leSAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3Q7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwbHVzKG11bHRpcGx5KGl0ZW0ucHJvZHVjdC5wYXlQcmljZSwgaXRlbS5jb3VudCksIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFkYXB0UHJvZHVjdExpc3QgPSBhZGFwdFByb2R1Y3RMaXN0O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluS6p+WTgeivpuaDhVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRDYXJkTGlzdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTogJ+WKoOi9veS4rSd9KTtcbiAgICAgICAgICAgICAgICBnZXRDYXJkQnlPcGVuaWQoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5hZGFwdFByb2R1Y3RMaXN0KHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubWV0aG9kcy5zZWxlY3RBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5YWo6YCJIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3RBbGw6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSAhdGhpcy5pc1NlbGVjdEFsbDtcbiAgICAgICAgICAgICAgICAvLyDlsIbmiYDmnInkuqflk4HlhajpgInmiJbov5TpgInkuIpcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdEFsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi0reeJqei9puS4remAieaLqeWVhuWTgeaUr+S7mCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0IChjYXJkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGNhcmQuc2VsZWN0ZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIC8vIOWIpOivu+aYr+WQpuacieWFqOmAie+8jOWFqOmAieWwseWwhuWFqOmAieaMiemSruWFqOmAieS9j1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3QuZXZlcnkoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0QWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5bCG5ZWG5ZOB5LuO6LSt54mp6L2m5Lit56e76ZmkIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZW1vdmUgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfnoa7orqTku47otK3nianovabkuK3liKDpmaTvvJ8nLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoaXRlbS5faWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldENhcmRMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWIsOS6p+WTgeivpuaDhSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3RQcm9kdWN0RGV0YWlsIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLnJlZGlyZWN0KCdwcm9kdWN0RGV0YWlsP3BpZD0nICsgaXRlbS5wcm9kdWN0Ll9pZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDkuIvljZUgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBheTogKCk9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkUHJvZHVjdHMgPSB0aGlzLmdldFNlbGVjdGVkUHJvZHVjdHMoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkUHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCfor7fpgInmi6nllYblk4EnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkUHJvZHVjdHMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W6YCJ5Lit55qE5ZWG5ZOBIFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0U2VsZWN0ZWRQcm9kdWN0cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDov5nph4zpu5jorqTkuIDkuKrllYblk4Hlj6rog73kubAx5LiqXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLnByb2R1Y3QuX2lkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCAocCkge1xuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldENhcmRMaXN0KHAucGlkKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==