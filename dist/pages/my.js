'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _footer = require('./../components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

var _global = require('./../service/global.js');

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var My = function (_wepy$page) {
    _inherits(My, _wepy$page);

    function My() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, My);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的'
        }, _this.data = {
            userInfo: {}
        }, _this.$props = { "footer": { "from": "my" } }, _this.$events = {}, _this.components = {
            footer: _footer2.default,
            copyright: _copyright2.default
        }, _this.fetchUserInfo = function () {
            (0, _global.getUserInfo)().then(function (res) {
                _this.userInfo = res;
                _this.$apply();
            });
        }, _this.methods = {
            /**
             * 跳转地址，记录history 
             */
            navigate: function navigate(url) {
                wx.navigateTo({
                    url: url
                });
            },

            /**
             * 跳转地址 
             */
            redirect: function redirect(url) {
                wx.redirectTo({
                    url: url
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(My, [{
        key: 'onShow',
        value: function onShow() {
            this.$invoke('footer', 'getCountByOpendId');
        }
        /**
         * 获取用户信息 
         */

    }, {
        key: 'onLoad',
        value: function onLoad(p) {
            this.fetchUserInfo();
        }
    }]);

    return My;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(My , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIk15IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VySW5mbyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwiZmV0Y2hVc2VySW5mbyIsInRoZW4iLCJyZXMiLCIkYXBwbHkiLCJtZXRob2RzIiwibmF2aWdhdGUiLCJ1cmwiLCJ3eCIsIm5hdmlnYXRlVG8iLCJyZWRpcmVjdCIsInJlZGlyZWN0VG8iLCIkaW52b2tlIiwicCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxFOzs7Ozs7Ozs7Ozs7OztrTEFFakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSkMsc0JBQVU7QUFETixTLFFBSVJDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxRQUFPLElBQVIsRUFBVixFLFFBQ2hCQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDRkMsb0NBREU7QUFFRkM7QUFGRSxTLFFBV05DLGEsR0FBaUIsWUFBTTtBQUNuQix1Q0FDS0MsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLHNCQUFLUixRQUFMLEdBQWdCUSxHQUFoQjtBQUNBLHNCQUFLQyxNQUFMO0FBQ0gsYUFKTDtBQUtILFMsUUFFREMsTyxHQUFVO0FBQ047OztBQUdBQyxvQkFKTSxvQkFJSUMsR0FKSixFQUlTO0FBQ1hDLG1CQUFHQyxVQUFILENBQWM7QUFDVkYseUJBQUtBO0FBREssaUJBQWQ7QUFHSCxhQVJLOztBQVNOOzs7QUFHQUcsb0JBWk0sb0JBWUlILEdBWkosRUFZUztBQUNYQyxtQkFBR0csVUFBSCxDQUFjO0FBQ1ZKLHlCQUFLQTtBQURLLGlCQUFkO0FBR0g7QUFoQkssUzs7Ozs7aUNBZEE7QUFDTixpQkFBS0ssT0FBTCxDQUFhLFFBQWIsRUFBdUIsbUJBQXZCO0FBQ0g7QUFDRDs7Ozs7OytCQThCUUMsQyxFQUFHO0FBQ1AsaUJBQUtaLGFBQUw7QUFDSDs7OztFQXBENEIsZUFBS2EsSTs7a0JBQWpCdkIsRSIsImZpbGUiOiJteS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgZm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuICAgIGltcG9ydCB7IGdldFVzZXJJbmZvIH0gZnJvbSAnLi4vc2VydmljZS9nbG9iYWwnXG4gICAgaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeSAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnIFxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgdXNlckluZm86IHt9XG4gICAgICAgIH1cblxuICAgICAgICRwcm9wcyA9IHtcImZvb3RlclwiOntcImZyb21cIjpcIm15XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGZvb3RlcixcbiAgICAgICAgICAgIGNvcHlyaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93ICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgnZm9vdGVyJywgJ2dldENvdW50QnlPcGVuZElkJyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPlueUqOaIt+S/oeaBryBcbiAgICAgICAgICovXG4gICAgICAgIGZldGNoVXNlckluZm8gPSAgKCkgPT4ge1xuICAgICAgICAgICAgZ2V0VXNlckluZm8oKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2A77yM6K6w5b2VaGlzdG9yeSBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbmF2aWdhdGUgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG9uTG9hZCAocCkge1xuICAgICAgICAgICAgdGhpcy5mZXRjaFVzZXJJbmZvKCk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=