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
            mobile: '',
            address: '',
            region: []
        }, _this.methods = {
            // 编辑地址时，获取地址详情
            show: function show(id) {
                (0, _shippingAddress.show)(id).then(function (res) {
                    var data = res.data;
                    _this.name = data.name;
                    _this.address = data.address;
                    _this.region = data.region;
                    _this.mobile = data.mobile;
                });
            },
            bindInputName: function bindInputName(e) {
                this.name = e.detail.value;
            },
            bindInputMobile: function bindInputMobile(e) {
                this.mobile = e.detail.value;
            },
            bindInputAddress: function bindInputAddress(e) {
                this.address = e.detail.value;
            },
            bindRegionChange: function bindRegionChange(e) {
                this.region = e.detail.value;
            },
            submit: function submit() {
                var name = _this.name;
                var mobile = _this.mobile;
                var address = _this.address;
                var region = _this.region;

                if (!name) {
                    wx.showToast({
                        title: '请输入姓名'
                    });
                    return;
                }

                if (!/^1\d{10}/.test(mobile)) {
                    wx.showToast({
                        title: '请输入正确的手机号'
                    });
                    return;
                }

                if (region.length !== 3) {
                    wx.showToast({
                        title: '请选择完整的省市区'
                    });
                    return;
                }

                if (!address) {
                    wx.showToast({
                        title: '请输入收货人地址'
                    });
                    return;
                }

                var id = _this.id;

                var params = {
                    name: name,
                    mobile: mobile,
                    address: address,
                    region: region
                };

                var service = id ? _shippingAddress.update.bind(null, id, params) : _shippingAddress.add.bind(null, params);

                service().then(function () {
                    wx.showToast({
                        title: '保存成功'
                    });
                    wx.navigateBack();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGxTaGlwcGluZ0FkZHJlc3MuanMiXSwibmFtZXMiOlsiRmlsbFNoaXBwaW5nQWRkcmVzcyIsImRhdGEiLCJpZCIsInNoaXBwaW5nQWRkcmVzc0xpc3QiLCJuYW1lIiwibW9iaWxlIiwiYWRkcmVzcyIsInJlZ2lvbiIsIm1ldGhvZHMiLCJzaG93IiwidGhlbiIsInJlcyIsImJpbmRJbnB1dE5hbWUiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kSW5wdXRNb2JpbGUiLCJiaW5kSW5wdXRBZGRyZXNzIiwiYmluZFJlZ2lvbkNoYW5nZSIsInN1Ym1pdCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJ0ZXN0IiwibGVuZ3RoIiwicGFyYW1zIiwic2VydmljZSIsImJpbmQiLCJuYXZpZ2F0ZUJhY2siLCJwIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7O29OQUVqQkMsSSxHQUFPO0FBQ0hDLGdCQUFJLElBREQ7QUFFSEMsaUNBQXFCLElBRmxCO0FBR0hDLGtCQUFNLEVBSEg7QUFJSEMsb0JBQVEsRUFKTDtBQUtIQyxxQkFBUyxFQUxOO0FBTUhDLG9CQUFRO0FBTkwsUyxRQVNQQyxPLEdBQVU7QUFDTjtBQUNBQyxrQkFBTSxjQUFDUCxFQUFELEVBQVE7QUFDViwyQ0FBS0EsRUFBTCxFQUNLUSxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysd0JBQUlWLE9BQU9VLElBQUlWLElBQWY7QUFDQSwwQkFBS0csSUFBTCxHQUFZSCxLQUFLRyxJQUFqQjtBQUNBLDBCQUFLRSxPQUFMLEdBQWVMLEtBQUtLLE9BQXBCO0FBQ0EsMEJBQUtDLE1BQUwsR0FBY04sS0FBS00sTUFBbkI7QUFDQSwwQkFBS0YsTUFBTCxHQUFjSixLQUFLSSxNQUFuQjtBQUNILGlCQVBMO0FBUUgsYUFYSztBQVlOTywyQkFBZSx1QkFBVUMsQ0FBVixFQUFhO0FBQ3hCLHFCQUFLVCxJQUFMLEdBQVlTLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDSCxhQWRLO0FBZU5DLDZCQUFpQix5QkFBVUgsQ0FBVixFQUFhO0FBQzFCLHFCQUFLUixNQUFMLEdBQWNRLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdkI7QUFDSCxhQWpCSztBQWtCTkUsOEJBQWtCLDBCQUFVSixDQUFWLEVBQWE7QUFDM0IscUJBQUtQLE9BQUwsR0FBZU8sRUFBRUMsTUFBRixDQUFTQyxLQUF4QjtBQUNILGFBcEJLO0FBcUJORyw4QkFBa0IsMEJBQVVMLENBQVYsRUFBYTtBQUMzQixxQkFBS04sTUFBTCxHQUFjTSxFQUFFQyxNQUFGLENBQVNDLEtBQXZCO0FBQ0gsYUF2Qks7QUF3Qk5JLG9CQUFRLGtCQUFLO0FBQ1Qsb0JBQUlmLE9BQU8sTUFBS0EsSUFBaEI7QUFDQSxvQkFBSUMsU0FBUyxNQUFLQSxNQUFsQjtBQUNBLG9CQUFJQyxVQUFVLE1BQUtBLE9BQW5CO0FBQ0Esb0JBQUlDLFNBQVMsTUFBS0EsTUFBbEI7O0FBRUEsb0JBQUksQ0FBQ0gsSUFBTCxFQUFXO0FBQ1BnQix1QkFBR0MsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHQTtBQUNIOztBQUVELG9CQUFJLENBQUMsV0FBV0MsSUFBWCxDQUFnQmxCLE1BQWhCLENBQUwsRUFBOEI7QUFDMUJlLHVCQUFHQyxTQUFILENBQWE7QUFDVEMsK0JBQU87QUFERSxxQkFBYjtBQUdBO0FBQ0g7O0FBRUQsb0JBQUlmLE9BQU9pQixNQUFQLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCSix1QkFBR0MsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHQTtBQUNIOztBQUVELG9CQUFJLENBQUNoQixPQUFMLEVBQWM7QUFDVmMsdUJBQUdDLFNBQUgsQ0FBYTtBQUNUQywrQkFBTztBQURFLHFCQUFiO0FBR0E7QUFDSDs7QUFFRCxvQkFBSXBCLEtBQUssTUFBS0EsRUFBZDs7QUFFQSxvQkFBSXVCLFNBQVM7QUFDVHJCLDhCQURTO0FBRVRDLGtDQUZTO0FBR1RDLG9DQUhTO0FBSVRDO0FBSlMsaUJBQWI7O0FBT0Esb0JBQUltQixVQUFVeEIsS0FDUix3QkFBT3lCLElBQVAsQ0FBWSxJQUFaLEVBQWtCekIsRUFBbEIsRUFBc0J1QixNQUF0QixDQURRLEdBRVQscUJBQUlFLElBQUosQ0FBUyxJQUFULEVBQWVGLE1BQWYsQ0FGTDs7QUFJQUMsMEJBQ0toQixJQURMLENBQ1UsWUFBSztBQUNQVSx1QkFBR0MsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHQUYsdUJBQUdRLFlBQUg7QUFDSCxpQkFOTDtBQU9IO0FBOUVLLFM7Ozs7OytCQWlGRkMsQyxFQUFJO0FBQ1IsZ0JBQUlBLEVBQUUzQixFQUFOLEVBQVU7QUFDTmtCLG1CQUFHVSxxQkFBSCxDQUF5QjtBQUNyQlIsMkJBQU87QUFEYyxpQkFBekI7QUFHQSxxQkFBS3BCLEVBQUwsR0FBVTJCLEVBQUUzQixFQUFaO0FBQ0EscUJBQUtNLE9BQUwsQ0FBYUMsSUFBYixDQUFrQm9CLEVBQUUzQixFQUFwQjtBQUNILGFBTkQsTUFNTztBQUNIa0IsbUJBQUdVLHFCQUFILENBQXlCO0FBQ3JCUiwyQkFBTztBQURjLGlCQUF6QjtBQUdIO0FBQ0o7Ozs7RUF4RzZDLGVBQUtTLEk7O2tCQUFsQy9CLG1CIiwiZmlsZSI6ImZpbGxTaGlwcGluZ0FkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgYWRkLCBzaG93LCB1cGRhdGUgfSBmcm9tICcuLi9zZXJ2aWNlL3NoaXBwaW5nQWRkcmVzcydcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGxTaGlwcGluZ0FkZHJlc3MgIGV4dGVuZHMgd2VweS5wYWdlIHtcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3NMaXN0OiBudWxsLFxuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBtb2JpbGU6ICcnLFxuICAgICAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgICAgICByZWdpb246IFtdXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLy8g57yW6L6R5Zyw5Z2A5pe277yM6I635Y+W5Zyw5Z2A6K+m5oOFXG4gICAgICAgICAgICBzaG93OiAoaWQpID0+IHtcbiAgICAgICAgICAgICAgICBzaG93KGlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSBkYXRhLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbiA9IGRhdGEucmVnaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2JpbGUgPSBkYXRhLm1vYmlsZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmluZElucHV0TmFtZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRNb2JpbGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2JpbGUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRBZGRyZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRSZWdpb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXQ6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgICAgIHZhciBtb2JpbGUgPSB0aGlzLm1vYmlsZTtcbiAgICAgICAgICAgICAgICB2YXIgYWRkcmVzcyA9IHRoaXMuYWRkcmVzcztcbiAgICAgICAgICAgICAgICB2YXIgcmVnaW9uID0gdGhpcy5yZWdpb247XG5cbiAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5aeT5ZCNJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghL14xXFxkezEwfS8udGVzdChtb2JpbGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtydcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVnaW9uLmxlbmd0aCAhPT0zKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeWujOaVtOeahOecgeW4guWMuidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5pS26LSn5Lq65Zyw5Z2AJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICByZWdpb25cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZpY2UgPSBpZCAgXG4gICAgICAgICAgICAgICAgICAgID8gdXBkYXRlLmJpbmQobnVsbCwgaWQsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgOmFkZC5iaW5kKG51bGwsIHBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICBzZXJ2aWNlKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQgKHApICB7XG4gICAgICAgICAgICBpZiAocC5pZCkge1xuICAgICAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn57yW6L6R5Zyw5Z2AJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBwLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMubWV0aG9kcy5zaG93KHAuaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+a3u+WKoOWcsOWdgCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICB9XG4iXX0=