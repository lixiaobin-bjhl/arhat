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
        item.count = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkYXB0UHJvZHVjdExpc3QuanMiXSwibmFtZXMiOlsiYWRhcHRQcm9kdWN0TGlzdCIsImRhdGEiLCJiYW5uZXJPcHRpb24iLCJmb3JFYWNoIiwiaXRlbSIsInN0b3JhZ2VJZHMiLCJwcm9kdWN0IiwiY291bnQiLCJsZW5ndGgiLCJzdG9yYWdlSWQiLCJpbmRleCIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7a0JBSXdCQSxnQjs7QUFGeEI7Ozs7OztBQUVlLFNBQVNBLGdCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUM1QyxRQUFJQyxlQUFlLEVBQW5CO0FBQ0FELFNBQUtFLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVM7QUFDbEIsWUFBSUMsYUFBYUQsS0FBS0MsVUFBTCxJQUFtQkQsS0FBS0UsT0FBTCxDQUFhRCxVQUFqRDtBQUNBRCxhQUFLRyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFlBQUlGLGNBQWNBLFdBQVdHLE1BQTdCLEVBQXFDO0FBQ2pDSCx1QkFBV0YsT0FBWCxDQUFtQixVQUFDTSxTQUFELEVBQVlDLEtBQVosRUFBcUI7QUFDcEM7QUFDQSxvQkFBSUEsVUFBVSxDQUFkLEVBQWlCO0FBQ2JOLHlCQUFLTyxRQUFMLEdBQWdCLDZCQUFjRixTQUFkLENBQWhCO0FBQ0g7QUFDSixhQUxEO0FBTUg7QUFDSixLQVhEO0FBWUEsV0FBT1IsSUFBUDtBQUNIIiwiZmlsZSI6ImFkYXB0UHJvZHVjdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIGFyaGF0IGZ1bmN0aW9uIGFkcGF0UHJvdWRjdExpc3RcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY29tcHJlc3NJbWFnZSBmcm9tICcuL2NvbXByZXNzSW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkYXB0UHJvZHVjdExpc3QgKGRhdGEpIHtcbiAgICB2YXIgYmFubmVyT3B0aW9uID0gW107XG4gICAgZGF0YS5mb3JFYWNoKChpdGVtKT0+IHtcbiAgICAgICAgdmFyIHN0b3JhZ2VJZHMgPSBpdGVtLnN0b3JhZ2VJZHMgfHwgaXRlbS5wcm9kdWN0LnN0b3JhZ2VJZHM7XG4gICAgICAgIGl0ZW0uY291bnQgPSAxO1xuICAgICAgICBpZiAoc3RvcmFnZUlkcyAmJiBzdG9yYWdlSWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgc3RvcmFnZUlkcy5mb3JFYWNoKChzdG9yYWdlSWQsIGluZGV4KT0+IHtcbiAgICAgICAgICAgICAgICAvLyDkuqflk4Hku4XmmL7npLrnrKwx5byg5Zu+XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VVcmwgPSBjb21wcmVzc0ltYWdlKHN0b3JhZ2VJZClcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbn0iXX0=