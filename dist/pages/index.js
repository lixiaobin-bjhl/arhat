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

                                (0, _toast2.default)('获取用户信息失败^_^');

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb2R1Y3RTdWJqZWN0UmVxdWVzdCIsIkluZGV4IiwiZGF0YSIsImJhbm5lck9wdGlvbiIsInByb2R1Y3RzIiwic3ViamVjdHMiLCJzdWJqZWN0SWQiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic2VsZWN0ZWRQcm9kdWN0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJhZGRUb0NhcmQiLCJhZGFwdExpc3QiLCJsIiwibGVuZ3RoIiwiaSIsIml0ZW0iLCJzdG9yYWdlSWRzIiwiY291bnQiLCJmb3JFYWNoIiwic3RvcmFnZUlkIiwiaW5kZXgiLCJwdXNoIiwiaW1hZ2UiLCJfaWQiLCJpbWFnZVVybCIsImdldFByb2R1Y3RMaXN0Iiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwidGhlbiIsInJlcyIsImhpZGVMb2FkaW5nIiwibGlzdCIsIiRhcHBseSIsImNhdGNoIiwiZ2V0UHJvZHVjdFN1YmplY3RMaXN0IiwiZ2V0TGlzdCIsIm1ldGhvZHMiLCJjaGFuZ2VTdWJqZWN0IiwibiIsImFjdGl2ZSIsInNob3dBZGRUb0NhcmQiLCIkaW52b2tlIiwiYWRkVG9DYXJkSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRPcGVuaWQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJuYW1lIiwic2V0VXNlckluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLHFCOztBQUNaOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLEksR0FBTztBQUNIQywwQkFBYyxFQURYO0FBRUhDLHNCQUFVLElBRlA7QUFHSEMsc0JBQVUs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b0IsSTs7a0JBQW5CeEQsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IHsgZ2V0TGlzdCB9IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdCdcclxuaW1wb3J0ICogYXMgcHJvZHVjdFN1YmplY3RSZXF1ZXN0IGZyb20gJy4uL3NlcnZpY2UvcHJvZHVjdFN1YmplY3QnXHJcbmltcG9ydCB7IGxvZ2luLCB0b2tlbiB9IGZyb20gJy4uL3NlcnZpY2UvdXNlcidcclxuaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSdcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IGdldFVzZXJJbmZvIH0gZnJvbSAnLi4vc2VydmljZS9nbG9iYWwnXHJcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nXHJcbmltcG9ydCBpbml0VXNlciBmcm9tICcuLi9mdW5jdGlvbi9pbml0VXNlcidcclxuaW1wb3J0IGFkZFRvQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2FkZFRvQ2FyZCdcclxuaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcclxuaW1wb3J0IHRvYXN0IGZyb20gJy4uL2Z1bmN0aW9uL3RvYXN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBiYW5uZXJPcHRpb246IFtdLFxyXG4gICAgICAgIHByb2R1Y3RzOiBudWxsLFxyXG4gICAgICAgIHN1YmplY3RzOiBbXSxcclxuICAgICAgICBzdWJqZWN0SWQ6ICcnLFxyXG4gICAgICAgIGluZGljYXRvckRvdHM6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgc2VsZWN0ZWRQcm9kdWN0OiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAkcHJvcHMgPSB7XCJmb290ZXJcIjp7XCJmcm9tXCI6XCJob21lXCJ9LFwiY29weXJpZ2h0XCI6e319O1xyXG4kZXZlbnRzID0ge1wiYWRkVG9DYXJkXCI6e1widi1vbjphZGR0b2NhcmRzdWNjZXNzXCI6XCJhZGRUb0NhcmRIYW5kbGVyXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgZm9vdGVyLFxyXG4gICAgICAgIGNvcHlyaWdodCxcclxuICAgICAgICBhZGRUb0NhcmRcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgaWYgKHVzZXJJbmZvLmdldE9wZW5pZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3RMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0U3ViamVjdExpc3QoKTtcclxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogY29uZmlnLm5hbWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgLy8gd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgLy8gICAgIHVybDogJ3Byb2R1Y3REZXRhaWw/cGlkPTU5OTkyMmVhNzhjMTQ4MzdiNjQ5NDViNSdcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAnb3JkZXJDb25maXJtP3Byb2R1Y3RzPScgKyBKU09OLnN0cmluZ2lmeShbe2NvdW50OjIsIGlkOiBcIjU5MjA2ZDgwYzVjYTFjMTNlMGNlNTc4OVwifV0pXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgLy8gICAgIHVybDogJ29yZGVyRGV0YWlsP2lkPTU5OTcxZTliYTFhOWExMTY2NmJmZmVhNSdcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAvLyAgICAgdXJsOiAnb3JkZXInXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgbGV0IHJlcztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXMgPSBhd2FpdCBpbml0VXNlcih0aGlzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRvYXN0KCfojrflj5bnlKjmiLfkv6Hmga/lpLHotKVeX14nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmAgumFjeS6p+WTgeWIl+ihqFxyXG4gICAgICovXHJcbiAgICBhZGFwdExpc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIHZhciBiYW5uZXJPcHRpb24gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBsID0gZGF0YS5sZW5ndGggLTEsIGkgPSBsOyBpID49IDA7IGktLSApIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICB2YXIgc3RvcmFnZUlkcyA9IGl0ZW0uc3RvcmFnZUlkcztcclxuICAgICAgICAgICAgaXRlbS5jb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSBzdG9yYWdlSWRzLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKHN0b3JhZ2VJZHMgJiYgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlSWRzLmZvckVhY2goKHN0b3JhZ2VJZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzkuIDkuKrkuqflk4HmnInlpJrlvKDlm77niYfvvIzmiornrKzkuIDlvKDmlL7liLBiYW5uZXLkuK0sIOW5tuS4lGJhbm5nZXLkuK3lj6rmlL415byg5Zu+54mHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA+IDEgJiYgaW5kZXggPT09IDAgJiYgYmFubmVyT3B0aW9uLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVyT3B0aW9uLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZDogaXRlbS5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS6p+WTgeeahOacgOWQjuS4gOW8oOS4quS4uuWUruWNluWbvueJh1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gbGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlVXJsID0gY29tcHJlc3NJbWFnZShzdG9yYWdlSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOetm+mAieWIhuexu+aXtu+8jOS4jeimgeaUueWPmGJhbm5lck9wdGlvblxyXG4gICAgICAgIGlmICghdGhpcy5iYW5uZXJPcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFubmVyT3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8g5rKh5pyJYmFubmVy5bCx5LiN6KaB5pi+56S65Zu+54mHXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lck9wdGlvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lck9wdGlvbiA9IGJhbm5lck9wdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluS6p+WTgeWIl+ihqCBcclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZHVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOiAn5Yqg6L295LitJ30pO1xyXG4gICAgICAgIGdldExpc3Qoe1xyXG4gICAgICAgICAgICBzdWJqZWN0SWQ6IHRoaXMuc3ViamVjdElkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmFkYXB0TGlzdChyZXMuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bkuqflk4HnmoTliIbnsbvkv6Hmga8gXHJcbiAgICAgKi9cclxuICAgIGdldFByb2R1Y3RTdWJqZWN0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICBwcm9kdWN0U3ViamVjdFJlcXVlc3QuZ2V0TGlzdCgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0cyA9IHJlcy5kYXRhLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmlLnlj5jliIbnsbtcclxuICAgICAgICAgKi8gXHJcbiAgICAgICAgY2hhbmdlU3ViamVjdCAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgLy8g5oqK5LmL5YmN6YCJ5Lit55qE5YiG57G75riF6ZmkXHJcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdHMuZm9yRWFjaCgobiwgaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICBpZiAoaXRlbS5faWQgIT0gbi5faWQpICB7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3RzW2luZGV4XS5hY3RpdmUgPSBmYWxzZTsgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdHNbaW5kZXhdLmFjdGl2ZSA9ICFpdGVtLmFjdGl2ZTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdElkID0gJyc7IFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0SWQgPSBpdGVtLl9pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RMaXN0KCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5pi+56S65re75Yqg5Yiw6LSt54mp6L2m5a+56K+d5qGGXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2hvd0FkZFRvQ2FyZDogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCdhZGRUb0NhcmQnLCAnc2hvdycsIGl0ZW0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa3u+WKoOWIsOi0reeJqei9puS4reWkhOeQhiBcclxuICAgICAgICAgKi9cclxuICAgICAgICBhZGRUb0NhcmRIYW5kbGVyICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCB0byBjYXJkIHN1Y2Nlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19