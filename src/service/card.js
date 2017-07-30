/**
 * @fileOverview arhat-service-card
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import { get, post, del } from '../function/serviceUtil';
import config from '../config';
import userInfo from '../plugin/userInfo';

/**
 * 添加到购物车
 * 
 *  @return {Promise}
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
 * 
 * @return {Promise}
 */
export function getCardByOpenid () {
    return get('/api/card/openid/' + userInfo.getOpenId());
}

/**
 * 获取购物车的数量 
 */
export function getCountByOpendId () {
    var openid = userInfo.getOpenId();
    if (!openid) {
        return;
    }
    return get('/api/card/count/' + openid);
}

/**
 * 将商品从购物车中移除 
 * @param {string} id 购物车id
 *
 * @return {Promise}
 */
export function remove (id) {
    return del('/api/card/' + id);
}

/**
 * 删除购物车中的商品信息
 * 
 * @param {Array} pids 产品ids
 * 
 * @return {Promise}
 */
export function removeByPids (pids) {
    var openid = userInfo.getOpenId();
    return del('/api/card/pids/' + openid, {
        pids: pids
    });
}