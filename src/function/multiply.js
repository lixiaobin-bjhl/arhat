/**
 * @file 乘法
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */


'use strict';

import decimalLength from './decimalLength';
import float2Int from './float2Int';

/**
 * 乘法
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export default function (a, b) {

    var length = Math.max(
                    decimalLength(a),
                    decimalLength(b)
                );

    a = float2Int(a, length);
    b = float2Int(b, length);

    var factor = Math.pow(10, length);

    return (a * b) / (factor * factor);

};
