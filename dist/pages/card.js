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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImlzU2VsZWN0QWxsIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb21wdXRlZCIsInRvdGFsTW9uZXkiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdGVkIiwicHJvZHVjdCIsInBheVByaWNlIiwiY291bnQiLCJhZGFwdFByb2R1Y3RMaXN0IiwibWV0aG9kcyIsImdldENhcmRMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsIiRhcHBseSIsImNhdGNoIiwic2VsZWN0QWxsIiwiaW5kZXgiLCJzZWxlY3QiLCJjYXJkIiwiZXZlcnkiLCJyZW1vdmUiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uZmlybSIsIl9pZCIsIiRpbnZva2UiLCJyZWRpcmVjdFByb2R1Y3REZXRhaWwiLCJyZWRpcmVjdCIsInVybCIsInJlZGlyZWN0VG8iLCJwYXkiLCJzZWxlY3RlZFByb2R1Y3RzIiwiZ2V0U2VsZWN0ZWRQcm9kdWN0cyIsImxlbmd0aCIsInNob3dUb2FzdCIsIm5hdmlnYXRlVG8iLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImlkIiwicCIsInBpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsSSxHQUFPO0FBQ0pDLGtCQUFNLEVBREY7QUFFSkMseUJBQWE7QUFGVCxTLFFBS1JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxRQUFPLE1BQVIsRUFB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QUs7QUFDTixvQkFBSUMsbUJBQW1CLE1BQUtDLG1CQUFMLEVBQXZCO0FBQ0Esb0JBQUksQ0FBQ0QsaUJBQWlCRSxNQUF0QixFQUE4QjtBQUMxQjNCLHVCQUFHNEIsU0FBSCxDQUFhO0FBQ1RkLCtCQUFPO0FBREUscUJBQWI7QUFHQTtBQUNIO0FBQ0RkLG1CQUFHNkIsVUFBSCxDQUFjO0FBQ1hQLHlCQUFLLDJCQUEyQlEsS0FBS0MsU0FBTCxDQUFlTixnQkFBZjtBQURyQixpQkFBZDtBQUdIO0FBM0ZLLFMsUUFpR1ZDLG1CLEdBQXNCLFlBQU07QUFDeEIsZ0JBQUlwQyxTQUFTLEVBQWI7QUFDQSxrQkFBS1IsSUFBTCxDQUFVUyxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBUztBQUN2QixvQkFBSUEsS0FBS0MsUUFBVCxFQUFtQjtBQUNmSCwyQkFBTzBDLElBQVAsQ0FBWTtBQUNSO0FBQ0FwQywrQkFBTyxDQUZDO0FBR1JxQyw0QkFBSXpDLEtBQUtFLE9BQUwsQ0FBYXdCO0FBSFQscUJBQVo7QUFLSDtBQUNKLGFBUkQ7QUFTQSxtQkFBTzVCLE1BQVA7QUFDSCxTOzs7OztpQ0EvSFM7QUFDTixpQkFBSzZCLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLG1CQUF2QjtBQUNIOztBQThHRDs7Ozs7OytCQWlCUWUsQyxFQUFHO0FBQ1AsaUJBQUtwQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUJtQyxFQUFFQyxHQUEzQjtBQUNIOzs7O0VBcEo2QixlQUFLQyxJOztrQkFBbEIxRCxJIiwiZmlsZSI6ImNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknIFxuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG4gICAgaW1wb3J0IHsgZ2V0Q2FyZEJ5T3BlbmlkLCByZW1vdmUgfSBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSdcbiAgICBpbXBvcnQgYWRhcHRQcm9kdWN0TGlzdCBmcm9tICcuLi9mdW5jdGlvbi9hZGFwdFByb2R1Y3RMaXN0J1xuICAgIGltcG9ydCBwbHVzIGZyb20gJy4uL2Z1bmN0aW9uL3BsdXMnXG4gICAgaW1wb3J0IG11bHRpcGx5IGZyb20gJy4uL2Z1bmN0aW9uL211bHRpcGx5J1xuICAgIGltcG9ydCBjdXJyZW5jeSBmcm9tICcuLi9mdW5jdGlvbi9jdXJyZW5jeSdcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9picgXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgaXNTZWxlY3RBbGw6IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgJHByb3BzID0ge1wiZm9vdGVyXCI6e1wiZnJvbVwiOlwiY2FyZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBmb290ZXJcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICB0b3RhbE1vbmV5ICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwbHVzKG11bHRpcGx5KGl0ZW0ucHJvZHVjdC5wYXlQcmljZSwgaXRlbS5jb3VudCksIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVuY3kocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFkYXB0UHJvZHVjdExpc3QgPSBhZGFwdFByb2R1Y3RMaXN0O1xuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluS6p+WTgeivpuaDhVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRDYXJkTGlzdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgZ2V0Q2FyZEJ5T3BlbmlkKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IHRoaXMuYWRhcHRQcm9kdWN0TGlzdChyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm1ldGhvZHMuc2VsZWN0QWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlhajpgIkgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdEFsbDogKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdEFsbCA9ICF0aGlzLmlzU2VsZWN0QWxsO1xuICAgICAgICAgICAgICAgIC8vIOWwhuaJgOacieS6p+WTgeWFqOmAieaIlui/lOmAieS4ilxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWQgPSB0aGlzLmlzU2VsZWN0QWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6LSt54mp6L2m5Lit6YCJ5oup5ZWG5ZOB5pSv5LuYIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3QgKGNhcmQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gY2FyZC5zZWxlY3RlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgLy8g5Yik6K+75piv5ZCm5pyJ5YWo6YCJ77yM5YWo6YCJ5bCx5bCG5YWo6YCJ5oyJ6ZKu5YWo6YCJ5L2PXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5ldmVyeSgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxlY3RBbGwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlsIbllYblk4Hku47otK3nianovabkuK3np7vpmaQgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbW92ZSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ehruiupOWIoOmZpCcgKyBpdGVtLnByb2R1Y3QudGl0bGUgKyAnPycsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZShpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Yiw5Lqn5ZOB6K+m5oOFIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdFByb2R1Y3REZXRhaWwgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ3Byb2R1Y3REZXRhaWw/cGlkPScgKyBpdGVtLnByb2R1Y3QuX2lkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOS4i+WNlSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGF5OiAoKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRQcm9kdWN0cyA9IHRoaXMuZ2V0U2VsZWN0ZWRQcm9kdWN0cygpO1xuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWRQcm9kdWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5ZWG5ZOBJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkUHJvZHVjdHMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W6YCJ5Lit55qE5ZWG5ZOBIFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0U2VsZWN0ZWRQcm9kdWN0cyA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDov5nph4zpu5jorqTkuIDkuKrllYblk4Hlj6rog73kubAx5LiqXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLnByb2R1Y3QuX2lkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCAocCkge1xuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldENhcmRMaXN0KHAucGlkKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==