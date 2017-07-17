/**
 * @fileOverview arhat-service-card
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import { get, post } from '../function/serviceUtil';
import config from '../config';
import userInfo from '../plugin/userInfo';

/**
 * 添加到购物车
 */
export function addToCard (params) {
    return post('/api/card', {
        product: params.product,
        count: params.count,
        openid: userInfo.getOpenId(),
        mobile: config.mobile
    })
}

/**
 * 获取购物车信息
 */
export function getCardByOpenid () {
    return get('/api/card/openid/' + userInfo.getOpenId());
}