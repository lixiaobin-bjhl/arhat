/**
 * @fileOverview arhat-service-user
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
 * 获取产品列表 
 * 
 * @param {string} pid 产品id
 */
function login(user) {
    return (0, _serviceUtil.post)('/api/user', {
        mobile: user.mobile,
        password: user.password
    });
}

function token(user) {
    return (0, _serviceUtil.get)('/token');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsibG9naW4iLCJ0b2tlbiIsInVzZXIiLCJtb2JpbGUiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7Ozs7O1FBU2dCQSxLLEdBQUFBLEs7UUFPQUMsSyxHQUFBQSxLOztBQWRoQjs7QUFFQTs7Ozs7QUFLTyxTQUFTRCxLQUFULENBQWdCRSxJQUFoQixFQUFzQjtBQUN6QixXQUFPLHVCQUFLLFdBQUwsRUFBa0I7QUFDckJDLGdCQUFRRCxLQUFLQyxNQURRO0FBRXJCQyxrQkFBVUYsS0FBS0U7QUFGTSxLQUFsQixDQUFQO0FBSUg7O0FBRU0sU0FBU0gsS0FBVCxDQUFnQkMsSUFBaEIsRUFBc0I7QUFDekIsV0FBTyxzQkFBSSxRQUFKLENBQVA7QUFDSCIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LXNlcnZpY2UtdXNlclxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHBvc3QsIGdldCB9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcblxuLyoqXG4gKiDojrflj5bkuqflk4HliJfooaggXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwaWQg5Lqn5ZOBaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luICh1c2VyKSB7XG4gICAgcmV0dXJuIHBvc3QoJy9hcGkvdXNlcicsIHtcbiAgICAgICAgbW9iaWxlOiB1c2VyLm1vYmlsZSxcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuICh1c2VyKSB7XG4gICAgcmV0dXJuIGdldCgnL3Rva2VuJyk7XG59Il19