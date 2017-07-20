/**
 * @file 减法
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

var decimalLength = require('./decimalLength');
var float2Int = require('./float2Int');

/**
 * 减法
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
module.exports = function (a, b) {

    var length = Math.max(
                    decimalLength(a),
                    decimalLength(b)
                );

    a = float2Int(a, length);
    b = float2Int(b, length);

    return (a - b) / Math.pow(10, length);

};
