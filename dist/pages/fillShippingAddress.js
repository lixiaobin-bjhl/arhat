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

var _toast = require('./../function/toast.js');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FillShippingAddress = function (_wepy$page) {
    _inherits(FillShippingAddress, _wepy$page);

    function FillShippingAddress() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FillShippingAddress);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FillShippingAddress.__proto__ || Object.getPrototypeOf(FillShippingAddress)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            id: null,
            shippingAddressList: null,
            name: '',
            contactNumber: '',
            address: '',
            region: []
        }, _this.components = {
            copyright: _copyright2.default
        }, _this.methods = {
            // 编辑地址时，获取地址详情
            show: function show(id) {
                (0, _shippingAddress.show)(id).then(function (res) {
                    var data = res.data;
                    _this.name = data.name;
                    _this.address = data.address;
                    _this.region = data.region;
                    _this.contactNumber = data.contactNumber;
                });
            },
            bindInputName: function bindInputName(e) {
                this.name = e.detail.value;
            },
            bindInputMobile: function bindInputMobile(e) {
                this.contactNumber = e.detail.value;
            },
            bindInputAddress: function bindInputAddress(e) {
                this.address = e.detail.value;
            },
            bindRegionChange: function bindRegionChange(e) {
                this.region = e.detail.value;
            },
            /**
             * 跳转地址 
             */
            redirect: function redirect(url) {
                wx.redirectTo({
                    url: url
                });
            },

            submit: function submit() {
                var name = _this.name;
                var contactNumber = _this.contactNumber;
                var address = _this.address;
                var region = _this.region;

                if (!name) {
                    (0, _toast2.default)('请输入姓名');
                    return;
                }

                if (!/^1\d{10}/.test(contactNumber)) {
                    (0, _toast2.default)('请输入正确的手机号');
                    return;
                }

                if (region.length !== 3) {
                    (0, _toast2.default)('请选择完整的省市区');
                    return;
                }

                if (!address) {
                    (0, _toast2.default)('请输入收货人地址');
                    return;
                }

                var id = _this.id;

                var params = {
                    name: name,
                    contactNumber: contactNumber,
                    address: address,
                    region: region
                };

                var service = id ? _shippingAddress.update.bind(null, id, params) : _shippingAddress.add.bind(null, params);

                service().then(function () {
                    wx.showToast({
                        title: '保存成功'
                    });
                    _this.methods.redirect('shippingAddress');
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FillShippingAddress, [{
        key: 'onLoad',
        value: function onLoad(p) {
            if (p.id) {
                wx.setNavigationBarTitle({
                    title: '编辑地址'
                });
                this.id = p.id;
                this.methods.show(p.id);
            } else {
                wx.setNavigationBarTitle({
                    title: '添加地址'
                });
            }
        }
    }]);

    return FillShippingAddress;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(FillShippingAddress , 'pages/fillShippingAddress'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGxTaGlwcGluZ0FkZHJlc3MuanMiXSwibmFtZXMiOlsiRmlsbFNoaXBwaW5nQWRkcmVzcyIsImRhdGEiLCJpZCIsInNoaXBwaW5nQWRkcmVzc0xpc3QiLCJuYW1lIiwiY29udGFjdE51bWJlciIsImFkZHJlc3MiLCJyZWdpb24iLCJjb21wb25lbnRzIiwiY29weXJpZ2h0IiwibWV0aG9kcyIsInNob3ciLCJ0aGVuIiwicmVzIiwiYmluZElucHV0TmFtZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImJpbmRJbnB1dE1vYmlsZSIsImJpbmRJbnB1dEFkZHJlc3MiLCJiaW5kUmVnaW9uQ2hhbmdlIiwicmVkaXJlY3QiLCJ1cmwiLCJ3eCIsInJlZGlyZWN0VG8iLCJzdWJtaXQiLCJ0ZXN0IiwibGVuZ3RoIiwicGFyYW1zIiwic2VydmljZSIsImJpbmQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsInAiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFSTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7O29OQUVqQkMsSSxHQUFPO0FBQ0hDLGdCQUFJLElBREQ7QUFFSEMsaUNBQXFCLElBRmxCO0FBR0hDLGtCQUFNLEVBSEg7QUFJSEMsMkJBQWUsRUFKWjtBQUtIQyxxQkFBUyxFQUxOO0FBTUhDLG9CQUFRO0FBTkwsUyxRQVNQQyxVLEdBQWE7QUFDVEM7QUFEUyxTLFFBSWJDLE8sR0FBVTtBQUNOO0FBQ0FDLGtCQUFNLGNBQUNULEVBQUQsRUFBUTtBQUNWLDJDQUFLQSxFQUFMLEVBQ0tVLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVix3QkFBSVosT0FBT1ksSUFBSVosSUFBZjtBQUNBLDBCQUFLRyxJQUFMLEdBQVlILEtBQUtHLElBQWpCO0FBQ0EsMEJBQUtFLE9BQUwsR0FBZUwsS0FBS0ssT0FBcEI7QUFDQSwwQkFBS0MsTUFBTCxHQUFjTixLQUFLTSxNQUFuQjtBQUNBLDBCQUFLRixhQUFMLEdBQXFCSixLQUFLSSxhQUExQjtBQUNILGlCQVBMO0FBUUgsYUFYSztBQVlOUywyQkFBZSx1QkFBVUMsQ0FBVixFQUFhO0FBQ3hCLHFCQUFLWCxJQUFMLEdBQVlXLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDSCxhQWRLO0FBZU5DLDZCQUFpQix5QkFBVUgsQ0FBVixFQUFhO0FBQzFCLHFCQUFLVixhQUFMLEdBQXFCVSxFQUFFQyxNQUFGLENBQVNDLEtBQTlCO0FBQ0gsYUFqQks7QUFrQk5FLDhCQUFrQiwwQkFBVUosQ0FBVixFQUFhO0FBQzNCLHFCQUFLVCxPQUFMLEdBQWVTLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFDSCxhQXBCSztBQXFCTkcsOEJBQWtCLDBCQUFVTCxDQUFWLEVBQWE7QUFDM0IscUJBQUtSLE1BQUwsR0FBY1EsRUFBRUMsTUFBRixDQUFTQyxLQUF2QjtBQUNILGFBdkJLO0FBd0JOOzs7QUFHQUksb0JBM0JNLG9CQTJCSUMsR0EzQkosRUEyQlM7QUFDWEMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWRix5QkFBS0E7QUFESyxpQkFBZDtBQUdILGFBL0JLOztBQWdDTkcsb0JBQVEsa0JBQUs7QUFDVCxvQkFBSXJCLE9BQU8sTUFBS0EsSUFBaEI7QUFDQSxvQkFBSUMsZ0JBQWdCLE1BQUtBLGFBQXpCO0FBQ0Esb0JBQUlDLFVBQVUsTUFBS0EsT0FBbkI7QUFDQSxvQkFBSUMsU0FBUyxNQUFLQSxNQUFsQjs7QUFFQSxvQkFBSSxDQUFDSCxJQUFMLEVBQVc7QUFDUCx5Q0FBTSxPQUFOO0FBQ0E7QUFDSDs7QUFFRCxvQkFBSSxDQUFDLFdBQVdzQixJQUFYLENBQWdCckIsYUFBaEIsQ0FBTCxFQUFxQztBQUNqQyx5Q0FBTSxXQUFOO0FBQ0E7QUFDSDs7QUFFRCxvQkFBSUUsT0FBT29CLE1BQVAsS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEIseUNBQU0sV0FBTjtBQUNBO0FBQ0g7O0FBRUQsb0JBQUksQ0FBQ3JCLE9BQUwsRUFBYztBQUNWLHlDQUFNLFVBQU47QUFDQTtBQUNIOztBQUVELG9CQUFJSixLQUFLLE1BQUtBLEVBQWQ7O0FBRUEsb0JBQUkwQixTQUFTO0FBQ1R4Qiw4QkFEUztBQUVUQyxnREFGUztBQUdUQyxvQ0FIUztBQUlUQztBQUpTLGlCQUFiOztBQU9BLG9CQUFJc0IsVUFBVTNCLEtBQ1Isd0JBQU80QixJQUFQLENBQVksSUFBWixFQUFrQjVCLEVBQWxCLEVBQXNCMEIsTUFBdEIsQ0FEUSxHQUVULHFCQUFJRSxJQUFKLENBQVMsSUFBVCxFQUFlRixNQUFmLENBRkw7O0FBSUFDLDBCQUNLakIsSUFETCxDQUNVLFlBQUs7QUFDUFcsdUJBQUdRLFNBQUgsQ0FBYTtBQUNUQywrQkFBTztBQURFLHFCQUFiO0FBR0EsMEJBQUt0QixPQUFMLENBQWFXLFFBQWIsQ0FBc0IsaUJBQXRCO0FBQ0gsaUJBTkw7QUFPSDtBQTlFSyxTOzs7OzsrQkFpRkZZLEMsRUFBSTtBQUNSLGdCQUFJQSxFQUFFL0IsRUFBTixFQUFVO0FBQ05xQixtQkFBR1cscUJBQUgsQ0FBeUI7QUFDckJGLDJCQUFPO0FBRGMsaUJBQXpCO0FBR0EscUJBQUs5QixFQUFMLEdBQVUrQixFQUFFL0IsRUFBWjtBQUNBLHFCQUFLUSxPQUFMLENBQWFDLElBQWIsQ0FBa0JzQixFQUFFL0IsRUFBcEI7QUFDSCxhQU5ELE1BTU87QUFDSHFCLG1CQUFHVyxxQkFBSCxDQUF5QjtBQUNyQkYsMkJBQU87QUFEYyxpQkFBekI7QUFHSDtBQUNKOzs7O0VBNUc2QyxlQUFLRyxJOztrQkFBbENuQyxtQiIsImZpbGUiOiJmaWxsU2hpcHBpbmdBZGRyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7IGFkZCwgc2hvdywgdXBkYXRlIH0gZnJvbSAnLi4vc2VydmljZS9zaGlwcGluZ0FkZHJlc3MnXG4gICAgaW1wb3J0IGNvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL2NvcHlyaWdodCdcbiAgICBpbXBvcnQgdG9hc3QgZnJvbSAnLi4vZnVuY3Rpb24vdG9hc3QnXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxsU2hpcHBpbmdBZGRyZXNzICBleHRlbmRzIHdlcHkucGFnZSB7XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgc2hpcHBpbmdBZGRyZXNzTGlzdDogbnVsbCxcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgY29udGFjdE51bWJlcjogJycsXG4gICAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICAgIHJlZ2lvbjogW11cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBjb3B5cmlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvLyDnvJbovpHlnLDlnYDml7bvvIzojrflj5blnLDlnYDor6bmg4VcbiAgICAgICAgICAgIHNob3c6IChpZCkgPT4ge1xuICAgICAgICAgICAgICAgIHNob3coaWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IGRhdGEuYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaW9uID0gZGF0YS5yZWdpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3ROdW1iZXIgPSBkYXRhLmNvbnRhY3ROdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE5hbWU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0TW9iaWxlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFjdE51bWJlciA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dEFkZHJlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZFJlZ2lvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbiA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWl0OiAoKT0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgY29udGFjdE51bWJlciA9IHRoaXMuY29udGFjdE51bWJlcjtcbiAgICAgICAgICAgICAgICB2YXIgYWRkcmVzcyA9IHRoaXMuYWRkcmVzcztcbiAgICAgICAgICAgICAgICB2YXIgcmVnaW9uID0gdGhpcy5yZWdpb247XG5cbiAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ+ivt+i+k+WFpeWnk+WQjScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEvXjFcXGR7MTB9Ly50ZXN0KGNvbnRhY3ROdW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7cnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZWdpb24ubGVuZ3RoICE9PTMpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ+ivt+mAieaLqeWujOaVtOeahOecgeW4guWMuicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCfor7fovpPlhaXmlLbotKfkurrlnLDlnYAnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlID0gaWQgIFxuICAgICAgICAgICAgICAgICAgICA/IHVwZGF0ZS5iaW5kKG51bGwsIGlkLCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIDphZGQuYmluZChudWxsLCBwYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgc2VydmljZSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLnJlZGlyZWN0KCdzaGlwcGluZ0FkZHJlc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQgKHApICB7XG4gICAgICAgICAgICBpZiAocC5pZCkge1xuICAgICAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn57yW6L6R5Zyw5Z2AJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBwLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5zaG93KHAuaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+a3u+WKoOWcsOWdgCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICB9XG4iXX0=