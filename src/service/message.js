/**
 * @fileOverview arhat-message-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import { post, get, put, del} from '../function/serviceUtil';
import userInfo from '../plugin/userInfo';
import config from '../config';
import divide from '../function/divide';

/**
 * 发送模板消息 
 */
function postMessage (touser, templateId, data, formId) {
    return post('/api/message', {
        touser: touser,
        appId: config.appId,
        appSecret: config.appSecret,
        mobile: config.mobile,
        templateId: templateId,
        data: data,
        formId: formId
    });
}

/**
 * 发送创建订单给商家管理员
 * 
 * @param {string} params.formId 提交的formId
 * @param {number} params.totalFee 交易金额
 * @param {number} params.title 交易内容
 * @param {number} params.id 订单id
 */
export function sendCreateOrderMessage (params) {
    return postMessage(
        config.masterOpenid,
        config.templates.createOrder,
        {
            "keyword1": {
                "value": new Date().toLocaleString()
            }, 
            "keyword2": {
                "value": divide(params.totalFee, 100) + '元'
            }, 
            "keyword3": {
                "value": params.title
            }, 
            "keyword4": {
                "value": params.id
            }
        },
        params.formId
    );
}

/**
 * 发送一个支付成功消息 
 */
export function sendPaySuccessMessage (params) {
    return postMessage(
        config.masterOpenid,
        config.templates.paySuccess,
        {
            "keyword1": {
                "value": new Date().toLocaleString()
            }, 
            "keyword2": {
                "value": params.body
            },
            "keyword3": {
                "value": params.attach
            },
            "keyword4": {
                "value": divide(params.total_fee, 100) + '元'
            }
        },
        params.formId
    );
}

/**
 * 发送一个支付失败消息 
 */
export function sendPayFailMessage (params) {
    return postMessage(
        config.masterOpenid,
        config.templates.payFail,
        {
            "keyword1": {
                "value": params.errMsg
            }, 
            "keyword2": {
                "value": params.attach
            },
            "keyword3": {
                "value": params.body
            },
            "keyword4": {
                "value": divide(params.total_fee, 100) + '元'
            }
        },
        params.formId
    );
}
