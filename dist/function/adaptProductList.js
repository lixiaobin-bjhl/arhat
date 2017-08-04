/**
 * @file arhat function adpatProudctList
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = adaptProductList;

var _compressImage = require('./compressImage.js');

var _compressImage2 = _interopRequireDefault(_compressImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function adaptProductList(data) {
    var bannerOption = [];
    data.forEach(function (item) {
        var storageIds = item.storageIds || item.product.storageIds;
        // 没有count 就默认为1
        if (!item.count) {
            item.count = 1;
        }
        item.selected = true;
        if (storageIds && storageIds.length) {
            storageIds.forEach(function (storageId, index) {
                // 产品仅显示第1张图
                if (index === 0) {
                    item.imageUrl = (0, _compressImage2.default)(storageId);
                }
            });
        }
    });
    return data;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkYXB0UHJvZHVjdExpc3QuanMiXSwibmFtZXMiOlsiYWRhcHRQcm9kdWN0TGlzdCIsImRhdGEiLCJiYW5uZXJPcHRpb24iLCJmb3JFYWNoIiwiaXRlbSIsInN0b3JhZ2VJZHMiLCJwcm9kdWN0IiwiY291bnQiLCJzZWxlY3RlZCIsImxlbmd0aCIsInN0b3JhZ2VJZCIsImluZGV4IiwiaW1hZ2VVcmwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOzs7OztrQkFJd0JBLGdCOztBQUZ4Qjs7Ozs7O0FBRWUsU0FBU0EsZ0JBQVQsQ0FBMkJDLElBQTNCLEVBQWlDO0FBQzVDLFFBQUlDLGVBQWUsRUFBbkI7QUFDQUQsU0FBS0UsT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBUztBQUNsQixZQUFJQyxhQUFhRCxLQUFLQyxVQUFMLElBQW1CRCxLQUFLRSxPQUFMLENBQWFELFVBQWpEO0FBQ0E7QUFDQSxZQUFJLENBQUNELEtBQUtHLEtBQVYsRUFBaUI7QUFDYkgsaUJBQUtHLEtBQUwsR0FBYSxDQUFiO0FBQ0g7QUFDREgsYUFBS0ksUUFBTCxHQUFnQixJQUFoQjtBQUNBLFlBQUlILGNBQWNBLFdBQVdJLE1BQTdCLEVBQXFDO0FBQ2pDSix1QkFBV0YsT0FBWCxDQUFtQixVQUFDTyxTQUFELEVBQVlDLEtBQVosRUFBcUI7QUFDcEM7QUFDQSxvQkFBSUEsVUFBVSxDQUFkLEVBQWlCO0FBQ2JQLHlCQUFLUSxRQUFMLEdBQWdCLDZCQUFjRixTQUFkLENBQWhCO0FBQ0g7QUFDSixhQUxEO0FBTUg7QUFDSixLQWZEO0FBZ0JBLFdBQU9ULElBQVA7QUFDSCIsImZpbGUiOiJhZGFwdFByb2R1Y3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSBhcmhhdCBmdW5jdGlvbiBhZHBhdFByb3VkY3RMaXN0XG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi9jb21wcmVzc0ltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGFwdFByb2R1Y3RMaXN0IChkYXRhKSB7XG4gICAgdmFyIGJhbm5lck9wdGlvbiA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgIHZhciBzdG9yYWdlSWRzID0gaXRlbS5zdG9yYWdlSWRzIHx8IGl0ZW0ucHJvZHVjdC5zdG9yYWdlSWRzO1xuICAgICAgICAvLyDmsqHmnIljb3VudCDlsLHpu5jorqTkuLoxXG4gICAgICAgIGlmICghaXRlbS5jb3VudCkge1xuICAgICAgICAgICAgaXRlbS5jb3VudCA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIGlmIChzdG9yYWdlSWRzICYmIHN0b3JhZ2VJZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdG9yYWdlSWRzLmZvckVhY2goKHN0b3JhZ2VJZCwgaW5kZXgpPT4ge1xuICAgICAgICAgICAgICAgIC8vIOS6p+WTgeS7heaYvuekuuesrDHlvKDlm75cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZVVybCA9IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xufSJdfQ==