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
            .catch(reject);
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
                wx.showModal({
                    title: '提示',
                    cancelText: '不授权',
                    confirmText: '授权',
                    content: '【' + config.name + '】需要获取你的公开信息（昵称、头像）等，否则不能正常使用。',
                    success: (res) => {
                        wx.openSetting({
                            authSetting: {
                                "scope.userInfo": true
                            },
                            fail: ()=> {
                                reject();
                            },
                            success: (res) => {
                                if (res.authSetting['scope.userInfo']) {
                                    wepy.getUserInfo()
                                        .then((res)=> {
                                            resolve(res.userInfo);
                                        });
                                } else {
                                    reject();
                                }
                            }
                        });
                    }
                });
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