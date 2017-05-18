/**
 * @fileOverview arhat-service-product
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import { get } from '../function/serviceUtil';

/**
 * 获取产品列表 
 */
export function getList () {
    return get('/api/product')  
}

/**
 * 获取产品列表 
 * 
 * @param {string} pid 产品id
 */
export function getDetial (pid) {
    return get('/api/product/' + pid)
}