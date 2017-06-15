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

var _global = require('./../service/global.js');

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _initUser = require('./../function/initUser.js');

var _initUser2 = _interopRequireDefault(_initUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
            this.setUserInfo();
        }
    }, {
        key: 'setUserInfo',
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                res = void 0;
                                _context.prev = 1;
                                _context.next = 4;
                                return (0, _initUser2.default)();

                            case 4:
                                res = _context.sent;
                                _context.next = 11;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](1);

                                console.log(_context.t0);
                                toast('获取用户信息失败');

                            case 11:
                                console.log(_userInfo2.default.getInfo());
                                return _context.abrupt('return', _userInfo2.default.getInfo());

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 7]]);
            }));

            function setUserInfo() {
                return _ref2.apply(this, arguments);
            }

            return setUserInfo;
        }()
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJtZXRob2RzIiwiYWRhcHRMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJzdG9yYWdlSWRzIiwibGVuZ3RoIiwic3RvcmFnZUlkIiwiaW5kZXgiLCJpbWFnZVVybCIsInB1c2giLCJpbWFnZSIsIl9pZCIsInNldERhdGEiLCJnZXRQcm9kdWN0TGlzdCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJsaXN0IiwiY2F0Y2giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJ0aXRsZSIsIm5hbWUiLCJzZXRVc2VySW5mbyIsImNvbnNvbGUiLCJsb2ciLCJ0b2FzdCIsImdldEluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQywwQkFBYyxFQURYO0FBRUhDLHNCQUFVLElBRlA7QUFHSEMsMkJBQWUsSUFIWjtBQUlIQyxzQkFBVSxJQUpQO0FBS0hDLHNCQUFVLElBTFA7QUFNSEMsc0JBQVU7QUFOUCxTLFFBU1BDLFUsR0FBYTtBQUNUQztBQURTLFMsUUF3QmJDLE8sR0FBVTtBQUNOQyx1QkFBVyxtQkFBQ1YsSUFBRCxFQUFTO0FBQ2hCLG9CQUFJQyxlQUFlLEVBQW5CO0FBQ0FELHFCQUFLVyxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFTO0FBQ2xCLHdCQUFJQyxhQUFhRCxLQUFLQyxVQUF0QjtBQUNBLHdCQUFJQSxjQUFjQSxXQUFXQyxNQUE3QixFQUFxQztBQUNqQ0QsbUNBQVdGLE9BQVgsQ0FBbUIsVUFBQ0ksU0FBRCxFQUFZQyxLQUFaLEVBQXFCO0FBQ3BDO0FBQ0EsZ0NBQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNiSixxQ0FBS0ssUUFBTCxHQUFnQiw2QkFBY0YsU0FBZCxDQUFoQjtBQUNKO0FBQ0MsNkJBSEQsTUFHTztBQUNIZCw2Q0FBYWlCLElBQWIsQ0FBa0I7QUFDZEMsMkNBQU8sNkJBQWNKLFNBQWQsQ0FETztBQUVkSyx5Q0FBS1IsS0FBS1E7QUFGSSxpQ0FBbEI7QUFJSDtBQUNKLHlCQVhEO0FBWUg7QUFDSixpQkFoQkQ7QUFpQkEsc0JBQUtDLE9BQUwsQ0FBYSxjQUFiLEVBQTZCcEIsWUFBN0I7QUFDQSx1QkFBT0QsSUFBUDtBQUNILGFBdEJLOztBQXdCTnNCLDRCQUFnQiwwQkFBSztBQUNqQkMsbUJBQUdDLFdBQUg7O0FBRUEsd0NBQ0tDLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVkgsdUJBQUdJLFdBQUg7QUFDQSwwQkFBS04sT0FBTCxDQUFhLFVBQWIsRUFBeUIsTUFBS1osT0FBTCxDQUFhQyxTQUFiLENBQXVCZ0IsSUFBSTFCLElBQUosQ0FBUzRCLElBQWhDLENBQXpCO0FBQ0gsaUJBSkwsRUFLS0MsS0FMTCxDQUtXLFlBQUs7QUFDUiwwQkFBS1IsT0FBTCxDQUFhLFVBQWIsRUFBeUIsRUFBekI7QUFDQUUsdUJBQUdJLFdBQUg7QUFDSCxpQkFSTDtBQVNIO0FBcENLLFM7Ozs7O2lDQXBCQTtBQUNOLGlCQUFLbEIsT0FBTCxDQUFhYSxjQUFiO0FBQ0FDLGVBQUdPLHFCQUFILENBQXlCO0FBQ3JCQyx1QkFBTyxpQkFBT0M7QUFETyxhQUF6QjtBQUdBLGlCQUFLQyxXQUFMO0FBQ0g7Ozs7Ozs7Ozs7QUFHT1AsbUM7Ozt1Q0FFWSx5Qjs7O0FBQVpBLG1DOzs7Ozs7OztBQUVBUSx3Q0FBUUMsR0FBUjtBQUNBQyxzQ0FBTSxVQUFOOzs7QUFFSkYsd0NBQVFDLEdBQVIsQ0FBWSxtQkFBU0UsT0FBVCxFQUFaO2lFQUNPLG1CQUFTQSxPQUFULEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvQm9CLGVBQUtDLEk7O2tCQUFuQnZDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG4gICAgaW1wb3J0IHsgZ2V0TGlzdCB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCc7XHJcbiAgICBpbXBvcnQgeyBsb2dpbiwgdG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInO1xyXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSc7XHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcbiAgICBpbXBvcnQgeyBnZXRVc2VySW5mbyB9IGZyb20gJy4uL3NlcnZpY2UvZ2xvYmFsJztcclxuICAgIGltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xyXG4gICAgaW1wb3J0IGluaXRVc2VyIGZyb20gJy4uL2Z1bmN0aW9uL2luaXRVc2VyJztcclxuICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBiYW5uZXJPcHRpb246IFtdLFxyXG4gICAgICAgICAgICBwcm9kdWN0czogbnVsbCxcclxuICAgICAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgZm9vdGVyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0UHJvZHVjdExpc3QoKTtcclxuICAgICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBjb25maWcubmFtZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRVc2VySW5mbygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgc2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgICAgIGxldCByZXM7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSBhd2FpdCBpbml0VXNlcigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgIHRvYXN0KCfojrflj5bnlKjmiLfkv6Hmga/lpLHotKUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VySW5mby5nZXRJbmZvKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlckluZm8uZ2V0SW5mbygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgYWRhcHRMaXN0OiAoZGF0YSk9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFubmVyT3B0aW9uID0gW107XHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yYWdlSWRzID0gaXRlbS5zdG9yYWdlSWRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlSWRzICYmIHN0b3JhZ2VJZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VJZHMuZm9yRWFjaCgoc3RvcmFnZUlkLCBpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDkuqflk4Hku4XmmL7npLrnrKwx5byg5Zu+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlhbbkvZnlm77niYfmlL7liLBiYW5uZXLkuK3mmL7npLpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyT3B0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGl0ZW0uX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKCdiYW5uZXJPcHRpb24nLCBiYW5uZXJPcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBnZXRQcm9kdWN0TGlzdDogKCk9PiB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGdldExpc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoJ3Byb2R1Y3RzJywgdGhpcy5tZXRob2RzLmFkYXB0TGlzdChyZXMuZGF0YS5saXN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSgncHJvZHVjdHMnLCBbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==