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
        }, _this.$props = { "footer": { "from": "home" }, "copyright": {} }, _this.$events = { "addToCard": { "v-on:addtocardsuccess": "addToCardHandler" } }, _this.components = {
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
                if (!bannerOption.length) {
                    // 没有banner就不要显示图片
                    _this.bannerOption = null;
                } else {
                    _this.bannerOption = bannerOption;
                }
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

                                (0, _toast2.default)('获取用户信息失败，小程序不能正常为您提供服务^_^');

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb2R1Y3RTdWJqZWN0UmVxdWVzdCIsIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwic3ViamVjdHMiLCJzdWJqZWN0SWQiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic2VsZWN0ZWRQcm9kdWN0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJhZGRUb0NhcmQiLCJhZGFwdExpc3QiLCJsIiwibGVuZ3RoIiwiaSIsIml0ZW0iLCJzdG9yYWdlSWRzIiwiY291bnQiLCJmb3JFYWNoIiwic3RvcmFnZUlkIiwiaW5kZXgiLCJwdXNoIiwiaW1hZ2UiLCJfaWQiLCJpbWFnZVVybCIsImdldFByb2R1Y3RMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwibGlzdCIsIiRhcHBseSIsImNhdGNoIiwiZ2V0UHJvZHVjdFN1YmplY3RMaXN0IiwiZ2V0TGlzdCIsIm1ldGhvZHMiLCJjaGFuZ2VTdWJqZWN0IiwibiIsImFjdGl2ZSIsInNob3dBZGRUb0NhcmQiLCIkaW52b2tlIiwiYWRkVG9DYXJkSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRPcGVuaWQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJuYW1lIiwic2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLHFCOztBQUNaOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQywwQkFBYyxFQURYO0FBRUhDLHNCQUFVLElBRlA7QUFHSEMsc0JBQVUs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S29CLEk7O2tCQUFuQnhELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBmb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCB7IGdldExpc3QgfSBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3QnXHJcbmltcG9ydCAqIGFzIHByb2R1Y3RTdWJqZWN0UmVxdWVzdCBmcm9tICcuLi9zZXJ2aWNlL3Byb2R1Y3RTdWJqZWN0J1xyXG5pbXBvcnQgeyBsb2dpbiwgdG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlL3VzZXInXHJcbmltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4uL2Z1bmN0aW9uL2NvbXByZXNzSW1hZ2UnXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBnZXRVc2VySW5mbyB9IGZyb20gJy4uL3NlcnZpY2UvZ2xvYmFsJ1xyXG5pbXBvcnQgdXNlckluZm8gZnJvbSAnLi4vcGx1Z2luL3VzZXJJbmZvJ1xyXG5pbXBvcnQgaW5pdFVzZXIgZnJvbSAnLi4vZnVuY3Rpb24vaW5pdFVzZXInXHJcbmltcG9ydCBhZGRUb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9hZGRUb0NhcmQnXHJcbmltcG9ydCBjb3B5cmlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnXHJcbmltcG9ydCB0b2FzdCBmcm9tICcuLi9mdW5jdGlvbi90b2FzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgYmFubmVyT3B0aW9uOiBbXSxcclxuICAgICAgICBwcm9kdWN0czogbnVsbCxcclxuICAgICAgICBzdWJqZWN0czogW10sXHJcbiAgICAgICAgc3ViamVjdElkOiAnJyxcclxuICAgICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGludGVydmFsOiA1MDAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgIHNlbGVjdGVkUHJvZHVjdDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgJHByb3BzID0ge1wiZm9vdGVyXCI6e1wiZnJvbVwiOlwiaG9tZVwifSxcImNvcHlyaWdodFwiOnt9fTtcclxuJGV2ZW50cyA9IHtcImFkZFRvQ2FyZFwiOntcInYtb246YWRkdG9jYXJkc3VjY2Vzc1wiOlwiYWRkVG9DYXJkSGFuZGxlclwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIGZvb3RlcixcclxuICAgICAgICBjb3B5cmlnaHQsXHJcbiAgICAgICAgYWRkVG9DYXJkXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIGlmICh1c2VySW5mby5nZXRPcGVuaWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2Zvb3RlcicsICdnZXRDb3VudEJ5T3BlbmRJZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0TGlzdCgpO1xyXG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdFN1YmplY3RMaXN0KCk7XHJcbiAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgICAgdGl0bGU6IGNvbmZpZy5uYW1lXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VySW5mbygpO1xyXG4gICAgICAgIC8vIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgIC8vICAgICB1cmw6ICdwcm9kdWN0RGV0YWlsP3BpZD01OTk5MjJlYTc4YzE0ODM3YjY0OTQ1YjUnXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgLy8gICAgIHVybDogJ29yZGVyQ29uZmlybT9wcm9kdWN0cz0nICsgSlNPTi5zdHJpbmdpZnkoW3tjb3VudDoyLCBpZDogXCI1OTIwNmQ4MGM1Y2ExYzEzZTBjZTU3ODlcIn1dKVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgIC8vICAgICB1cmw6ICdvcmRlckRldGFpbD9pZD01OTk3MWU5YmExYTlhMTE2NjZiZmZlYTUnXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgLy8gICAgIHVybDogJ29yZGVyJ1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIGxldCByZXM7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzID0gYXdhaXQgaW5pdFVzZXIodGhpcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0b2FzdCgn6I635Y+W55So5oi35L+h5oGv5aSx6LSl77yM5bCP56iL5bqP5LiN6IO95q2j5bi45Li65oKo5o+Q5L6b5pyN5YqhXl9eJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDpgILphY3kuqflk4HliJfooahcclxuICAgICAqL1xyXG4gICAgYWRhcHRMaXN0ID0gKGRhdGEpID0+IHtcclxuICAgICAgICB2YXIgYmFubmVyT3B0aW9uID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgbCA9IGRhdGEubGVuZ3RoIC0xLCBpID0gbDsgaSA+PSAwOyBpLS0gKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gZGF0YVtpXTtcclxuICAgICAgICAgICAgdmFyIHN0b3JhZ2VJZHMgPSBpdGVtLnN0b3JhZ2VJZHM7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnQgPSAxO1xyXG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gc3RvcmFnZUlkcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlSWRzICYmIGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZUlkcy5mb3JFYWNoKChzdG9yYWdlSWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5LiA5Liq5Lqn5ZOB5pyJ5aSa5byg5Zu+54mH77yM5oqK56ys5LiA5byg5pS+5YiwYmFubmVy5LitLCDlubbkuJRiYW5uZ2Vy5Lit5Y+q5pS+NeW8oOWbvueJh1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPiAxICYmIGluZGV4ID09PSAwICYmIGJhbm5lck9wdGlvbi5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lck9wdGlvbi5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBjb21wcmVzc0ltYWdlKHN0b3JhZ2VJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGl0ZW0uX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDkuqflk4HnmoTmnIDlkI7kuIDlvKDkuKrkuLrllK7ljZblm77niYdcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IGxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZVVybCA9IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnrZvpgInliIbnsbvml7bvvIzkuI3opoHmlLnlj5hiYW5uZXJPcHRpb25cclxuICAgICAgICBpZiAoIXRoaXMuYmFubmVyT3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAoIWJhbm5lck9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIOayoeaciWJhbm5lcuWwseS4jeimgeaYvuekuuWbvueJh1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJPcHRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJPcHRpb24gPSBiYW5uZXJPcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuqflk4HliJfooaggXHJcbiAgICAgKi9cclxuICAgIGdldFByb2R1Y3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHt0aXRsZTogJ+WKoOi9veS4rSd9KTtcclxuICAgICAgICBnZXRMaXN0KHtcclxuICAgICAgICAgICAgc3ViamVjdElkOiB0aGlzLnN1YmplY3RJZFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5hZGFwdExpc3QocmVzLmRhdGEubGlzdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5Lqn5ZOB55qE5YiG57G75L+h5oGvIFxyXG4gICAgICovXHJcbiAgICBnZXRQcm9kdWN0U3ViamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvZHVjdFN1YmplY3RSZXF1ZXN0LmdldExpc3QoKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdHMgPSByZXMuZGF0YS5saXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pS55Y+Y5YiG57G7XHJcbiAgICAgICAgICovIFxyXG4gICAgICAgIGNoYW5nZVN1YmplY3QgKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIOaKiuS5i+WJjemAieS4reeahOWIhuexu+a4hemZpFxyXG4gICAgICAgICAgICB0aGlzLnN1YmplY3RzLmZvckVhY2goKG4sIGluZGV4KT0+IHtcclxuICAgICAgICAgICAgICAgaWYgKGl0ZW0uX2lkICE9IG4uX2lkKSAge1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0c1tpbmRleF0uYWN0aXZlID0gZmFsc2U7IFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnN1YmplY3RzW2luZGV4XS5hY3RpdmUgPSAhaXRlbS5hY3RpdmU7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICB0aGlzLnN1YmplY3RJZCA9ICcnOyBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdElkID0gaXRlbS5faWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZXRQcm9kdWN0TGlzdCgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaYvuekuua3u+WKoOWIsOi0reeJqei9puWvueivneahhlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNob3dBZGRUb0NhcmQ6IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnYWRkVG9DYXJkJywgJ3Nob3cnLCBpdGVtKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmt7vliqDliLDotK3nianovabkuK3lpITnkIYgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYWRkVG9DYXJkSGFuZGxlciAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGQgdG8gY2FyZCBzdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==