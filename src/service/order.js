/**
 * @fileOverview arhat-order-service
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
    return post('/api/order/openid', {
        openid: userInfo.getOpenid()
    });
}

/**
 * 创建订单
 * 
 * @param {string} params.openid 操作人
 * @param {Array} params.products 商品信息
 * @param {string} params.shippingAddress 帐号收件地址
 * @param {number} params.discountMoney 折扣信息
 * @param {number} params.status 支付状态 0 未支付  1支付成功 2 待发货 3 待收货 4交易完成
 * @param {string} params.message 留言
 * @param {string} params.mchId 商户mchId
 * @param {string} params.outTradeNo 系统订单
 * @param {string} params.mobile 商家手机号
 * @param {string} params.expressMoney 快递费用
 * @param {number} params.totalFee 订单金额 
 *
 * @return {Promise}
 */
export function add (params) {
    Object.assign(params, {
        openid: userInfo.getOpenid(),
        user: wx.getStorageSync('userId')
    });
    return post('/api/order/', params);
}