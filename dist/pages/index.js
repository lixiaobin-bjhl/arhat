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

var _compressImage = require('./../function/compressImage.js');

var _compressImage2 = _interopRequireDefault(_compressImage);

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
            products: [],
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
                (0, _product.getList)().then(function (res) {
                    _this.setData('products', _this.methods.adaptList(res.data.data.list));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImltZ1VybHMiLCJwcm9kdWN0cyIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3RlciIsIm1ldGhvZHMiLCJhZGFwdExpc3QiLCJmb3JFYWNoIiwiaXRlbSIsInN0b3JhZ2VJZHMiLCJsZW5ndGgiLCJpbWFnZVVybCIsImdldFByb2R1Y3RMaXN0IiwidGhlbiIsInJlcyIsInNldERhdGEiLCJsaXN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLHFCQUFTLENBQ0wsc0VBREssRUFFTCxzRUFGSyxFQUdMLHNFQUhLLENBRE47QUFNSEMsc0JBQVUsRUFOUDtBQU9IQywyQkFBZSxJQVBaO0FBUUhDLHNCQUFVLElBUlA7QUFTSEMsc0JBQVUsSUFUUDtBQVVIQyxzQkFBVTtBQVZQLFMsUUFhUEMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVRDLFUsR0FBYTtBQUNUQztBQURTLFMsUUFRYkMsTyxHQUFVO0FBQ05DLHVCQUFXLG1CQUFDWixJQUFELEVBQVM7QUFDaEJBLHFCQUFLYSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFTO0FBQ2xCLHdCQUFJQyxhQUFhRCxLQUFLQyxVQUF0QjtBQUNBLHdCQUFJQSxjQUFjQSxXQUFXQyxNQUE3QixFQUFxQztBQUNqQztBQUNBRiw2QkFBS0csUUFBTCxHQUFnQiw2QkFBY0gsS0FBS0MsVUFBTCxDQUFnQixDQUFoQixDQUFkLENBQWhCO0FBQ0g7QUFDSixpQkFORDtBQU9BLHVCQUFPZixJQUFQO0FBQ0gsYUFWSztBQVdOa0IsNEJBQWdCLDBCQUFLO0FBQ2pCLHdDQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1YsMEJBQUtDLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLE1BQUtWLE9BQUwsQ0FBYUMsU0FBYixDQUF1QlEsSUFBSXBCLElBQUosQ0FBU0EsSUFBVCxDQUFjc0IsSUFBckMsQ0FBekI7QUFDSCxpQkFITDtBQUlIO0FBaEJLLFM7Ozs7O2lDQUpBO0FBQ04saUJBQUtYLE9BQUwsQ0FBYU8sY0FBYjtBQUNIOzs7O0VBeEI4QixlQUFLSyxJOztrQkFBbkJ4QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IGZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuICAgIGltcG9ydCB7IGdldExpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3QnO1xyXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSc7XHJcbiAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgaW1nVXJsczogW1xyXG4gICAgICAgICAgICAgICAgJ2h0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNTA5MjgvdG9vb3Blbl9zeV8xNDM5MTI3NTU3MjYuanBnJyxcclxuICAgICAgICAgICAgICAgICdodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODY2NDM0Mjk2LmpwZycsXHJcbiAgICAgICAgICAgICAgICAnaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTgzMzA0NzcxNS5qcGcnXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnYXJoYXQnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICBmb290ZXJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWV0aG9kcy5nZXRQcm9kdWN0TGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgYWRhcHRMaXN0OiAoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yYWdlSWRzID0gaXRlbS5zdG9yYWdlSWRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlSWRzICYmIHN0b3JhZ2VJZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaYvuekuuesrDHlvKDlm75cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZVVybCA9IGNvbXByZXNzSW1hZ2UoaXRlbS5zdG9yYWdlSWRzWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFByb2R1Y3RMaXN0OiAoKT0+IHtcclxuICAgICAgICAgICAgICAgIGdldExpc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoJ3Byb2R1Y3RzJywgdGhpcy5tZXRob2RzLmFkYXB0TGlzdChyZXMuZGF0YS5kYXRhLmxpc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19