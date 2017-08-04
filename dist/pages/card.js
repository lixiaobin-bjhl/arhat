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
            list: [],
            isSelectAll: false
        }, _this.$props = { "footer": { "from": "card" } }, _this.$events = {}, _this.components = {
            footer: _footer2.default
        }, _this.computed = {
            totalMoney: function totalMoney() {
                var result = 0;
                this.list.forEach(function (item) {
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
                wx.showLoading();
                (0, _card.getCardByOpenid)().then(function (res) {
                    wx.hideLoading();
                    _this.list = _this.adaptProductList(res.data);
                    setTimeout(function () {
                        _this.methods.selectAll();
                        _this.$apply();
                    }, 1000);
                }).catch(function () {
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
                    content: '确认删除' + item.product.title + '?',
                    success: function success(res) {
                        if (res.confirm) {
                            (0, _card.remove)(item._id).then(function () {
                                _this2.methods.getCardList();
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
                    wx.showToast({
                        title: '请选择商品'
                    });
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
            // this.$invoke('footer', 'getCountByOpendId');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImlzU2VsZWN0QWxsIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb21wdXRlZCIsInRvdGFsTW9uZXkiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdGVkIiwicHJvZHVjdCIsInBheVByaWNlIiwiY291bnQiLCJhZGFwdFByb2R1Y3RMaXN0IiwibWV0aG9kcyIsImdldENhcmRMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsInNldFRpbWVvdXQiLCJzZWxlY3RBbGwiLCIkYXBwbHkiLCJjYXRjaCIsImluZGV4Iiwic2VsZWN0IiwiY2FyZCIsImV2ZXJ5IiwicmVtb3ZlIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsImNvbmZpcm0iLCJfaWQiLCJyZWRpcmVjdFByb2R1Y3REZXRhaWwiLCJyZWRpcmVjdCIsInVybCIsInJlZGlyZWN0VG8iLCJwYXkiLCJzZWxlY3RlZFByb2R1Y3RzIiwiZ2V0U2VsZWN0ZWRQcm9kdWN0cyIsImxlbmd0aCIsInNob3dUb2FzdCIsIm5hdmlnYXRlVG8iLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImlkIiwicCIsInBpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsSSxHQUFPO0FBQ0pDLGtCQUFNLEVBREY7QUFFSkMseUJBQWE7QUFGVCxTLFFBS1JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxRQUFPLE1BQVIs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RUs7OztBQThFTjs7O0FBR0FFLGlCQUFLLGVBQUs7QUFDTixvQkFBSUMsbUJBQW1CLE1BQUtDLG1CQUFMLEVBQXZCO0FBQ0Esb0JBQUksQ0FBQ0QsaUJBQWlCRSxNQUF0QixFQUE4QjtBQUMxQjNCLHVCQUFHNEIsU0FBSCxDQUFhO0FBQ1RiLCtCQUFPO0FBREUscUJBQWI7QUFHQTtBQUNIO0FBQ0RmLG1CQUFHNkIsVUFBSCxDQUFjO0FBQ1hQLHlCQUFLLDJCQUEyQlEsS0FBS0MsU0FBTCxDQUFlTixnQkFBZjtBQURyQixpQkFBZDtBQUdIO0FBNUZLLFMsUUFrR1ZDLG1CLEdBQXNCLFlBQU07QUFDeEIsZ0JBQUlwQyxTQUFTLEVBQWI7QUFDQSxrQkFBS1IsSUFBTCxDQUFVUyxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBUztBQUN2QixvQkFBSUEsS0FBS0MsUUFBVCxFQUFtQjtBQUNmSCwyQkFBTzBDLElBQVAsQ0FBWTtBQUNSO0FBQ0FwQywrQkFBTyxDQUZDO0FBR1JxQyw0QkFBSXpDLEtBQUtFLE9BQUwsQ0FBYXlCO0FBSFQscUJBQVo7QUFLSDtBQUNKLGFBUkQ7QUFTQSxtQkFBTzdCLE1BQVA7QUFDSCxTOzs7OztpQ0FoSVM7QUFDTjtBQUNIOztBQStHRDs7Ozs7OytCQWlCUTRDLEMsRUFBRztBQUNQLGlCQUFLcEMsT0FBTCxDQUFhQyxXQUFiLENBQXlCbUMsRUFBRUMsR0FBM0I7QUFDSDs7OztFQXJKNkIsZUFBS0MsSTs7a0JBQWxCMUQsSSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JyBcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuICAgIGltcG9ydCB7IGdldENhcmRCeU9wZW5pZCwgcmVtb3ZlIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXG4gICAgaW1wb3J0IGFkYXB0UHJvZHVjdExpc3QgZnJvbSAnLi4vZnVuY3Rpb24vYWRhcHRQcm9kdWN0TGlzdCdcbiAgICBpbXBvcnQgcGx1cyBmcm9tICcuLi9mdW5jdGlvbi9wbHVzJ1xuICAgIGltcG9ydCBtdWx0aXBseSBmcm9tICcuLi9mdW5jdGlvbi9tdWx0aXBseSdcbiAgICBpbXBvcnQgY3VycmVuY3kgZnJvbSAnLi4vZnVuY3Rpb24vY3VycmVuY3knXG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJ1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnIFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgIGlzU2VsZWN0QWxsOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAkcHJvcHMgPSB7XCJmb290ZXJcIjp7XCJmcm9tXCI6XCJjYXJkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGZvb3RlclxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIHRvdGFsTW9uZXkgKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBsdXMobXVsdGlwbHkoaXRlbS5wcm9kdWN0LnBheVByaWNlLCBpdGVtLmNvdW50KSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWRhcHRQcm9kdWN0TGlzdCA9IGFkYXB0UHJvZHVjdExpc3Q7XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6I635Y+W5Lqn5ZOB6K+m5oOFXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldENhcmRMaXN0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBnZXRDYXJkQnlPcGVuaWQoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5hZGFwdFByb2R1Y3RMaXN0KHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLnNlbGVjdEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5YWo6YCJIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3RBbGw6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSAhdGhpcy5pc1NlbGVjdEFsbDtcbiAgICAgICAgICAgICAgICAvLyDlsIbmiYDmnInkuqflk4HlhajpgInmiJbov5TpgInkuIpcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnNlbGVjdGVkID0gdGhpcy5pc1NlbGVjdEFsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi0reeJqei9puS4remAieaLqeWVhuWTgeaUr+S7mCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0IChjYXJkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGNhcmQuc2VsZWN0ZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIC8vIOWIpOivu+aYr+WQpuacieWFqOmAie+8jOWFqOmAieWwseWwhuWFqOmAieaMiemSruWFqOmAieS9j1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3QuZXZlcnkoKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0QWxsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0QWxsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5bCG5ZWG5ZOB5LuO6LSt54mp6L2m5Lit56e76ZmkIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZW1vdmUgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfnoa7orqTliKDpmaQnICsgaXRlbS5wcm9kdWN0LnRpdGxlICsgJz8nLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoaXRlbS5faWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldENhcmRMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Yiw5Lqn5ZOB6K+m5oOFIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdFByb2R1Y3REZXRhaWwgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ3Byb2R1Y3REZXRhaWw/cGlkPScgKyBpdGVtLnByb2R1Y3QuX2lkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOS4i+WNlSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGF5OiAoKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRQcm9kdWN0cyA9IHRoaXMuZ2V0U2VsZWN0ZWRQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWRQcm9kdWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5ZWG5ZOBJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkUHJvZHVjdHMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W6YCJ5Lit55qE5ZWG5ZOBIFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0U2VsZWN0ZWRQcm9kdWN0cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDov5nph4zpu5jorqTkuIDkuKrllYblk4Hlj6rog73kubAx5LiqXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLnByb2R1Y3QuX2lkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCAocCkge1xuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldENhcmRMaXN0KHAucGlkKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==