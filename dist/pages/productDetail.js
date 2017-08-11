'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _product = require('./../service/product.js');

var _addToCard = require('./../components/addToCard.js');

var _addToCard2 = _interopRequireDefault(_addToCard);

var _compressImage = require('./../function/compressImage.js');

var _compressImage2 = _interopRequireDefault(_compressImage);

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

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
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        }, _this.getDetial = function (pid) {
            wx.showLoading();
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
    /**
     * 获取订单详情
     */


    _createClass(ProductDetail, [{
        key: 'onLoad',
        value: function onLoad(p) {
            this.getDetial(p.pid);
        }
    }]);

    return ProductDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ProductDetail , 'pages/productDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwuanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbCIsImRhdGEiLCJwcm9kdWN0IiwidGFicyIsImFjdGl2ZUluZGV4Iiwic2xpZGVyT2Zmc2V0Iiwic2xpZGVyTGVmdCIsInByb2R1Y3RQaWNzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImdldERldGlhbCIsInBpZCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsInN0b3JhZ2VJZHMiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJjYXRjaCIsImNvbXBvbmVudHMiLCJhZGRUb0NhcmQiLCJjb3B5cmlnaHQiLCJtZXRob2RzIiwicGF5IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb3VudCIsImlkIiwiX2lkIiwic2hvd0FkZFRvQ2FyZCIsImltYWdlVXJsIiwiJGludm9rZSIsInRhYkNsaWNrIiwiZSIsInNldERhdGEiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0TGVmdCIsInJlZGlyZWN0IiwicmVkaXJlY3RUbyIsInAiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7Ozt3TUFDakJDLEksR0FBTztBQUNIQyxxQkFBUyxFQUROO0FBRUhDLGtCQUFNLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FGSDtBQUdIQyx5QkFBYSxDQUhWO0FBSUhDLDBCQUFjLENBSlg7QUFLSEMsd0JBQVksQ0FMVDtBQU1IQyx5QkFBYSxFQU5WO0FBT0hDLDJCQUFlLElBUFo7QUFRSEMsc0JBQVUsSUFSUDtBQVNIQyxzQkFBVSxJQVRQO0FBVUhDLHNCQUFVO0FBVlAsUyxRQWVQQyxTLEdBQVksVUFBQ0MsR0FBRCxFQUFTO0FBQ2pCQyxlQUFHQyxXQUFIO0FBQ0Esb0NBQVVGLEdBQVYsRUFDS0csSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLG9CQUFJZixVQUFVZSxJQUFJaEIsSUFBbEI7QUFDQSxzQkFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0FZLG1CQUFHSSxXQUFIO0FBQ0FKLG1CQUFHSyxxQkFBSCxDQUF5QjtBQUNyQkMsMkJBQU9sQixRQUFRa0I7QUFETSxpQkFBekI7QUFHQSxvQkFBSWIsY0FBYyxFQUFsQjtBQUNBTCx3QkFBUW1CLFVBQVIsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQUNDLElBQUQsRUFBUztBQUNoQ2hCLGdDQUFZaUIsSUFBWixDQUFpQiw2QkFBY0QsSUFBZCxDQUFqQjtBQUNILGlCQUZEO0FBR0Esc0JBQUtoQixXQUFMLEdBQW1CQSxXQUFuQjtBQUNILGFBYkwsRUFjS2tCLEtBZEwsQ0FjVyxZQUFJO0FBQ1BYLG1CQUFHSSxXQUFIO0FBQ0gsYUFoQkw7QUFpQkgsUyxRQUVEUSxVLEdBQWE7QUFDVEMsMENBRFM7QUFFVEM7QUFGUyxTLFFBS2JDLE8sR0FBVTtBQUNOOzs7QUFHQUMsZUFKTSxpQkFJQztBQUNILG9CQUFJNUIsVUFBVSxLQUFLQSxPQUFuQjtBQUNBWSxtQkFBR2lCLFVBQUgsQ0FBYztBQUNWQyx5QkFBSywyQkFBMkJDLEtBQUtDLFNBQUwsQ0FBZSxDQUFDO0FBQzVDQywrQkFBTyxDQURxQztBQUU1Q0MsNEJBQUlsQyxRQUFRbUM7QUFGZ0MscUJBQUQsQ0FBZjtBQUR0QixpQkFBZDtBQU1ILGFBWks7OztBQWNOOzs7QUFHQUMsMkJBQWUseUJBQU07QUFDakIsc0JBQUtwQyxPQUFMLENBQWFxQyxRQUFiLEdBQXdCLE1BQUtoQyxXQUFMLENBQWlCLENBQWpCLENBQXhCO0FBQ0Esc0JBQUtpQyxPQUFMLENBQWEsV0FBYixFQUEwQixNQUExQixFQUFrQyxNQUFLdEMsT0FBdkM7QUFFSCxhQXJCSzs7QUF1Qk51QyxzQkFBVSxrQkFBVUMsQ0FBVixFQUFhO0FBQ25CLHFCQUFLQyxPQUFMLENBQWE7QUFDVHRDLGtDQUFjcUMsRUFBRUUsYUFBRixDQUFnQkMsVUFEckI7QUFFVHpDLGlDQUFhc0MsRUFBRUUsYUFBRixDQUFnQlI7QUFGcEIsaUJBQWI7QUFJSCxhQTVCSztBQTZCTjs7O0FBR0FVLG9CQWhDTSxvQkFnQ0lkLEdBaENKLEVBZ0NTO0FBQ1hsQixtQkFBR2lDLFVBQUgsQ0FBYztBQUNWZix5QkFBS0E7QUFESyxpQkFBZDtBQUdIO0FBcENLLFM7O0FBN0JWOzs7Ozs7OytCQW9FUWdCLEMsRUFBRztBQUNQLGlCQUFLcEMsU0FBTCxDQUFlb0MsRUFBRW5DLEdBQWpCO0FBQ0g7Ozs7RUFuRnVDLGVBQUtvQyxJOztrQkFBNUJqRCxhIiwiZmlsZSI6InByb2R1Y3REZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGdldERldGlhbCB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCdcbiAgICBpbXBvcnQgYWRkVG9DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvYWRkVG9DYXJkJ1xuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXG4gICAgaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsICBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBwcm9kdWN0OiB7fSxcbiAgICAgICAgICAgIHRhYnM6IFsn6K+m5oOFJywgJ+ivhOS7tyddLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICBzbGlkZXJPZmZzZXQ6IDAsXG4gICAgICAgICAgICBzbGlkZXJMZWZ0OiAwLFxuICAgICAgICAgICAgcHJvZHVjdFBpY3M6IFtdLFxuICAgICAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5borqLljZXor6bmg4VcbiAgICAgICAgICovXG4gICAgICAgIGdldERldGlhbCA9IChwaWQpID0+IHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICBnZXREZXRpYWwocGlkKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb2R1Y3QudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0UGljcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b3JhZ2VJZHMuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGljcy5wdXNoKGNvbXByZXNzSW1hZ2UoaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0UGljcyA9IHByb2R1Y3RQaWNzO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBhZGRUb0NhcmQsXG4gICAgICAgICAgICBjb3B5cmlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi0reS5sFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwYXkgKCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gdGhpcy5wcm9kdWN0O1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0Ll9pZFxuICAgICAgICAgICAgICAgICAgICB9XSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5pi+56S65re75Yqg5Yiw6LSt54mp6L2m5a+56K+d5qGGXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNob3dBZGRUb0NhcmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QuaW1hZ2VVcmwgPSB0aGlzLnByb2R1Y3RQaWNzWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGludm9rZSgnYWRkVG9DYXJkJywgJ3Nob3cnLCB0aGlzLnByb2R1Y3QpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdGFiQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyT2Zmc2V0OiBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGV0aWFsKHAucGlkKTtcbiAgICAgICAgfVxuXG4gICAgfVxuIl19