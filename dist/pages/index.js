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

var _productSubject = require('./../service/productSubject.js');

var productSubjectRequest = _interopRequireWildcard(_productSubject);

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

var _addToCard = require('./../components/addToCard.js');

var _addToCard2 = _interopRequireDefault(_addToCard);

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

var _toast = require('./../function/toast.js');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
            subjects: [],
            subjectId: '',
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000,
            selectedProduct: null
        }, _this.$props = { "footer": { "from": "home" } }, _this.$events = { "addToCard": { "v-on:addtocardsuccess": "addToCardHandler" } }, _this.components = {
            footer: _footer2.default,
            copyright: _copyright2.default,
            addToCard: _addToCard2.default
        }, _this.adaptList = function (data) {
            var bannerOption = [];
            for (var l = data.length - 1, i = l; i >= 0; i--) {
                var item = data[i];
                var storageIds = item.storageIds;
                item.count = 1;
                var length = storageIds.length;
                if (storageIds && length) {
                    storageIds.forEach(function (storageId, index) {
                        // 如果一个产品有多张图片，把第一张放到banner中, 并且bannger中只放5张图片
                        if (length > 1 && index === 0 && bannerOption.length < 5) {
                            bannerOption.push({
                                image: (0, _compressImage2.default)(storageId),
                                _id: item._id
                            });
                        }
                        // 产品的最后一张个为售卖图片
                        if (index === length - 1) {
                            item.imageUrl = (0, _compressImage2.default)(storageId);
                        }
                    });
                }
            }
            // 筛选分类时，不要改变bannerOption
            if (!_this.bannerOption.length) {
                _this.bannerOption = bannerOption;
            }
            return data;
        }, _this.getProductList = function () {
            wx.showLoading({ title: '加载中' });
            (0, _product.getList)({
                subjectId: _this.subjectId
            }).then(function (res) {
                wx.hideLoading();
                _this.products = _this.adaptList(res.data.list);
                _this.$apply();
            }).catch(function () {
                _this.products = [];
                wx.hideLoading();
            });
        }, _this.getProductSubjectList = function () {
            productSubjectRequest.getList().then(function (res) {
                _this.subjects = res.data.list;
                _this.$apply();
            });
        }, _this.methods = {
            /**
             * 改变分类
             */
            changeSubject: function changeSubject(item, index) {
                var _this2 = this;

                // 把之前选中的分类清除
                this.subjects.forEach(function (n, index) {
                    if (item._id != n._id) {
                        _this2.subjects[index].active = false;
                    }
                });
                this.subjects[index].active = !item.active;
                if (item.active) {
                    this.subjectId = '';
                } else {
                    this.subjectId = item._id;
                }
                this.getProductList();
            },


            /**
             * 显示添加到购物车对话框
             */
            showAddToCard: function showAddToCard(item) {
                _this.$invoke('addToCard', 'show', item);
            },

            /**
             * 添加到购物车中处理 
             */
            addToCardHandler: function addToCardHandler() {
                console.log('add to card success');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onShow',
        value: function onShow() {
            if (_userInfo2.default.getOpenid()) {
                this.$invoke('footer', 'getCountByOpendId');
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.getProductList();
            this.getProductSubjectList();
            wx.setNavigationBarTitle({
                title: _config2.default.name
            });
            this.setUserInfo();
            // wx.redirectTo({
            //     url: 'productDetail?pid=599922ea78c14837b64945b5'
            // });
            // wx.redirectTo({
            //     url: 'orderConfirm?products=' + JSON.stringify([{count:2, id: "59206d80c5ca1c13e0ce5789"}])
            // });
            // wx.redirectTo({
            //     url: 'orderDetail?id=59971e9ba1a9a11666bffea5'
            // });
            // wx.redirectTo({
            //     url: 'order'
            // });
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
                                return (0, _initUser2.default)(this);

                            case 4:
                                res = _context.sent;
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](1);

                                (0, _toast2.default)('获取用户信息失败');

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
        /**
         * 适配产品列表
         */

        /**
         * 获取产品列表 
         */


        /**
         * 获取产品的分类信息 
         */

    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb2R1Y3RTdWJqZWN0UmVxdWVzdCIsIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwic3ViamVjdHMiLCJzdWJqZWN0SWQiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic2VsZWN0ZWRQcm9kdWN0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJhZGRUb0NhcmQiLCJhZGFwdExpc3QiLCJsIiwibGVuZ3RoIiwiaSIsIml0ZW0iLCJzdG9yYWdlSWRzIiwiY291bnQiLCJmb3JFYWNoIiwic3RvcmFnZUlkIiwiaW5kZXgiLCJwdXNoIiwiaW1hZ2UiLCJfaWQiLCJpbWFnZVVybCIsImdldFByb2R1Y3RMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwibGlzdCIsIiRhcHBseSIsImNhdGNoIiwiZ2V0UHJvZHVjdFN1YmplY3RMaXN0IiwiZ2V0TGlzdCIsIm1ldGhvZHMiLCJjaGFuZ2VTdWJqZWN0IiwibiIsImFjdGl2ZSIsInNob3dBZGRUb0NhcmQiLCIkaW52b2tlIiwiYWRkVG9DYXJkSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRPcGVuaWQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJuYW1lIiwic2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLHFCOztBQUNaOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQywwQkFBYyxFQURYO0FBRUhDLHNCQUFVLElBRlA7QUFHSEMsc0JBQVUs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LENBQWNzQixLQUFkLEVBQXFCb0IsTUFBckIsR0FBOEIsQ0FBQ3pCLEtBQUt5QixNQUFwQztBQUNBLG9CQUFJekIsS0FBS3lCLE1BQVQsRUFBaUI7QUFDZCx5QkFBS3pDLFNBQUwsR0FBaUIsRUFBakI7QUFDRixpQkFGRCxNQUVPO0FBQ0gseUJBQUtBLFNBQUwsR0FBaUJnQixLQUFLUSxHQUF0QjtBQUNIO0FBQ0QscUJBQUtFLGNBQUw7QUFDSCxhQWxCSzs7O0FBb0JOOzs7QUFHQWdCLDJCQUFlLHVCQUFDMUIsSUFBRCxFQUFVO0FBQ3JCLHNCQUFLMkIsT0FBTCxDQUFhLFdBQWIsRUFBMEIsTUFBMUIsRUFBa0MzQixJQUFsQztBQUNILGFBekJLOztBQTJCTjs7O0FBR0E0Qiw0QkE5Qk0sOEJBOEJjO0FBQ2hCQyx3QkFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0g7QUFoQ0ssUzs7Ozs7aUNBakdEO0FBQ0wsZ0JBQUksbUJBQVNDLFNBQVQsRUFBSixFQUEwQjtBQUN0QixxQkFBS0osT0FBTCxDQUFhLFFBQWIsRUFBdUIsbUJBQXZCO0FBQ0g7QUFDSjs7O2lDQUVRO0FBQ0wsaUJBQUtqQixjQUFMO0FBQ0EsaUJBQUtVLHFCQUFMO0FBQ0FULGVBQUdxQixxQkFBSCxDQUF5QjtBQUNyQm5CLHVCQUFPLGlCQUFPb0I7QUFETyxhQUF6QjtBQUdBLGlCQUFLQyxXQUFMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7Ozs7Ozs7Ozs7QUFHT25CLG1DOzs7dUNBRVksd0JBQVMsSUFBVCxDOzs7QUFBWkEsbUM7Ozs7Ozs7O0FBRUEscURBQU0sVUFBTjs7Ozs7Ozs7Ozs7Ozs7OztBQUdSOzs7O0FBZ0NBOzs7OztBQW1CQTs7Ozs7OztFQTNHK0IsZUFBS29CLEk7O2tCQUFuQnhELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCB7IGdldExpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3QnXHJcbmltcG9ydCAqIGFzIHByb2R1Y3RTdWJqZWN0UmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3RTdWJqZWN0J1xyXG5pbXBvcnQgeyBsb2dpbiwgdG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInXHJcbmltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBnZXRVc2VySW5mbyB9IGZyb20gJy4uL3NlcnZpY2UvZ2xvYmFsJ1xyXG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJ1xyXG5pbXBvcnQgaW5pdFVzZXIgZnJvbSAnLi4vZnVuY3Rpb24vaW5pdFVzZXInXHJcbmltcG9ydCBhZGRUb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9hZGRUb0NhcmQnXHJcbmltcG9ydCBjb3B5cmlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnXHJcbmltcG9ydCB0b2FzdCBmcm9tICcuLi9mdW5jdGlvbi90b2FzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYmFubmVyT3B0aW9uOiBbXSxcclxuICAgICAgICBwcm9kdWN0czogbnVsbCxcclxuICAgICAgICBzdWJqZWN0czogW10sXHJcbiAgICAgICAgc3ViamVjdElkOiAnJyxcclxuICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIHNlbGVjdGVkUHJvZHVjdDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgJHByb3BzID0ge1wiZm9vdGVyXCI6e1wiZnJvbVwiOlwiaG9tZVwifX07XHJcbiRldmVudHMgPSB7XCJhZGRUb0NhcmRcIjp7XCJ2LW9uOmFkZHRvY2FyZHN1Y2Nlc3NcIjpcImFkZFRvQ2FyZEhhbmRsZXJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICBmb290ZXIsXHJcbiAgICAgICAgY29weXJpZ2h0LFxyXG4gICAgICAgIGFkZFRvQ2FyZFxyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICBpZiAodXNlckluZm8uZ2V0T3BlbmlkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdmb290ZXInLCAnZ2V0Q291bnRCeU9wZW5kSWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdExpc3QoKTtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3RTdWJqZWN0TGlzdCgpO1xyXG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBjb25maWcubmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0VXNlckluZm8oKTtcclxuICAgICAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAncHJvZHVjdERldGFpbD9waWQ9NTk5OTIyZWE3OGMxNDgzN2I2NDk0NWI1J1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgIC8vICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KFt7Y291bnQ6MiwgaWQ6IFwiNTkyMDZkODBjNWNhMWMxM2UwY2U1Nzg5XCJ9XSlcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAnb3JkZXJEZXRhaWw/aWQ9NTk5NzFlOWJhMWE5YTExNjY2YmZmZWE1J1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgIC8vICAgICB1cmw6ICdvcmRlcidcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXRVc2VySW5mbygpIHtcclxuICAgICAgICBsZXQgcmVzO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IGluaXRVc2VyKHRoaXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdG9hc3QoJ+iOt+WPlueUqOaIt+S/oeaBr+Wksei0pScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6YCC6YWN5Lqn5ZOB5YiX6KGoXHJcbiAgICAgKi9cclxuICAgIGFkYXB0TGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgdmFyIGJhbm5lck9wdGlvbiA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGwgPSBkYXRhLmxlbmd0aCAtMSwgaSA9IGw7IGkgPj0gMDsgaS0tICkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgIHZhciBzdG9yYWdlSWRzID0gaXRlbS5zdG9yYWdlSWRzO1xyXG4gICAgICAgICAgICBpdGVtLmNvdW50ID0gMTtcclxuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHN0b3JhZ2VJZHMubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZUlkcyAmJiBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2VJZHMuZm9yRWFjaCgoc3RvcmFnZUlkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOS4gOS4quS6p+WTgeacieWkmuW8oOWbvueJh++8jOaKiuesrOS4gOW8oOaUvuWIsGJhbm5lcuS4rSwg5bm25LiUYmFubmdlcuS4reWPquaUvjXlvKDlm77niYdcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGVuZ3RoID4gMSAmJiBpbmRleCA9PT0gMCAmJiBiYW5uZXJPcHRpb24ubGVuZ3RoIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJPcHRpb24ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkOiBpdGVtLl9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Lqn5ZOB55qE5pyA5ZCO5LiA5byg5Liq5Li65ZSu5Y2W5Zu+54mHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBsZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VVcmwgPSBjb21wcmVzc0ltYWdlKHN0b3JhZ2VJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g562b6YCJ5YiG57G75pe277yM5LiN6KaB5pS55Y+YYmFubmVyT3B0aW9uXHJcbiAgICAgICAgaWYgKCF0aGlzLmJhbm5lck9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJPcHRpb24gPSBiYW5uZXJPcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Lqn5ZOB5YiX6KGoIFxyXG4gICAgICovXHJcbiAgICBnZXRQcm9kdWN0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7dGl0bGU6ICfliqDovb3kuK0nfSk7XHJcbiAgICAgICAgZ2V0TGlzdCh7XHJcbiAgICAgICAgICAgIHN1YmplY3RJZDogdGhpcy5zdWJqZWN0SWRcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHRoaXMuYWRhcHRMaXN0KHJlcy5kYXRhLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6p+WTgeeahOWIhuexu+S/oeaBryBcclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZHVjdFN1YmplY3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHByb2R1Y3RTdWJqZWN0UmVxdWVzdC5nZXRMaXN0KClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcyk9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3RzID0gcmVzLmRhdGEubGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaUueWPmOWIhuexu1xyXG4gICAgICAgICAqLyBcclxuICAgICAgICBjaGFuZ2VTdWJqZWN0IChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICAvLyDmiorkuYvliY3pgInkuK3nmoTliIbnsbvmuIXpmaRcclxuICAgICAgICAgICAgdGhpcy5zdWJqZWN0cy5mb3JFYWNoKChuLCBpbmRleCk9PiB7XHJcbiAgICAgICAgICAgICAgIGlmIChpdGVtLl9pZCAhPSBuLl9pZCkgIHtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdHNbaW5kZXhdLmFjdGl2ZSA9IGZhbHNlOyBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zdWJqZWN0c1tpbmRleF0uYWN0aXZlID0gIWl0ZW0uYWN0aXZlO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0SWQgPSAnJzsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3RJZCA9IGl0ZW0uX2lkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdExpc3QoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmmL7npLrmt7vliqDliLDotK3nianovablr7nor53moYZcclxuICAgICAgICAgKi9cclxuICAgICAgICBzaG93QWRkVG9DYXJkOiAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2FkZFRvQ2FyZCcsICdzaG93JywgaXRlbSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg5Yiw6LSt54mp6L2m5Lit5aSE55CGIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFkZFRvQ2FyZEhhbmRsZXIgKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkIHRvIGNhcmQgc3VjY2VzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=