/**
 * @file 获得小数的位数
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

/**
 * 获得小数的位数
 *
 * @param {string} str
 * @return {number}
 */

module.exports = function (str) {

  var parts = ('' + str).split('.');

  return parts.length === 2 ? parts[1].length : 0;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2ltYWxMZW5ndGguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInN0ciIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQU1BOztBQUVBOzs7Ozs7O0FBTUFBLE9BQU9DLE9BQVAsR0FBa0IsVUFBVUMsR0FBVixFQUFlOztBQUU3QixNQUFJQyxRQUFRLENBQUMsS0FBS0QsR0FBTixFQUFXRSxLQUFYLENBQWlCLEdBQWpCLENBQVo7O0FBRUEsU0FBT0QsTUFBTUUsTUFBTixLQUFpQixDQUFqQixHQUFxQkYsTUFBTSxDQUFOLEVBQVNFLE1BQTlCLEdBQXVDLENBQTlDO0FBRUgsQ0FORCIsImZpbGUiOiJkZWNpbWFsTGVuZ3RoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSDojrflvpflsI/mlbDnmoTkvY3mlbBcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICog6I635b6X5bCP5pWw55qE5L2N5pWwXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoc3RyKSB7XG5cbiAgICB2YXIgcGFydHMgPSAoJycgKyBzdHIpLnNwbGl0KCcuJyk7XG5cbiAgICByZXR1cm4gcGFydHMubGVuZ3RoID09PSAyID8gcGFydHNbMV0ubGVuZ3RoIDogMDtcblxufTtcbiJdfQ==