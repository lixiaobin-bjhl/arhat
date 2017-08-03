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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkYXB0UHJvZHVjdExpc3QuanMiXSwibmFtZXMiOlsiYWRhcHRQcm9kdWN0TGlzdCIsImRhdGEiLCJiYW5uZXJPcHRpb24iLCJmb3JFYWNoIiwiaXRlbSIsInN0b3JhZ2VJZHMiLCJwcm9kdWN0IiwibGVuZ3RoIiwic3RvcmFnZUlkIiwiaW5kZXgiLCJpbWFnZVVybCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O2tCQUl3QkEsZ0I7O0FBRnhCOzs7Ozs7QUFFZSxTQUFTQSxnQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUM7QUFDNUMsUUFBSUMsZUFBZSxFQUFuQjtBQUNBRCxTQUFLRSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFTO0FBQ2xCLFlBQUlDLGFBQWFELEtBQUtDLFVBQUwsSUFBbUJELEtBQUtFLE9BQUwsQ0FBYUQsVUFBakQ7QUFDQSxZQUFJQSxjQUFjQSxXQUFXRSxNQUE3QixFQUFxQztBQUNqQ0YsdUJBQVdGLE9BQVgsQ0FBbUIsVUFBQ0ssU0FBRCxFQUFZQyxLQUFaLEVBQXFCO0FBQ3BDO0FBQ0Esb0JBQUlBLFVBQVUsQ0FBZCxFQUFpQjtBQUNiTCx5QkFBS00sUUFBTCxHQUFnQiw2QkFBY0YsU0FBZCxDQUFoQjtBQUNIO0FBQ0osYUFMRDtBQU1IO0FBQ0osS0FWRDtBQVdBLFdBQU9QLElBQVA7QUFDSCIsImZpbGUiOiJhZGFwdFByb2R1Y3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSBhcmhhdCBmdW5jdGlvbiBhZHBhdFByb3VkY3RMaXN0XG4gKiBAYXV0aG9yIFhpYW9CaW4gTGkobGl4aWFvYmluODg3OEBnbWFpbC5jb20pIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNvbXByZXNzSW1hZ2UgZnJvbSAnLi9jb21wcmVzc0ltYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGFwdFByb2R1Y3RMaXN0IChkYXRhKSB7XG4gICAgdmFyIGJhbm5lck9wdGlvbiA9IFtdO1xuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PiB7XG4gICAgICAgIHZhciBzdG9yYWdlSWRzID0gaXRlbS5zdG9yYWdlSWRzIHx8IGl0ZW0ucHJvZHVjdC5zdG9yYWdlSWRzO1xuICAgICAgICBpZiAoc3RvcmFnZUlkcyAmJiBzdG9yYWdlSWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3RvcmFnZUlkcy5mb3JFYWNoKChzdG9yYWdlSWQsIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgICAvLyDkuqflk4Hku4XmmL7npLrnrKwx5byg5Zu+XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VVcmwgPSBjb21wcmVzc0ltYWdlKHN0b3JhZ2VJZClcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbn0iXX0=