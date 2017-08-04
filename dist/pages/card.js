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
            isSelectAll: true
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
                    // this.methods.selectAll();
                    // this.$apply();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImlzU2VsZWN0QWxsIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb21wdXRlZCIsInRvdGFsTW9uZXkiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdGVkIiwicHJvZHVjdCIsInBheVByaWNlIiwiY291bnQiLCJhZGFwdFByb2R1Y3RMaXN0IiwibWV0aG9kcyIsImdldENhcmRMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsImNhdGNoIiwic2VsZWN0QWxsIiwiaW5kZXgiLCJzZWxlY3QiLCJjYXJkIiwiZXZlcnkiLCJyZW1vdmUiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uZmlybSIsIl9pZCIsInJlZGlyZWN0UHJvZHVjdERldGFpbCIsInJlZGlyZWN0IiwidXJsIiwicmVkaXJlY3RUbyIsInBheSIsInNlbGVjdGVkUHJvZHVjdHMiLCJnZXRTZWxlY3RlZFByb2R1Y3RzIiwibGVuZ3RoIiwic2hvd1RvYXN0IiwibmF2aWdhdGVUbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiaWQiLCJwIiwicGlkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSkMsa0JBQU0sRUFERjtBQUVKQyx5QkFBYTtBQUZULFMsUUFLUkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLFFBQU8sTUFBUixFQUFWLEUsUUFDaEJDLE8sR0FBVSxF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QThCO0FBQzFCekIsdUJBQUcwQixTQUFILENBQWE7QUFDVGIsK0JBQU87QUFERSxxQkFBYjtBQUdBO0FBQ0g7QUFDRGIsbUJBQUcyQixVQUFILENBQWM7QUFDWFAseUJBQUssMkJBQTJCUSxLQUFLQyxTQUFMLENBQWVOLGdCQUFmO0FBRHJCLGlCQUFkO0FBR0g7QUExRkssUyxRQWdHVkMsbUIsR0FBc0IsWUFBTTtBQUN4QixnQkFBSWxDLFNBQVMsRUFBYjtBQUNBLGtCQUFLUixJQUFMLENBQVVTLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFTO0FBQ3ZCLG9CQUFJQSxLQUFLQyxRQUFULEVBQW1CO0FBQ2ZILDJCQUFPd0MsSUFBUCxDQUFZO0FBQ1I7QUFDQWxDLCtCQUFPLENBRkM7QUFHUm1DLDRCQUFJdkMsS0FBS0UsT0FBTCxDQUFhdUI7QUFIVCxxQkFBWjtBQUtIO0FBQ0osYUFSRDtBQVNBLG1CQUFPM0IsTUFBUDtBQUNILFM7Ozs7O2lDQTlIUztBQUNOO0FBQ0g7O0FBNkdEOzs7Ozs7K0JBaUJRMEMsQyxFQUFHO0FBQ1AsaUJBQUtsQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUJpQyxFQUFFQyxHQUEzQjtBQUNIOzs7O0VBbko2QixlQUFLQyxJOztrQkFBbEJ4RCxJIiwiZmlsZSI6ImNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknIFxuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG4gICAgaW1wb3J0IHsgZ2V0Q2FyZEJ5T3BlbmlkLCByZW1vdmUgfSBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSdcbiAgICBpbXBvcnQgYWRhcHRQcm9kdWN0TGlzdCBmcm9tICcuLi9mdW5jdGlvbi9hZGFwdFByb2R1Y3RMaXN0J1xuICAgIGltcG9ydCBwbHVzIGZyb20gJy4uL2Z1bmN0aW9uL3BsdXMnXG4gICAgaW1wb3J0IG11bHRpcGx5IGZyb20gJy4uL2Z1bmN0aW9uL211bHRpcGx5J1xuICAgIGltcG9ydCBjdXJyZW5jeSBmcm9tICcuLi9mdW5jdGlvbi9jdXJyZW5jeSdcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9picgXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgaXNTZWxlY3RBbGw6IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgJHByb3BzID0ge1wiZm9vdGVyXCI6e1wiZnJvbVwiOlwiY2FyZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBmb290ZXJcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICAvLyB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICB0b3RhbE1vbmV5ICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwbHVzKG11bHRpcGx5KGl0ZW0ucHJvZHVjdC5wYXlQcmljZSwgaXRlbS5jb3VudCksIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFkYXB0UHJvZHVjdExpc3QgPSBhZGFwdFByb2R1Y3RMaXN0O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluS6p+WTgeivpuaDhVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRDYXJkTGlzdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgZ2V0Q2FyZEJ5T3BlbmlkKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IHRoaXMuYWRhcHRQcm9kdWN0TGlzdChyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm1ldGhvZHMuc2VsZWN0QWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlhajpgIkgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdEFsbDogKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdEFsbCA9ICF0aGlzLmlzU2VsZWN0QWxsO1xuICAgICAgICAgICAgICAgIC8vIOWwhuaJgOacieS6p+WTgeWFqOmAieaIlui/lOmAieS4ilxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0QWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6LSt54mp6L2m5Lit6YCJ5oup5ZWG5ZOB5pSv5LuYIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3QgKGNhcmQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gY2FyZC5zZWxlY3RlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgLy8g5Yik6K+75piv5ZCm5pyJ5YWo6YCJ77yM5YWo6YCJ5bCx5bCG5YWo6YCJ5oyJ6ZKu5YWo6YCJ5L2PXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5ldmVyeSgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlsIbllYblk4Hku47otK3nianovabkuK3np7vpmaQgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbW92ZSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ehruiupOWIoOmZpCcgKyBpdGVtLnByb2R1Y3QudGl0bGUgKyAnPycsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZShpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazliLDkuqflk4Hor6bmg4UgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0UHJvZHVjdERldGFpbCAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5yZWRpcmVjdCgncHJvZHVjdERldGFpbD9waWQ9JyArIGl0ZW0ucHJvZHVjdC5faWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5LiL5Y2VIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwYXk6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFByb2R1Y3RzID0gdGhpcy5nZXRTZWxlY3RlZFByb2R1Y3RzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RlZFByb2R1Y3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nllYblk4EnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRQcm9kdWN0cylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bpgInkuK3nmoTllYblk4EgXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTZWxlY3RlZFByb2R1Y3RzID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOm7mOiupOS4gOS4quWVhuWTgeWPquiDveS5sDHkuKpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ucHJvZHVjdC5faWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QocC5waWQpO1xuICAgICAgICB9XG4gICAgfVxuIl19