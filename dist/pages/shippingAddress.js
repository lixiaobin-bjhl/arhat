'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _shippingAddress = require('./../service/shippingAddress.js');

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
        }, _this.methods = {
            /**
             * 设置默认收货地址 
             */
            selectShippingAddress: function selectShippingAddress(item) {
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
                    wx.navigateBack();
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
             * 编辑地址 
             */
            modify: function modify(item) {
                _this.methods.redirect('fillShippingAddress?id=' + item._id);
            },

            /**
             * 删除收货地址 
             */
            del: function del(item) {
                var _this2 = this;

                wx.showModal({
                    title: '提示',
                    content: '确认删除?',
                    success: function success(res) {
                        if (res.confirm) {
                            (0, _shippingAddress.remove)(item._id).then(function () {
                                wx.showToast({
                                    title: '保存成功'
                                });
                                _this2.methods.getShippingAddressList();
                            });
                        }
                    }
                });
            },


            /**
             * 获取收货地址列表
             */
            getShippingAddressList: function getShippingAddressList() {
                (0, _shippingAddress.list)().then(function (res) {
                    _this.shippingAddressList = res.data;
                    _this.$apply();
                }).catch(function () {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nQWRkcmVzcy5qcyJdLCJuYW1lcyI6WyJTaGlwcGluZ0FkZHJlc3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNoaXBwaW5nQWRkcmVzc0xpc3QiLCJtZXRob2RzIiwic2VsZWN0U2hpcHBpbmdBZGRyZXNzIiwiaXRlbSIsImlzRGVmYXVsdCIsInd4IiwibmF2aWdhdGVCYWNrIiwiaXNDdXJyZW50RGVmYXVsdElkIiwic29tZSIsIm4iLCJfaWQiLCJwcyIsInB1c2giLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInJlZGlyZWN0IiwidXJsIiwicmVkaXJlY3RUbyIsIm1vZGlmeSIsImRlbCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwic2hvd1RvYXN0IiwiZ2V0U2hpcHBpbmdBZGRyZXNzTGlzdCIsIiRhcHBseSIsImNhdGNoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7NE1BRWpCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFRVEMsSSxHQUFPO0FBQ0hDLGlDQUFxQjtBQURsQixTLFFBSVBDLE8sR0FBVTtBQUNOOzs7QUFHQUMsaUNBSk0saUNBSWlCQyxJQUpqQixFQUl1QjtBQUN6QjtBQUNBLG9CQUFJQSxLQUFLQyxTQUFULEVBQW9CO0FBQ2hCQyx1QkFBR0MsWUFBSDtBQUNBO0FBQ0g7O0FBRUQsb0JBQUlDLHFCQUFxQixDQUF6QjtBQUNBLHFCQUFLUCxtQkFBTCxDQUF5QlEsSUFBekIsQ0FBOEIsVUFBQ0MsQ0FBRCxFQUFNO0FBQ2hDLHdCQUFJQSxFQUFFTCxTQUFOLEVBQWlCO0FBQ2JHLDZDQUFxQkUsRUFBRUMsR0FBdkI7QUFDQSwrQkFBTyxJQUFQO0FBQ0g7QUFDSixpQkFMRDs7QUFPQSxvQkFBSUMsS0FBSyxDQUFDLGlDQUFXUixLQUFLTyxHQUFoQixFQUFxQixJQUFyQixDQUFELENBQVQ7O0FBRUE7QUFDQSxvQkFBSUgsa0JBQUosRUFBd0I7QUFDcEJJLHVCQUFHQyxJQUFILENBQVEsaUNBQVdMLGtCQUFYLEVBQStCLEtBQS9CLENBQVI7QUFDSDs7QUFFRE0sd0JBQVFDLEdBQVIsQ0FBWUgsRUFBWixFQUNLSSxJQURMLENBQ1UsWUFBSztBQUNQVix1QkFBR0MsWUFBSDtBQUNILGlCQUhMO0FBSUgsYUE5Qks7OztBQWdDTjs7O0FBR0FVLG9CQW5DTSxvQkFtQ0lDLEdBbkNKLEVBbUNTO0FBQ1haLG1CQUFHYSxVQUFILENBQWM7QUFDVkQseUJBQUtBO0FBREssaUJBQWQ7QUFHSCxhQXZDSzs7O0FBeUNOOzs7QUFHQUUsb0JBQVEsZ0JBQUNoQixJQUFELEVBQVM7QUFDYixzQkFBS0YsT0FBTCxDQUFhZSxRQUFiLENBQXNCLDRCQUE0QmIsS0FBS08sR0FBdkQ7QUFDSCxhQTlDSzs7QUFnRE47OztBQUdBVSxlQW5ETSxlQW1ERGpCLElBbkRDLEVBbURLO0FBQUE7O0FBQ1BFLG1CQUFHZ0IsU0FBSCxDQUFhO0FBQ1RDLDJCQUFPLElBREU7QUFFVEMsNkJBQVMsT0FGQTtBQUdUQyw2QkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2QsNEJBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDYix5REFBT3ZCLEtBQUtPLEdBQVosRUFDS0ssSUFETCxDQUNVLFlBQUs7QUFDUFYsbUNBQUdzQixTQUFILENBQWE7QUFDVEwsMkNBQU87QUFERSxpQ0FBYjtBQUdBLHVDQUFLckIsT0FBTCxDQUFhMkIsc0JBQWI7QUFDSCw2QkFOTDtBQU9IO0FBQ0o7QUFiUSxpQkFBYjtBQWVILGFBbkVLOzs7QUFxRU47OztBQUdBQSxvQ0FBd0Isa0NBQUs7QUFDekIsNkNBQ0tiLElBREwsQ0FDVSxVQUFDVSxHQUFELEVBQVE7QUFDViwwQkFBS3pCLG1CQUFMLEdBQTJCeUIsSUFBSTFCLElBQS9CO0FBQ0EsMEJBQUs4QixNQUFMO0FBQ0gsaUJBSkwsRUFLS0MsS0FMTCxDQUtXLFlBQUs7QUFDUiwwQkFBSzlCLG1CQUFMLEdBQTJCLEVBQTNCO0FBQ0EsMEJBQUs2QixNQUFMO0FBQ0gsaUJBUkw7QUFTSDtBQWxGSyxTOzs7OztpQ0FSQTtBQUNOLGlCQUFLNUIsT0FBTCxDQUFhMkIsc0JBQWI7QUFDSDs7OztFQVJ3QyxlQUFLRyxJOztrQkFBN0JuQyxlIiwiZmlsZSI6InNoaXBwaW5nQWRkcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBsaXN0LCBzZXREZWZhdWx0LCByZW1vdmV9IGZyb20gJy4uL3NlcnZpY2Uvc2hpcHBpbmdBZGRyZXNzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdBZGRyZXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgXG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflnLDlnYDnrqHnkIYnXG4gICAgICAgIH1cblxuICAgICAgICBvblNob3cgKCkge1xuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFNoaXBwaW5nQWRkcmVzc0xpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NMaXN0OiBudWxsIFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6K6+572u6buY6K6k5pS26LSn5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxlY3RTaGlwcGluZ0FkZHJlc3MgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3mnKzouqvlsLHmmK/pu5jorqTlnLDlnYDvvIzlsLHkuI3nlKjmk43kvZzmlbDmja7lupPnm7TmjqXov5Tlm55cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGlzQ3VycmVudERlZmF1bHRJZCA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ0FkZHJlc3NMaXN0LnNvbWUoKG4pPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobi5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ3VycmVudERlZmF1bHRJZCA9IG4uX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhciBwcyA9IFtzZXREZWZhdWx0KGl0ZW0uX2lkLCB0cnVlKV07XG5cbiAgICAgICAgICAgICAgICAvLyDlsIblvZPliY3pu5jorqTnmoTnirbmgIHljrvmjolcbiAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50RGVmYXVsdElkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBzLnB1c2goc2V0RGVmYXVsdChpc0N1cnJlbnREZWZhdWx0SWQsIGZhbHNlKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDnvJbovpHlnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG1vZGlmeTogKGl0ZW0pPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5yZWRpcmVjdCgnZmlsbFNoaXBwaW5nQWRkcmVzcz9pZD0nICsgaXRlbS5faWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDliKDpmaTmlLbotKflnLDlnYAgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRlbCAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+ehruiupOWIoOmZpD8nLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoaXRlbS5faWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFNoaXBwaW5nQWRkcmVzc0xpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6I635Y+W5pS26LSn5Zyw5Z2A5YiX6KGoXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGdldFNoaXBwaW5nQWRkcmVzc0xpc3Q6ICgpPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IHJlcy5kYXRhOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdBZGRyZXNzTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgfVxuIl19