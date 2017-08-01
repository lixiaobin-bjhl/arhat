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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGlzdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZm9vdGVyIiwiY29tcHV0ZWQiLCJ0b3RhbE1vbmV5IiwicmVzdWx0IiwiZm9yRWFjaCIsIml0ZW0iLCJzZWxlY3RlZCIsInByb2R1Y3QiLCJwYXlQcmljZSIsIm1ldGhvZHMiLCJnZXRDYXJkTGlzdCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCIkYXBwbHkiLCJjYXRjaCIsInNlbGVjdCIsImNhcmQiLCJpbmRleCIsInJlbW92ZSIsIl9pZCIsIiRpbnZva2UiLCJnZXRTZWxlY3RlZFByb2R1Y3RzIiwicHVzaCIsImNvdW50IiwiaWQiLCJwYXkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwicCIsInBpZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVEMsSSxHQUFPO0FBQ0pDLGtCQUFNO0FBREYsUyxRQUlSQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsUUFBTyxNQUFSLEVBQVYsRSxRQUNoQkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQVFOQyxRLEdBQVc7QUFDUEMsc0JBRE8sd0JBQ087QUFDVixvQkFBSUMsU0FBUyxDQUFiO0FBQ0EscUJBQUtQLElBQUwsQ0FBVVEsT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQVM7QUFDdkIsd0JBQUlBLEtBQUtDLFFBQVQsRUFBbUI7QUFDZkgsaUNBQVMsb0JBQUtFLEtBQUtFLE9BQUwsQ0FBYUMsUUFBbEIsRUFBNEJMLE1BQTVCLENBQVQ7QUFDSDtBQUNKLGlCQUpEO0FBS0EsdUJBQU9BLE1BQVA7QUFDSDtBQVRNLFMsUUFZWE0sTyxHQUFVO0FBQ047OztBQUdBQyx5QkFBYSx1QkFBTTtBQUNmQyxtQkFBR0MsV0FBSDtBQUNBLDZDQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1ZILHVCQUFHSSxXQUFIO0FBQ0EsMEJBQUtuQixJQUFMLEdBQVlrQixJQUFJbkIsSUFBSixDQUFTQyxJQUFyQjtBQUNBLDBCQUFLb0IsTUFBTDtBQUNILGlCQUxMLEVBTUtDLEtBTkwsQ0FNVyxZQUFJO0FBQ1BOLHVCQUFHSSxXQUFIO0FBQ0gsaUJBUkw7QUFTSCxhQWZLO0FBZ0JOOzs7QUFHQUcsa0JBbkJNLGtCQW1CRUMsSUFuQkYsRUFtQlFDLEtBbkJSLEVBbUJlO0FBQ2pCLG9CQUFJZCxXQUFXYSxLQUFLYixRQUFMLEdBQWdCLEtBQWhCLEdBQXdCLElBQXZDO0FBQ0EscUJBQUtWLElBQUwsQ0FBVXdCLEtBQVYsRUFBaUJkLFFBQWpCLEdBQTRCQSxRQUE1QjtBQUNBLHFCQUFLVSxNQUFMO0FBQ0gsYUF2Qks7O0FBd0JOOzs7QUFHQUssa0JBM0JNLGtCQTJCRWhCLElBM0JGLEVBMkJRO0FBQUE7O0FBQ1Ysa0NBQU9BLEtBQUtpQixHQUFaLEVBQ0NULElBREQsQ0FDTSxZQUFLO0FBQ1AsMkJBQUtKLE9BQUwsQ0FBYUMsV0FBYjtBQUNBLDJCQUFLYSxPQUFMLENBQWEsUUFBYixFQUF1QixtQkFBdkIsRUFBNEM7QUFDL0MsaUJBSkQ7QUFLSCxhQWpDSzs7O0FBbUNOOzs7QUFHQUMsaUNBQXFCLCtCQUFNO0FBQ3ZCLG9CQUFJckIsU0FBUyxFQUFiO0FBQ0Esc0JBQUtQLElBQUwsQ0FBVVEsT0FBVixDQUFrQixVQUFDQyxJQUFELEVBQVM7QUFDdkIsd0JBQUlBLEtBQUtDLFFBQVQsRUFBbUI7QUFDZkgsK0JBQU9zQixJQUFQLENBQVk7QUFDUjtBQUNBQyxtQ0FBTyxDQUZDO0FBR1JDLGdDQUFJdEIsS0FBS0UsT0FBTCxDQUFhZTtBQUhULHlCQUFaO0FBS0g7QUFDSixpQkFSRDtBQVNBLHVCQUFPbkIsTUFBUDtBQUNILGFBbERLOztBQW9ETjs7O0FBR0F5QixpQkFBSyxlQUFLO0FBQ04sb0JBQUksQ0FBQyxNQUFLMUIsVUFBVixFQUFzQjtBQUNsQlMsdUJBQUdrQixTQUFILENBQWE7QUFDVEMsK0JBQU87QUFERSxxQkFBYjtBQUdBO0FBQ0g7QUFDRG5CLG1CQUFHb0IsVUFBSCxDQUFjO0FBQ1hDLHlCQUFLLDJCQUEyQkMsS0FBS0MsU0FBTCxDQUFlLE1BQUt6QixPQUFMLENBQWFlLG1CQUFiLEVBQWY7QUFEckIsaUJBQWQ7QUFHSDtBQWpFSyxTOzs7OztpQ0FoQkE7QUFDTixpQkFBS0QsT0FBTCxDQUFhLFFBQWIsRUFBdUIsbUJBQXZCO0FBQ0g7OzsrQkFrRk9ZLEMsRUFBRztBQUNQLGlCQUFLMUIsT0FBTCxDQUFhQyxXQUFiLENBQXlCeUIsRUFBRUMsR0FBM0I7QUFDSDs7OztFQXRHOEIsZUFBS0MsSTs7a0JBQW5CN0MsSSIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG4gICAgaW1wb3J0IHsgZ2V0Q2FyZEJ5T3BlbmlkLCByZW1vdmUgfSBmcm9tICcuLi9zZXJ2aWNlL2NhcmQnXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSdcbiAgICBpbXBvcnQgcGx1cyBmcm9tICcuLi9mdW5jdGlvbi9wbHVzJ1xuICAgIGltcG9ydCBwdXJjaGFzZSBmcm9tICcuLi9mdW5jdGlvbi9wdXJjaGFzZSdcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkICBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9picgXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICBsaXN0OiBbXSBcbiAgICAgICAgfVxuXG4gICAgICAgJHByb3BzID0ge1wiZm9vdGVyXCI6e1wiZnJvbVwiOlwiY2FyZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBmb290ZXJcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICB0b3RhbE1vbmV5ICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwbHVzKGl0ZW0ucHJvZHVjdC5wYXlQcmljZSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDojrflj5bkuqflk4Hor6bmg4VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0Q2FyZExpc3Q6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xuICAgICAgICAgICAgICAgIGdldENhcmRCeU9wZW5pZCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdCA9IHJlcy5kYXRhLmxpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6LSt54mp6L2m5Lit6YCJ5oup5ZWG5ZOB5pSv5LuYIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3QgKGNhcmQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gY2FyZC5zZWxlY3RlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWwhuWVhuWTgeS7jui0reeJqei9puS4reenu+mZpCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVtb3ZlIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlKGl0ZW0uX2lkKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTs7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOiOt+WPlumAieS4reeahOWVhuWTgSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0U2VsZWN0ZWRQcm9kdWN0czogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6L+Z6YeM6buY6K6k5LiA5Liq5ZWG5ZOB5Y+q6IO95LmwMeS4qlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLnByb2R1Y3QuX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOS4i+WNlSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGF5OiAoKT0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudG90YWxNb25leSkge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nllYblk4EnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5tZXRob2RzLmdldFNlbGVjdGVkUHJvZHVjdHMoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0Q2FyZExpc3QocC5waWQpO1xuICAgICAgICB9XG4gICAgfVxuIl19