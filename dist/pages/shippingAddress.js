'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _shippingAddress = require('./../service/shippingAddress.js');

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShippingAddress = function (_wepy$page) {
    _inherits(ShippingAddress, _wepy$page);

    function ShippingAddress() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ShippingAddress);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShippingAddress.__proto__ || Object.getPrototypeOf(ShippingAddress)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '地址管理'
        }, _this.data = {
            shippingAddressList: null
        }, _this.$props = { "copyright": {} }, _this.$events = {}, _this.components = {
            copyright: _copyright2.default
        }, _this.methods = {
            /**
             * 设置默认收货地址 
             */
            selectShippingAddress: function selectShippingAddress(item) {
                var _this2 = this;

                // 如果当前本身就是默认地址，就不用操作数据库直接返回
                if (item.isDefault) {
                    wx.navigateBack();
                    return;
                }

                var isCurrentDefaultId = 0;
                this.shippingAddressList.some(function (n) {
                    if (n.isDefault) {
                        isCurrentDefaultId = n._id;
                        return true;
                    }
                });

                var ps = [(0, _shippingAddress.setDefault)(item._id, true)];

                // 将当前默认的状态去掉
                if (isCurrentDefaultId) {
                    ps.push((0, _shippingAddress.setDefault)(isCurrentDefaultId, false));
                }

                Promise.all(ps).then(function () {
                    var pages = getCurrentPages();
                    if (pages.length == 1) {
                        _this2.methods.redirect('my');
                    } else {
                        wx.navigateBack();
                    }
                });
            },


            /**
             * 跳转地址 
             */
            redirect: function redirect(url) {
                wx.redirectTo({
                    url: url
                });
            },


            /**
             * 跳转地址，记录history 
             */
            navigate: function navigate(url) {
                wx.navigateTo({
                    url: url
                });
            },


            /**
             * 编辑地址 
             */
            modify: function modify(item) {
                _this.methods.navigate('fillShippingAddress?id=' + item._id);
            },

            /**
             * 删除收货地址 
             */
            del: function del(item) {
                var _this3 = this;

                wx.showModal({
                    title: '提示',
                    content: '确认删除?',
                    success: function success(res) {
                        if (res.confirm) {
                            (0, _shippingAddress.remove)(item._id).then(function () {
                                wx.showToast({
                                    title: '保存成功'
                                });
                                _this3.methods.getShippingAddressList();
                            });
                        }
                    }
                });
            },


            /**
             * 获取收货地址列表
             */
            getShippingAddressList: function getShippingAddressList() {
                wx.showLoading({ title: '加载中' });
                (0, _shippingAddress.list)().then(function (res) {
                    wx.hideLoading();
                    _this.shippingAddressList = res.data;
                    _this.$apply();
                }).catch(function () {
                    wx.hideLoading();
                    _this.shippingAddressList = [];
                    _this.$apply();
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ShippingAddress, [{
        key: 'onShow',
        value: function onShow() {
            this.methods.getShippingAddressList();
        }
    }]);

    return ShippingAddress;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ShippingAddress , 'pages/shippingAddress'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nQWRkcmVzcy5qcyJdLCJuYW1lcyI6WyJTaGlwcGluZ0FkZHJlc3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNoaXBwaW5nQWRkcmVzc0xpc3QiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNvcHlyaWdodCIsIm1ldGhvZHMiLCJzZWxlY3RTaGlwcGluZ0FkZHJlc3MiLCJpdGVtIiwiaXNEZWZhdWx0Iiwid3giLCJuYXZpZ2F0ZUJhY2siLCJpc0N1cnJlbnREZWZhdWx0SWQiLCJzb21lIiwibiIsIl9pZCIsInBzIiwicHVzaCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW5ndGgiLCJyZWRpcmVjdCIsInVybCIsInJlZGlyZWN0VG8iLCJuYXZpZ2F0ZSIsIm5hdmlnYXRlVG8iLCJtb2RpZnkiLCJkZWwiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInNob3dUb2FzdCIsImdldFNoaXBwaW5nQWRkcmVzc0xpc3QiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwiJGFwcGx5IiwiY2F0Y2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFSTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7Ozs7OzRNQUVqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBUVRDLEksR0FBTztBQUNIQyxpQ0FBcUI7QUFEbEIsUyxRQUlSQyxNLEdBQVMsRUFBQyxhQUFZLEVBQWIsRSxRQUNoQkMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ0ZDO0FBREUsUyxRQUlOQyxPLEdBQVU7QUFDTjs7O0FBR0FDLGlDQUpNLGlDQUlpQkMsSUFKakIsRUFJdUI7QUFBQTs7QUFDekI7QUFDQSxvQkFBSUEsS0FBS0MsU0FBVCxFQUFvQjtBQUNoQkMsdUJBQUdDLFlBQUg7QUFDQTtBQUNIOztBQUVELG9CQUFJQyxxQkFBcUIsQ0FBekI7QUFDQSxxQkFBS1gsbUJBQUwsQ0FBeUJZLElBQXpCLENBQThCLFVBQUNDLENBQUQsRUFBTTtBQUNoQyx3QkFBSUEsRUFBRUwsU0FBTixFQUFpQjtBQUNiRyw2Q0FBcUJFLEVBQUVDLEdBQXZCO0FBQ0EsK0JBQU8sSUFBUDtBQUNIO0FBQ0osaUJBTEQ7O0FBT0Esb0JBQUlDLEtBQUssQ0FBQyxpQ0FBV1IsS0FBS08sR0FBaEIsRUFBcUIsSUFBckIsQ0FBRCxDQUFUOztBQUVBO0FBQ0Esb0JBQUlILGtCQUFKLEVBQXdCO0FBQ3BCSSx1QkFBR0MsSUFBSCxDQUFRLGlDQUFXTCxrQkFBWCxFQUErQixLQUEvQixDQUFSO0FBQ0g7O0FBRURNLHdCQUFRQyxHQUFSLENBQVlILEVBQVosRUFDS0ksSUFETCxDQUNVLFlBQUs7QUFDUCx3QkFBSUMsUUFBUUMsaUJBQVo7QUFDQSx3QkFBSUQsTUFBTUUsTUFBTixJQUFnQixDQUFwQixFQUF1QjtBQUNuQiwrQkFBS2pCLE9BQUwsQ0FBYWtCLFFBQWIsQ0FBc0IsSUFBdEI7QUFDSCxxQkFGRCxNQUVPO0FBQ0hkLDJCQUFHQyxZQUFIO0FBQ0g7QUFDSixpQkFSTDtBQVNILGFBbkNLOzs7QUFxQ047OztBQUdBYSxvQkF4Q00sb0JBd0NJQyxHQXhDSixFQXdDUztBQUNYZixtQkFBR2dCLFVBQUgsQ0FBYztBQUNWRCx5QkFBS0E7QUFESyxpQkFBZDtBQUdILGFBNUNLOzs7QUE4Q047OztBQUdBRSxvQkFqRE0sb0JBaURJRixHQWpESixFQWlEUztBQUNYZixtQkFBR2tCLFVBQUgsQ0FBYztBQUNWSCx5QkFBS0E7QUFESyxpQkFBZDtBQUdILGFBckRLOzs7QUF1RE47OztBQUdBSSxvQkFBUSxnQkFBQ3JCLElBQUQsRUFBUztBQUNiLHNCQUFLRixPQUFMLENBQWFxQixRQUFiLENBQXNCLDRCQUE0Qm5CLEtBQUtPLEdBQXZEO0FBQ0gsYUE1REs7O0FBOEROOzs7QUFHQWUsZUFqRU0sZUFpRUR0QixJQWpFQyxFQWlFSztBQUFBOztBQUNQRSxtQkFBR3FCLFNBQUgsQ0FBYTtBQUNUQywyQkFBTyxJQURFO0FBRVRDLDZCQUFTLE9BRkE7QUFHVEMsNkJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNkLDRCQUFJQSxJQUFJQyxPQUFSLEVBQWlCO0FBQ2IseURBQU81QixLQUFLTyxHQUFaLEVBQ0tLLElBREwsQ0FDVSxZQUFLO0FBQ1BWLG1DQUFHMkIsU0FBSCxDQUFhO0FBQ1RMLDJDQUFPO0FBREUsaUNBQWI7QUFHQSx1Q0FBSzFCLE9BQUwsQ0FBYWdDLHNCQUFiO0FBQ0gsNkJBTkw7QUFPSDtBQUNKO0FBYlEsaUJBQWI7QUFlSCxhQWpGSzs7O0FBbUZOOzs7QUFHQUEsb0NBQXdCLGtDQUFLO0FBQ3pCNUIsbUJBQUc2QixXQUFILENBQWUsRUFBQ1AsT0FBTyxLQUFSLEVBQWY7QUFDQSw2Q0FDS1osSUFETCxDQUNVLFVBQUNlLEdBQUQsRUFBUTtBQUNWekIsdUJBQUc4QixXQUFIO0FBQ0EsMEJBQUt2QyxtQkFBTCxHQUEyQmtDLElBQUluQyxJQUEvQjtBQUNBLDBCQUFLeUMsTUFBTDtBQUNILGlCQUxMLEVBTUtDLEtBTkwsQ0FNVyxZQUFLO0FBQ1JoQyx1QkFBRzhCLFdBQUg7QUFDQSwwQkFBS3ZDLG1CQUFMLEdBQTJCLEVBQTNCO0FBQ0EsMEJBQUt3QyxNQUFMO0FBQ0gsaUJBVkw7QUFXSDtBQW5HSyxTOzs7OztpQ0FkQTtBQUNOLGlCQUFLbkMsT0FBTCxDQUFhZ0Msc0JBQWI7QUFDSDs7OztFQVJ3QyxlQUFLSyxJOztrQkFBN0I5QyxlIiwiZmlsZSI6InNoaXBwaW5nQWRkcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBsaXN0LCBzZXREZWZhdWx0LCByZW1vdmV9IGZyb20gJy4uL3NlcnZpY2Uvc2hpcHBpbmdBZGRyZXNzJ1xuICAgIGltcG9ydCBjb3B5cmlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0FkZHJlc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WcsOWdgOeuoeeQhidcbiAgICAgICAgfVxuXG4gICAgICAgIG9uU2hvdyAoKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc0xpc3Q6IG51bGwgXG4gICAgICAgIH1cblxuICAgICAgICRwcm9wcyA9IHtcImNvcHlyaWdodFwiOnt9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGNvcHlyaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6K6+572u6buY6K6k5pS26LSn5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3RTaGlwcGluZ0FkZHJlc3MgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3mnKzouqvlsLHmmK/pu5jorqTlnLDlnYDvvIzlsLHkuI3nlKjmk43kvZzmlbDmja7lupPnm7TmjqXov5Tlm55cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGlzQ3VycmVudERlZmF1bHRJZCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0LnNvbWUoKG4pPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobi5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudERlZmF1bHRJZCA9IG4uX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBwcyA9IFtzZXREZWZhdWx0KGl0ZW0uX2lkLCB0cnVlKV07XG5cbiAgICAgICAgICAgICAgICAvLyDlsIblvZPliY3pu5jorqTnmoTnirbmgIHljrvmjolcbiAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50RGVmYXVsdElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBzLnB1c2goc2V0RGVmYXVsdChpc0N1cnJlbnREZWZhdWx0SWQsIGZhbHNlKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYWdlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5yZWRpcmVjdCgnbXknKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDot7PovazlnLDlnYDvvIzorrDlvZVoaXN0b3J5IFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBuYXZpZ2F0ZSAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOe8lui+keWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbW9kaWZ5OiAoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLm5hdmlnYXRlKCdmaWxsU2hpcHBpbmdBZGRyZXNzP2lkPScgKyBpdGVtLl9pZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOWIoOmZpOaUtui0p+WcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGVsIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn56Gu6K6k5Yig6ZmkPycsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZShpdGVtLl9pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDojrflj5bmlLbotKflnLDlnYDliJfooahcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdDogKCk9PiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe3RpdGxlOiAn5Yqg6L295LitJ30pO1xuICAgICAgICAgICAgICAgIGxpc3QoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nQWRkcmVzc0xpc3QgPSByZXMuZGF0YTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICB9XG4iXX0=