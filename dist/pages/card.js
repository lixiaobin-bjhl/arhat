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

var _minus = require('./../function/minus.js');

var _minus2 = _interopRequireDefault(_minus);

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
        }, _this.computed = {
            totalMoney: function totalMoney() {
                var result = 0;
                this.list.forEach(function (item) {
                    if (item.selected) {
                        var discountPrice = item.product.discountPrice;
                        var price = item.product.price;
                        // 产品有折扣就减去折扣，没有折扣就是原价
                        var pay = discountPrice ? (0, _minus2.default)(price, discountPrice) : price;
                        result = (0, _plus2.default)(result, pay);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImRhdGEiLCJsaXN0IiwiY29tcG9uZW50cyIsImZvb3RlciIsImNvbXB1dGVkIiwidG90YWxNb25leSIsInJlc3VsdCIsImZvckVhY2giLCJpdGVtIiwic2VsZWN0ZWQiLCJkaXNjb3VudFByaWNlIiwicHJvZHVjdCIsInByaWNlIiwicGF5IiwibWV0aG9kcyIsImdldENhcmRMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsIiRhcHBseSIsImNhdGNoIiwic2VsZWN0IiwiY2FyZCIsImluZGV4IiwicmVtb3ZlIiwiX2lkIiwiJHJvb3QiLCIkYnJvYWRjYXN0IiwicCIsInBpZCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFDakJDLEksR0FBTztBQUNKQyxrQkFBTTtBQURGLFMsUUFJUEMsVSxHQUFhO0FBQ1RDO0FBRFMsUyxRQUliQyxRLEdBQVc7QUFDUEMsc0JBRE8sd0JBQ087QUFDVixvQkFBSUMsU0FBUyxDQUFiO0FBQ0EscUJBQUtMLElBQUwsQ0FBVU0sT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQVM7QUFDdkIsd0JBQUlBLEtBQUtDLFFBQVQsRUFBbUI7QUFDZiw0QkFBSUMsZ0JBQWdCRixLQUFLRyxPQUFMLENBQWFELGFBQWpDO0FBQ0EsNEJBQUlFLFFBQVFKLEtBQUtHLE9BQUwsQ0FBYUMsS0FBekI7QUFDQTtBQUNBLDRCQUFJQyxNQUFNSCxnQkFBZ0IscUJBQU1FLEtBQU4sRUFBYUYsYUFBYixDQUFoQixHQUE4Q0UsS0FBeEQ7QUFDQU4saUNBQVMsb0JBQUtBLE1BQUwsRUFBYU8sR0FBYixDQUFUO0FBQ0g7QUFDSixpQkFSRDtBQVNBLHVCQUFPUCxNQUFQO0FBQ0g7QUFiTSxTLFFBZ0JYUSxPLEdBQVU7QUFDTjs7O0FBR0FDLHlCQUFhLHVCQUFNO0FBQ2ZDLG1CQUFHQyxXQUFIO0FBQ0EsNkNBQ0tDLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVkgsdUJBQUdJLFdBQUg7QUFDQSwwQkFBS25CLElBQUwsR0FBWWtCLElBQUluQixJQUFKLENBQVNDLElBQXJCO0FBQ0EsMEJBQUtvQixNQUFMO0FBQ0gsaUJBTEwsRUFNS0MsS0FOTCxDQU1XLFlBQUk7QUFDUE4sdUJBQUdJLFdBQUg7QUFDSCxpQkFSTDtBQVNILGFBZks7QUFnQk47OztBQUdBRyxrQkFuQk0sa0JBbUJFQyxJQW5CRixFQW1CUUMsS0FuQlIsRUFtQmU7QUFDakIsb0JBQUloQixXQUFXZSxLQUFLZixRQUFMLEdBQWdCLEtBQWhCLEdBQXdCLElBQXZDO0FBQ0EscUJBQUtSLElBQUwsQ0FBVXdCLEtBQVYsRUFBaUJoQixRQUFqQixHQUE0QkEsUUFBNUI7QUFDQSxxQkFBS1ksTUFBTDtBQUNILGFBdkJLOztBQXdCTjs7O0FBR0FLLGtCQTNCTSxrQkEyQkVsQixJQTNCRixFQTJCUTtBQUFBOztBQUNWLGtDQUFPQSxLQUFLbUIsR0FBWixFQUNDVCxJQURELENBQ00sWUFBSztBQUNQLDJCQUFLSixPQUFMLENBQWFDLFdBQWI7QUFDQSwyQkFBS2EsS0FBTCxDQUFXQyxVQUFYLENBQXNCLFlBQXRCO0FBQ0gsaUJBSkQ7QUFLSDtBQWpDSyxTOzs7OzsrQkFvQ0ZDLEMsRUFBRztBQUNQLGlCQUFLaEIsT0FBTCxDQUFhQyxXQUFiLENBQXlCZSxFQUFFQyxHQUEzQjtBQUNDZixlQUFHZ0IscUJBQUgsQ0FBeUI7QUFDdEJDLHVCQUFPO0FBRGUsYUFBekI7QUFHRCxpQkFBS0wsS0FBTCxDQUFXQyxVQUFYLENBQXNCLFlBQXRCO0FBQ0g7Ozs7RUFuRThCLGVBQUtLLEk7O2tCQUFuQm5DLEkiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuICAgIGltcG9ydCB7IGdldENhcmRCeU9wZW5pZCwgcmVtb3ZlIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXG4gICAgaW1wb3J0IHBsdXMgZnJvbSAnLi4vZnVuY3Rpb24vcGx1cydcbiAgICBpbXBvcnQgbWludXMgZnJvbSAnLi4vZnVuY3Rpb24vbWludXMnXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICBsaXN0OiBbXSBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBmb290ZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgdG90YWxNb25leSAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpc2NvdW50UHJpY2UgPSBpdGVtLnByb2R1Y3QuZGlzY291bnRQcmljZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmljZSA9IGl0ZW0ucHJvZHVjdC5wcmljZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS6p+WTgeacieaKmOaJo+WwseWHj+WOu+aKmOaJo++8jOayoeacieaKmOaJo+WwseaYr+WOn+S7t1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBheSA9IGRpc2NvdW50UHJpY2UgPyBtaW51cyhwcmljZSwgZGlzY291bnRQcmljZSkgOiBwcmljZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBsdXMocmVzdWx0LCBwYXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPluS6p+WTgeivpuaDhVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRDYXJkTGlzdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgZ2V0Q2FyZEJ5T3BlbmlkKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0ID0gcmVzLmRhdGEubGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDotK3nianovabkuK3pgInmi6nllYblk4HmlK/ku5ggXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdCAoY2FyZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSBjYXJkLnNlbGVjdGVkID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFtpbmRleF0uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5bCG5ZWG5ZOB5LuO6LSt54mp6L2m5Lit56e76ZmkIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZW1vdmUgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZW1vdmUoaXRlbS5faWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRDYXJkTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRicm9hZGNhc3QoJ3VwZGF0ZWNhcmQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCAocCkge1xuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldENhcmRMaXN0KHAucGlkKTtcbiAgICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6LSt54mp6L2mJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRyb290LiRicm9hZGNhc3QoJ3VwZGF0ZWNhcmQnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuIl19