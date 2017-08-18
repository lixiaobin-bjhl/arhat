/**
 * @fileOverview function purchase
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

import createNonceStr from './createNonceStr';
import createTimeStamp from './createTimeStamp';
import getMd5PaySign from './getMd5PaySign';
import config from '../config';
import { getPrepayId } from '../service/purchase';
import userInfo from '../plugin/userInfo';
import createOrderNumber from './createOrderNumber';
import * as message from '../service/message';

export default function (params) {

    var nonce_str = createNonceStr();
    var mch_id = params.mchId;
    var attach = params.id;
    var key = config.key;
    var spbill_create_ip = config.ip;
    var total_fee = params.totalFee;
    var signType = 'MD5';
    var openid = userInfo.getOpenid();
    var out_trade_no = params.outTradeNo;
    var notify_url = config.domain + '/purchase/notice';
    var trade_type = 'JSAPI';
    var body = params.title;
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
    };
    console.log(params);

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
            params.formId = data.prepay_id;
            var paymentRequest = {
                appId: appid,
                timeStamp: timeStamp,
                nonceStr: nonce_str,
                package: pack,
                signType: signType,
                paySign: paySign,
                success: function(res) {
                    // 发送一个支付成功消息
                    message.sendPaySuccessMessage(params);
                    wx.navigateTo({
                        url: 'order'
                    });
                },
                fail: function(res) {
                    params.errMsg = res.errMsg;
                    // 支付失败消息
                    message.sendPayFailMessage(params);
                },
                complete: function(res) {
                    console.log('complete');
                }
            };
            wx.requestPayment(paymentRequest);
        });

} 