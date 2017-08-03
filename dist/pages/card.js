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
                        result = (0, _plus2.default)(item.product.payPrice, result);
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
                }).catch(function () {
                    wx.hideLoading();
                });
            },
            /**
             * 全选 
             */
            selectAll: function selectAll() {
                var _this2 = this;

                this.isSelectAll = !this.isSelectAll;
                // 将所有产品全选或返选上
                this.list.forEach(function (item, index) {
                    _this2.list[index].selected = _this2.isSelectAll;
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
                var _this3 = this;

                wx.showModal({
                    title: '提示',
                    content: '确认删除' + item.product.title + '?',
                    success: function success(res) {
                        if (res.confirm) {
                            (0, _card.remove)(item._id).then(function () {
                                _this3.methods.getCardList();
                            });
                        }
                    }
                });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImlzU2VsZWN0QWxsIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb21wdXRlZCIsInRvdGFsTW9uZXkiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdGVkIiwicHJvZHVjdCIsInBheVByaWNlIiwiYWRhcHRQcm9kdWN0TGlzdCIsIm1ldGhvZHMiLCJnZXRDYXJkTGlzdCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJjYXRjaCIsInNlbGVjdEFsbCIsImluZGV4Iiwic2VsZWN0IiwiY2FyZCIsImV2ZXJ5IiwicmVtb3ZlIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsImNvbmZpcm0iLCJfaWQiLCJyZWRpcmVjdCIsInVybCIsInJlZGlyZWN0VG8iLCJwYXkiLCJzZWxlY3RlZFByb2R1Y3RzIiwiZ2V0U2VsZWN0ZWRQcm9kdWN0cyIsImxlbmd0aCIsInNob3dUb2FzdCIsIm5hdmlnYXRlVG8iLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImNvdW50IiwiaWQiLCJwIiwicGlkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsSSxHQUFPO0FBQ0pDLGtCQUFNLEVBREY7QUFFSkMseUJBQWE7QUFGVCxTLFFBS1JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxRQUFPLE1BQVIsRUFBVixFLFFBQ2hCQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkM7QUFERSxTLFFBUU5D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LEVBQWI7QUFDQSxrQkFBS1IsSUFBTCxDQUFVUyxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBUztBQUN2QixvQkFBSUEsS0FBS0MsUUFBVCxFQUFtQjtBQUNmSCwyQkFBT3NDLElBQVAsQ0FBWTtBQUNSO0FBQ0FDLCtCQUFPLENBRkM7QUFHUkMsNEJBQUl0QyxLQUFLRSxPQUFMLENBQWFzQjtBQUhULHFCQUFaO0FBS0g7QUFDSixhQVJEO0FBU0EsbUJBQU8xQixNQUFQO0FBQ0gsUzs7Ozs7aUNBckhTO0FBQ047QUFDSDs7QUFvR0Q7Ozs7OzsrQkFpQlF5QyxDLEVBQUc7QUFDUCxpQkFBS2xDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QmlDLEVBQUVDLEdBQTNCO0FBQ0g7Ozs7RUExSTZCLGVBQUtDLEk7O2tCQUFsQnZELEkiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweScgXG4gICAgaW1wb3J0IGZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcbiAgICBpbXBvcnQgeyBnZXRDYXJkQnlPcGVuaWQsIHJlbW92ZSB9IGZyb20gJy4uL3NlcnZpY2UvY2FyZCdcbiAgICBpbXBvcnQgY29tcHJlc3NJbWFnZSBmcm9tICcuLi9mdW5jdGlvbi9jb21wcmVzc0ltYWdlJ1xuICAgIGltcG9ydCBhZGFwdFByb2R1Y3RMaXN0IGZyb20gJy4uL2Z1bmN0aW9uL2FkYXB0UHJvZHVjdExpc3QnXG4gICAgaW1wb3J0IHBsdXMgZnJvbSAnLi4vZnVuY3Rpb24vcGx1cydcbiAgICBpbXBvcnQgY3VycmVuY3kgZnJvbSAnLi4vZnVuY3Rpb24vY3VycmVuY3knXG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJ1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnIFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgIGlzU2VsZWN0QWxsOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAkcHJvcHMgPSB7XCJmb290ZXJcIjp7XCJmcm9tXCI6XCJjYXJkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGZvb3RlclxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIHRvdGFsTW9uZXkgKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBsdXMoaXRlbS5wcm9kdWN0LnBheVByaWNlLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhZGFwdFByb2R1Y3RMaXN0ID0gYWRhcHRQcm9kdWN0TGlzdDtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDojrflj5bkuqflk4Hor6bmg4VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0Q2FyZExpc3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xuICAgICAgICAgICAgICAgIGdldENhcmRCeU9wZW5pZCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IHRoaXMuYWRhcHRQcm9kdWN0TGlzdChyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlhajpgIkgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdEFsbCAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdEFsbCA9ICF0aGlzLmlzU2VsZWN0QWxsO1xuICAgICAgICAgICAgICAgIC8vIOWwhuaJgOacieS6p+WTgeWFqOmAieaIlui/lOmAieS4ilxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0QWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6LSt54mp6L2m5Lit6YCJ5oup5ZWG5ZOB5pSv5LuYIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3QgKGNhcmQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gY2FyZC5zZWxlY3RlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgLy8g5Yik6K+75piv5ZCm5pyJ5YWo6YCJ77yM5YWo6YCJ5bCx5bCG5YWo6YCJ5oyJ6ZKu5YWo6YCJ5L2PXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5ldmVyeSgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlsIbllYblk4Hku47otK3nianovabkuK3np7vpmaQgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbW92ZSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ehruiupOWIoOmZpCcgKyBpdGVtLnByb2R1Y3QudGl0bGUgKyAnPycsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZShpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5LiL5Y2VIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwYXk6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFByb2R1Y3RzID0gdGhpcy5nZXRTZWxlY3RlZFByb2R1Y3RzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RlZFByb2R1Y3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nllYblk4EnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRQcm9kdWN0cylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bpgInkuK3nmoTllYblk4EgXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTZWxlY3RlZFByb2R1Y3RzID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOm7mOiupOS4gOS4quWVhuWTgeWPquiDveS5sDHkuKpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ucHJvZHVjdC5faWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QocC5waWQpO1xuICAgICAgICB9XG4gICAgfVxuIl19