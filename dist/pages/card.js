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
                    setTimeout(function () {
                        _this.methods.selectAll();
                    });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImlzU2VsZWN0QWxsIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb21wdXRlZCIsInRvdGFsTW9uZXkiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdGVkIiwicHJvZHVjdCIsInBheVByaWNlIiwiYWRhcHRQcm9kdWN0TGlzdCIsIm1ldGhvZHMiLCJnZXRDYXJkTGlzdCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXRUaW1lb3V0Iiwic2VsZWN0QWxsIiwiY2F0Y2giLCJpbmRleCIsInNlbGVjdCIsImNhcmQiLCJldmVyeSIsInJlbW92ZSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInN1Y2Nlc3MiLCJjb25maXJtIiwiX2lkIiwicmVkaXJlY3QiLCJ1cmwiLCJyZWRpcmVjdFRvIiwicGF5Iiwic2VsZWN0ZWRQcm9kdWN0cyIsImdldFNlbGVjdGVkUHJvZHVjdHMiLCJsZW5ndGgiLCJzaG93VG9hc3QiLCJuYXZpZ2F0ZVRvIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJjb3VudCIsImlkIiwicCIsInBpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVRDLEksR0FBTztBQUNKQyxrQkFBTSxFQURGO0FBRUpDLHlCQUFhO0FBRlQsUyxRQUtSQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsUUFBTyxNQUFSLEVBQVYsRSxRQUNoQkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZD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O0FBRHJCLGlCQUFkO0FBR0g7QUFwRkssUyxRQTBGVkMsbUIsR0FBc0IsWUFBTTtBQUN4QixnQkFBSWpDLFNBQVMsRUFBYjtBQUNBLGtCQUFLUixJQUFMLENBQVVTLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFTO0FBQ3ZCLG9CQUFJQSxLQUFLQyxRQUFULEVBQW1CO0FBQ2ZILDJCQUFPdUMsSUFBUCxDQUFZO0FBQ1I7QUFDQUMsK0JBQU8sQ0FGQztBQUdSQyw0QkFBSXZDLEtBQUtFLE9BQUwsQ0FBYXVCO0FBSFQscUJBQVo7QUFLSDtBQUNKLGFBUkQ7QUFTQSxtQkFBTzNCLE1BQVA7QUFDSCxTOzs7OztpQ0F4SFM7QUFDTjtBQUNIOztBQXVHRDs7Ozs7OytCQWlCUTBDLEMsRUFBRztBQUNQLGlCQUFLbkMsT0FBTCxDQUFhQyxXQUFiLENBQXlCa0MsRUFBRUMsR0FBM0I7QUFDSDs7OztFQTdJNkIsZUFBS0MsSTs7a0JBQWxCeEQsSSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JyBcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuICAgIGltcG9ydCB7IGdldENhcmRCeU9wZW5pZCwgcmVtb3ZlIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXG4gICAgaW1wb3J0IGFkYXB0UHJvZHVjdExpc3QgZnJvbSAnLi4vZnVuY3Rpb24vYWRhcHRQcm9kdWN0TGlzdCdcbiAgICBpbXBvcnQgcGx1cyBmcm9tICcuLi9mdW5jdGlvbi9wbHVzJ1xuICAgIGltcG9ydCBjdXJyZW5jeSBmcm9tICcuLi9mdW5jdGlvbi9jdXJyZW5jeSdcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9picgXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgaXNTZWxlY3RBbGw6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICRwcm9wcyA9IHtcImZvb3RlclwiOntcImZyb21cIjpcImNhcmRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgZm9vdGVyXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgLy8gdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgdG90YWxNb25leSAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcGx1cyhpdGVtLnByb2R1Y3QucGF5UHJpY2UsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFkYXB0UHJvZHVjdExpc3QgPSBhZGFwdFByb2R1Y3RMaXN0O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluS6p+WTgeivpuaDhVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRDYXJkTGlzdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgZ2V0Q2FyZEJ5T3BlbmlkKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IHRoaXMuYWRhcHRQcm9kdWN0TGlzdChyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5zZWxlY3RBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlhajpgIkgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdEFsbDogKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdEFsbCA9ICF0aGlzLmlzU2VsZWN0QWxsO1xuICAgICAgICAgICAgICAgIC8vIOWwhuaJgOacieS6p+WTgeWFqOmAieaIlui/lOmAieS4ilxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0QWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6LSt54mp6L2m5Lit6YCJ5oup5ZWG5ZOB5pSv5LuYIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3QgKGNhcmQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gY2FyZC5zZWxlY3RlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgLy8g5Yik6K+75piv5ZCm5pyJ5YWo6YCJ77yM5YWo6YCJ5bCx5bCG5YWo6YCJ5oyJ6ZKu5YWo6YCJ5L2PXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5ldmVyeSgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlsIbllYblk4Hku47otK3nianovabkuK3np7vpmaQgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbW92ZSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ehruiupOWIoOmZpCcgKyBpdGVtLnByb2R1Y3QudGl0bGUgKyAnPycsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZShpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5LiL5Y2VIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwYXk6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFByb2R1Y3RzID0gdGhpcy5nZXRTZWxlY3RlZFByb2R1Y3RzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RlZFByb2R1Y3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nllYblk4EnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRQcm9kdWN0cylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bpgInkuK3nmoTllYblk4EgXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTZWxlY3RlZFByb2R1Y3RzID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOm7mOiupOS4gOS4quWVhuWTgeWPquiDveS5sDHkuKpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ucHJvZHVjdC5faWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QocC5waWQpO1xuICAgICAgICB9XG4gICAgfVxuIl19