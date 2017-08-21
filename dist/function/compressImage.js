/**
 * @file 七牛云裁剪压缩
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

/**
 * 压缩图片
 *
 * @property {string} storageId 七牛云存储key
 * @property {number} options.width 显示宽度
 * @property {number} options.height 显示高度
 * @return {string} 压缩后的图片地址
 */

var compressImage = function compressImage(storageId) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    var width = options.width || 0;
    var height = options.height || 0;
    var result = '';

    // 没有storeageId，使用默认图片
    if (!storageId) {
        storageId = 'Fjooknn4dd3ugqfDam4reuD3JSQt';
    }

    width = Math.floor(width);
    height = Math.floor(height);
    var devicePixelRatio = 1;

    if (typeof window !== 'undefined') {
        devicePixelRatio = window.devicePixelRatio;
    } else {
        // 后端渲染默认devicePixelRatio为2
        devicePixelRatio = 2;
    }

    // retina屏
    if (devicePixelRatio && devicePixelRatio > 1) {
        width = Math.floor(width * devicePixelRatio);
        height = Math.floor(height * devicePixelRatio);
    }

    result = 'http://opdjozubd.bkt.clouddn.com/' + storageId + '?imageView2/2';

    if (!width && !height) {
        return result;
    }
    if (width) {
        return result += '/w' + width;
    }
    if (height) {
        return result = '/w' + height;
    }
};

module.exports = compressImage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXByZXNzSW1hZ2UuanMiXSwibmFtZXMiOlsiY29tcHJlc3NJbWFnZSIsInN0b3JhZ2VJZCIsIm9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsInJlc3VsdCIsIk1hdGgiLCJmbG9vciIsImRldmljZVBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7QUFFQTs7Ozs7Ozs7O0FBUUEsSUFBSUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxTQUFWLEVBQW1DO0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJOzs7QUFFbkQsUUFBSUMsUUFBUUQsUUFBUUMsS0FBUixJQUFpQixDQUE3QjtBQUNBLFFBQUlDLFNBQVNGLFFBQVFFLE1BQVIsSUFBa0IsQ0FBL0I7QUFDQSxRQUFJQyxTQUFTLEVBQWI7O0FBRUE7QUFDQSxRQUFJLENBQUNKLFNBQUwsRUFBZ0I7QUFDWkEsb0JBQVksOEJBQVo7QUFDSDs7QUFFREUsWUFBUUcsS0FBS0MsS0FBTCxDQUFXSixLQUFYLENBQVI7QUFDQUMsYUFBU0UsS0FBS0MsS0FBTCxDQUFXSCxNQUFYLENBQVQ7QUFDQSxRQUFJSSxtQkFBbUIsQ0FBdkI7O0FBRUEsUUFBSSxPQUFRQyxNQUFSLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ2pDRCwyQkFBbUJDLE9BQU9ELGdCQUExQjtBQUNILEtBRkQsTUFFTztBQUNIO0FBQ0FBLDJCQUFtQixDQUFuQjtBQUNIOztBQUVEO0FBQ0EsUUFBSUEsb0JBQW9CQSxtQkFBbUIsQ0FBM0MsRUFBOEM7QUFDMUNMLGdCQUFRRyxLQUFLQyxLQUFMLENBQVdKLFFBQVFLLGdCQUFuQixDQUFSO0FBQ0FKLGlCQUFTRSxLQUFLQyxLQUFMLENBQVdILFNBQVNJLGdCQUFwQixDQUFUO0FBQ0g7O0FBRURILGFBQVMsc0NBQ1BKLFNBRE8sR0FFUCxlQUZGOztBQUlBLFFBQUksQ0FBQ0UsS0FBRCxJQUFVLENBQUNDLE1BQWYsRUFBdUI7QUFDbkIsZUFBT0MsTUFBUDtBQUNIO0FBQ0QsUUFBSUYsS0FBSixFQUFXO0FBQ1AsZUFBT0UsVUFBVSxPQUFPRixLQUF4QjtBQUNIO0FBQ0QsUUFBSUMsTUFBSixFQUFZO0FBQ1IsZUFBT0MsU0FBUyxPQUFPRCxNQUF2QjtBQUNIO0FBQ0osQ0F6Q0Q7O0FBMkNBTSxPQUFPQyxPQUFQLEdBQWlCWCxhQUFqQiIsImZpbGUiOiJjb21wcmVzc0ltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSDkuIPniZvkupHoo4HliarljovnvKlcbiAqIEBhdXRob3IgWGlhb0JpbiBMaShsaXhpYW9iaW44ODc4QGdtYWlsLmNvbSkgXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIOWOi+e8qeWbvueJh1xuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdG9yYWdlSWQg5LiD54mb5LqR5a2Y5YKoa2V5XG4gKiBAcHJvcGVydHkge251bWJlcn0gb3B0aW9ucy53aWR0aCDmmL7npLrlrr3luqZcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvcHRpb25zLmhlaWdodCDmmL7npLrpq5jluqZcbiAqIEByZXR1cm4ge3N0cmluZ30g5Y6L57yp5ZCO55qE5Zu+54mH5Zyw5Z2AXG4gKi9cbnZhciBjb21wcmVzc0ltYWdlID0gZnVuY3Rpb24gKHN0b3JhZ2VJZCwgb3B0aW9ucyA9IHt9KSB7XG5cbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDA7XG4gICAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDA7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gICAgLy8g5rKh5pyJc3RvcmVhZ2VJZO+8jOS9v+eUqOm7mOiupOWbvueJh1xuICAgIGlmICghc3RvcmFnZUlkKSB7XG4gICAgICAgIHN0b3JhZ2VJZCA9ICdGam9va25uNGRkM3VncWZEYW00cmV1RDNKU1F0JztcbiAgICB9XG5cbiAgICB3aWR0aCA9IE1hdGguZmxvb3Iod2lkdGgpO1xuICAgIGhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0KTtcbiAgICB2YXIgZGV2aWNlUGl4ZWxSYXRpbyA9IDE7XG5cbiAgICBpZiAodHlwZW9mICh3aW5kb3cpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8g5ZCO56uv5riy5p+T6buY6K6kZGV2aWNlUGl4ZWxSYXRpb+S4ujJcbiAgICAgICAgZGV2aWNlUGl4ZWxSYXRpbyA9IDI7XG4gICAgfVxuXG4gICAgLy8gcmV0aW5h5bGPXG4gICAgaWYgKGRldmljZVBpeGVsUmF0aW8gJiYgZGV2aWNlUGl4ZWxSYXRpbyA+IDEpIHtcbiAgICAgICAgd2lkdGggPSBNYXRoLmZsb29yKHdpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgICAgIGhlaWdodCA9IE1hdGguZmxvb3IoaGVpZ2h0ICogZGV2aWNlUGl4ZWxSYXRpbyk7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gJ2h0dHA6Ly9vcGRqb3p1YmQuYmt0LmNsb3VkZG4uY29tLydcbiAgICArIHN0b3JhZ2VJZFxuICAgICsgJz9pbWFnZVZpZXcyLzInO1xuXG4gICAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGlmICh3aWR0aCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICs9ICcvdycgKyB3aWR0aDtcbiAgICB9XG4gICAgaWYgKGhlaWdodCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0ID0gJy93JyArIGhlaWdodDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXByZXNzSW1hZ2U7XG4iXX0=