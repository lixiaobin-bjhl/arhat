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
        }, _this.config = {
            navigationBarTitleText: 'arhat'
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
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImltZ1VybHMiLCJwcm9kdWN0cyIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3RlciIsIm1ldGhvZHMiLCJhZGFwdExpc3QiLCJmb3JFYWNoIiwiaXRlbSIsInN0b3JhZ2VJZHMiLCJsZW5ndGgiLCJpbWFnZVVybCIsImdldFByb2R1Y3RMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsInNldERhdGEiLCJsaXN0IiwiY2F0Y2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQyxxQkFBUyxDQUNMLHNFQURLLEVBRUwsc0VBRkssRUFHTCxzRUFISyxDQUROO0FBTUhDLHNCQUFVLElBTlA7QUFPSEMsMkJBQWUsSUFQWjtBQVFIQyxzQkFBVSxJQVJQO0FBU0hDLHNCQUFVLElBVFA7QUFVSEMsc0JBQVU7QUFWUCxTLFFBYVBDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxVLEdBQWE7QUFDVEM7QUFEUyxTLFFBUWJDLE8sR0FBVTtBQUNOQyx1QkFBVyxtQkFBQ1osSUFBRCxFQUFTO0FBQ2hCQSxxQkFBS2EsT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBUztBQUNsQix3QkFBSUMsYUFBYUQsS0FBS0MsVUFBdEI7QUFDQSx3QkFBSUEsY0FBY0EsV0FBV0MsTUFBN0IsRUFBcUM7QUFDakM7QUFDQUYsNkJBQUtHLFFBQUwsR0FBZ0IsNkJBQWNILEtBQUtDLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBZCxDQUFoQjtBQUNIO0FBQ0osaUJBTkQ7QUFPQSx1QkFBT2YsSUFBUDtBQUNILGFBVks7QUFXTmtCLDRCQUFnQiwwQkFBSztBQUNqQkMsbUJBQUdDLFdBQUg7O0FBRUEsd0NBQ0tDLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVkgsdUJBQUdJLFdBQUg7QUFDQSwwQkFBS0MsT0FBTCxDQUFhLFVBQWIsRUFBeUIsTUFBS2IsT0FBTCxDQUFhQyxTQUFiLENBQXVCVSxJQUFJdEIsSUFBSixDQUFTeUIsSUFBaEMsQ0FBekI7QUFDSCxpQkFKTCxFQUtLQyxLQUxMLENBS1csWUFBSztBQUNSLDBCQUFLRixPQUFMLENBQWEsVUFBYixFQUF5QixFQUF6QjtBQUNBTCx1QkFBR0ksV0FBSDtBQUNILGlCQVJMO0FBU0g7QUF2QkssUzs7Ozs7aUNBSkE7QUFDTixpQkFBS1osT0FBTCxDQUFhTyxjQUFiO0FBQ0g7Ozs7RUF4QjhCLGVBQUtTLEk7O2tCQUFuQjVCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG4gICAgaW1wb3J0IHsgZ2V0TGlzdCB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCc7XHJcbiAgICBpbXBvcnQgeyBsb2dpbiwgdG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInO1xyXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSc7XHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcbiAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgaW1nVXJsczogW1xyXG4gICAgICAgICAgICAgICAgJ2h0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNTA5MjgvdG9vb3Blbl9zeV8xNDM5MTI3NTU3MjYuanBnJyxcclxuICAgICAgICAgICAgICAgICdodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODY2NDM0Mjk2LmpwZycsXHJcbiAgICAgICAgICAgICAgICAnaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTgzMzA0NzcxNS5qcGcnXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiBudWxsLFxyXG4gICAgICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdhcmhhdCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIGZvb3RlclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFByb2R1Y3RMaXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBhZGFwdExpc3Q6IChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JhZ2VJZHMgPSBpdGVtLnN0b3JhZ2VJZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2VJZHMgJiYgc3RvcmFnZUlkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pi+56S656ysMeW8oOWbvlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShpdGVtLnN0b3JhZ2VJZHNbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UHJvZHVjdExpc3Q6ICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRMaXN0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKCdwcm9kdWN0cycsIHRoaXMubWV0aG9kcy5hZGFwdExpc3QocmVzLmRhdGEubGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoJ3Byb2R1Y3RzJywgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=