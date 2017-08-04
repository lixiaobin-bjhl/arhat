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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkYXB0UHJvZHVjdExpc3QuanMiXSwibmFtZXMiOlsiYWRhcHRQcm9kdWN0TGlzdCIsImRhdGEiLCJiYW5uZXJPcHRpb24iLCJmb3JFYWNoIiwiaXRlbSIsInN0b3JhZ2VJZHMiLCJwcm9kdWN0IiwiY291bnQiLCJsZW5ndGgiLCJzdG9yYWdlSWQiLCJpbmRleCIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7a0JBSXdCQSxnQjs7QUFGeEI7Ozs7OztBQUVlLFNBQVNBLGdCQUFULENBQTJCQyxJQUEzQixFQUFpQztBQUM1QyxRQUFJQyxlQUFlLEVBQW5CO0FBQ0FELFNBQUtFLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVM7QUFDbEIsWUFBSUMsYUFBYUQsS0FBS0MsVUFBTCxJQUFtQkQsS0FBS0UsT0FBTCxDQUFhRCxVQUFqRDtBQUNBO0FBQ0EsWUFBSSxDQUFDRCxLQUFLRyxLQUFWLEVBQWlCO0FBQ2JILGlCQUFLRyxLQUFMLEdBQWEsQ0FBYjtBQUNIO0FBQ0QsWUFBSUYsY0FBY0EsV0FBV0csTUFBN0IsRUFBcUM7QUFDakNILHVCQUFXRixPQUFYLENBQW1CLFVBQUNNLFNBQUQsRUFBWUMsS0FBWixFQUFxQjtBQUNwQztBQUNBLG9CQUFJQSxVQUFVLENBQWQsRUFBaUI7QUFDYk4seUJBQUtPLFFBQUwsR0FBZ0IsNkJBQWNGLFNBQWQsQ0FBaEI7QUFDSDtBQUNKLGFBTEQ7QUFNSDtBQUNKLEtBZEQ7QUFlQSxXQUFPUixJQUFQO0FBQ0giLCJmaWxlIjoiYWRhcHRQcm9kdWN0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgYXJoYXQgZnVuY3Rpb24gYWRwYXRQcm91ZGN0TGlzdFxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjb21wcmVzc0ltYWdlIGZyb20gJy4vY29tcHJlc3NJbWFnZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRhcHRQcm9kdWN0TGlzdCAoZGF0YSkge1xuICAgIHZhciBiYW5uZXJPcHRpb24gPSBbXTtcbiAgICBkYXRhLmZvckVhY2goKGl0ZW0pPT4ge1xuICAgICAgICB2YXIgc3RvcmFnZUlkcyA9IGl0ZW0uc3RvcmFnZUlkcyB8fCBpdGVtLnByb2R1Y3Quc3RvcmFnZUlkcztcbiAgICAgICAgLy8g5rKh5pyJY291bnQg5bCx6buY6K6k5Li6MVxuICAgICAgICBpZiAoIWl0ZW0uY291bnQpIHtcbiAgICAgICAgICAgIGl0ZW0uY291bnQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdG9yYWdlSWRzICYmIHN0b3JhZ2VJZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdG9yYWdlSWRzLmZvckVhY2goKHN0b3JhZ2VJZCwgaW5kZXgpPT4ge1xuICAgICAgICAgICAgICAgIC8vIOS6p+WTgeS7heaYvuekuuesrDHlvKDlm75cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZVVybCA9IGNvbXByZXNzSW1hZ2Uoc3RvcmFnZUlkKVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xufSJdfQ==