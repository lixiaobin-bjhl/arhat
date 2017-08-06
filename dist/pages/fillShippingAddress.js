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
            contactNumber: '',
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
            submit: function submit() {
                var name = _this.name;
                var contactNumber = _this.contactNumber;
                var address = _this.address;
                var region = _this.region;

                if (!name) {
                    wx.showToast({
                        title: '请输入姓名'
                    });
                    return;
                }

                if (!/^1\d{10}/.test(contactNumber)) {
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
                    contactNumber: contactNumber,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGxTaGlwcGluZ0FkZHJlc3MuanMiXSwibmFtZXMiOlsiRmlsbFNoaXBwaW5nQWRkcmVzcyIsImRhdGEiLCJpZCIsInNoaXBwaW5nQWRkcmVzc0xpc3QiLCJuYW1lIiwiY29udGFjdE51bWJlciIsImFkZHJlc3MiLCJyZWdpb24iLCJtZXRob2RzIiwic2hvdyIsInRoZW4iLCJyZXMiLCJiaW5kSW5wdXROYW1lIiwiZSIsImRldGFpbCIsInZhbHVlIiwiYmluZElucHV0TW9iaWxlIiwiYmluZElucHV0QWRkcmVzcyIsImJpbmRSZWdpb25DaGFuZ2UiLCJzdWJtaXQiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwidGVzdCIsImxlbmd0aCIsInBhcmFtcyIsInNlcnZpY2UiLCJiaW5kIiwibmF2aWdhdGVCYWNrIiwicCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVJOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7Ozs7Ozs7Ozs7OztvTkFFakJDLEksR0FBTztBQUNIQyxnQkFBSSxJQUREO0FBRUhDLGlDQUFxQixJQUZsQjtBQUdIQyxrQkFBTSxFQUhIO0FBSUhDLDJCQUFlLEVBSlo7QUFLSEMscUJBQVMsRUFMTjtBQU1IQyxvQkFBUTtBQU5MLFMsUUFTUEMsTyxHQUFVO0FBQ047QUFDQUMsa0JBQU0sY0FBQ1AsRUFBRCxFQUFRO0FBQ1YsMkNBQUtBLEVBQUwsRUFDS1EsSUFETCxDQUNVLFVBQUNDLEdBQUQsRUFBUTtBQUNWLHdCQUFJVixPQUFPVSxJQUFJVixJQUFmO0FBQ0EsMEJBQUtHLElBQUwsR0FBWUgsS0FBS0csSUFBakI7QUFDQSwwQkFBS0UsT0FBTCxHQUFlTCxLQUFLSyxPQUFwQjtBQUNBLDBCQUFLQyxNQUFMLEdBQWNOLEtBQUtNLE1BQW5CO0FBQ0EsMEJBQUtGLGFBQUwsR0FBcUJKLEtBQUtJLGFBQTFCO0FBQ0gsaUJBUEw7QUFRSCxhQVhLO0FBWU5PLDJCQUFlLHVCQUFVQyxDQUFWLEVBQWE7QUFDeEIscUJBQUtULElBQUwsR0FBWVMsRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNILGFBZEs7QUFlTkMsNkJBQWlCLHlCQUFVSCxDQUFWLEVBQWE7QUFDMUIscUJBQUtSLGFBQUwsR0FBcUJRLEVBQUVDLE1BQUYsQ0FBU0MsS0FBOUI7QUFDSCxhQWpCSztBQWtCTkUsOEJBQWtCLDBCQUFVSixDQUFWLEVBQWE7QUFDM0IscUJBQUtQLE9BQUwsR0FBZU8sRUFBRUMsTUFBRixDQUFTQyxLQUF4QjtBQUNILGFBcEJLO0FBcUJORyw4QkFBa0IsMEJBQVVMLENBQVYsRUFBYTtBQUMzQixxQkFBS04sTUFBTCxHQUFjTSxFQUFFQyxNQUFGLENBQVNDLEtBQXZCO0FBQ0gsYUF2Qks7QUF3Qk5JLG9CQUFRLGtCQUFLO0FBQ1Qsb0JBQUlmLE9BQU8sTUFBS0EsSUFBaEI7QUFDQSxvQkFBSUMsZ0JBQWdCLE1BQUtBLGFBQXpCO0FBQ0Esb0JBQUlDLFVBQVUsTUFBS0EsT0FBbkI7QUFDQSxvQkFBSUMsU0FBUyxNQUFLQSxNQUFsQjs7QUFFQSxvQkFBSSxDQUFDSCxJQUFMLEVBQVc7QUFDUGdCLHVCQUFHQyxTQUFILENBQWE7QUFDVEMsK0JBQU87QUFERSxxQkFBYjtBQUdBO0FBQ0g7O0FBRUQsb0JBQUksQ0FBQyxXQUFXQyxJQUFYLENBQWdCbEIsYUFBaEIsQ0FBTCxFQUFxQztBQUNqQ2UsdUJBQUdDLFNBQUgsQ0FBYTtBQUNUQywrQkFBTztBQURFLHFCQUFiO0FBR0E7QUFDSDs7QUFFRCxvQkFBSWYsT0FBT2lCLE1BQVAsS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJKLHVCQUFHQyxTQUFILENBQWE7QUFDVEMsK0JBQU87QUFERSxxQkFBYjtBQUdBO0FBQ0g7O0FBRUQsb0JBQUksQ0FBQ2hCLE9BQUwsRUFBYztBQUNWYyx1QkFBR0MsU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHQTtBQUNIOztBQUVELG9CQUFJcEIsS0FBSyxNQUFLQSxFQUFkOztBQUVBLG9CQUFJdUIsU0FBUztBQUNUckIsOEJBRFM7QUFFVEMsZ0RBRlM7QUFHVEMsb0NBSFM7QUFJVEM7QUFKUyxpQkFBYjs7QUFPQSxvQkFBSW1CLFVBQVV4QixLQUNSLHdCQUFPeUIsSUFBUCxDQUFZLElBQVosRUFBa0J6QixFQUFsQixFQUFzQnVCLE1BQXRCLENBRFEsR0FFVCxxQkFBSUUsSUFBSixDQUFTLElBQVQsRUFBZUYsTUFBZixDQUZMOztBQUlBQywwQkFDS2hCLElBREwsQ0FDVSxZQUFLO0FBQ1BVLHVCQUFHQyxTQUFILENBQWE7QUFDVEMsK0JBQU87QUFERSxxQkFBYjtBQUdBRix1QkFBR1EsWUFBSDtBQUNILGlCQU5MO0FBT0g7QUE5RUssUzs7Ozs7K0JBaUZGQyxDLEVBQUk7QUFDUixnQkFBSUEsRUFBRTNCLEVBQU4sRUFBVTtBQUNOa0IsbUJBQUdVLHFCQUFILENBQXlCO0FBQ3JCUiwyQkFBTztBQURjLGlCQUF6QjtBQUdBLHFCQUFLcEIsRUFBTCxHQUFVMkIsRUFBRTNCLEVBQVo7QUFDQSxxQkFBS00sT0FBTCxDQUFhQyxJQUFiLENBQWtCb0IsRUFBRTNCLEVBQXBCO0FBQ0gsYUFORCxNQU1PO0FBQ0hrQixtQkFBR1UscUJBQUgsQ0FBeUI7QUFDckJSLDJCQUFPO0FBRGMsaUJBQXpCO0FBR0g7QUFDSjs7OztFQXhHNkMsZUFBS1MsSTs7a0JBQWxDL0IsbUIiLCJmaWxlIjoiZmlsbFNoaXBwaW5nQWRkcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgeyBhZGQsIHNob3csIHVwZGF0ZSB9IGZyb20gJy4uL3NlcnZpY2Uvc2hpcHBpbmdBZGRyZXNzJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsbFNoaXBwaW5nQWRkcmVzcyAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc0xpc3Q6IG51bGwsXG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvbnRhY3ROdW1iZXI6ICcnLFxuICAgICAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgICAgICByZWdpb246IFtdXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLy8g57yW6L6R5Zyw5Z2A5pe277yM6I635Y+W5Zyw5Z2A6K+m5oOFXG4gICAgICAgICAgICBzaG93OiAoaWQpID0+IHtcbiAgICAgICAgICAgICAgICBzaG93KGlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSBkYXRhLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbiA9IGRhdGEucmVnaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWN0TnVtYmVyID0gZGF0YS5jb250YWN0TnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXROYW1lOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE1vYmlsZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3ROdW1iZXIgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRBZGRyZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRSZWdpb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXQ6ICgpPT4ge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgICAgIHZhciBjb250YWN0TnVtYmVyID0gdGhpcy5jb250YWN0TnVtYmVyO1xuICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzID0gdGhpcy5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIHZhciByZWdpb24gPSB0aGlzLnJlZ2lvbjtcblxuICAgICAgICAgICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXlp5PlkI0nXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEvXjFcXGR7MTB9Ly50ZXN0KGNvbnRhY3ROdW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtydcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVnaW9uLmxlbmd0aCAhPT0zKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeWujOaVtOeahOecgeW4guWMuidcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5pS26LSn5Lq65Zyw5Z2AJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlID0gaWQgIFxuICAgICAgICAgICAgICAgICAgICA/IHVwZGF0ZS5iaW5kKG51bGwsIGlkLCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIDphZGQuYmluZChudWxsLCBwYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgc2VydmljZSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSAge1xuICAgICAgICAgICAgaWYgKHAuaWQpIHtcbiAgICAgICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e8lui+keWcsOWdgCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gcC5pZDtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMuc2hvdyhwLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmt7vliqDlnLDlnYAnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgfVxuIl19