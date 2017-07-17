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

var _card = require('./../service/card.js');

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

var _purchase = require('./../function/purchase.js');

var _purchase2 = _interopRequireDefault(_purchase);

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
            },
            purchase: _purchase2.default,
            /**
             * 去查看购物车 
             */
            toCard: function toCard() {},
            addToCard: function addToCard(item) {
                wx.showLoading();
                (0, _card.addToCard)({
                    product: item._id,
                    count: 1
                }).then(function () {
                    wx.hideLoading();
                    toast('已成功加到购物车');
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
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](1);

                                toast('获取用户信息失败');

                            case 10:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJtZXRob2RzIiwiYWRhcHRMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJzdG9yYWdlSWRzIiwibGVuZ3RoIiwic3RvcmFnZUlkIiwiaW5kZXgiLCJpbWFnZVVybCIsInB1c2giLCJpbWFnZSIsIl9pZCIsInNldERhdGEiLCJnZXRQcm9kdWN0TGlzdCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aGVuIiwicmVzIiwiaGlkZUxvYWRpbmciLCJsaXN0IiwiY2F0Y2giLCJwdXJjaGFzZSIsInRvQ2FyZCIsImFkZFRvQ2FyZCIsInByb2R1Y3QiLCJjb3VudCIsInRvYXN0Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJuYW1lIiwic2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLDBCQUFjLEVBRFg7QUFFSEMsc0JBQVUsSUFGUDtBQUdIQywyQkFBZSxJQUhaO0FBSUhDLHNCQUFVLElBSlA7QUFLSEMsc0JBQVUsSUFMUDtBQU1IQyxzQkFBVTtBQU5QLFMsUUFTUEMsVSxHQUFhO0FBQ1RDO0FBRFMsUyxRQXNCYkMsTyxHQUFVO0FBQ05DLHVCQUFXLG1CQUFDVixJQUFELEVBQVM7QUFDaEIsb0JBQUlDLGVBQWUsRUFBbkI7QUFDQUQscUJBQUtXLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVM7QUFDbEIsd0JBQUlDLGFBQWFELEtBQUtDLFVBQXRCO0FBQ0Esd0JBQUlBLGNBQWNBLFdBQVdDLE1BQTdCLEVBQXFDO0FBQ2pDRCxtQ0FBV0YsT0FBWCxDQUFtQixVQUFDSSxTQUFELEVBQVlDLEtBQVosRUFBcUI7QUFDcEM7QUFDQSxnQ0FBSUEsVUFBVSxDQUFkLEVBQWlCO0FBQ2JKLHFDQUFLSyxRQUFMLEdBQWdCLDZCQUFjRixTQUFkLENBQWhCO0FBQ0o7QUFDQyw2QkFIRCxNQUdPO0FBQ0hkLDZDQUFhaUIsSUFBYixDQUFrQjtBQUNkQywyQ0FBTyw2QkFBY0osU0FBZCxDQURPO0FBRWRLLHlDQUFLUixLQUFLUTtBQUZJLGlDQUFsQjtBQUlIO0FBQ0oseUJBWEQ7QUFZSDtBQUNKLGlCQWhCRDtBQWlCQSxzQkFBS0MsT0FBTCxDQUFhLGNBQWIsRUFBNkJwQixZQUE3QjtBQUNBLHVCQUFPRCxJQUFQO0FBQ0gsYUF0Qks7O0FBd0JOc0IsNEJBQWdCLDBCQUFLO0FBQ2pCQyxtQkFBR0MsV0FBSDtBQUNBLHdDQUNLQyxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1ZILHVCQUFHSSxXQUFIO0FBQ0EsMEJBQUtOLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLE1BQUtaLE9BQUwsQ0FBYUMsU0FBYixDQUF1QmdCLElBQUkxQixJQUFKLENBQVM0QixJQUFoQyxDQUF6QjtBQUNILGlCQUpMLEVBS0tDLEtBTEwsQ0FLVyxZQUFLO0FBQ1IsMEJBQUtSLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEVBQXpCO0FBQ0FFLHVCQUFHSSxXQUFIO0FBQ0gsaUJBUkw7QUFTSCxhQW5DSztBQW9DTkcsd0NBcENNO0FBcUNOOzs7QUFHQUMsa0JBeENNLG9CQXdDSSxDQUVULENBMUNLO0FBMkNOQyxxQkEzQ00scUJBMkNLcEIsSUEzQ0wsRUEyQ1c7QUFDYlcsbUJBQUdDLFdBQUg7QUFDQSxxQ0FBVTtBQUNOUyw2QkFBU3JCLEtBQUtRLEdBRFI7QUFFTmMsMkJBQU87QUFGRCxpQkFBVixFQUlDVCxJQUpELENBSU0sWUFBSztBQUNQRix1QkFBR0ksV0FBSDtBQUNBUSwwQkFBTSxVQUFOO0FBQ0gsaUJBUEQ7QUFRSDtBQXJESyxTOzs7OztpQ0FsQkE7QUFDTixpQkFBSzFCLE9BQUwsQ0FBYWEsY0FBYjtBQUNBQyxlQUFHYSxxQkFBSCxDQUF5QjtBQUNyQkMsdUJBQU8saUJBQU9DO0FBRE8sYUFBekI7QUFHQSxpQkFBS0MsV0FBTDtBQUNIOzs7Ozs7Ozs7O0FBR09iLG1DOzs7dUNBRVkseUI7OztBQUFaQSxtQzs7Ozs7Ozs7QUFFQVMsc0NBQU0sVUFBTjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNCdUIsZUFBS0ssSTs7a0JBQW5CekMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbiAgICBpbXBvcnQgeyBnZXRMaXN0IH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0JztcclxuICAgIGltcG9ydCB7IGFkZFRvQ2FyZCB9IGZyb20gJy4uL3NlcnZpY2UvY2FyZCc7XHJcbiAgICBpbXBvcnQgeyBsb2dpbiwgdG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInO1xyXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSc7XHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcbiAgICBpbXBvcnQgeyBnZXRVc2VySW5mbyB9IGZyb20gJy4uL3NlcnZpY2UvZ2xvYmFsJztcclxuICAgIGltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xyXG4gICAgaW1wb3J0IGluaXRVc2VyIGZyb20gJy4uL2Z1bmN0aW9uL2luaXRVc2VyJztcclxuICAgIGltcG9ydCBwdXJjaGFzZSBmcm9tICcuLi9mdW5jdGlvbi9wdXJjaGFzZSc7XHJcbiAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgYmFubmVyT3B0aW9uOiBbXSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IG51bGwsXHJcbiAgICAgICAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIGZvb3RlclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFByb2R1Y3RMaXN0KCk7XHJcbiAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogY29uZmlnLm5hbWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VXNlckluZm8oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIHNldFVzZXJJbmZvKCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgaW5pdFVzZXIoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QoJ+iOt+WPlueUqOaIt+S/oeaBr+Wksei0pScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJbmZvLmdldEluZm8oKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBhZGFwdExpc3Q6IChkYXRhKT0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBiYW5uZXJPcHRpb24gPSBbXTtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JhZ2VJZHMgPSBpdGVtLnN0b3JhZ2VJZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2VJZHMgJiYgc3RvcmFnZUlkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZUlkcy5mb3JFYWNoKChzdG9yYWdlSWQsIGluZGV4KT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOS6p+WTgeS7heaYvuekuuesrDHlvKDlm75cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VVcmwgPSBjb21wcmVzc0ltYWdlKHN0b3JhZ2VJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWFtuS9meWbvueJh+aUvuWIsGJhbm5lcuS4reaYvuekulxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJPcHRpb24ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBjb21wcmVzc0ltYWdlKHN0b3JhZ2VJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogaXRlbS5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoJ2Jhbm5lck9wdGlvbicsIGJhbm5lck9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGdldFByb2R1Y3RMaXN0OiAoKT0+IHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBnZXRMaXN0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKCdwcm9kdWN0cycsIHRoaXMubWV0aG9kcy5hZGFwdExpc3QocmVzLmRhdGEubGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoJ3Byb2R1Y3RzJywgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwdXJjaGFzZSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIOWOu+afpeeci+i0reeJqei9piBcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHRvQ2FyZCAoKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWRkVG9DYXJkIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93TG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJkKHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBpdGVtLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogMVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ+W3suaIkOWKn+WKoOWIsOi0reeJqei9picpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19