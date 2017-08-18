/**
 * @fileOverview arhat-user-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import { get, post, del } from '../function/serviceUtil';
import config from '../config';
import userInfo from '../plugin/userInfo';

/**
 * 添加用户
 * 
 * @param {string} params.mobile 商户手机
 * @param {string} params.avatarUrl 用户头像
 * @param {string} params.city 用户所在城市
 * @param {string} params.country 用户所在区
 * @param {string} params.province 用户所在省
 * @param {string} params.gender 用户姓别
 * @param {string} params.language 用户使用的微信语言版本
 * @param {string} params.nickName 用户昵称
 * @param {string} params.province 用户所在省
 * @param {string} params.openid 用户的openid
 * 
 *  @return {Promise}
 */
export function add (params) {
    return post('/api/user', {
        mobile: config.mobile,
        avatarUrl: params.avatarUrl,
        city: params.city,
        country: params.country,
        province: params.province,
        gender: params.gender,
        language: params.language,
        nickName: params.nickName,
        openid: userInfo.getOpenid()
    })
}