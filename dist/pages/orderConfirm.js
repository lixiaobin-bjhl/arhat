'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _product = require('./../service/product.js');

var _plus = require('./../function/plus.js');

var _plus2 = _interopRequireDefault(_plus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_wepy$page) {
    _inherits(Card, _wepy$page);

    function Card() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Card);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            products: null
        }, _this.methods = {
            /**
             * 根据产品ids获取商品信息 
             */
            getProductsByIds: function getProductsByIds(ids) {
                wx.showLoading();
                (0, _product.listByIds)({
                    products: [{
                        count: 1,
                        id: ids
                    }]
                }).then(function (res) {
                    wx.hideLoading();
                    _this.products = res.data.list;
                    _this.$apply();
                }).catch(function () {
                    _this.products = [];
                    _this.$apply();
                    wx.hideLoading();
                });
            }
        }, _this.computed = {
            totalMoney: function totalMoney() {
                var result = 0;
                var products = this.products || [];

                products.forEach(function (item) {
                    result = (0, _plus2.default)(item.payPrice, result);
                });
                return result;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Card, [{
        key: 'onLoad',
        value: function onLoad(p) {
            wx.setNavigationBarTitle({
                title: '确认定单'
            });
            var pids = p.pids;
            // 直接购买产品 
            this.methods.getProductsByIds(pids);
        }
    }]);

    return Card;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Card , 'pages/orderConfirm'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyQ29uZmlybS5qcyJdLCJuYW1lcyI6WyJDYXJkIiwiZGF0YSIsInByb2R1Y3RzIiwibWV0aG9kcyIsImdldFByb2R1Y3RzQnlJZHMiLCJpZHMiLCJ3eCIsInNob3dMb2FkaW5nIiwiY291bnQiLCJpZCIsInRoZW4iLCJyZXMiLCJoaWRlTG9hZGluZyIsImxpc3QiLCIkYXBwbHkiLCJjYXRjaCIsImNvbXB1dGVkIiwidG90YWxNb25leSIsInJlc3VsdCIsImZvckVhY2giLCJpdGVtIiwicGF5UHJpY2UiLCJwIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwidGl0bGUiLCJwaWRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUk7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztzTEFDakJDLEksR0FBTztBQUNKQyxzQkFBVTtBQUROLFMsUUFJUEMsTyxHQUFVO0FBQ047OztBQUdBQyw4QkFBa0IsMEJBQUNDLEdBQUQsRUFBUztBQUN2QkMsbUJBQUdDLFdBQUg7QUFDQSx3Q0FBVTtBQUNOTCw4QkFBVSxDQUNOO0FBQ0lNLCtCQUFPLENBRFg7QUFFSUMsNEJBQUlKO0FBRlIscUJBRE07QUFESixpQkFBVixFQVFLSyxJQVJMLENBUVUsVUFBQ0MsR0FBRCxFQUFRO0FBQ1ZMLHVCQUFHTSxXQUFIO0FBQ0EsMEJBQUtWLFFBQUwsR0FBZ0JTLElBQUlWLElBQUosQ0FBU1ksSUFBekI7QUFDQSwwQkFBS0MsTUFBTDtBQUNILGlCQVpMLEVBYUtDLEtBYkwsQ0FhVyxZQUFLO0FBQ1IsMEJBQUtiLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSwwQkFBS1ksTUFBTDtBQUNBUix1QkFBR00sV0FBSDtBQUNILGlCQWpCTDtBQWtCSDtBQXhCSyxTLFFBMkJWSSxRLEdBQVc7QUFDUEMsc0JBRE8sd0JBQ087QUFDVixvQkFBSUMsU0FBUyxDQUFiO0FBQ0Esb0JBQUloQixXQUFXLEtBQUtBLFFBQUwsSUFBaUIsRUFBaEM7O0FBRUFBLHlCQUFTaUIsT0FBVCxDQUFpQixVQUFDQyxJQUFELEVBQVM7QUFDdEJGLDZCQUFTLG9CQUFLRSxLQUFLQyxRQUFWLEVBQW9CSCxNQUFwQixDQUFUO0FBQ0gsaUJBRkQ7QUFHQSx1QkFBT0EsTUFBUDtBQUNIO0FBVE0sUzs7Ozs7K0JBWUhJLEMsRUFBRztBQUNQaEIsZUFBR2lCLHFCQUFILENBQXlCO0FBQ3JCQyx1QkFBTztBQURjLGFBQXpCO0FBR0EsZ0JBQUlDLE9BQU9ILEVBQUVHLElBQWI7QUFDQTtBQUNBLGlCQUFLdEIsT0FBTCxDQUFhQyxnQkFBYixDQUE4QnFCLElBQTlCO0FBQ0g7Ozs7RUFuRDhCLGVBQUtDLEk7O2tCQUFuQjFCLEkiLCJmaWxlIjoib3JkZXJDb25maXJtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gICAgaW1wb3J0IHsgbGlzdEJ5SWRzIH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0JztcbiAgICBpbXBvcnQgcGx1cyBmcm9tICcuLi9mdW5jdGlvbi9wbHVzJ1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgcHJvZHVjdHM6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOagueaNruS6p+WTgWlkc+iOt+WPluWVhuWTgeS/oeaBryBcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZ2V0UHJvZHVjdHNCeUlkczogKGlkcykgPT4ge1xuICAgICAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgbGlzdEJ5SWRzKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzLmRhdGEubGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgICAgIHRvdGFsTW9uZXkgKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0cyA9IHRoaXMucHJvZHVjdHMgfHwgW107XG5cbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcGx1cyhpdGVtLnBheVByaWNlLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQgKHApIHtcbiAgICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTlrprljZUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBwaWRzID0gcC5waWRzO1xuICAgICAgICAgICAgLy8g55u05o6l6LSt5Lmw5Lqn5ZOBIFxuICAgICAgICAgICAgdGhpcy5tZXRob2RzLmdldFByb2R1Y3RzQnlJZHMocGlkcyk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=