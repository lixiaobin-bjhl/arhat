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
        }, _this.methods = {
            /**
             * 获取产品详情
             */
            getCardList: function getCardList() {
                wx.showLoading();
                (0, _card.getCardByOpenid)().then(function (res) {
                    wx.hideLoading();
                    _this.list = res.data.list;
                    _this.$apply();
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

                (0, _card.remove)(item._id).then(function () {
                    _this3.methods.getCardList();
                    _this3.$invoke('footer', 'getCountByOpendId');;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImlzU2VsZWN0QWxsIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb21wdXRlZCIsInRvdGFsTW9uZXkiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdGVkIiwicHJvZHVjdCIsInBheVByaWNlIiwibWV0aG9kcyIsImdldENhcmRMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsIiRhcHBseSIsImNhdGNoIiwic2VsZWN0QWxsIiwiaW5kZXgiLCJzZWxlY3QiLCJjYXJkIiwiZXZlcnkiLCJyZW1vdmUiLCJfaWQiLCIkaW52b2tlIiwicmVkaXJlY3QiLCJ1cmwiLCJyZWRpcmVjdFRvIiwicGF5Iiwic2VsZWN0ZWRQcm9kdWN0cyIsImdldFNlbGVjdGVkUHJvZHVjdHMiLCJsZW5ndGgiLCJzaG93VG9hc3QiLCJ0aXRsZSIsIm5hdmlnYXRlVG8iLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImNvdW50IiwiaWQiLCJwIiwicGlkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVRDLEksR0FBTztBQUNKQyxrQkFBTSxFQURGO0FBRUpDLHlCQUFhO0FBRlQsUyxRQUtSQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsUUFBTyxNQUFSLEVBQVYsRSxRQUNoQkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQVFOQyxRLEdBQVc7QUFDUEMsc0JBRE8sd0JBQ087QUFDVixvQkFBSUMsU0FBUyxDQUFiO0FB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QUNKLGFBUkQ7QUFTQSxtQkFBT3JCLE1BQVA7QUFDSCxTOzs7OztpQ0E3R1M7QUFDTixpQkFBS3NCLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLG1CQUF2QjtBQUNIOztBQTRGRDs7Ozs7OytCQWlCUWdCLEMsRUFBRztBQUNQLGlCQUFLaEMsT0FBTCxDQUFhQyxXQUFiLENBQXlCK0IsRUFBRUMsR0FBM0I7QUFDSDs7OztFQWxJOEIsZUFBS0MsSTs7a0JBQW5CcEQsSSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JyBcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuICAgIGltcG9ydCB7IGdldENhcmRCeU9wZW5pZCwgcmVtb3ZlIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXG4gICAgaW1wb3J0IHBsdXMgZnJvbSAnLi4vZnVuY3Rpb24vcGx1cydcbiAgICBpbXBvcnQgY3VycmVuY3kgZnJvbSAnLi4vZnVuY3Rpb24vY3VycmVuY3knXG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJ1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LSt54mp6L2mJyBcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICBpc1NlbGVjdEFsbDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgJHByb3BzID0ge1wiZm9vdGVyXCI6e1wiZnJvbVwiOlwiY2FyZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBmb290ZXJcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICB0b3RhbE1vbmV5ICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwbHVzKGl0ZW0ucHJvZHVjdC5wYXlQcmljZSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6I635Y+W5Lqn5ZOB6K+m5oOFXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldENhcmRMaXN0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBnZXRDYXJkQnlPcGVuaWQoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSByZXMuZGF0YS5saXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWFqOmAiSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0QWxsICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2VsZWN0QWxsID0gIXRoaXMuaXNTZWxlY3RBbGw7XG4gICAgICAgICAgICAgICAgLy8g5bCG5omA5pyJ5Lqn5ZOB5YWo6YCJ5oiW6L+U6YCJ5LiKXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5zZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RBbGw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDotK3nianovabkuK3pgInmi6nllYblk4HmlK/ku5ggXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdCAoY2FyZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBjYXJkLnNlbGVjdGVkID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgICAgICAvLyDliKTor7vmmK/lkKbmnInlhajpgInvvIzlhajpgInlsLHlsIblhajpgInmjInpkq7lhajpgInkvY9cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0LmV2ZXJ5KChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdEFsbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbGVjdEFsbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWwhuWVhuWTgeS7jui0reeJqei9puS4reenu+mZpCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVtb3ZlIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlKGl0ZW0uX2lkKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTs7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDkuIvljZUgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBheTogKCk9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkUHJvZHVjdHMgPSB0aGlzLmdldFNlbGVjdGVkUHJvZHVjdHMoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkUHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeWVhuWTgSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgdXJsOiAnb3JkZXJDb25maXJtP3Byb2R1Y3RzPScgKyBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFByb2R1Y3RzKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPlumAieS4reeahOWVhuWTgSBcbiAgICAgICAgICovXG4gICAgICAgIGdldFNlbGVjdGVkUHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6L+Z6YeM6buY6K6k5LiA5Liq5ZWG5ZOB5Y+q6IO95LmwMeS4qlxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5wcm9kdWN0Ll9pZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRDYXJkTGlzdChwLnBpZCk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=