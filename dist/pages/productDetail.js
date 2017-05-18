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
                        console.log(item);
                        console.log((0, _compressImage2.default)(item));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwuanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbCIsImRhdGEiLCJwcm9kdWN0IiwidGFicyIsImFjdGl2ZUluZGV4Iiwic2xpZGVyT2Zmc2V0Iiwic2xpZGVyTGVmdCIsInByb2R1Y3RQaWNzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsIm1ldGhvZHMiLCJnZXREZXRpYWwiLCJwaWQiLCJ3eCIsInNob3dMb2FkaW5nIiwidGhlbiIsInJlcyIsInNldERhdGEiLCJoaWRlTG9hZGluZyIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwic3RvcmFnZUlkcyIsImZvckVhY2giLCJpdGVtIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJjYXRjaCIsInRhYkNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXRMZWZ0IiwiaWQiLCJwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7Ozt3TUFDakJDLEksR0FBTztBQUNIQyxxQkFBUyxFQUROO0FBRUhDLGtCQUFNLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FGSDtBQUdIQyx5QkFBYSxDQUhWO0FBSUhDLDBCQUFjLENBSlg7QUFLSEMsd0JBQVksQ0FMVDtBQU1IQyx5QkFBYSxFQU5WO0FBT0hDLDJCQUFlLElBUFo7QUFRSEMsc0JBQVUsSUFSUDtBQVNIQyxzQkFBVSxJQVRQO0FBVUhDLHNCQUFVO0FBVlAsUyxRQWFQQyxPLEdBQVU7QUFDTjs7O0FBR0FDLHVCQUFXLG1CQUFDQyxHQUFELEVBQVM7QUFDaEJDLG1CQUFHQyxXQUFIO0FBQ0Esd0NBQVVGLEdBQVYsRUFDS0csSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLHdCQUFJaEIsVUFBVWdCLElBQUlqQixJQUFsQjtBQUNBLDBCQUFLa0IsT0FBTCxDQUFhLFNBQWIsRUFBd0JqQixPQUF4QjtBQUNBYSx1QkFBR0ssV0FBSDtBQUNBTCx1QkFBR00scUJBQUgsQ0FBeUI7QUFDckJDLCtCQUFPcEIsUUFBUW9CO0FBRE0scUJBQXpCO0FBR0Esd0JBQUlmLGNBQWMsRUFBbEI7QUFDQUwsNEJBQVFxQixVQUFSLENBQW1CQyxPQUFuQixDQUEyQixVQUFDQyxJQUFELEVBQVM7QUFDaENDLGdDQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQUMsZ0NBQVFDLEdBQVIsQ0FBWSw2QkFBY0YsSUFBZCxDQUFaO0FBQ0FsQixvQ0FBWXFCLElBQVosQ0FBaUIsNkJBQWNILElBQWQsQ0FBakI7QUFDSCxxQkFKRDtBQUtBLDBCQUFLTixPQUFMLENBQWEsYUFBYixFQUE0QlosV0FBNUI7QUFDSCxpQkFmTCxFQWdCS3NCLEtBaEJMLENBZ0JXLFlBQUk7QUFDUGQsdUJBQUdLLFdBQUg7QUFDSCxpQkFsQkw7QUFtQkgsYUF6Qks7QUEwQk5VLHNCQUFVLGtCQUFVQyxDQUFWLEVBQWE7QUFDbkIscUJBQUtaLE9BQUwsQ0FBYTtBQUNUZCxrQ0FBYzBCLEVBQUVDLGFBQUYsQ0FBZ0JDLFVBRHJCO0FBRVQ3QixpQ0FBYTJCLEVBQUVDLGFBQUYsQ0FBZ0JFO0FBRnBCLGlCQUFiO0FBSUg7QUEvQkssUzs7Ozs7K0JBa0NGQyxDLEVBQUc7QUFDUCxpQkFBS3ZCLE9BQUwsQ0FBYUMsU0FBYixDQUF1QnNCLEVBQUVyQixHQUF6QjtBQUNIOzs7O0VBbER1QyxlQUFLc0IsSTs7a0JBQTVCcEMsYSIsImZpbGUiOiJwcm9kdWN0RGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBnZXREZXRpYWwgfSBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3QnXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSdcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsICBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBwcm9kdWN0OiB7fSxcbiAgICAgICAgICAgIHRhYnM6IFsn6K+m5oOFJywgJ+ivhOS7tyddLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICBzbGlkZXJPZmZzZXQ6IDAsXG4gICAgICAgICAgICBzbGlkZXJMZWZ0OiAwLFxuICAgICAgICAgICAgcHJvZHVjdFBpY3M6IFtdLFxuICAgICAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6I635Y+W5Lqn5ZOB6K+m5oOFXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldERldGlhbDogKHBpZCkgPT4ge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgZ2V0RGV0aWFsKHBpZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKCdwcm9kdWN0JywgcHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcHJvZHVjdC50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFBpY3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc3RvcmFnZUlkcy5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wcmVzc0ltYWdlKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGljcy5wdXNoKGNvbXByZXNzSW1hZ2UoaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoJ3Byb2R1Y3RQaWNzJywgcHJvZHVjdFBpY3MpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYkNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlck9mZnNldDogZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4OiBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCAocCkge1xuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldERldGlhbChwLnBpZCk7XG4gICAgICAgIH1cblxuICAgIH1cbiJdfQ==