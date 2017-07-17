'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
        }
    }]);

    return Card;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Card , 'pages/card'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImRhdGEiLCJsaXN0IiwibWV0aG9kcyIsImdldENhcmRMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsInNldERhdGEiLCJjYXRjaCIsInAiLCJwaWQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ2pCQyxJLEdBQU87QUFDSkMsa0JBQU07QUFERixTLFFBSVBDLE8sR0FBVTtBQUNOOzs7QUFHQUMseUJBQWEsdUJBQU07QUFDZkMsbUJBQUdDLFdBQUg7QUFDQSw2Q0FDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWSCx1QkFBR0ksV0FBSDtBQUNBLDBCQUFLQyxPQUFMLENBQWEsTUFBYixFQUFxQkYsSUFBSVAsSUFBSixDQUFTQyxJQUE5QjtBQUNILGlCQUpMLEVBS0tTLEtBTEwsQ0FLVyxZQUFJO0FBQ1BOLHVCQUFHSSxXQUFIO0FBQ0gsaUJBUEw7QUFRSDtBQWRLLFM7Ozs7OytCQWlCRkcsQyxFQUFHO0FBQ1AsaUJBQUtULE9BQUwsQ0FBYUMsV0FBYixDQUF5QlEsRUFBRUMsR0FBM0I7QUFDQ1IsZUFBR1MscUJBQUgsQ0FBeUI7QUFDdEJDLHVCQUFPO0FBRGUsYUFBekI7QUFHSjs7OztFQTNCOEIsZUFBS0MsSTs7a0JBQW5CaEIsSSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGdldENhcmRCeU9wZW5pZCB9IGZyb20gJy4uL3NlcnZpY2UvY2FyZCdcbiAgICBpbXBvcnQgY29tcHJlc3NJbWFnZSBmcm9tICcuLi9mdW5jdGlvbi9jb21wcmVzc0ltYWdlJ1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgbGlzdDogW10gXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDojrflj5bkuqflk4Hor6bmg4VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0Q2FyZExpc3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xuICAgICAgICAgICAgICAgIGdldENhcmRCeU9wZW5pZCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSgnbGlzdCcsIHJlcy5kYXRhLmxpc3QpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QocC5waWQpO1xuICAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfotK3nianovaYnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuIl19