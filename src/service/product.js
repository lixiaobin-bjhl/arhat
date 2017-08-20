/**
 * @fileOverview arhat-product-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import { get, post } from '../function/serviceUtil';

/**
 * 获取产品列表 
 * 
 * @return {Promise}
 */
export function getList (params = {}) {

    return get('/api/product?productSubjectId=' + (params.subjectId || ''));  
}

/**
 * 获取产品列表 
 * 
 * @param {string} pid 产品id
 * 
 * @return {Promise}
 */
export function getDetial (pid) {
    return get('/api/product/' + pid)
}

/**
 * 根据商品ids获取商口列表
 * 
 * @param {string} params.products 产品及数量信息
 * 
 * @return {Promise}
 */
export function listByIds (params) {
    return post('/api/product/l/', params);
}