/**
 * @fileOverview arhat-productSubject-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import { get, post } from '../function/serviceUtil';

/**
 * 获取产品列表 
 * 
 * @return {Promise}
 */
export function getList () {
    return get('/api/productSubject');
}