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
        }, _this.$props = { "addToCard": { "v-bind:product.sync": "product" } }, _this.$events = {}, _this.components = {
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
                setTimeout(function () {
                    _this.$invoke('addToCard', 'show');
                });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwuanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbCIsImRhdGEiLCJwcm9kdWN0IiwidGFicyIsImFjdGl2ZUluZGV4Iiwic2xpZGVyT2Zmc2V0Iiwic2xpZGVyTGVmdCIsInByb2R1Y3RQaWNzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImdldERldGlhbCIsInBpZCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsInN0b3JhZ2VJZHMiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJjYXRjaCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYWRkVG9DYXJkIiwiY29weXJpZ2h0IiwibWV0aG9kcyIsInBheSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiY291bnQiLCJpZCIsIl9pZCIsInNob3dBZGRUb0NhcmQiLCJpbWFnZVVybCIsInNldFRpbWVvdXQiLCIkaW52b2tlIiwidGFiQ2xpY2siLCJlIiwic2V0RGF0YSIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXRMZWZ0IiwicmVkaXJlY3QiLCJyZWRpcmVjdFRvIiwicCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7O3dNQUNqQkMsSSxHQUFPO0FBQ0hDLHFCQUFTLEVBRE47QUFFSEMsa0JBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUZIO0FBR0hDLHlCQUFhLENBSFY7QUFJSEMsMEJBQWMsQ0FKWDtBQUtIQyx3QkFBWSxDQUxUO0FBTUhDLHlCQUFhLEVBTlY7QUFPSEMsMkJBQWUsSUFQWjtBQVFIQyxzQkFBVSxJQVJQO0FBU0hDLHNCQUFVLElBVFA7QUFVSEMsc0JBQVU7QUFWUCxTLFFBZVBDLFMsR0FBWSxVQUFDQyxHQUFELEVBQVM7QUFDakJDLGVBQUdDLFdBQUg7QUFDQSxvQ0FBVUYsR0FBVixFQUNLRyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysb0JBQUlmLFVBQVVlLElBQUloQixJQUFsQjtBQUNBLHNCQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQVksbUJBQUdJLFdBQUg7QUFDQUosbUJBQUdLLHFCQUFILENBQXlCO0FBQ3JCQywyQkFBT2xCLFFBQVFrQjtBQURNLGlCQUF6QjtBQUdBLG9CQUFJYixjQUFjLEVBQWxCO0FBQ0FMLHdCQUFRbUIsVUFBUixDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFTO0FBQ2hDaEIsZ0NBQVlpQixJQUFaLENBQWlCLDZCQUFjRCxJQUFkLENBQWpCO0FBQ0gsaUJBRkQ7QUFHQSxzQkFBS2hCLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0gsYUFiTCxFQWNLa0IsS0FkTCxDQWNXLFlBQUk7QUFDUFgsbUJBQUdJLFdBQUg7QUFDSCxhQWhCTDtBQWlCSCxTLFFBRUZRLE0sR0FBUyxFQUFDLGFBQVksRUFBQyx1QkFBc0IsU0FBdkIsRUFBYixFLFFBQ2hCQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsMENBREU7QUFFRkM7QUFGRSxTLFFBS05DLE8sR0FBVTtBQUNOOzs7QUFHQUMsZUFKTSxpQkFJQztBQUNILG9CQUFJOUIsVUFBVSxLQUFLQSxPQUFuQjtBQUNBWSxtQkFBR21CLFVBQUgsQ0FBYztBQUNWQyx5QkFBSywyQkFBMkJDLEtBQUtDLFNBQUwsQ0FBZSxDQUFDO0FBQzVDQywrQkFBTyxDQURxQztBQUU1Q0MsNEJBQUlwQyxRQUFRcUM7QUFGZ0MscUJBQUQsQ0FBZjtBQUR0QixpQkFBZDtBQU1ILGFBWks7OztBQWNOOzs7QUFHQUMsMkJBQWUseUJBQU07QUFDakIsc0JBQUt0QyxPQUFMLENBQWF1QyxRQUFiLEdBQXdCLE1BQUtsQyxXQUFMLENBQWlCLENBQWpCLENBQXhCO0FBQ0FtQywyQkFBVyxZQUFLO0FBQ1osMEJBQUtDLE9BQUwsQ0FBYSxXQUFiLEVBQTBCLE1BQTFCO0FBQ0gsaUJBRkQ7QUFJSCxhQXZCSzs7QUF5Qk5DLHNCQUFVLGtCQUFVQyxDQUFWLEVBQWE7QUFDbkIscUJBQUtDLE9BQUwsQ0FBYTtBQUNUekMsa0NBQWN3QyxFQUFFRSxhQUFGLENBQWdCQyxVQURyQjtBQUVUNUMsaUNBQWF5QyxFQUFFRSxhQUFGLENBQWdCVDtBQUZwQixpQkFBYjtBQUlILGFBOUJLO0FBK0JOOzs7QUFHQVcsb0JBbENNLG9CQWtDSWYsR0FsQ0osRUFrQ1M7QUFDWHBCLG1CQUFHb0MsVUFBSCxDQUFjO0FBQ1ZoQix5QkFBS0E7QUFESyxpQkFBZDtBQUdIO0FBdENLLFM7O0FBL0JWOzs7Ozs7OytCQXdFUWlCLEMsRUFBRztBQUNQLGlCQUFLdkMsU0FBTCxDQUFldUMsRUFBRXRDLEdBQWpCO0FBQ0g7Ozs7RUF2RnVDLGVBQUt1QyxJOztrQkFBNUJwRCxhIiwiZmlsZSI6InByb2R1Y3REZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGdldERldGlhbCB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCdcbiAgICBpbXBvcnQgYWRkVG9DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvYWRkVG9DYXJkJ1xuICAgIGltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXG4gICAgaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsICBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBwcm9kdWN0OiB7fSxcbiAgICAgICAgICAgIHRhYnM6IFsn6K+m5oOFJywgJ+ivhOS7tyddLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICBzbGlkZXJPZmZzZXQ6IDAsXG4gICAgICAgICAgICBzbGlkZXJMZWZ0OiAwLFxuICAgICAgICAgICAgcHJvZHVjdFBpY3M6IFtdLFxuICAgICAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDojrflj5borqLljZXor6bmg4VcbiAgICAgICAgICovXG4gICAgICAgIGdldERldGlhbCA9IChwaWQpID0+IHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICBnZXREZXRpYWwocGlkKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb2R1Y3QudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0UGljcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b3JhZ2VJZHMuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGljcy5wdXNoKGNvbXByZXNzSW1hZ2UoaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0UGljcyA9IHByb2R1Y3RQaWNzO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgJHByb3BzID0ge1wiYWRkVG9DYXJkXCI6e1widi1iaW5kOnByb2R1Y3Quc3luY1wiOlwicHJvZHVjdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBhZGRUb0NhcmQsXG4gICAgICAgICAgICBjb3B5cmlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi0reS5sFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwYXkgKCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gdGhpcy5wcm9kdWN0O1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0Ll9pZFxuICAgICAgICAgICAgICAgICAgICB9XSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5pi+56S65re75Yqg5Yiw6LSt54mp6L2m5a+56K+d5qGGXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNob3dBZGRUb0NhcmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QuaW1hZ2VVcmwgPSB0aGlzLnByb2R1Y3RQaWNzWzBdO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGludm9rZSgnYWRkVG9DYXJkJywgJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRhYkNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlck9mZnNldDogZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4OiBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB0aGlzLmdldERldGlhbChwLnBpZCk7XG4gICAgICAgIH1cblxuICAgIH1cbiJdfQ==