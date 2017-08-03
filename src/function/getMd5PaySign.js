/**
 * @file 获取微信小程序支付md5格式签名
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import md5 from './md5';

export default function (params) {

     var stringA = 'appId=' + params.appid 
        + '&nonceStr='
        + params.nonce_str
        + '&package=' 
        + params.package
        + '&signType=' 
        + params.signType
        + '&timeStamp='
        + params.timeStamp

    var stringSignTemp = stringA + '&key=' + params.key;
    
    return md5(stringSignTemp).toUpperCase();

}
