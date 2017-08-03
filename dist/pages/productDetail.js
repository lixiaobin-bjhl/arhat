'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _product = require('./../service/product.js');

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
        }, _this.methods = {
            /**
             * 获取产品详情
             */
            getDetial: function getDetial(pid) {
                wx.showLoading();
                (0, _product.getDetial)(pid).then(function (res) {
                    var product = res.data;
                    _this.setData('product', product);
                    wx.hideLoading();
                    wx.setNavigationBarTitle({
                        title: product.title
                    });
                    var productPics = [];
                    product.storageIds.forEach(function (item) {
                        productPics.push((0, _compressImage2.default)(item));
                    });
                    _this.setData('productPics', productPics);
                }).catch(function () {
                    wx.hideLoading();
                });
            },
            tabClick: function tabClick(e) {
                this.setData({
                    sliderOffset: e.currentTarget.offsetLeft,
                    activeIndex: e.currentTarget.id
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ProductDetail, [{
        key: 'onLoad',
        value: function onLoad(p) {
            this.methods.getDetial(p.pid);
        }
    }]);

    return ProductDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ProductDetail , 'pages/productDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwuanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbCIsImRhdGEiLCJwcm9kdWN0IiwidGFicyIsImFjdGl2ZUluZGV4Iiwic2xpZGVyT2Zmc2V0Iiwic2xpZGVyTGVmdCIsInByb2R1Y3RQaWNzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsIm1ldGhvZHMiLCJnZXREZXRpYWwiLCJwaWQiLCJ3eCIsInNob3dMb2FkaW5nIiwidGhlbiIsInJlcyIsInNldERhdGEiLCJoaWRlTG9hZGluZyIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwic3RvcmFnZUlkcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsImNhdGNoIiwidGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsIm9mZnNldExlZnQiLCJpZCIsInAiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7O3dNQUNqQkMsSSxHQUFPO0FBQ0hDLHFCQUFTLEVBRE47QUFFSEMsa0JBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUZIO0FBR0hDLHlCQUFhLENBSFY7QUFJSEMsMEJBQWMsQ0FKWDtBQUtIQyx3QkFBWSxDQUxUO0FBTUhDLHlCQUFhLEVBTlY7QUFPSEMsMkJBQWUsSUFQWjtBQVFIQyxzQkFBVSxJQVJQO0FBU0hDLHNCQUFVLElBVFA7QUFVSEMsc0JBQVU7QUFWUCxTLFFBYVBDLE8sR0FBVTtBQUNOOzs7QUFHQUMsdUJBQVcsbUJBQUNDLEdBQUQsRUFBUztBQUNoQkMsbUJBQUdDLFdBQUg7QUFDQSx3Q0FBVUYsR0FBVixFQUNLRyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysd0JBQUloQixVQUFVZ0IsSUFBSWpCLElBQWxCO0FBQ0EsMEJBQUtrQixPQUFMLENBQWEsU0FBYixFQUF3QmpCLE9BQXhCO0FBQ0FhLHVCQUFHSyxXQUFIO0FBQ0FMLHVCQUFHTSxxQkFBSCxDQUF5QjtBQUNyQkMsK0JBQU9wQixRQUFRb0I7QUFETSxxQkFBekI7QUFHQSx3QkFBSWYsY0FBYyxFQUFsQjtBQUNBTCw0QkFBUXFCLFVBQVIsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQUNDLElBQUQsRUFBUztBQUNoQ2xCLG9DQUFZbUIsSUFBWixDQUFpQiw2QkFBY0QsSUFBZCxDQUFqQjtBQUNILHFCQUZEO0FBR0EsMEJBQUtOLE9BQUwsQ0FBYSxhQUFiLEVBQTRCWixXQUE1QjtBQUNILGlCQWJMLEVBY0tvQixLQWRMLENBY1csWUFBSTtBQUNQWix1QkFBR0ssV0FBSDtBQUNILGlCQWhCTDtBQWlCSCxhQXZCSztBQXdCTlEsc0JBQVUsa0JBQVVDLENBQVYsRUFBYTtBQUNuQixxQkFBS1YsT0FBTCxDQUFhO0FBQ1RkLGtDQUFjd0IsRUFBRUMsYUFBRixDQUFnQkMsVUFEckI7QUFFVDNCLGlDQUFheUIsRUFBRUMsYUFBRixDQUFnQkU7QUFGcEIsaUJBQWI7QUFJSDtBQTdCSyxTOzs7OzsrQkFnQ0ZDLEMsRUFBRztBQUNQLGlCQUFLckIsT0FBTCxDQUFhQyxTQUFiLENBQXVCb0IsRUFBRW5CLEdBQXpCO0FBQ0g7Ozs7RUFoRHVDLGVBQUtvQixJOztrQkFBNUJsQyxhIiwiZmlsZSI6InByb2R1Y3REZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGdldERldGlhbCB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCdcbiAgICBpbXBvcnQgY29tcHJlc3NJbWFnZSBmcm9tICcuLi9mdW5jdGlvbi9jb21wcmVzc0ltYWdlJ1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWwgIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3Q6IHt9LFxuICAgICAgICAgICAgdGFiczogWyfor6bmg4UnLCAn6K+E5Lu3J10sXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgICAgICAgIHNsaWRlck9mZnNldDogMCxcbiAgICAgICAgICAgIHNsaWRlckxlZnQ6IDAsXG4gICAgICAgICAgICBwcm9kdWN0UGljczogW10sXG4gICAgICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBpbnRlcnZhbDogNTAwMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDojrflj5bkuqflk4Hor6bmg4VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0RGV0aWFsOiAocGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBnZXREZXRpYWwocGlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoJ3Byb2R1Y3QnLCBwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwcm9kdWN0LnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0UGljcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zdG9yYWdlSWRzLmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQaWNzLnB1c2goY29tcHJlc3NJbWFnZShpdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSgncHJvZHVjdFBpY3MnLCBwcm9kdWN0UGljcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFiQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyT2Zmc2V0OiBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0RGV0aWFsKHAucGlkKTtcbiAgICAgICAgfVxuXG4gICAgfVxuIl19