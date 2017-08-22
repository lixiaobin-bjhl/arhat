/**
 * @fileOverview function initUser
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

import { login, getUserInfo, jscode2Session } from '../service/global';
import userInfo from '../plugin/userInfo';
import { add } from '../service/user';

export default function initUser (context) {
    return new Promise((resolve, reject)=> {
        login()
            .then((res)=> {
                jscode2Session(res.code)
                    .then((res)=> {
                        var sessionData = JSON.parse(res.data.body);
                        var openid = sessionData.openid;
                        getUserInfo()
                            .then((res)=> {
                                var params = res;
                                Object.assign(params, {
                                    openid
                                });
                                add(params)
                                    .then((res)=> {
                                        var data = res.data;
                                        wx.setStorageSync('user', {
                                            id: data._id,
                                            name: data.nickName,
                                            openid: openid
                                        });
                                        resolve(res);
                                        context.$invoke('footer', 'getCountByOpendId');
                                    });
                                   
                            })
                            .catch(reject);
                    })
            });
    });
}