'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _product = require('./../service/product.js');

var _card = require('./../service/card.js');

var _addToCard = require('./../components/addToCard.js');

var _addToCard2 = _interopRequireDefault(_addToCard);

var _compressImage = require('./../function/compressImage.js');

var _compressImage2 = _interopRequireDefault(_compressImage);

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductDetail = function (_wepy$page) {
    _inherits(ProductDetail, _wepy$page);

    function ProductDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProductDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductDetail.__proto__ || Object.getPrototypeOf(ProductDetail)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            product: {},
            tabs: ['详情', '评价'],
            activeIndex: 0,
            sliderOffset: 0,
            sliderLeft: 0,
            productPics: [],
            cardCount: 0,
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        }, _this.getCountByOpendId = function () {
            var p = (0, _card.getCountByOpendId)();
            p && p.then(function (res) {
                _this.cardCount = res.data.count;
                _this.$apply();
            });
        }, _this.getDetial = function (pid) {
            wx.showLoading({ title: '加载中' });
            (0, _product.getDetial)(pid).then(function (res) {
                var product = res.data;
                _this.product = product;
                wx.hideLoading();
                wx.setNavigationBarTitle({
                    title: product.title
                });
                var productPics = [];
                product.storageIds.forEach(function (item) {
                    productPics.push((0, _compressImage2.default)(item));
                });
                _this.productPics = productPics;
            }).catch(function () {
                wx.hideLoading();
            });
        }, _this.components = {
            addToCard: _addToCard2.default,
            copyright: _copyright2.default
        }, _this.methods = {
            /**
             * 购买
             */
            pay: function pay() {
                var product = this.product;
                wx.navigateTo({
                    url: 'orderConfirm?products=' + JSON.stringify([{
                        count: 1,
                        id: product._id
                    }])
                });
            },


            /**
             * 显示添加到购物车对话框
             */
            showAddToCard: function showAddToCard() {
                _this.product.imageUrl = _this.productPics[0];
                _this.$invoke('addToCard', 'show', _this.product);
            },

            tabClick: function tabClick(e) {
                this.setData({
                    sliderOffset: e.currentTarget.offsetLeft,
                    activeIndex: e.currentTarget.id
                });
            },
            /**
             * 跳转地址 
             */
            redirect: function redirect(url) {
                wx.redirectTo({
                    url: url
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProductDetail, [{
        key: 'onShow',
        value: function onShow() {
            if (_userInfo2.default.getOpenid()) {
                this.getCountByOpendId();
            }
        }

        /**
         * 统计购物车的数数
         */


        /**
         * 获取订单详情
         */

    }, {
        key: 'onLoad',
        value: function onLoad(p) {
            this.getDetial(p.pid);
        }

        /**
         * 添加到购物车中处理 
         */

    }, {
        key: 'addToCardHandler',
        value: function addToCardHandler() {
            this.getCountByOpendId();
        }
    }]);

    return ProductDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ProductDetail , 'pages/productDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwuanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbCIsImRhdGEiLCJwcm9kdWN0IiwidGFicyIsImFjdGl2ZUluZGV4Iiwic2xpZGVyT2Zmc2V0Iiwic2xpZGVyTGVmdCIsInByb2R1Y3RQaWNzIiwiY2FyZENvdW50IiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImdldENvdW50QnlPcGVuZElkIiwicCIsInRoZW4iLCJyZXMiLCJjb3VudCIsIiRhcHBseSIsImdldERldGlhbCIsInBpZCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImhpZGVMb2FkaW5nIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwic3RvcmFnZUlkcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsImNhdGNoIiwiY29tcG9uZW50cyIsImFkZFRvQ2FyZCIsImNvcHlyaWdodCIsIm1ldGhvZHMiLCJwYXkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwiX2lkIiwic2hvd0FkZFRvQ2FyZCIsImltYWdlVXJsIiwiJGludm9rZSIsInRhYkNsaWNrIiwiZSIsInNldERhdGEiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0TGVmdCIsInJlZGlyZWN0IiwicmVkaXJlY3RUbyIsImdldE9wZW5pZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7d01BRWpCQyxJLEdBQU87QUFDSEMscUJBQVMsRUFETjtBQUVIQyxrQkFBTSxDQUFDLElBQUQsRUFBTyxJQUFQLENBRkg7QUFHSEMseUJBQWEsQ0FIVjtBQUlIQywwQkFBYyxDQUpYO0FBS0hDLHdCQUFZLENBTFQ7QUFNSEMseUJBQWEsRUFOVjtBQU9IQyx1QkFBVyxDQVBSO0FBUUhDLDJCQUFlLElBUlo7QUFTSEMsc0JBQVUsSUFUUDtBQVVIQyxzQkFBVSxJQVZQO0FBV0hDLHNCQUFVO0FBWFAsUyxRQXVCUEMsaUIsR0FBb0IsWUFBSztBQUNyQixnQkFBSUMsSUFBSSw4QkFBUjtBQUNBQSxpQkFBS0EsRUFBRUMsSUFBRixDQUFPLFVBQUNDLEdBQUQsRUFBUTtBQUNoQixzQkFBS1IsU0FBTCxHQUFpQlEsSUFBSWYsSUFBSixDQUFTZ0IsS0FBMUI7QUFDQSxzQkFBS0MsTUFBTDtBQUNILGFBSEksQ0FBTDtBQUlILFMsUUFLREMsUyxHQUFZLFVBQUNDLEdBQUQsRUFBUztBQUNqQkMsZUFBR0MsV0FBSCxDQUFlLEVBQUNDLE9BQU8sS0FBUixFQUFmO0FBQ0Esb0NBQVVILEdBQVYsRUFDS0wsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLG9CQUFJZCxVQUFVYyxJQUFJZixJQUFsQjtBQUNBLHNCQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQW1CLG1CQUFHRyxXQUFIO0FBQ0FILG1CQUFHSSxxQkFBSCxDQUF5QjtBQUNyQkYsMkJBQU9yQixRQUFRcUI7QUFETSxpQkFBekI7QUFHQSxvQkFBSWhCLGNBQWMsRUFBbEI7QUFDQUwsd0JBQVF3QixVQUFSLENBQW1CQyxPQUFuQixDQUEyQixVQUFDQyxJQUFELEVBQVM7QUFDaENyQixnQ0FBWXNCLElBQVosQ0FBaUIsNkJBQWNELElBQWQsQ0FBakI7QUFDSCxpQkFGRDtBQUdBLHNCQUFLckIsV0FBTCxHQUFtQkEsV0FBbkI7QUFDSCxhQWJMLEVBY0t1QixLQWRMLENBY1csWUFBSTtBQUNQVCxtQkFBR0csV0FBSDtBQUNILGFBaEJMO0FBaUJILFMsUUFFRE8sVSxHQUFhO0FBQ1RDLDBDQURTO0FBRVRDO0FBRlMsUyxRQUtiQyxPLEdBQVU7QUFDTjs7O0FBR0FDLGVBSk0saUJBSUM7QUFDSCxvQkFBSWpDLFVBQVUsS0FBS0EsT0FBbkI7QUFDQW1CLG1CQUFHZSxVQUFILENBQWM7QUFDVkMseUJBQUssMkJBQTJCQyxLQUFLQyxTQUFMLENBQWUsQ0FBQztBQUM1Q3RCLCtCQUFPLENBRHFDO0FBRTVDdUIsNEJBQUl0QyxRQUFRdUM7QUFGZ0MscUJBQUQsQ0FBZjtBQUR0QixpQkFBZDtBQU1ILGFBWks7OztBQWNOOzs7QUFHQUMsMkJBQWUseUJBQU07QUFDakIsc0JBQUt4QyxPQUFMLENBQWF5QyxRQUFiLEdBQXdCLE1BQUtwQyxXQUFMLENBQWlCLENBQWpCLENBQXhCO0FBQ0Esc0JBQUtxQyxPQUFMLENBQWEsV0FBYixFQUEwQixNQUExQixFQUFrQyxNQUFLMUMsT0FBdkM7QUFFSCxhQXJCSzs7QUF1Qk4yQyxzQkFBVSxrQkFBVUMsQ0FBVixFQUFhO0FBQ25CLHFCQUFLQyxPQUFMLENBQWE7QUFDVDFDLGtDQUFjeUMsRUFBRUUsYUFBRixDQUFnQkMsVUFEckI7QUFFVDdDLGlDQUFhMEMsRUFBRUUsYUFBRixDQUFnQlI7QUFGcEIsaUJBQWI7QUFJSCxhQTVCSztBQTZCTjs7O0FBR0FVLG9CQWhDTSxvQkFnQ0liLEdBaENKLEVBZ0NTO0FBQ1hoQixtQkFBRzhCLFVBQUgsQ0FBYztBQUNWZCx5QkFBS0E7QUFESyxpQkFBZDtBQUdIO0FBcENLLFM7Ozs7O2lDQTlDRDtBQUNMLGdCQUFJLG1CQUFTZSxTQUFULEVBQUosRUFBMEI7QUFDdEIscUJBQUt2QyxpQkFBTDtBQUNIO0FBQ0o7O0FBRUQ7Ozs7O0FBV0E7Ozs7OzsrQkFvRVFDLEMsRUFBRztBQUNQLGlCQUFLSyxTQUFMLENBQWVMLEVBQUVNLEdBQWpCO0FBQ0g7O0FBRUQ7Ozs7OzsyQ0FHb0I7QUFDaEIsaUJBQUtQLGlCQUFMO0FBQ0g7Ozs7RUE5R3VDLGVBQUt3QyxJOztrQkFBNUJyRCxhIiwiZmlsZSI6InByb2R1Y3REZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGdldERldGlhbCB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCdcbiAgICBpbXBvcnQgeyBnZXRDb3VudEJ5T3BlbmRJZCB9IGZyb20gJy4uL3NlcnZpY2UvY2FyZCdcbiAgICBpbXBvcnQgYWRkVG9DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvYWRkVG9DYXJkJ1xuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXG4gICAgaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcbiAgICBpbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJ1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWwgIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgcHJvZHVjdDoge30sXG4gICAgICAgICAgICB0YWJzOiBbJ+ivpuaDhScsICfor4Tku7cnXSxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgICAgICAgc2xpZGVyT2Zmc2V0OiAwLFxuICAgICAgICAgICAgc2xpZGVyTGVmdDogMCxcbiAgICAgICAgICAgIHByb2R1Y3RQaWNzOiBbXSxcbiAgICAgICAgICAgIGNhcmRDb3VudDogMCxcbiAgICAgICAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGludGVydmFsOiA1MDAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdygpIHtcbiAgICAgICAgICAgIGlmICh1c2VySW5mby5nZXRPcGVuaWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q291bnRCeU9wZW5kSWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnu5/orqHotK3nianovabnmoTmlbDmlbBcbiAgICAgICAgICovXG4gICAgICAgIGdldENvdW50QnlPcGVuZElkID0gKCk9PiB7XG4gICAgICAgICAgICB2YXIgcCA9IGdldENvdW50QnlPcGVuZElkKCk7XG4gICAgICAgICAgICBwICYmIHAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRDb3VudCA9IHJlcy5kYXRhLmNvdW50O1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5borqLljZXor6bmg4VcbiAgICAgICAgICovXG4gICAgICAgIGdldERldGlhbCA9IChwaWQpID0+IHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTogJ+WKoOi9veS4rSd9KTtcbiAgICAgICAgICAgIGdldERldGlhbChwaWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcHJvZHVjdC50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RQaWNzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvcmFnZUlkcy5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQaWNzLnB1c2goY29tcHJlc3NJbWFnZShpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RQaWNzID0gcHJvZHVjdFBpY3M7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGFkZFRvQ2FyZCxcbiAgICAgICAgICAgIGNvcHlyaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6LSt5LmwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBheSAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSB0aGlzLnByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkoW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuX2lkXG4gICAgICAgICAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDmmL7npLrmt7vliqDliLDotK3nianovablr7nor53moYZcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2hvd0FkZFRvQ2FyZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdC5pbWFnZVVybCA9IHRoaXMucHJvZHVjdFBpY3NbMF07XG4gICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdhZGRUb0NhcmQnLCAnc2hvdycsIHRoaXMucHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0YWJDbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXJPZmZzZXQ6IGUuY3VycmVudFRhcmdldC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlZGlyZWN0ICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGV0aWFsKHAucGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vliqDliLDotK3nianovabkuK3lpITnkIYgXG4gICAgICAgICAqL1xuICAgICAgICBhZGRUb0NhcmRIYW5kbGVyICgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q291bnRCeU9wZW5kSWQoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuIl19