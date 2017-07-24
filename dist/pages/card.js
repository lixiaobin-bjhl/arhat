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
            list: []
        }, _this.components = {
            footer: _footer2.default
        }, _this.computed = {
            totalMoney: function totalMoney() {
                var result = 0;
                this.list.forEach(function (item) {
                    if (item.selected) {
                        result = (0, _plus2.default)(item.product.payPrice, result);
                    }
                });
                return result;
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
             * 购物车中选择商品支付 
             */
            select: function select(card, index) {
                var selected = card.selected ? false : true;
                this.list[index].selected = selected;
                this.$apply();
            },

            /**
             * 将商品从购物车中移除 
             */
            remove: function remove(item) {
                var _this2 = this;

                (0, _card.remove)(item._id).then(function () {
                    _this2.methods.getCardList();
                    _this2.$invoke('footer', 'getCountByOpendId');;
                });
            },

            /**
             * 下单 
             */
            pay: function pay() {
                console.log(123);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Card, [{
        key: 'onShow',
        value: function onShow() {
            this.$invoke('footer', 'getCountByOpendId');
        }
    }, {
        key: 'onLoad',
        value: function onLoad(p) {
            this.methods.getCardList(p.pid);
        }
    }]);

    return Card;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Card , 'pages/card'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb21wdXRlZCIsInRvdGFsTW9uZXkiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdGVkIiwicHJvZHVjdCIsInBheVByaWNlIiwibWV0aG9kcyIsImdldENhcmRMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsIiRhcHBseSIsImNhdGNoIiwic2VsZWN0IiwiY2FyZCIsImluZGV4IiwicmVtb3ZlIiwiX2lkIiwiJGludm9rZSIsInBheSIsImNvbnNvbGUiLCJsb2ciLCJwIiwicGlkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSkMsa0JBQU07QUFERixTLFFBSVBDLFUsR0FBYTtBQUNUQztBQURTLFMsUUFRYkMsUSxHQUFXO0FBQ1BDLHNCQURPLHdCQUNPO0FBQ1Ysb0JBQUlDLFNBQVMsQ0FBYjtBQUNBLHFCQUFLTCxJQUFMLENBQVVNLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFTO0FBQ3ZCLHdCQUFJQSxLQUFLQyxRQUFULEVBQW1CO0FBQ2ZILGlDQUFTLG9CQUFLRSxLQUFLRSxPQUFMLENBQWFDLFFBQWxCLEVBQTRCTCxNQUE1QixDQUFUO0FBQ0g7QUFDSixpQkFKRDtBQUtBLHVCQUFPQSxNQUFQO0FBQ0g7QUFUTSxTLFFBWVhNLE8sR0FBVTtBQUNOOzs7QUFHQUMseUJBQWEsdUJBQU07QUFDZkMsbUJBQUdDLFdBQUg7QUFDQSw2Q0FDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWSCx1QkFBR0ksV0FBSDtBQUNBLDBCQUFLakIsSUFBTCxHQUFZZ0IsSUFBSWpCLElBQUosQ0FBU0MsSUFBckI7QUFDQSwwQkFBS2tCLE1BQUw7QUFDSCxpQkFMTCxFQU1LQyxLQU5MLENBTVcsWUFBSTtBQUNQTix1QkFBR0ksV0FBSDtBQUNILGlCQVJMO0FBU0gsYUFmSztBQWdCTjs7O0FBR0FHLGtCQW5CTSxrQkFtQkVDLElBbkJGLEVBbUJRQyxLQW5CUixFQW1CZTtBQUNqQixvQkFBSWQsV0FBV2EsS0FBS2IsUUFBTCxHQUFnQixLQUFoQixHQUF3QixJQUF2QztBQUNBLHFCQUFLUixJQUFMLENBQVVzQixLQUFWLEVBQWlCZCxRQUFqQixHQUE0QkEsUUFBNUI7QUFDQSxxQkFBS1UsTUFBTDtBQUNILGFBdkJLOztBQXdCTjs7O0FBR0FLLGtCQTNCTSxrQkEyQkVoQixJQTNCRixFQTJCUTtBQUFBOztBQUNWLGtDQUFPQSxLQUFLaUIsR0FBWixFQUNDVCxJQURELENBQ00sWUFBSztBQUNQLDJCQUFLSixPQUFMLENBQWFDLFdBQWI7QUFDQSwyQkFBS2EsT0FBTCxDQUFhLFFBQWIsRUFBdUIsbUJBQXZCLEVBQTRDO0FBQy9DLGlCQUpEO0FBS0gsYUFqQ0s7O0FBa0NOOzs7QUFHQUMsZUFyQ00saUJBcUNDO0FBQ0hDLHdCQUFRQyxHQUFSLENBQVksR0FBWjtBQUNIO0FBdkNLLFM7Ozs7O2lDQWhCQTtBQUNOLGlCQUFLSCxPQUFMLENBQWEsUUFBYixFQUF1QixtQkFBdkI7QUFDSDs7OytCQXdET0ksQyxFQUFHO0FBQ1AsaUJBQUtsQixPQUFMLENBQWFDLFdBQWIsQ0FBeUJpQixFQUFFQyxHQUEzQjtBQUNIOzs7O0VBMUU4QixlQUFLQyxJOztrQkFBbkJuQyxJIiwiZmlsZSI6ImNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IGZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcbiAgICBpbXBvcnQgeyBnZXRDYXJkQnlPcGVuaWQsIHJlbW92ZSB9IGZyb20gJy4uL3NlcnZpY2UvY2FyZCdcbiAgICBpbXBvcnQgY29tcHJlc3NJbWFnZSBmcm9tICcuLi9mdW5jdGlvbi9jb21wcmVzc0ltYWdlJ1xuICAgIGltcG9ydCBwbHVzIGZyb20gJy4uL2Z1bmN0aW9uL3BsdXMnXG4gICAgaW1wb3J0IHB1cmNoYXNlIGZyb20gJy4uL2Z1bmN0aW9uL3B1cmNoYXNlJ1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LSt54mp6L2mJyBcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgIGxpc3Q6IFtdIFxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGZvb3RlclxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIHRvdGFsTW9uZXkgKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBsdXMoaXRlbS5wcm9kdWN0LnBheVByaWNlLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluS6p+WTgeivpuaDhVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRDYXJkTGlzdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgZ2V0Q2FyZEJ5T3BlbmlkKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gcmVzLmRhdGEubGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDotK3nianovabkuK3pgInmi6nllYblk4HmlK/ku5ggXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdCAoY2FyZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBjYXJkLnNlbGVjdGVkID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5bCG5ZWG5ZOB5LuO6LSt54mp6L2m5Lit56e76ZmkIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZW1vdmUgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZW1vdmUoaXRlbS5faWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRDYXJkTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpOztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOS4i+WNlSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGF5ICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxMjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRDYXJkTGlzdChwLnBpZCk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=