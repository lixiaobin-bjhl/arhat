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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwuanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbCIsImRhdGEiLCJwcm9kdWN0IiwidGFicyIsImFjdGl2ZUluZGV4Iiwic2xpZGVyT2Zmc2V0Iiwic2xpZGVyTGVmdCIsInByb2R1Y3RQaWNzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImdldERldGlhbCIsInBpZCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInN0b3JhZ2VJZHMiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJjYXRjaCIsImNvbXBvbmVudHMiLCJhZGRUb0NhcmQiLCJjb3B5cmlnaHQiLCJtZXRob2RzIiwicGF5IiwibmF2aWdhdGVUbyIsInVybCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb3VudCIsImlkIiwiX2lkIiwic2hvd0FkZFRvQ2FyZCIsImltYWdlVXJsIiwiJGludm9rZSIsInRhYkNsaWNrIiwiZSIsInNldERhdGEiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0TGVmdCIsInJlZGlyZWN0IiwicmVkaXJlY3RUbyIsInAiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7Ozt3TUFDakJDLEksR0FBTztBQUNIQyxxQkFBUyxFQUROO0FBRUhDLGtCQUFNLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FGSDtBQUdIQyx5QkFBYSxDQUhWO0FBSUhDLDBCQUFjLENBSlg7QUFLSEMsd0JBQVksQ0FMVDtBQU1IQyx5QkFBYSxFQU5WO0FBT0hDLDJCQUFlLElBUFo7QUFRSEMsc0JBQVUsSUFSUDtBQVNIQyxzQkFBVSxJQVRQO0FBVUhDLHNCQUFVO0FBVlAsUyxRQWVQQyxTLEdBQVksVUFBQ0MsR0FBRCxFQUFTO0FBQ2pCQyxlQUFHQyxXQUFILENBQWUsRUFBQ0MsT0FBTyxLQUFSLEVBQWY7QUFDQSxvQ0FBVUgsR0FBVixFQUNLSSxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysb0JBQUloQixVQUFVZ0IsSUFBSWpCLElBQWxCO0FBQ0Esc0JBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBWSxtQkFBR0ssV0FBSDtBQUNBTCxtQkFBR00scUJBQUgsQ0FBeUI7QUFDckJKLDJCQUFPZCxRQUFRYztBQURNLGlCQUF6QjtBQUdBLG9CQUFJVCxjQUFjLEVBQWxCO0FBQ0FMLHdCQUFRbUIsVUFBUixDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFTO0FBQ2hDaEIsZ0NBQVlpQixJQUFaLENBQWlCLDZCQUFjRCxJQUFkLENBQWpCO0FBQ0gsaUJBRkQ7QUFHQSxzQkFBS2hCLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0gsYUFiTCxFQWNLa0IsS0FkTCxDQWNXLFlBQUk7QUFDUFgsbUJBQUdLLFdBQUg7QUFDSCxhQWhCTDtBQWlCSCxTLFFBRURPLFUsR0FBYTtBQUNUQywwQ0FEUztBQUVUQztBQUZTLFMsUUFLYkMsTyxHQUFVO0FBQ047OztBQUdBQyxlQUpNLGlCQUlDO0FBQ0gsb0JBQUk1QixVQUFVLEtBQUtBLE9BQW5CO0FBQ0FZLG1CQUFHaUIsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLDJCQUEyQkMsS0FBS0MsU0FBTCxDQUFlLENBQUM7QUFDNUNDLCtCQUFPLENBRHFDO0FBRTVDQyw0QkFBSWxDLFFBQVFtQztBQUZnQyxxQkFBRCxDQUFmO0FBRHRCLGlCQUFkO0FBTUgsYUFaSzs7O0FBY047OztBQUdBQywyQkFBZSx5QkFBTTtBQUNqQixzQkFBS3BDLE9BQUwsQ0FBYXFDLFFBQWIsR0FBd0IsTUFBS2hDLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBeEI7QUFDQSxzQkFBS2lDLE9BQUwsQ0FBYSxXQUFiLEVBQTBCLE1BQTFCLEVBQWtDLE1BQUt0QyxPQUF2QztBQUVILGFBckJLOztBQXVCTnVDLHNCQUFVLGtCQUFVQyxDQUFWLEVBQWE7QUFDbkIscUJBQUtDLE9BQUwsQ0FBYTtBQUNUdEMsa0NBQWNxQyxFQUFFRSxhQUFGLENBQWdCQyxVQURyQjtBQUVUekMsaUNBQWFzQyxFQUFFRSxhQUFGLENBQWdCUjtBQUZwQixpQkFBYjtBQUlILGFBNUJLO0FBNkJOOzs7QUFHQVUsb0JBaENNLG9CQWdDSWQsR0FoQ0osRUFnQ1M7QUFDWGxCLG1CQUFHaUMsVUFBSCxDQUFjO0FBQ1ZmLHlCQUFLQTtBQURLLGlCQUFkO0FBR0g7QUFwQ0ssUzs7QUE3QlY7Ozs7Ozs7K0JBb0VRZ0IsQyxFQUFHO0FBQ1AsaUJBQUtwQyxTQUFMLENBQWVvQyxFQUFFbkMsR0FBakI7QUFDSDs7OztFQW5GdUMsZUFBS29DLEk7O2tCQUE1QmpELGEiLCJmaWxlIjoicHJvZHVjdERldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgZ2V0RGV0aWFsIH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0J1xuICAgIGltcG9ydCBhZGRUb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9hZGRUb0NhcmQnXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSdcbiAgICBpbXBvcnQgY29weXJpZ2h0IGZyb20gJy4uL2NvbXBvbmVudHMvY29weXJpZ2h0J1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWwgIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3Q6IHt9LFxuICAgICAgICAgICAgdGFiczogWyfor6bmg4UnLCAn6K+E5Lu3J10sXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgICAgICAgIHNsaWRlck9mZnNldDogMCxcbiAgICAgICAgICAgIHNsaWRlckxlZnQ6IDAsXG4gICAgICAgICAgICBwcm9kdWN0UGljczogW10sXG4gICAgICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBpbnRlcnZhbDogNTAwMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPluiuouWNleivpuaDhVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RGV0aWFsID0gKHBpZCkgPT4ge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOiAn5Yqg6L295LitJ30pO1xuICAgICAgICAgICAgZ2V0RGV0aWFsKHBpZClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwcm9kdWN0LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFBpY3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9yYWdlSWRzLmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFBpY3MucHVzaChjb21wcmVzc0ltYWdlKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdFBpY3MgPSBwcm9kdWN0UGljcztcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgYWRkVG9DYXJkLFxuICAgICAgICAgICAgY29weXJpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDotK3kubBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcGF5ICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHRoaXMucHJvZHVjdDtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnb3JkZXJDb25maXJtP3Byb2R1Y3RzPScgKyBKU09OLnN0cmluZ2lmeShbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcHJvZHVjdC5faWRcbiAgICAgICAgICAgICAgICAgICAgfV0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOaYvuekuua3u+WKoOWIsOi0reeJqei9puWvueivneahhlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzaG93QWRkVG9DYXJkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0LmltYWdlVXJsID0gdGhpcy5wcm9kdWN0UGljc1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2FkZFRvQ2FyZCcsICdzaG93JywgdGhpcy5wcm9kdWN0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRhYkNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlck9mZnNldDogZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4OiBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB0aGlzLmdldERldGlhbChwLnBpZCk7XG4gICAgICAgIH1cblxuICAgIH1cbiJdfQ==