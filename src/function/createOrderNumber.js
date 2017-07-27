
/**
 * @file 获取订单号
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

export default function () {
    return +new Date() + Math.floor(Math.random() * 10);
};
