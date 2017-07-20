/**
 * @fileOverview function initUser
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

import createNonceStr from './createNonceStr';
import createTimeStamp from './createTimeStamp';
import getMd5PaySign from './getMd5PaySign';
import config from '../config';
import { getPrepayId } from '../service/purchase';
import userInfo from '../plugin/userInfo';
import getOrderNumber from './getOrderNumber';

export default function (productId) {
    var nonce_str = createNonceStr();
    var mch_id = config.mchId;
    var attach = config.mobile;
    var key = 'q5yB94rRFxWd3TPhdeenSBpScyTesf67';
    var spbill_create_ip = '114.115.158.88';
    var total_fee = 1;
    var signType = 'MD5';
    var openid = userInfo.getOpenId();
    var out_trade_no = getOrderNumber();
    var notify_url = 'https://www.sheliguo.com/purchase/notice';
    var trade_type = 'JSAPI';
    var body = 'test';
    var appid = config.appId;
    var timeStamp = createTimeStamp();
    var params = {
        appid,
        attach,
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
    getPrepayId(params)
        .then((res)=> {
            var data = res.xml;

            var pack = 'prepay_id=' + data.prepay_id;

            Object.assign(data, {
                notify_url,
                signType,
                key,
                nonce_str,
                package: pack,
                timeStamp
            })
            var paySign = getMd5PaySign(data);
            var paymentRequest = {
                appId: appid,
                timeStamp: timeStamp,
                nonceStr: nonce_str,
                package: pack,
                signType: signType,
                paySign: paySign,
                success: function(res) {
                    console.log(1)
                },
                fail: function(res) {
                    console.log(res);
                },
                complete: function(res) {
                    console.log(3);
                }
            };
            console.log('paymentRequest', paymentRequest);
            wx.requestPayment(paymentRequest);
        });

} 