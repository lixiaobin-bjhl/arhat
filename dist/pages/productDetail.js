'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _product = require('./../service/product.js');

var _card = require('./../service/card.js');

var _addToCard = require('./../components/addToCard.js');

var _addToCard2 = _interopRequireDefault(_addToCard);

var _compressImage = require('./../function/compressImage.js');

var _compressImage2 = _interopRequireDefault(_compressImage);

var _copyright = require('./../components/copyright.js');

var _copyright2 = _interopRequireDefault(_copyright);

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductDetail = function (_wepy$page) {
    _inherits(ProductDetail, _wepy$page);

    function ProductDetail() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ProductDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProductDetail.__proto__ || Object.getPrototypeOf(ProductDetail)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            product: {},
            tabs: ['详情', '评价'],
            activeIndex: 0,
            sliderOffset: 0,
            sliderLeft: 0,
            productPics: [],
            cardCount: 0,
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        }, _this.getCountByOpendId = function () {
            var p = (0, _card.getCountByOpendId)();
            p && p.then(function (res) {
                _this.cardCount = res.data.count;
                _this.$apply();
            });
        }, _this.getDetial = function (pid) {
            wx.showLoading({ title: '加载中' });
            (0, _product.getDetial)(pid).then(function (res) {
                var product = res.data;
                _this.product = product;
                wx.hideLoading();
                wx.setNavigationBarTitle({
                    title: product.title
                });
                var productPics = [];
                product.storageIds.forEach(function (item) {
                    productPics.push((0, _compressImage2.default)(item));
                });
                _this.productPics = productPics;
            }).catch(function () {
                wx.hideLoading();
            });
        }, _this.components = {
            addToCard: _addToCard2.default,
            copyright: _copyright2.default
        }, _this.methods = {
            /**
             * 购买
             */
            pay: function pay() {
                var product = this.product;
                wx.navigateTo({
                    url: 'orderConfirm?products=' + JSON.stringify([{
                        count: 1,
                        id: product._id
                    }])
                });
            },


            /**
             * 显示添加到购物车对话框
             */
            showAddToCard: function showAddToCard() {
                _this.product.imageUrl = _this.productPics[0];
                _this.$invoke('addToCard', 'show', _this.product);
            },

            tabClick: function tabClick(e) {
                this.setData({
                    sliderOffset: e.currentTarget.offsetLeft,
                    activeIndex: e.currentTarget.id
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

    _createClass(ProductDetail, [{
        key: 'onShow',
        value: function onShow() {
            if (_userInfo2.default.getOpenid()) {
                console.log(231231);
                this.getCountByOpendId();
            }
        }

        /**
         * 统计购物车的数数
         */


        /**
         * 获取订单详情
         */

    }, {
        key: 'onLoad',
        value: function onLoad(p) {
            this.getDetial(p.pid);
        }

        /**
         * 添加到购物车中处理 
         */

    }, {
        key: 'addToCardHandler',
        value: function addToCardHandler() {
            this.getCountByOpendId();
        }
    }]);

    return ProductDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ProductDetail , 'pages/productDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3REZXRhaWwuanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbCIsImRhdGEiLCJwcm9kdWN0IiwidGFicyIsImFjdGl2ZUluZGV4Iiwic2xpZGVyT2Zmc2V0Iiwic2xpZGVyTGVmdCIsInByb2R1Y3RQaWNzIiwiY2FyZENvdW50IiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImdldENvdW50QnlPcGVuZElkIiwicCIsInRoZW4iLCJyZXMiLCJjb3VudCIsIiRhcHBseSIsImdldERldGlhbCIsInBpZCIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImhpZGVMb2FkaW5nIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwic3RvcmFnZUlkcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsImNhdGNoIiwiY29tcG9uZW50cyIsImFkZFRvQ2FyZCIsImNvcHlyaWdodCIsIm1ldGhvZHMiLCJwYXkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwiX2lkIiwic2hvd0FkZFRvQ2FyZCIsImltYWdlVXJsIiwiJGludm9rZSIsInRhYkNsaWNrIiwiZSIsInNldERhdGEiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0TGVmdCIsInJlZGlyZWN0IiwicmVkaXJlY3RUbyIsImdldE9wZW5pZCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7Ozs7O3dNQUVqQkMsSSxHQUFPO0FBQ0hDLHFCQUFTLEVBRE47QUFFSEMsa0JBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUZIO0FBR0hDLHlCQUFhLENBSFY7QUFJSEMsMEJBQWMsQ0FKWDtBQUtIQyx3QkFBWSxDQUxUO0FBTUhDLHlCQUFhLEVBTlY7QUFPSEMsdUJBQVcsQ0FQUjtBQVFIQywyQkFBZSxJQVJaO0FBU0hDLHNCQUFVLElBVFA7QUFVSEMsc0JBQVUsSUFWUDtBQVdIQyxzQkFBVTtBQVhQLFMsUUF3QlBDLGlCLEdBQW9CLFlBQUs7QUFDckIsZ0JBQUlDLElBQUksOEJBQVI7QUFDQUEsaUJBQUtBLEVBQUVDLElBQUYsQ0FBTyxVQUFDQyxHQUFELEVBQVE7QUFDaEIsc0JBQUtSLFNBQUwsR0FBaUJRLElBQUlmLElBQUosQ0FBU2dCLEtBQTFCO0FBQ0Esc0JBQUtDLE1BQUw7QUFDSCxhQUhJLENBQUw7QUFJSCxTLFFBS0RDLFMsR0FBWSxVQUFDQyxHQUFELEVBQVM7QUFDakJDLGVBQUdDLFdBQUgsQ0FBZSxFQUFDQyxPQUFPLEtBQVIsRUFBZjtBQUNBLG9DQUFVSCxHQUFWLEVBQ0tMLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVE7QUFDVixvQkFBSWQsVUFBVWMsSUFBSWYsSUFBbEI7QUFDQSxzQkFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0FtQixtQkFBR0csV0FBSDtBQUNBSCxtQkFBR0kscUJBQUgsQ0FBeUI7QUFDckJGLDJCQUFPckIsUUFBUXFCO0FBRE0saUJBQXpCO0FBR0Esb0JBQUloQixjQUFjLEVBQWxCO0FBQ0FMLHdCQUFRd0IsVUFBUixDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsSUFBRCxFQUFTO0FBQ2hDckIsZ0NBQVlzQixJQUFaLENBQWlCLDZCQUFjRCxJQUFkLENBQWpCO0FBQ0gsaUJBRkQ7QUFHQSxzQkFBS3JCLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0gsYUFiTCxFQWNLdUIsS0FkTCxDQWNXLFlBQUk7QUFDUFQsbUJBQUdHLFdBQUg7QUFDSCxhQWhCTDtBQWlCSCxTLFFBRURPLFUsR0FBYTtBQUNUQywwQ0FEUztBQUVUQztBQUZTLFMsUUFLYkMsTyxHQUFVO0FBQ047OztBQUdBQyxlQUpNLGlCQUlDO0FBQ0gsb0JBQUlqQyxVQUFVLEtBQUtBLE9BQW5CO0FBQ0FtQixtQkFBR2UsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLDJCQUEyQkMsS0FBS0MsU0FBTCxDQUFlLENBQUM7QUFDNUN0QiwrQkFBTyxDQURxQztBQUU1Q3VCLDRCQUFJdEMsUUFBUXVDO0FBRmdDLHFCQUFELENBQWY7QUFEdEIsaUJBQWQ7QUFNSCxhQVpLOzs7QUFjTjs7O0FBR0FDLDJCQUFlLHlCQUFNO0FBQ2pCLHNCQUFLeEMsT0FBTCxDQUFheUMsUUFBYixHQUF3QixNQUFLcEMsV0FBTCxDQUFpQixDQUFqQixDQUF4QjtBQUNBLHNCQUFLcUMsT0FBTCxDQUFhLFdBQWIsRUFBMEIsTUFBMUIsRUFBa0MsTUFBSzFDLE9BQXZDO0FBRUgsYUFyQks7O0FBdUJOMkMsc0JBQVUsa0JBQVVDLENBQVYsRUFBYTtBQUNuQixxQkFBS0MsT0FBTCxDQUFhO0FBQ1QxQyxrQ0FBY3lDLEVBQUVFLGFBQUYsQ0FBZ0JDLFVBRHJCO0FBRVQ3QyxpQ0FBYTBDLEVBQUVFLGFBQUYsQ0FBZ0JSO0FBRnBCLGlCQUFiO0FBSUgsYUE1Qks7QUE2Qk47OztBQUdBVSxvQkFoQ00sb0JBZ0NJYixHQWhDSixFQWdDUztBQUNYaEIsbUJBQUc4QixVQUFILENBQWM7QUFDVmQseUJBQUtBO0FBREssaUJBQWQ7QUFHSDtBQXBDSyxTOzs7OztpQ0EvQ0Q7QUFDTCxnQkFBSSxtQkFBU2UsU0FBVCxFQUFKLEVBQTBCO0FBQ3RCQyx3QkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxxQkFBS3pDLGlCQUFMO0FBQ0g7QUFDSjs7QUFFRDs7Ozs7QUFXQTs7Ozs7OytCQW9FUUMsQyxFQUFHO0FBQ1AsaUJBQUtLLFNBQUwsQ0FBZUwsRUFBRU0sR0FBakI7QUFDSDs7QUFFRDs7Ozs7OzJDQUdvQjtBQUNoQixpQkFBS1AsaUJBQUw7QUFDSDs7OztFQS9HdUMsZUFBSzBDLEk7O2tCQUE1QnZELGEiLCJmaWxlIjoicHJvZHVjdERldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHsgZ2V0RGV0aWFsIH0gZnJvbSAnLi4vc2VydmljZS9wcm9kdWN0J1xuICAgIGltcG9ydCB7IGdldENvdW50QnlPcGVuZElkIH0gZnJvbSAnLi4vc2VydmljZS9jYXJkJ1xuICAgIGltcG9ydCBhZGRUb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9hZGRUb0NhcmQnXG4gICAgaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi4vZnVuY3Rpb24vY29tcHJlc3NJbWFnZSdcbiAgICBpbXBvcnQgY29weXJpZ2h0IGZyb20gJy4uL2NvbXBvbmVudHMvY29weXJpZ2h0J1xuICAgIGltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbCAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBwcm9kdWN0OiB7fSxcbiAgICAgICAgICAgIHRhYnM6IFsn6K+m5oOFJywgJ+ivhOS7tyddLFxuICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgICBzbGlkZXJPZmZzZXQ6IDAsXG4gICAgICAgICAgICBzbGlkZXJMZWZ0OiAwLFxuICAgICAgICAgICAgcHJvZHVjdFBpY3M6IFtdLFxuICAgICAgICAgICAgY2FyZENvdW50OiAwLFxuICAgICAgICAgICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvLmdldE9wZW5pZCgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coMjMxMjMxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvdW50QnlPcGVuZElkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog57uf6K6h6LSt54mp6L2m55qE5pWw5pWwXG4gICAgICAgICAqL1xuICAgICAgICBnZXRDb3VudEJ5T3BlbmRJZCA9ICgpPT4ge1xuICAgICAgICAgICAgdmFyIHAgPSBnZXRDb3VudEJ5T3BlbmRJZCgpO1xuICAgICAgICAgICAgcCAmJiBwLnRoZW4oKHJlcyk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkQ291bnQgPSByZXMuZGF0YS5jb3VudDtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W6K6i5Y2V6K+m5oOFXG4gICAgICAgICAqL1xuICAgICAgICBnZXREZXRpYWwgPSAocGlkKSA9PiB7XG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7dGl0bGU6ICfliqDovb3kuK0nfSk7XG4gICAgICAgICAgICBnZXREZXRpYWwocGlkKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXMpPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHByb2R1Y3QudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0UGljcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnN0b3JhZ2VJZHMuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGljcy5wdXNoKGNvbXByZXNzSW1hZ2UoaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0UGljcyA9IHByb2R1Y3RQaWNzO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICAgICBhZGRUb0NhcmQsXG4gICAgICAgICAgICBjb3B5cmlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOi0reS5sFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBwYXkgKCkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gdGhpcy5wcm9kdWN0O1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdvcmRlckNvbmZpcm0/cHJvZHVjdHM9JyArIEpTT04uc3RyaW5naWZ5KFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0Ll9pZFxuICAgICAgICAgICAgICAgICAgICB9XSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5pi+56S65re75Yqg5Yiw6LSt54mp6L2m5a+56K+d5qGGXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNob3dBZGRUb0NhcmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QuaW1hZ2VVcmwgPSB0aGlzLnByb2R1Y3RQaWNzWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuJGludm9rZSgnYWRkVG9DYXJkJywgJ3Nob3cnLCB0aGlzLnByb2R1Y3QpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdGFiQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyT2Zmc2V0OiBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6Lez6L2s5Zyw5Z2AIFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZWRpcmVjdCAodXJsKSB7XG4gICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkIChwKSB7XG4gICAgICAgICAgICB0aGlzLmdldERldGlhbChwLnBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75Yqg5Yiw6LSt54mp6L2m5Lit5aSE55CGIFxuICAgICAgICAgKi9cbiAgICAgICAgYWRkVG9DYXJkSGFuZGxlciAoKSB7XG4gICAgICAgICAgICB0aGlzLmdldENvdW50QnlPcGVuZElkKCk7XG4gICAgICAgIH1cblxuICAgIH1cbiJdfQ==