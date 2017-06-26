/**
 * @file 创建随机字符串
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

export default function () {
    return Math.random().toString(36).substr(2, 15);
}
