/**
 * @file 获取微信小程序支付md5格式签名
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import md5 from './md5';

export default function (params) {

    var stringA = 'appid=' + params.appid 
        + '&body='
        + params.body
        + '&mch_id='
        + params.mch_id
        + '&nonce_str='
        + params.nonce_str
        + '&notify_url='
        + params.notify_url
        + '&openid=' 
        + params.openid
        + '&out_trade_no=' 
        + params.out_trade_no
        + '&spbill_create_ip='
        + params.spbill_create_ip
        + '&total_fee=' 
        + params.total_fee
        + '&trade_type='
        + params.trade_type

    var stringSignTemp = stringA + '&key=' + params.key;
    return md5(stringSignTemp).toUpperCase();

}
