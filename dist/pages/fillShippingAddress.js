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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGxTaGlwcGluZ0FkZHJlc3MuanMiXSwibmFtZXMiOlsiRmlsbFNoaXBwaW5nQWRkcmVzcyIsImRhdGEiLCJpZCIsInNoaXBwaW5nQWRkcmVzc0xpc3QiLCJuYW1lIiwiY29udGFjdE51bWJlciIsImFkZHJlc3MiLCJyZWdpb24iLCJjb21wb25lbnRzIiwiY29weXJpZ2h0IiwibWV0aG9kcyIsInNob3ciLCJ0aGVuIiwicmVzIiwiYmluZElucHV0TmFtZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImJpbmRJbnB1dE1vYmlsZSIsImJpbmRJbnB1dEFkZHJlc3MiLCJiaW5kUmVnaW9uQ2hhbmdlIiwicmVkaXJlY3QiLCJ1cmwiLCJ3eCIsInJlZGlyZWN0VG8iLCJzdWJtaXQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsInRlc3QiLCJsZW5ndGgiLCJwYXJhbXMiLCJzZXJ2aWNlIiwiYmluZCIsInAiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFSTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLG1COzs7Ozs7Ozs7Ozs7OztvTkFFakJDLEksR0FBTztBQUNIQyxnQkFBSSxJQUREO0FBRUhDLGlDQUFxQixJQUZsQjtBQUdIQyxrQkFBTSxFQUhIO0FBSUhDLDJCQUFlLEVBSlo7QUFLSEMscUJBQVMsRUFMTjtBQU1IQyxvQkFBUTtBQU5MLFMsUUFTUEMsVSxHQUFhO0FBQ1RDO0FBRFMsUyxRQUliQyxPLEdBQVU7QUFDTjtBQUNBQyxrQkFBTSxjQUFDVCxFQUFELEVBQVE7QUFDViwyQ0FBS0EsRUFBTCxFQUNLVSxJQURMLENBQ1UsVUFBQ0MsR0FBRCxFQUFRO0FBQ1Ysd0JBQUlaLE9BQU9ZLElBQUlaLElBQWY7QUFDQSwwQkFBS0csSUFBTCxHQUFZSCxLQUFLRyxJQUFqQjtBQUNBLDBCQUFLRSxPQUFMLEdBQWVMLEtBQUtLLE9BQXBCO0FBQ0EsMEJBQUtDLE1BQUwsR0FBY04sS0FBS00sTUFBbkI7QUFDQSwwQkFBS0YsYUFBTCxHQUFxQkosS0FBS0ksYUFBMUI7QUFDSCxpQkFQTDtBQVFILGFBWEs7QUFZTlMsMkJBQWUsdUJBQVVDLENBQVYsRUFBYTtBQUN4QixxQkFBS1gsSUFBTCxHQUFZVyxFQUFFQyxNQUFGLENBQVNDLEtBQXJCO0FBQ0gsYUFkSztBQWVOQyw2QkFBaUIseUJBQVVILENBQVYsRUFBYTtBQUMxQixxQkFBS1YsYUFBTCxHQUFxQlUsRUFBRUMsTUFBRixDQUFTQyxLQUE5QjtBQUNILGFBakJLO0FBa0JORSw4QkFBa0IsMEJBQVVKLENBQVYsRUFBYTtBQUMzQixxQkFBS1QsT0FBTCxHQUFlUyxFQUFFQyxNQUFGLENBQVNDLEtBQXhCO0FBQ0gsYUFwQks7QUFxQk5HLDhCQUFrQiwwQkFBVUwsQ0FBVixFQUFhO0FBQzNCLHFCQUFLUixNQUFMLEdBQWNRLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdkI7QUFDSCxhQXZCSztBQXdCTjs7O0FBR0FJLG9CQTNCTSxvQkEyQklDLEdBM0JKLEVBMkJTO0FBQ1hDLG1CQUFHQyxVQUFILENBQWM7QUFDVkYseUJBQUtBO0FBREssaUJBQWQ7QUFHSCxhQS9CSzs7QUFnQ05HLG9CQUFRLGtCQUFLO0FBQ1Qsb0JBQUlyQixPQUFPLE1BQUtBLElBQWhCO0FBQ0Esb0JBQUlDLGdCQUFnQixNQUFLQSxhQUF6QjtBQUNBLG9CQUFJQyxVQUFVLE1BQUtBLE9BQW5CO0FBQ0Esb0JBQUlDLFNBQVMsTUFBS0EsTUFBbEI7O0FBRUEsb0JBQUksQ0FBQ0gsSUFBTCxFQUFXO0FBQ1BtQix1QkFBR0csU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHQTtBQUNIOztBQUVELG9CQUFJLENBQUMsV0FBV0MsSUFBWCxDQUFnQnZCLGFBQWhCLENBQUwsRUFBcUM7QUFDakNrQix1QkFBR0csU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHQTtBQUNIOztBQUVELG9CQUFJcEIsT0FBT3NCLE1BQVAsS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJOLHVCQUFHRyxTQUFILENBQWE7QUFDVEMsK0JBQU87QUFERSxxQkFBYjtBQUdBO0FBQ0g7O0FBRUQsb0JBQUksQ0FBQ3JCLE9BQUwsRUFBYztBQUNWaUIsdUJBQUdHLFNBQUgsQ0FBYTtBQUNUQywrQkFBTztBQURFLHFCQUFiO0FBR0E7QUFDSDs7QUFFRCxvQkFBSXpCLEtBQUssTUFBS0EsRUFBZDs7QUFFQSxvQkFBSTRCLFNBQVM7QUFDVDFCLDhCQURTO0FBRVRDLGdEQUZTO0FBR1RDLG9DQUhTO0FBSVRDO0FBSlMsaUJBQWI7O0FBT0Esb0JBQUl3QixVQUFVN0IsS0FDUix3QkFBTzhCLElBQVAsQ0FBWSxJQUFaLEVBQWtCOUIsRUFBbEIsRUFBc0I0QixNQUF0QixDQURRLEdBRVQscUJBQUlFLElBQUosQ0FBUyxJQUFULEVBQWVGLE1BQWYsQ0FGTDs7QUFJQUMsMEJBQ0tuQixJQURMLENBQ1UsWUFBSztBQUNQVyx1QkFBR0csU0FBSCxDQUFhO0FBQ1RDLCtCQUFPO0FBREUscUJBQWI7QUFHQSwwQkFBS2pCLE9BQUwsQ0FBYVcsUUFBYixDQUFzQixpQkFBdEI7QUFDSCxpQkFOTDtBQU9IO0FBdEZLLFM7Ozs7OytCQXlGRlksQyxFQUFJO0FBQ1IsZ0JBQUlBLEVBQUUvQixFQUFOLEVBQVU7QUFDTnFCLG1CQUFHVyxxQkFBSCxDQUF5QjtBQUNyQlAsMkJBQU87QUFEYyxpQkFBekI7QUFHQSxxQkFBS3pCLEVBQUwsR0FBVStCLEVBQUUvQixFQUFaO0FBQ0EscUJBQUtRLE9BQUwsQ0FBYUMsSUFBYixDQUFrQnNCLEVBQUUvQixFQUFwQjtBQUNILGFBTkQsTUFNTztBQUNIcUIsbUJBQUdXLHFCQUFILENBQXlCO0FBQ3JCUCwyQkFBTztBQURjLGlCQUF6QjtBQUdIO0FBQ0o7Ozs7RUFwSDZDLGVBQUtRLEk7O2tCQUFsQ25DLG1CIiwiZmlsZSI6ImZpbGxTaGlwcGluZ0FkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgYWRkLCBzaG93LCB1cGRhdGUgfSBmcm9tICcuLi9zZXJ2aWNlL3NoaXBwaW5nQWRkcmVzcydcbiAgICBpbXBvcnQgY29weXJpZ2h0IGZyb20gJy4uL2NvbXBvbmVudHMvY29weXJpZ2h0J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsbFNoaXBwaW5nQWRkcmVzcyAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIHNoaXBwaW5nQWRkcmVzc0xpc3Q6IG51bGwsXG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGNvbnRhY3ROdW1iZXI6ICcnLFxuICAgICAgICAgICAgYWRkcmVzczogJycsXG4gICAgICAgICAgICByZWdpb246IFtdXG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnRzID0ge1xuICAgICAgICAgICAgY29weXJpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLy8g57yW6L6R5Zyw5Z2A5pe277yM6I635Y+W5Zyw5Z2A6K+m5oOFXG4gICAgICAgICAgICBzaG93OiAoaWQpID0+IHtcbiAgICAgICAgICAgICAgICBzaG93KGlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSBkYXRhLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lvbiA9IGRhdGEucmVnaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWN0TnVtYmVyID0gZGF0YS5jb250YWN0TnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXROYW1lOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRJbnB1dE1vYmlsZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhY3ROdW1iZXIgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaW5kSW5wdXRBZGRyZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJpbmRSZWdpb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpb24gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi3s+i9rOWcsOWdgCBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmVkaXJlY3QgKHVybCkge1xuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdDogKCk9PiB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhY3ROdW1iZXIgPSB0aGlzLmNvbnRhY3ROdW1iZXI7XG4gICAgICAgICAgICAgICAgdmFyIGFkZHJlc3MgPSB0aGlzLmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgdmFyIHJlZ2lvbiA9IHRoaXMucmVnaW9uO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+i+k+WFpeWnk+WQjSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIS9eMVxcZHsxMH0vLnRlc3QoY29udGFjdE51bWJlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZWdpb24ubGVuZ3RoICE9PTMpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5a6M5pW055qE55yB5biC5Yy6J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXmlLbotKfkurrlnLDlnYAnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBjb250YWN0TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICByZWdpb25cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZpY2UgPSBpZCAgXG4gICAgICAgICAgICAgICAgICAgID8gdXBkYXRlLmJpbmQobnVsbCwgaWQsIHBhcmFtcylcbiAgICAgICAgICAgICAgICAgICAgOmFkZC5iaW5kKG51bGwsIHBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICBzZXJ2aWNlKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5L+d5a2Y5oiQ5YqfJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHMucmVkaXJlY3QoJ3NoaXBwaW5nQWRkcmVzcycpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCAocCkgIHtcbiAgICAgICAgICAgIGlmIChwLmlkKSB7XG4gICAgICAgICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvJbovpHlnLDlnYAnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pZCA9IHAuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzLnNob3cocC5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5re75Yqg5Zyw5Z2AJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgIH1cbiJdfQ==