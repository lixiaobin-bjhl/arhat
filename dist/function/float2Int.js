/**
 * @file 把小数转成整数，避免小数计算的精度问题
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

/**
 * 把小数转成整数，避免小数计算的精度问题
 *
 * @param {string|number} float 浮点数
 * @param {number=} length 可选，右移的位数
 * @return {number}
 */

module.exports = function (float, length) {

    var parts = ('' + float).split('.');
    var result;

    if (length >= 0) {} else {
        length = 0;
    }

    if (parts.length === 1) {
        result = float + new Array(length + 1).join('0');
    } else {
        length = Math.max(0, length - parts[1].length);
        result = parts.join('') + new Array(length + 1).join('0');
    }

    return +result;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb2F0MkludC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZmxvYXQiLCJsZW5ndGgiLCJwYXJ0cyIsInNwbGl0IiwicmVzdWx0IiwiQXJyYXkiLCJqb2luIiwiTWF0aCIsIm1heCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7O0FBRUE7Ozs7Ozs7O0FBT0FBLE9BQU9DLE9BQVAsR0FBa0IsVUFBVUMsS0FBVixFQUFpQkMsTUFBakIsRUFBeUI7O0FBRXZDLFFBQUlDLFFBQVEsQ0FBQyxLQUFLRixLQUFOLEVBQWFHLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBWjtBQUNBLFFBQUlDLE1BQUo7O0FBRUEsUUFBSUgsVUFBVSxDQUFkLEVBQWlCLENBQUUsQ0FBbkIsTUFDSztBQUNEQSxpQkFBUyxDQUFUO0FBQ0g7O0FBRUQsUUFBSUMsTUFBTUQsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQkcsaUJBQVNKLFFBQVEsSUFBSUssS0FBSixDQUFVSixTQUFTLENBQW5CLEVBQXNCSyxJQUF0QixDQUEyQixHQUEzQixDQUFqQjtBQUNILEtBRkQsTUFHSztBQUNETCxpQkFBU00sS0FBS0MsR0FBTCxDQUFTLENBQVQsRUFBWVAsU0FBU0MsTUFBTSxDQUFOLEVBQVNELE1BQTlCLENBQVQ7QUFDQUcsaUJBQVNGLE1BQU1JLElBQU4sQ0FBVyxFQUFYLElBQWlCLElBQUlELEtBQUosQ0FBVUosU0FBUyxDQUFuQixFQUFzQkssSUFBdEIsQ0FBMkIsR0FBM0IsQ0FBMUI7QUFDSDs7QUFFRCxXQUFPLENBQUVGLE1BQVQ7QUFFSCxDQXBCRCIsImZpbGUiOiJmbG9hdDJJbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIOaKiuWwj+aVsOi9rOaIkOaVtOaVsO+8jOmBv+WFjeWwj+aVsOiuoeeul+eahOeyvuW6pumXrumimFxuICogQGF1dGhvciBYaWFvQmluIExpKGxpeGlhb2Jpbjg4NzhAZ21haWwuY29tKSBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICog5oqK5bCP5pWw6L2s5oiQ5pW05pWw77yM6YG/5YWN5bCP5pWw6K6h566X55qE57K+5bqm6Zeu6aKYXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBmbG9hdCDmta7ngrnmlbBcbiAqIEBwYXJhbSB7bnVtYmVyPX0gbGVuZ3RoIOWPr+mAie+8jOWPs+enu+eahOS9jeaVsFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9ICBmdW5jdGlvbiAoZmxvYXQsIGxlbmd0aCkge1xuXG4gICAgdmFyIHBhcnRzID0gKCcnICsgZmxvYXQpLnNwbGl0KCcuJyk7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIGlmIChsZW5ndGggPj0gMCkge31cbiAgICBlbHNlIHtcbiAgICAgICAgbGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJlc3VsdCA9IGZsb2F0ICsgbmV3IEFycmF5KGxlbmd0aCArIDEpLmpvaW4oJzAnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxlbmd0aCA9IE1hdGgubWF4KDAsIGxlbmd0aCAtIHBhcnRzWzFdLmxlbmd0aCk7XG4gICAgICAgIHJlc3VsdCA9IHBhcnRzLmpvaW4oJycpICsgbmV3IEFycmF5KGxlbmd0aCArIDEpLmpvaW4oJzAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKyByZXN1bHQ7XG5cbn07XG4iXX0=