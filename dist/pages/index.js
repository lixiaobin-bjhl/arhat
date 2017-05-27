'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _product = require('./../service/product.js');

var _user = require('./../service/user.js');

var _compressImage = require('./../function/compressImage.js');

var _compressImage2 = _interopRequireDefault(_compressImage);

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
            products: null,
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        }, _this.components = {
            footer: _footer2.default
        }, _this.methods = {
            adaptList: function adaptList(data) {
                data.forEach(function (item) {
                    var storageIds = item.storageIds;
                    if (storageIds && storageIds.length) {
                        // 显示第1张图
                        item.imageUrl = (0, _compressImage2.default)(item.storageIds[0]);
                    }
                });
                return data;
            },
            getProductList: function getProductList() {
                wx.showLoading();

                (0, _product.getList)().then(function (res) {
                    wx.hideLoading();
                    _this.setData('products', _this.methods.adaptList(res.data.list));
                }).catch(function () {
                    _this.setData('products', []);
                    wx.hideLoading();
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            this.methods.getProductList();
            wx.setNavigationBarTitle({
                title: _config2.default.name
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImltZ1VybHMiLCJwcm9kdWN0cyIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb21wb25lbnRzIiwiZm9vdGVyIiwibWV0aG9kcyIsImFkYXB0TGlzdCIsImZvckVhY2giLCJpdGVtIiwic3RvcmFnZUlkcyIsImxlbmd0aCIsImltYWdlVXJsIiwiZ2V0UHJvZHVjdExpc3QiLCJ3eCIsInNob3dMb2FkaW5nIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwic2V0RGF0YSIsImxpc3QiLCJjYXRjaCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInRpdGxlIiwibmFtZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLHFCQUFTLENBQ0wsc0VBREssRUFFTCxzRUFGSyxFQUdMLHNFQUhLLENBRE47QUFNSEMsc0JBQVUsSUFOUDtBQU9IQywyQkFBZSxJQVBaO0FBUUhDLHNCQUFVLElBUlA7QUFTSEMsc0JBQVUsSUFUUDtBQVVIQyxzQkFBVTtBQVZQLFMsUUFhUEMsVSxHQUFhO0FBQ1RDO0FBRFMsUyxRQVdiQyxPLEdBQVU7QUFDTkMsdUJBQVcsbUJBQUNWLElBQUQsRUFBUztBQUNoQkEscUJBQUtXLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVM7QUFDbEIsd0JBQUlDLGFBQWFELEtBQUtDLFVBQXRCO0FBQ0Esd0JBQUlBLGNBQWNBLFdBQVdDLE1BQTdCLEVBQXFDO0FBQ2pDO0FBQ0FGLDZCQUFLRyxRQUFMLEdBQWdCLDZCQUFjSCxLQUFLQyxVQUFMLENBQWdCLENBQWhCLENBQWQsQ0FBaEI7QUFDSDtBQUNKLGlCQU5EO0FBT0EsdUJBQU9iLElBQVA7QUFDSCxhQVZLO0FBV05nQiw0QkFBZ0IsMEJBQUs7QUFDakJDLG1CQUFHQyxXQUFIOztBQUVBLHdDQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1ZILHVCQUFHSSxXQUFIO0FBQ0EsMEJBQUtDLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLE1BQUtiLE9BQUwsQ0FBYUMsU0FBYixDQUF1QlUsSUFBSXBCLElBQUosQ0FBU3VCLElBQWhDLENBQXpCO0FBQ0gsaUJBSkwsRUFLS0MsS0FMTCxDQUtXLFlBQUs7QUFDUiwwQkFBS0YsT0FBTCxDQUFhLFVBQWIsRUFBeUIsRUFBekI7QUFDQUwsdUJBQUdJLFdBQUg7QUFDSCxpQkFSTDtBQVNIO0FBdkJLLFM7Ozs7O2lDQVBBO0FBQ04saUJBQUtaLE9BQUwsQ0FBYU8sY0FBYjtBQUNBQyxlQUFHUSxxQkFBSCxDQUF5QjtBQUNyQkMsdUJBQU8saUJBQU9DO0FBRE8sYUFBekI7QUFHSDs7OztFQXZCOEIsZUFBS0MsSTs7a0JBQW5CN0IsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbiAgICBpbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0JztcclxuICAgIGltcG9ydCB7IGxvZ2luLCB0b2tlbiB9IGZyb20gJy4uL3NlcnZpY2UvdXNlcic7XHJcbiAgICBpbXBvcnQgY29tcHJlc3NJbWFnZSBmcm9tICcuLi9mdW5jdGlvbi9jb21wcmVzc0ltYWdlJztcclxuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBpbWdVcmxzOiBbXHJcbiAgICAgICAgICAgICAgICAnaHR0cDovL2ltZzAyLnRvb29wZW4uY29tL2ltYWdlcy8yMDE1MDkyOC90b29vcGVuX3N5XzE0MzkxMjc1NTcyNi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgJ2h0dHA6Ly9pbWcwNi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNjA4MTgvdG9vb3Blbl9zeV8xNzU4NjY0MzQyOTYuanBnJyxcclxuICAgICAgICAgICAgICAgICdodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODMzMDQ3NzE1LmpwZydcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IG51bGwsXHJcbiAgICAgICAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIGZvb3RlclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFByb2R1Y3RMaXN0KCk7XHJcbiAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY29uZmlnLm5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBhZGFwdExpc3Q6IChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JhZ2VJZHMgPSBpdGVtLnN0b3JhZ2VJZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2VJZHMgJiYgc3RvcmFnZUlkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pi+56S656ysMeW8oOWbvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShpdGVtLnN0b3JhZ2VJZHNbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UHJvZHVjdExpc3Q6ICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRMaXN0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKCdwcm9kdWN0cycsIHRoaXMubWV0aG9kcy5hZGFwdExpc3QocmVzLmRhdGEubGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoJ3Byb2R1Y3RzJywgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=