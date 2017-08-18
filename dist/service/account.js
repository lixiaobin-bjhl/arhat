/**
 * @fileOverview arhat-account-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = login;
exports.token = token;

var _serviceUtil = require('./../function/serviceUtil.js');

/**
 * 登录
 * 
 * @param {string} 登录
 */
function login(user) {
    return (0, _serviceUtil.post)('/api/account', {
        mobile: user.mobile,
        password: user.password
    });
}

function token(user) {
    return (0, _serviceUtil.get)('/token');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuanMiXSwibmFtZXMiOlsibG9naW4iLCJ0b2tlbiIsInVzZXIiLCJtb2JpbGUiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBU2dCQSxLLEdBQUFBLEs7UUFPQUMsSyxHQUFBQSxLOztBQWRoQjs7QUFFQTs7Ozs7QUFLTyxTQUFTRCxLQUFULENBQWdCRSxJQUFoQixFQUFzQjtBQUN6QixXQUFPLHVCQUFLLGNBQUwsRUFBcUI7QUFDeEJDLGdCQUFRRCxLQUFLQyxNQURXO0FBRXhCQyxrQkFBVUYsS0FBS0U7QUFGUyxLQUFyQixDQUFQO0FBSUg7O0FBRU0sU0FBU0gsS0FBVCxDQUFnQkMsSUFBaEIsRUFBc0I7QUFDekIsV0FBTyxzQkFBSSxRQUFKLENBQVA7QUFDSCIsImZpbGUiOiJhY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LWFjY291bnQtc2VydmljZVxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHBvc3QsIGdldCB9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcblxuLyoqXG4gKiDnmbvlvZVcbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IOeZu+W9lVxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9naW4gKHVzZXIpIHtcbiAgICByZXR1cm4gcG9zdCgnL2FwaS9hY2NvdW50Jywge1xuICAgICAgICBtb2JpbGU6IHVzZXIubW9iaWxlLFxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW4gKHVzZXIpIHtcbiAgICByZXR1cm4gZ2V0KCcvdG9rZW4nKTtcbn0iXX0=