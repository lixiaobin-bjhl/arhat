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
             * 获取选中的商品 
             */
            getSelectedProducts: function getSelectedProducts() {
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
            },

            /**
             * 下单 
             */
            pay: function pay() {
                if (!_this.totalMoney) {
                    wx.showToast({
                        title: '请选择商品'
                    });
                    return;
                }
                wx.navigateTo({
                    url: 'orderConfirm?products=' + JSON.stringify(_this.methods.getSelectedProducts())
                });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb21wdXRlZCIsInRvdGFsTW9uZXkiLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsInNlbGVjdGVkIiwicHJvZHVjdCIsInBheVByaWNlIiwibWV0aG9kcyIsImdldENhcmRMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsIiRhcHBseSIsImNhdGNoIiwic2VsZWN0IiwiY2FyZCIsImluZGV4IiwicmVtb3ZlIiwiX2lkIiwiJGludm9rZSIsImdldFNlbGVjdGVkUHJvZHVjdHMiLCJwdXNoIiwiY291bnQiLCJpZCIsInBheSIsInNob3dUb2FzdCIsInRpdGxlIiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwIiwicGlkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSkMsa0JBQU07QUFERixTLFFBSVBDLFUsR0FBYTtBQUNUQztBQURTLFMsUUFRYkMsUSxHQUFXO0FBQ1BDLHNCQURPLHdCQUNPO0FBQ1Ysb0JBQUlDLFNBQVMsQ0FBYjtBQUNBLHFCQUFLTCxJQUFMLENBQVVNLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFTO0FBQ3ZCLHdCQUFJQSxLQUFLQyxRQUFULEVBQW1CO0FBQ2ZILGlDQUFTLG9CQUFLRSxLQUFLRSxPQUFMLENBQWFDLFFBQWxCLEVBQTRCTCxNQUE1QixDQUFUO0FBQ0g7QUFDSixpQkFKRDtBQUtBLHVCQUFPQSxNQUFQO0FBQ0g7QUFUTSxTLFFBWVhNLE8sR0FBVTtBQUNOOzs7QUFHQUMseUJBQWEsdUJBQU07QUFDZkMsbUJBQUdDLFdBQUg7QUFDQSw2Q0FDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWSCx1QkFBR0ksV0FBSDtBQUNBLDBCQUFLakIsSUFBTCxHQUFZZ0IsSUFBSWpCLElBQUosQ0FBU0MsSUFBckI7QUFDQSwwQkFBS2tCLE1BQUw7QUFDSCxpQkFMTCxFQU1LQyxLQU5MLENBTVcsWUFBSTtBQUNQTix1QkFBR0ksV0FBSDtBQUNILGlCQVJMO0FBU0gsYUFmSztBQWdCTjs7O0FBR0FHLGtCQW5CTSxrQkFtQkVDLElBbkJGLEVBbUJRQyxLQW5CUixFQW1CZTtBQUNqQixvQkFBSWQsV0FBV2EsS0FBS2IsUUFBTCxHQUFnQixLQUFoQixHQUF3QixJQUF2QztBQUNBLHFCQUFLUixJQUFMLENBQVVzQixLQUFWLEVBQWlCZCxRQUFqQixHQUE0QkEsUUFBNUI7QUFDQSxxQkFBS1UsTUFBTDtBQUNILGFBdkJLOztBQXdCTjs7O0FBR0FLLGtCQTNCTSxrQkEyQkVoQixJQTNCRixFQTJCUTtBQUFBOztBQUNWLGtDQUFPQSxLQUFLaUIsR0FBWixFQUNDVCxJQURELENBQ00sWUFBSztBQUNQLDJCQUFLSixPQUFMLENBQWFDLFdBQWI7QUFDQSwyQkFBS2EsT0FBTCxDQUFhLFFBQWIsRUFBdUIsbUJBQXZCLEVBQTRDO0FBQy9DLGlCQUpEO0FBS0gsYUFqQ0s7OztBQW1DTjs7O0FBR0FDLGlDQUFxQiwrQkFBTTtBQUN2QixvQkFBSXJCLFNBQVMsRUFBYjtBQUNBLHNCQUFLTCxJQUFMLENBQVVNLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFTO0FBQ3ZCLHdCQUFJQSxLQUFLQyxRQUFULEVBQW1CO0FBQ2ZILCtCQUFPc0IsSUFBUCxDQUFZO0FBQ1I7QUFDQUMsbUNBQU8sQ0FGQztBQUdSQyxnQ0FBSXRCLEtBQUtFLE9BQUwsQ0FBYWU7QUFIVCx5QkFBWjtBQUtIO0FBQ0osaUJBUkQ7QUFTQSx1QkFBT25CLE1BQVA7QUFDSCxhQWxESzs7QUFvRE47OztBQUdBeUIsaUJBQUssZUFBSztBQUNOLG9CQUFJLENBQUMsTUFBSzFCLFVBQVYsRUFBc0I7QUFDbEJTLHVCQUFHa0IsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHQTtBQUNIO0FBQ0RuQixtQkFBR29CLFVBQUgsQ0FBYztBQUNYQyx5QkFBSywyQkFBMkJDLEtBQUtDLFNBQUwsQ0FBZSxNQUFLekIsT0FBTCxDQUFhZSxtQkFBYixFQUFmO0FBRHJCLGlCQUFkO0FBR0g7QUFqRUssUzs7Ozs7aUNBaEJBO0FBQ04saUJBQUtELE9BQUwsQ0FBYSxRQUFiLEVBQXVCLG1CQUF2QjtBQUNIOzs7K0JBa0ZPWSxDLEVBQUc7QUFDUCxpQkFBSzFCLE9BQUwsQ0FBYUMsV0FBYixDQUF5QnlCLEVBQUVDLEdBQTNCO0FBQ0g7Ozs7RUFwRzhCLGVBQUtDLEk7O2tCQUFuQjNDLEkiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuICAgIGltcG9ydCB7IGdldENhcmRCeU9wZW5pZCwgcmVtb3ZlIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXG4gICAgaW1wb3J0IHBsdXMgZnJvbSAnLi4vZnVuY3Rpb24vcGx1cydcbiAgICBpbXBvcnQgcHVyY2hhc2UgZnJvbSAnLi4vZnVuY3Rpb24vcHVyY2hhc2UnXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnIFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgbGlzdDogW10gXG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgZm9vdGVyXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgdG90YWxNb25leSAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcGx1cyhpdGVtLnByb2R1Y3QucGF5UHJpY2UsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6I635Y+W5Lqn5ZOB6K+m5oOFXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldENhcmRMaXN0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBnZXRDYXJkQnlPcGVuaWQoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QgPSByZXMuZGF0YS5saXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi0reeJqei9puS4remAieaLqeWVhuWTgeaUr+S7mCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2VsZWN0IChjYXJkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IGNhcmQuc2VsZWN0ZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDlsIbllYblk4Hku47otK3nianovabkuK3np7vpmaQgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbW92ZSAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZShpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAudGhlbigoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldENhcmRMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDojrflj5bpgInkuK3nmoTllYblk4EgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldFNlbGVjdGVkUHJvZHVjdHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOi/memHjOm7mOiupOS4gOS4quWVhuWTgeWPquiDveS5sDHkuKpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5wcm9kdWN0Ll9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDkuIvljZUgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBheTogKCk9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRvdGFsTW9uZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5ZWG5ZOBJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KHRoaXMubWV0aG9kcy5nZXRTZWxlY3RlZFByb2R1Y3RzKCkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG9uTG9hZCAocCkge1xuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldENhcmRMaXN0KHAucGlkKTtcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==