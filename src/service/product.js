/**
 * @fileOverview arhat-service-product
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import wepy from 'wepy'
import config from '../config'

/**
 * 获取产品列表 
 */
export function getList () {
    return wepy.request(config.domain + 'api/product')  
}