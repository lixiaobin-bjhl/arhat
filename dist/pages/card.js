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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImlzU2VsZWN0QWxsIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJjb21wdXRlZCIsInRvdGFsTW9uZXkiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdGVkIiwicHJvZHVjdCIsInBheVByaWNlIiwiY291bnQiLCJhZGFwdFByb2R1Y3RMaXN0IiwibWV0aG9kcyIsImdldENhcmRMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsIiRhcHBseSIsImNhdGNoIiwic2VsZWN0QWxsIiwiaW5kZXgiLCJzZWxlY3QiLCJjYXJkIiwiZXZlcnkiLCJyZW1vdmUiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uZmlybSIsIl9pZCIsIiRpbnZva2UiLCJyZWRpcmVjdFByb2R1Y3REZXRhaWwiLCJyZWRpcmVjdCIsInVybCIsInJlZGlyZWN0VG8iLCJwYXkiLCJzZWxlY3RlZFByb2R1Y3RzIiwiZ2V0U2VsZWN0ZWRQcm9kdWN0cyIsImxlbmd0aCIsInNob3dUb2FzdCIsIm5hdmlnYXRlVG8iLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImlkIiwicCIsInBpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSkMsa0JBQU0sRUFERjtBQUVKQyx5QkFBYTtBQUZULFMsUUFLUkMsTSxHQUFTLEVBQUMsVUFB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R0gsYUEzRUs7OztBQTZFTjs7O0FBR0FFLGlCQUFLLGVBQUs7QUFDTixvQkFBSUMsbUJBQW1CLE1BQUtDLG1CQUFMLEVBQXZCO0FBQ0Esb0JBQUksQ0FBQ0QsaUJBQWlCRSxNQUF0QixFQUE4QjtBQUMxQjNCLHVCQUFHNEIsU0FBSCxDQUFhO0FBQ1RkLCtCQUFPO0FBREUscUJBQWI7QUFHQTtBQUNIO0FBQ0RkLG1CQUFHNkIsVUFBSCxDQUFjO0FBQ1hQLHlCQUFLLDJCQUEyQlEsS0FBS0MsU0FBTCxDQUFlTixnQkFBZjtBQURyQixpQkFBZDtBQUdIO0FBM0ZLLFMsUUFpR1ZDLG1CLEdBQXNCLFlBQU07QUFDeEIsZ0JBQUlwQyxTQUFTLEVBQWI7QUFDQSxrQkFBS1QsSUFBTCxDQUFVVSxPQUFWLENBQWtCLFVBQUNDLElBQUQsRUFBUztBQUN2QixvQkFBSUEsS0FBS0MsUUFBVCxFQUFtQjtBQUNmSCwyQkFBTzBDLElBQVAsQ0FBWTtBQUNSO0FBQ0FwQywrQkFBTyxDQUZDO0FBR1JxQyw0QkFBSXpDLEtBQUtFLE9BQUwsQ0FBYXdCO0FBSFQscUJBQVo7QUFLSDtBQUNKLGFBUkQ7QUFTQSxtQkFBTzVCLE1BQVA7QUFDSCxTOzs7OztpQ0EvSFM7QUFDTixpQkFBSzZCLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLG1CQUF2QjtBQUNIOztBQThHRDs7Ozs7OytCQWlCUWUsQyxFQUFHO0FBQ1AsaUJBQUtwQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUJtQyxFQUFFQyxHQUEzQjtBQUNIOzs7O0VBcko2QixlQUFLQyxJOztrQkFBbEIzRCxJIiwiZmlsZSI6ImNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknIFxuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG4gICAgaW1wb3J0IHsgZ2V0Q2FyZEJ5T3BlbmlkLCByZW1vdmUgfSBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSdcbiAgICBpbXBvcnQgYWRhcHRQcm9kdWN0TGlzdCBmcm9tICcuLi9mdW5jdGlvbi9hZGFwdFByb2R1Y3RMaXN0J1xuICAgIGltcG9ydCBwbHVzIGZyb20gJy4uL2Z1bmN0aW9uL3BsdXMnXG4gICAgaW1wb3J0IG11bHRpcGx5IGZyb20gJy4uL2Z1bmN0aW9uL211bHRpcGx5J1xuICAgIGltcG9ydCBjdXJyZW5jeSBmcm9tICcuLi9mdW5jdGlvbi9jdXJyZW5jeSdcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnXG4gICAgaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LSt54mp6L2mJyBcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICBpc1NlbGVjdEFsbDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAkcHJvcHMgPSB7XCJmb290ZXJcIjp7XCJmcm9tXCI6XCJjYXJkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGZvb3RlcixcbiAgICAgICAgICAgIGNvcHlyaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIHRvdGFsTW9uZXkgKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBsdXMobXVsdGlwbHkoaXRlbS5wcm9kdWN0LnBheVByaWNlLCBpdGVtLmNvdW50KSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWRhcHRQcm9kdWN0TGlzdCA9IGFkYXB0UHJvZHVjdExpc3Q7XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6I635Y+W5Lqn5ZOB6K+m5oOFXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldENhcmRMaXN0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBnZXRDYXJkQnlPcGVuaWQoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5hZGFwdFByb2R1Y3RMaXN0KHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubWV0aG9kcy5zZWxlY3RBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWFqOmAiSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0QWxsOiAoKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0QWxsID0gIXRoaXMuaXNTZWxlY3RBbGw7XG4gICAgICAgICAgICAgICAgLy8g5bCG5omA5pyJ5Lqn5ZOB5YWo6YCJ5oiW6L+U6YCJ5LiKXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5zZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RBbGw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDotK3nianovabkuK3pgInmi6nllYblk4HmlK/ku5ggXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdCAoY2FyZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBjYXJkLnNlbGVjdGVkID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgICAgICAvLyDliKTor7vmmK/lkKbmnInlhajpgInvvIzlhajpgInlsLHlsIblhajpgInmjInpkq7lhajpgInkvY9cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0LmV2ZXJ5KChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdEFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWwhuWVhuWTgeS7jui0reeJqei9puS4reenu+mZpCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVtb3ZlIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn56Gu6K6k5Yig6ZmkJyArIGl0ZW0ucHJvZHVjdC50aXRsZSArICc/JyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKGl0ZW0uX2lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRDYXJkTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazliLDkuqflk4Hor6bmg4UgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0UHJvZHVjdERldGFpbCAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5yZWRpcmVjdCgncHJvZHVjdERldGFpbD9waWQ9JyArIGl0ZW0ucHJvZHVjdC5faWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5LiL5Y2VIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwYXk6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFByb2R1Y3RzID0gdGhpcy5nZXRTZWxlY3RlZFByb2R1Y3RzKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RlZFByb2R1Y3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nllYblk4EnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRQcm9kdWN0cylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5bpgInkuK3nmoTllYblk4EgXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTZWxlY3RlZFByb2R1Y3RzID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOm7mOiupOS4gOS4quWVhuWTgeWPquiDveS5sDHkuKpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ucHJvZHVjdC5faWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QocC5waWQpO1xuICAgICAgICB9XG4gICAgfVxuIl19