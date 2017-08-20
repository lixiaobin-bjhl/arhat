/**
 * @fileOverview arhat-service-global
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import userInfo from '../plugin/userInfo';
import wepy from 'wepy';
import { get, xmlPost, post} from '../function/serviceUtil';
import config from '../config';

/**
 * 用户登录 
 * 
 * @return {Promise}
 */
export function login () {
    return new Promise((resolve, reject) => {
        wepy.login()
            .then((res)=> {
                resolve(res);
            })
            .catch(()=> {
                reject();
            });
    });
}

/**
 * 获取用的信息 
 * 
 * @return {Promise}
 */
export function getUserInfo () {
    return new Promise((resolve, reject) => {
        wepy.getUserInfo()
            .then((res) => {
                resolve(res.userInfo);
            })
            .catch(()=> {
                reject();
            });
    });
}

/**
 * 将jscode转化为session信息
 * 
 * @return {Promise}
 */
export function jscode2Session (code) {
    return post('/api/user/jscode2session', {
        appid: config.appId,
        secret: config.appSecret,
        code: code
    });
}