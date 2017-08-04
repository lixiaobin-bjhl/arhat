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
            addToCard: _addToCard2.default
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwuanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbCIsImRhdGEiLCJwcm9kdWN0IiwidGFicyIsImFjdGl2ZUluZGV4Iiwic2xpZGVyT2Zmc2V0Iiwic2xpZGVyTGVmdCIsInByb2R1Y3RQaWNzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImdldERldGlhbCIsInBpZCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsInN0b3JhZ2VJZHMiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJjYXRjaCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYWRkVG9DYXJkIiwibWV0aG9kcyIsInBheSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiY291bnQiLCJpZCIsIl9pZCIsInNob3dBZGRUb0NhcmQiLCJpbWFnZVVybCIsInNldFRpbWVvdXQiLCIkaW52b2tlIiwidGFiQ2xpY2siLCJlIiwic2V0RGF0YSIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXRMZWZ0IiwicmVkaXJlY3QiLCJyZWRpcmVjdFRvIiwicCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7Ozt3TUFDakJDLEksR0FBTztBQUNIQyxxQkFBUyxFQUROO0FBRUhDLGtCQUFNLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FGSDtBQUdIQyx5QkFBYSxDQUhWO0FBSUhDLDBCQUFjLENBSlg7QUFLSEMsd0JBQVksQ0FMVDtBQU1IQyx5QkFBYSxFQU5WO0FBT0hDLDJCQUFlLElBUFo7QUFRSEMsc0JBQVUsSUFSUDtBQVNIQyxzQkFBVSxJQVRQO0FBVUhDLHNCQUFVO0FBVlAsUyxRQWVQQyxTLEdBQVksVUFBQ0MsR0FBRCxFQUFTO0FBQ2pCQyxlQUFHQyxXQUFIO0FBQ0Esb0NBQVVGLEdBQVYsRUFDS0csSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLG9CQUFJZixVQUFVZSxJQUFJaEIsSUFBbEI7QUFDQSxzQkFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0FZLG1CQUFHSSxXQUFIO0FBQ0FKLG1CQUFHSyxxQkFBSCxDQUF5QjtBQUNyQkMsMkJBQU9sQixRQUFRa0I7QUFETSxpQkFBekI7QUFHQSxvQkFBSWIsY0FBYyxFQUFsQjtBQUNBTCx3QkFBUW1CLFVBQVIsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQUNDLElBQUQsRUFBUztBQUNoQ2hCLGdDQUFZaUIsSUFBWixDQUFpQiw2QkFBY0QsSUFBZCxDQUFqQjtBQUNILGlCQUZEO0FBR0Esc0JBQUtoQixXQUFMLEdBQW1CQSxXQUFuQjtBQUNILGFBYkwsRUFjS2tCLEtBZEwsQ0FjVyxZQUFJO0FBQ1BYLG1CQUFHSSxXQUFIO0FBQ0gsYUFoQkw7QUFpQkgsUyxRQUVGUSxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsdUJBQXNCLFNBQXZCLEVBQWIsRSxRQUNoQkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQUlOQyxPLEdBQVU7QUFDTjs7O0FBR0FDLGVBSk0saUJBSUM7QUFDSCxvQkFBSTdCLFVBQVUsS0FBS0EsT0FBbkI7QUFDQVksbUJBQUdrQixVQUFILENBQWM7QUFDVkMseUJBQUssMkJBQTJCQyxLQUFLQyxTQUFMLENBQWUsQ0FBQztBQUM1Q0MsK0JBQU8sQ0FEcUM7QUFFNUNDLDRCQUFJbkMsUUFBUW9DO0FBRmdDLHFCQUFELENBQWY7QUFEdEIsaUJBQWQ7QUFNSCxhQVpLOzs7QUFjTjs7O0FBR0FDLDJCQUFlLHlCQUFNO0FBQ2pCLHNCQUFLckMsT0FBTCxDQUFhc0MsUUFBYixHQUF3QixNQUFLakMsV0FBTCxDQUFpQixDQUFqQixDQUF4QjtBQUNBa0MsMkJBQVcsWUFBSztBQUNaLDBCQUFLQyxPQUFMLENBQWEsV0FBYixFQUEwQixNQUExQjtBQUNILGlCQUZEO0FBSUgsYUF2Qks7O0FBeUJOQyxzQkFBVSxrQkFBVUMsQ0FBVixFQUFhO0FBQ25CLHFCQUFLQyxPQUFMLENBQWE7QUFDVHhDLGtDQUFjdUMsRUFBRUUsYUFBRixDQUFnQkMsVUFEckI7QUFFVDNDLGlDQUFhd0MsRUFBRUUsYUFBRixDQUFnQlQ7QUFGcEIsaUJBQWI7QUFJSCxhQTlCSztBQStCTjs7O0FBR0FXLG9CQWxDTSxvQkFrQ0lmLEdBbENKLEVBa0NTO0FBQ1huQixtQkFBR21DLFVBQUgsQ0FBYztBQUNWaEIseUJBQUtBO0FBREssaUJBQWQ7QUFHSDtBQXRDSyxTOztBQTlCVjs7Ozs7OzsrQkF1RVFpQixDLEVBQUc7QUFDUCxpQkFBS3RDLFNBQUwsQ0FBZXNDLEVBQUVyQyxHQUFqQjtBQUNIOzs7O0VBdEZ1QyxlQUFLc0MsSTs7a0JBQTVCbkQsYSIsImZpbGUiOiJwcm9kdWN0RGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBnZXREZXRpYWwgfSBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3QnXG4gICAgaW1wb3J0IGFkZFRvQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2FkZFRvQ2FyZCdcbiAgICBpbXBvcnQgY29tcHJlc3NJbWFnZSBmcm9tICcuLi9mdW5jdGlvbi9jb21wcmVzc0ltYWdlJ1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWwgIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3Q6IHt9LFxuICAgICAgICAgICAgdGFiczogWyfor6bmg4UnLCAn6K+E5Lu3J10sXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgICAgICAgIHNsaWRlck9mZnNldDogMCxcbiAgICAgICAgICAgIHNsaWRlckxlZnQ6IDAsXG4gICAgICAgICAgICBwcm9kdWN0UGljczogW10sXG4gICAgICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBpbnRlcnZhbDogNTAwMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPluiuouWNleivpuaDhVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0RGV0aWFsID0gKHBpZCkgPT4ge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgIGdldERldGlhbChwaWQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcHJvZHVjdC50aXRsZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RQaWNzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvcmFnZUlkcy5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQaWNzLnB1c2goY29tcHJlc3NJbWFnZShpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RQaWNzID0gcHJvZHVjdFBpY3M7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAkcHJvcHMgPSB7XCJhZGRUb0NhcmRcIjp7XCJ2LWJpbmQ6cHJvZHVjdC5zeW5jXCI6XCJwcm9kdWN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGFkZFRvQ2FyZFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6LSt5LmwXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHBheSAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSB0aGlzLnByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkoW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuX2lkXG4gICAgICAgICAgICAgICAgICAgIH1dKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDmmL7npLrmt7vliqDliLDotK3nianovablr7nor53moYZcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2hvd0FkZFRvQ2FyZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdC5pbWFnZVVybCA9IHRoaXMucHJvZHVjdFBpY3NbMF07XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdhZGRUb0NhcmQnLCAnc2hvdycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdGFiQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyT2Zmc2V0OiBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGV0aWFsKHAucGlkKTtcbiAgICAgICAgfVxuXG4gICAgfVxuIl19