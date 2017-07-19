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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            list: []
        }, _this.components = {
            footer: _footer2.default
        }, _this.methods = {
            /**
             * 获取产品详情
             */
            getCardList: function getCardList() {
                wx.showLoading();
                (0, _card.getCardByOpenid)().then(function (res) {
                    wx.hideLoading();
                    _this.setData('list', res.data.list);
                }).catch(function () {
                    wx.hideLoading();
                });
            },
            /**
             * 购物车中选择商品支付 
             */
            select: function select(card) {
                console.log(11);
            },

            /**
             * 将商品从购物车中移除 
             */
            remove: function remove(item) {
                var _this2 = this;

                (0, _card.remove)(item._id).then(function () {
                    _this2.methods.getCardList();
                    _this2.$root.$broadcast('updatecard');
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Card, [{
        key: 'onLoad',
        value: function onLoad(p) {
            this.methods.getCardList(p.pid);
            wx.setNavigationBarTitle({
                title: '购物车'
            });
            this.$root.$broadcast('updatecard');
        }
    }]);

    return Card;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Card , 'pages/card'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImRhdGEiLCJsaXN0IiwiY29tcG9uZW50cyIsImZvb3RlciIsIm1ldGhvZHMiLCJnZXRDYXJkTGlzdCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXREYXRhIiwiY2F0Y2giLCJzZWxlY3QiLCJjYXJkIiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsIml0ZW0iLCJfaWQiLCIkcm9vdCIsIiRicm9hZGNhc3QiLCJwIiwicGlkIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ2pCQyxJLEdBQU87QUFDSkMsa0JBQU07QUFERixTLFFBSVBDLFUsR0FBYTtBQUNUQztBQURTLFMsUUFJYkMsTyxHQUFVO0FBQ047OztBQUdBQyx5QkFBYSx1QkFBTTtBQUNmQyxtQkFBR0MsV0FBSDtBQUNBLDZDQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1ZILHVCQUFHSSxXQUFIO0FBQ0EsMEJBQUtDLE9BQUwsQ0FBYSxNQUFiLEVBQXFCRixJQUFJVCxJQUFKLENBQVNDLElBQTlCO0FBQ0gsaUJBSkwsRUFLS1csS0FMTCxDQUtXLFlBQUk7QUFDUE4sdUJBQUdJLFdBQUg7QUFDSCxpQkFQTDtBQVFILGFBZEs7QUFlTjs7O0FBR0FHLGtCQWxCTSxrQkFrQkVDLElBbEJGLEVBa0JRO0FBQ1ZDLHdCQUFRQyxHQUFSLENBQVksRUFBWjtBQUNILGFBcEJLOztBQXFCTjs7O0FBR0FDLGtCQXhCTSxrQkF3QkVDLElBeEJGLEVBd0JRO0FBQUE7O0FBQ1Ysa0NBQU9BLEtBQUtDLEdBQVosRUFDQ1gsSUFERCxDQUNNLFlBQUs7QUFDUCwyQkFBS0osT0FBTCxDQUFhQyxXQUFiO0FBQ0EsMkJBQUtlLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQixZQUF0QjtBQUNILGlCQUpEO0FBS0g7QUE5QkssUzs7Ozs7K0JBaUNGQyxDLEVBQUc7QUFDUCxpQkFBS2xCLE9BQUwsQ0FBYUMsV0FBYixDQUF5QmlCLEVBQUVDLEdBQTNCO0FBQ0NqQixlQUFHa0IscUJBQUgsQ0FBeUI7QUFDdEJDLHVCQUFPO0FBRGUsYUFBekI7QUFHRCxpQkFBS0wsS0FBTCxDQUFXQyxVQUFYLENBQXNCLFlBQXRCO0FBQ0g7Ozs7RUFoRDhCLGVBQUtLLEk7O2tCQUFuQjNCLEkiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuICAgIGltcG9ydCB7IGdldENhcmRCeU9wZW5pZCwgcmVtb3ZlIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICBsaXN0OiBbXSBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBmb290ZXJcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluS6p+WTgeivpuaDhVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRDYXJkTGlzdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgZ2V0Q2FyZEJ5T3BlbmlkKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKCdsaXN0JywgcmVzLmRhdGEubGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDotK3nianovabkuK3pgInmi6nllYblk4HmlK/ku5ggXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdCAoY2FyZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDExKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWwhuWVhuWTgeS7jui0reeJqei9puS4reenu+mZpCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVtb3ZlIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlKGl0ZW0uX2lkKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm9vdC4kYnJvYWRjYXN0KCd1cGRhdGVjYXJkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRDYXJkTGlzdChwLnBpZCk7XG4gICAgICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+i0reeJqei9pidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kcm9vdC4kYnJvYWRjYXN0KCd1cGRhdGVjYXJkJyk7XG4gICAgICAgIH1cblxuICAgIH1cbiJdfQ==