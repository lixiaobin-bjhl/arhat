/**
 * @fileOverview toast
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (message) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'warning';
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;


    var params = {
        title: message,
        duration: 3000
    };

    if (type == 'warning') {
        params.image = '/images/warning.png';
    } else {
        params.icon = 'success';
    }

    wx.showToast(params);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIm1lc3NhZ2UiLCJ0eXBlIiwiZHVyYXRpb24iLCJwYXJhbXMiLCJ0aXRsZSIsImltYWdlIiwiaWNvbiIsInd4Iiwic2hvd1RvYXN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7O2tCQUVlLFVBQVVBLE9BQVYsRUFBc0Q7QUFBQSxRQUFuQ0MsSUFBbUMsdUVBQTVCLFNBQTRCO0FBQUEsUUFBakJDLFFBQWlCLHVFQUFOLElBQU07OztBQUVqRSxRQUFJQyxTQUFVO0FBQ1ZDLGVBQU9KLE9BREc7QUFFVkUsa0JBQVU7QUFGQSxLQUFkOztBQUtBLFFBQUlELFFBQVEsU0FBWixFQUF1QjtBQUNuQkUsZUFBT0UsS0FBUCxHQUFlLHFCQUFmO0FBQ0gsS0FGRCxNQUVPO0FBQ0hGLGVBQU9HLElBQVAsR0FBYyxTQUFkO0FBQ0g7O0FBRURDLE9BQUdDLFNBQUgsQ0FBYUwsTUFBYjtBQUNILEMiLCJmaWxlIjoidG9hc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgdG9hc3RcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSlcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlLCB0eXBlID0gJ3dhcm5pbmcnLCBkdXJhdGlvbiA9IDMwMDApIHtcblxuICAgIHZhciBwYXJhbXMgPSAge1xuICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgZHVyYXRpb246IDMwMDBcbiAgICB9O1xuXG4gICAgaWYgKHR5cGUgPT0gJ3dhcm5pbmcnKSB7XG4gICAgICAgIHBhcmFtcy5pbWFnZSA9ICcvaW1hZ2VzL3dhcm5pbmcucG5nJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMuaWNvbiA9ICdzdWNjZXNzJztcbiAgICB9XG5cbiAgICB3eC5zaG93VG9hc3QocGFyYW1zKTtcbn0iXX0=