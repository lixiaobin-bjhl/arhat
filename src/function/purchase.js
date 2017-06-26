/**
 * @fileOverview function initUser
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

import createNonceStr from './createNonceStr';
import getMd5Sign from './getMd5Sign';
import config from '../config';
import { getPrepayId } from '../service/purchase';
import userInfo from '../plugin/userInfo';
import getOrderNumber from './getOrderNumber';

export default function (productId) {
    // var nonce_str = createNonceStr();
    var nonce_str = '4iesqz63ryfdx3z';
    var mch_id = 1483041862;
    var key = 'q5yB94rRFxWd3TPhdeenSBpScyTesf67';
    var spbill_create_ip = '114.115.158.88';
    var total_fee = 1;
    var openid = userInfo.getOpenId();
    // var out_trade_no = getOrderNumber();
    var out_trade_no = 1498491070589;
    var notify_url = 'https://www.sheliguo.com/purchase/notice';
    var trade_type = 'JSAPI';
    var body = 'test';
    var appid = config.appId;

    var params = {
        appid,
        body,
        key,
        mch_id,
        nonce_str,
        notify_url,
        openid,
        out_trade_no,
        spbill_create_ip,
        total_fee,
        trade_type
    }

    getPrepayId(params);
    var sign = getMd5Sign(params);
    console.log(sign);

} 