/**
 * @fileOverview chairty-function-indexBy
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = indexBy;
function indexBy(array, key) {
    var map = {};
    array.forEach(function (item, index) {
        map[item[key]] = item;
    });
    return map;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4QnkuanMiXSwibmFtZXMiOlsiaW5kZXhCeSIsImFycmF5Iiwia2V5IiwibWFwIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O2tCQUV3QkEsTztBQUFULFNBQVNBLE9BQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUN6QyxRQUFJQyxNQUFNLEVBQVY7QUFDQUYsVUFBTUcsT0FBTixDQUFjLFVBQVVDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ2pDSCxZQUFJRSxLQUFLSCxHQUFMLENBQUosSUFBaUJHLElBQWpCO0FBQ0gsS0FGRDtBQUdBLFdBQU9GLEdBQVA7QUFDSCIsImZpbGUiOiJpbmRleEJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGNoYWlydHktZnVuY3Rpb24taW5kZXhCeVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4QnkgKGFycmF5LCBrZXkpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgbWFwW2l0ZW1ba2V5XV0gPSBpdGVtO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXA7XG59Il19