/**
 * @fileOverview arhat-service-product
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import { get, post } from '../function/serviceUtil';

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

/**
 * 根据商品ids获取商口列表
 * 
 * @param {string} params.products 产品及数量信息
 */
export function listByIds (params) {
    return post('/api/product/l/', params);
}