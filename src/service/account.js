/**
 * @fileOverview arhat-account-service
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import { post, get } from '../function/serviceUtil';

/**
 * 登录
 * 
 * @param {string} 登录
 */
export function login (user) {
    return post('/api/account', {
        mobile: user.mobile,
        password: user.password
    });
}

export function token (user) {
    return get('/token');
}