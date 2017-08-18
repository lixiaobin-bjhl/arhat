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
            list: [],
            isSelectAll: true
        }, _this.$props = { "footer": { "from": "card" } }, _this.$events = {}, _this.components = {
            footer: _footer2.default,
            copyright: _copyright2.default
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
                wx.showLoading({ title: '加载中' });
                (0, _card.getCardByOpenid)().then(function (res) {
                    wx.hideLoading();
                    _this.list = _this.adaptProductList(res.data);
                    // this.methods.selectAll();
                    _this.$apply();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImlzU2VsZWN0QWxsIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJjb21wdXRlZCIsInRvdGFsTW9uZXkiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdGVkIiwicHJvZHVjdCIsInBheVByaWNlIiwiY291bnQiLCJhZGFwdFByb2R1Y3RMaXN0IiwibWV0aG9kcyIsImdldENhcmRMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwiJGFwcGx5IiwiY2F0Y2giLCJzZWxlY3RBbGwiLCJpbmRleCIsInNlbGVjdCIsImNhcmQiLCJldmVyeSIsInJlbW92ZSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uZmlybSIsIl9pZCIsIiRpbnZva2UiLCJyZWRpcmVjdFByb2R1Y3REZXRhaWwiLCJyZWRpcmVjdCIsInVybCIsInJlZGlyZWN0VG8iLCJwYXkiLCJzZWxlY3RlZFByb2R1Y3RzIiwiZ2V0U2VsZWN0ZWRQcm9kdWN0cyIsImxlbmd0aCIsIm5hdmlnYXRlVG8iLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImlkIiwicCIsInBpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVRDLEksR0FBTztBQUNKQyxrQkFBTSxFQURGO0FBRUpDLHlCQUFhO0FBRlQsUyxRQUtSQyxNLEdBQVMsRUFBQyxVQUFTLEVB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VkQseUJBQUtBO0FBREssaUJBQWQ7QUFHSCxhQTNFSzs7O0FBNkVOOzs7QUFHQUUsaUJBQUssZUFBSztBQUNOLG9CQUFJQyxtQkFBbUIsTUFBS0MsbUJBQUwsRUFBdkI7QUFDQSxvQkFBSSxDQUFDRCxpQkFBaUJFLE1BQXRCLEVBQThCO0FBQzFCLHlDQUFNLE9BQU47QUFDQTtBQUNIO0FBQ0QzQixtQkFBRzRCLFVBQUgsQ0FBYztBQUNYTix5QkFBSywyQkFBMkJPLEtBQUtDLFNBQUwsQ0FBZUwsZ0JBQWY7QUFEckIsaUJBQWQ7QUFHSDtBQXpGSyxTLFFBK0ZWQyxtQixHQUFzQixZQUFNO0FBQ3hCLGdCQUFJcEMsU0FBUyxFQUFiO0FBQ0Esa0JBQUtULElBQUwsQ0FBVVUsT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQVM7QUFDdkIsb0JBQUlBLEtBQUtDLFFBQVQsRUFBbUI7QUFDZkgsMkJBQU95QyxJQUFQLENBQVk7QUFDUjtBQUNBbkMsK0JBQU8sQ0FGQztBQUdSb0MsNEJBQUl4QyxLQUFLRSxPQUFMLENBQWF3QjtBQUhULHFCQUFaO0FBS0g7QUFDSixhQVJEO0FBU0EsbUJBQU81QixNQUFQO0FBQ0gsUzs7Ozs7aUNBN0hTO0FBQ04saUJBQUs2QixPQUFMLENBQWEsUUFBYixFQUF1QixtQkFBdkI7QUFDSDs7QUE0R0Q7Ozs7OzsrQkFpQlFjLEMsRUFBRztBQUNQLGlCQUFLbkMsT0FBTCxDQUFhQyxXQUFiLENBQXlCa0MsRUFBRUMsR0FBM0I7QUFDSDs7OztFQW5KNkIsZUFBS0MsSTs7a0JBQWxCMUQsSSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JyBcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuICAgIGltcG9ydCB7IGdldENhcmRCeU9wZW5pZCwgcmVtb3ZlIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXG4gICAgaW1wb3J0IGFkYXB0UHJvZHVjdExpc3QgZnJvbSAnLi4vZnVuY3Rpb24vYWRhcHRQcm9kdWN0TGlzdCdcbiAgICBpbXBvcnQgcGx1cyBmcm9tICcuLi9mdW5jdGlvbi9wbHVzJ1xuICAgIGltcG9ydCBtdWx0aXBseSBmcm9tICcuLi9mdW5jdGlvbi9tdWx0aXBseSdcbiAgICBpbXBvcnQgY3VycmVuY3kgZnJvbSAnLi4vZnVuY3Rpb24vY3VycmVuY3knXG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJ1xuICAgIGltcG9ydCBjb3B5cmlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnXG4gICAgaW1wb3J0IHRvYXN0IGZyb20gJy4uL2Z1bmN0aW9uL3RvYXN0J1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnIFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgIGlzU2VsZWN0QWxsOiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICRwcm9wcyA9IHtcImZvb3RlclwiOntcImZyb21cIjpcImNhcmRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgZm9vdGVyLFxuICAgICAgICAgICAgY29weXJpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgdG90YWxNb25leSAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcGx1cyhtdWx0aXBseShpdGVtLnByb2R1Y3QucGF5UHJpY2UsIGl0ZW0uY291bnQpLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhZGFwdFByb2R1Y3RMaXN0ID0gYWRhcHRQcm9kdWN0TGlzdDtcblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDojrflj5bkuqflk4Hor6bmg4VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0Q2FyZExpc3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7dGl0bGU6ICfliqDovb3kuK0nfSk7XG4gICAgICAgICAgICAgICAgZ2V0Q2FyZEJ5T3BlbmlkKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IHRoaXMuYWRhcHRQcm9kdWN0TGlzdChyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm1ldGhvZHMuc2VsZWN0QWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlhajpgIkgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdEFsbDogKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdEFsbCA9ICF0aGlzLmlzU2VsZWN0QWxsO1xuICAgICAgICAgICAgICAgIC8vIOWwhuaJgOacieS6p+WTgeWFqOmAieaIlui/lOmAieS4ilxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0QWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6LSt54mp6L2m5Lit6YCJ5oup5ZWG5ZOB5pSv5LuYIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3QgKGNhcmQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gY2FyZC5zZWxlY3RlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgLy8g5Yik6K+75piv5ZCm5pyJ5YWo6YCJ77yM5YWo6YCJ5bCx5bCG5YWo6YCJ5oyJ6ZKu5YWo6YCJ5L2PXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5ldmVyeSgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlsIbllYblk4Hku47otK3nianovabkuK3np7vpmaQgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbW92ZSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ehruiupOWIoOmZpCcgKyBpdGVtLnByb2R1Y3QudGl0bGUgKyAnPycsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZShpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Yiw5Lqn5ZOB6K+m5oOFIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdFByb2R1Y3REZXRhaWwgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ3Byb2R1Y3REZXRhaWw/cGlkPScgKyBpdGVtLnByb2R1Y3QuX2lkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOS4i+WNlSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGF5OiAoKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRQcm9kdWN0cyA9IHRoaXMuZ2V0U2VsZWN0ZWRQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWRQcm9kdWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ+ivt+mAieaLqeWVhuWTgScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRQcm9kdWN0cylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bpgInkuK3nmoTllYblk4EgXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTZWxlY3RlZFByb2R1Y3RzID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOm7mOiupOS4gOS4quWVhuWTgeWPquiDveS5sDHkuKpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ucHJvZHVjdC5faWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QocC5waWQpO1xuICAgICAgICB9XG4gICAgfVxuIl19