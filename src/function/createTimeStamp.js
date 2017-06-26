/**
 * @file 创建随机时间(以秒以单位)
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

export default function () {
     return parseInt(new Date().getTime() / 1000) + '';
}
