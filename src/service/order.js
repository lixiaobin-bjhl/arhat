/**
 * @fileOverview arhat-service-order
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import { post, get, put, del} from '../function/serviceUtil';
import userInfo from '../plugin/userInfo';

/**
 * 获取配送地址列表 
 * 
 * @reutrn {Promise}
 */
export function list () {
    return post('/api/shippingAddress/openid', {
        openid: userInfo.getOpenId()
    });
}

/**
 * 添加收货地址
 *
 * @param {string} params.name 收货人姓名
 * @param {string} params.mobile 收货人手机号
 * @param {string} params.address 收货人地址
 * @param {Array} params.region 收货人的地域信息
 * 
 * @reutrn {Promise}
 */
export function add (params) {
    Object.assign(params, {
        openid: userInfo.getOpenId()
    });
    return post('/api/order/', params);
}

/**
 * 更新地址信息
 * 
 * @param {string} id 地址id
 * @param {string} update.name 地址名称
 * @param {string} update.mobile 收件手机
 * @param {string} update.region 收件地域
 * @param {string} update.address 收件地址
 * 
 * @reutrn {Promise}
 */
export function update (id, update) {   
    return put('/api/shippingAddress/' + id, {
        name: update.name,
        mobile: update.mobile,
        region: update.region,
        address: update.address
    });
}

/**
 * 根据id获取地址信息 
 */
export function show (id) {
    return get('/api/shippingAddress/' + id);
}

/**
 * 删除地址
 * @param {string} id 地址id
 */
export function remove (id) {
    return del('/api/shippingAddress/' + id);
}

/**
 * 设置默认收货地址 
 * 
 * @param {string} id shippingAddress id
 * @param {Boolean} isDefault 是否设置默认
 * 
 * @reutrn {Promise}
 */
export function setDefault (id, isDefault) {
    return put('/api/shippingAddress/' + id, {
        isDefault: isDefault
    });
}