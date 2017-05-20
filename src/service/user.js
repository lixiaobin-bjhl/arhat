/**
 * @fileOverview arhat-service-user
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import { post, get } from '../function/serviceUtil';

/**
 * 获取产品列表 
 * 
 * @param {string} pid 产品id
 */
export function login (user) {
    return post('/api/user', {
        mobile: user.mobile,
        password: user.password
    });
}

export function token (user) {
    return get('/token');
}