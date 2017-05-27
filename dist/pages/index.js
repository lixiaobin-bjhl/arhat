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
            bannerOption: [],
            products: null,
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        }, _this.components = {
            footer: _footer2.default
        }, _this.methods = {
            adaptList: function adaptList(data) {
                var bannerOption = [];
                data.forEach(function (item) {
                    console.log(item._id);
                    var storageIds = item.storageIds;
                    if (storageIds && storageIds.length) {
                        storageIds.forEach(function (storageId, index) {
                            // 产品仅显示第1张图
                            if (index === 0) {
                                item.imageUrl = (0, _compressImage2.default)(storageId);
                                // 其余图片放到banner中显示
                            } else {
                                bannerOption.push({
                                    image: (0, _compressImage2.default)(storageId),
                                    _id: item._id
                                });
                            }
                        });
                    }
                });
                _this.setData('bannerOption', bannerOption);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJtZXRob2RzIiwiYWRhcHRMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiX2lkIiwic3RvcmFnZUlkcyIsImxlbmd0aCIsInN0b3JhZ2VJZCIsImluZGV4IiwiaW1hZ2VVcmwiLCJwdXNoIiwiaW1hZ2UiLCJzZXREYXRhIiwiZ2V0UHJvZHVjdExpc3QiLCJ3eCIsInNob3dMb2FkaW5nIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwibGlzdCIsImNhdGNoIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJuYW1lIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxJLEdBQU87QUFDSEMsMEJBQWMsRUFEWDtBQUVIQyxzQkFBVSxJQUZQO0FBR0hDLDJCQUFlLElBSFo7QUFJSEMsc0JBQVUsSUFKUDtBQUtIQyxzQkFBVSxJQUxQO0FBTUhDLHNCQUFVO0FBTlAsUyxRQVNQQyxVLEdBQWE7QUFDVEM7QUFEUyxTLFFBV2JDLE8sR0FBVTtBQUNOQyx1QkFBVyxtQkFBQ1YsSUFBRCxFQUFTO0FBQ2hCLG9CQUFJQyxlQUFlLEVBQW5CO0FBQ0FELHFCQUFLVyxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFTO0FBQ2xCQyw0QkFBUUMsR0FBUixDQUFZRixLQUFLRyxHQUFqQjtBQUNBLHdCQUFJQyxhQUFhSixLQUFLSSxVQUF0QjtBQUNBLHdCQUFJQSxjQUFjQSxXQUFXQyxNQUE3QixFQUFxQztBQUNqQ0QsbUNBQVdMLE9BQVgsQ0FBbUIsVUFBQ08sU0FBRCxFQUFZQyxLQUFaLEVBQXFCO0FBQ3BDO0FBQ0EsZ0NBQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNiUCxxQ0FBS1EsUUFBTCxHQUFnQiw2QkFBY0YsU0FBZCxDQUFoQjtBQUNKO0FBQ0MsNkJBSEQsTUFHTztBQUNIakIsNkNBQWFvQixJQUFiLENBQWtCO0FBQ2RDLDJDQUFPLDZCQUFjSixTQUFkLENBRE87QUFFZEgseUNBQUtILEtBQUtHO0FBRkksaUNBQWxCO0FBSUg7QUFDSix5QkFYRDtBQVlIO0FBQ0osaUJBakJEO0FBa0JBLHNCQUFLUSxPQUFMLENBQWEsY0FBYixFQUE2QnRCLFlBQTdCO0FBQ0EsdUJBQU9ELElBQVA7QUFDSCxhQXZCSztBQXdCTndCLDRCQUFnQiwwQkFBSztBQUNqQkMsbUJBQUdDLFdBQUg7O0FBRUEsd0NBQ0tDLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVkgsdUJBQUdJLFdBQUg7QUFDQSwwQkFBS04sT0FBTCxDQUFhLFVBQWIsRUFBeUIsTUFBS2QsT0FBTCxDQUFhQyxTQUFiLENBQXVCa0IsSUFBSTVCLElBQUosQ0FBUzhCLElBQWhDLENBQXpCO0FBQ0gsaUJBSkwsRUFLS0MsS0FMTCxDQUtXLFlBQUs7QUFDUiwwQkFBS1IsT0FBTCxDQUFhLFVBQWIsRUFBeUIsRUFBekI7QUFDQUUsdUJBQUdJLFdBQUg7QUFDSCxpQkFSTDtBQVNIO0FBcENLLFM7Ozs7O2lDQVBBO0FBQ04saUJBQUtwQixPQUFMLENBQWFlLGNBQWI7QUFDQUMsZUFBR08scUJBQUgsQ0FBeUI7QUFDckJDLHVCQUFPLGlCQUFPQztBQURPLGFBQXpCO0FBR0g7Ozs7RUFuQjhCLGVBQUtDLEk7O2tCQUFuQnBDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG4gICAgaW1wb3J0IHsgZ2V0TGlzdCB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCc7XHJcbiAgICBpbXBvcnQgeyBsb2dpbiwgdG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInO1xyXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSc7XHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcbiAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgYmFubmVyT3B0aW9uOiBbXSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IG51bGwsXHJcbiAgICAgICAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIGZvb3RlclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFByb2R1Y3RMaXN0KCk7XHJcbiAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY29uZmlnLm5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBhZGFwdExpc3Q6IChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBiYW5uZXJPcHRpb24gPSBbXTtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yYWdlSWRzID0gaXRlbS5zdG9yYWdlSWRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlSWRzICYmIHN0b3JhZ2VJZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VJZHMuZm9yRWFjaCgoc3RvcmFnZUlkLCBpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDkuqflk4Hku4XmmL7npLrnrKwx5byg5Zu+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlhbbkvZnlm77niYfmlL7liLBiYW5uZXLkuK3mmL7npLpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyT3B0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGl0ZW0uX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKCdiYW5uZXJPcHRpb24nLCBiYW5uZXJPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFByb2R1Y3RMaXN0OiAoKT0+IHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSgncHJvZHVjdHMnLCB0aGlzLm1ldGhvZHMuYWRhcHRMaXN0KHJlcy5kYXRhLmxpc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKCdwcm9kdWN0cycsIFtdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19