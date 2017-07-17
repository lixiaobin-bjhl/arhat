/**
 * @fileOverview arhat-service-card
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCard = addToCard;
exports.getCardByOpenid = getCardByOpenid;

var _serviceUtil = require('./../function/serviceUtil.js');

var _config = require('./../config.js');

var _config2 = _interopRequireDefault(_config);

var _userInfo = require('./../plugin/userInfo.js');

var _userInfo2 = _interopRequireDefault(_userInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 添加到购物车
 */
function addToCard(params) {
  return (0, _serviceUtil.post)('/api/card', {
    product: params.product,
    count: params.count,
    openid: _userInfo2.default.getOpenId(),
    mobile: _config2.default.mobile
  });
}

/**
 * 获取购物车信息
 */
function getCardByOpenid() {
  return (0, _serviceUtil.get)('/api/card/openid/' + _userInfo2.default.getOpenId());
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiYWRkVG9DYXJkIiwiZ2V0Q2FyZEJ5T3BlbmlkIiwicGFyYW1zIiwicHJvZHVjdCIsImNvdW50Iiwib3BlbmlkIiwiZ2V0T3BlbklkIiwibW9iaWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7UUFTZ0JBLFMsR0FBQUEsUztRQVlBQyxlLEdBQUFBLGU7O0FBbkJoQjs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7O0FBR08sU0FBU0QsU0FBVCxDQUFvQkUsTUFBcEIsRUFBNEI7QUFDL0IsU0FBTyx1QkFBSyxXQUFMLEVBQWtCO0FBQ3JCQyxhQUFTRCxPQUFPQyxPQURLO0FBRXJCQyxXQUFPRixPQUFPRSxLQUZPO0FBR3JCQyxZQUFRLG1CQUFTQyxTQUFULEVBSGE7QUFJckJDLFlBQVEsaUJBQU9BO0FBSk0sR0FBbEIsQ0FBUDtBQU1IOztBQUVEOzs7QUFHTyxTQUFTTixlQUFULEdBQTRCO0FBQy9CLFNBQU8sc0JBQUksc0JBQXNCLG1CQUFTSyxTQUFULEVBQTFCLENBQVA7QUFDSCIsImZpbGUiOiJjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IGFyaGF0LXNlcnZpY2UtY2FyZFxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IGdldCwgcG9zdCB9IGZyb20gJy4uL2Z1bmN0aW9uL3NlcnZpY2VVdGlsJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB1c2VySW5mbyBmcm9tICcuLi9wbHVnaW4vdXNlckluZm8nO1xuXG4vKipcbiAqIOa3u+WKoOWIsOi0reeJqei9plxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9DYXJkIChwYXJhbXMpIHtcbiAgICByZXR1cm4gcG9zdCgnL2FwaS9jYXJkJywge1xuICAgICAgICBwcm9kdWN0OiBwYXJhbXMucHJvZHVjdCxcbiAgICAgICAgY291bnQ6IHBhcmFtcy5jb3VudCxcbiAgICAgICAgb3BlbmlkOiB1c2VySW5mby5nZXRPcGVuSWQoKSxcbiAgICAgICAgbW9iaWxlOiBjb25maWcubW9iaWxlXG4gICAgfSlcbn1cblxuLyoqXG4gKiDojrflj5botK3nianovabkv6Hmga9cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmRCeU9wZW5pZCAoKSB7XG4gICAgcmV0dXJuIGdldCgnL2FwaS9jYXJkL29wZW5pZC8nICsgdXNlckluZm8uZ2V0T3BlbklkKCkpO1xufSJdfQ==