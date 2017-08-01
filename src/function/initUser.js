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
                        userInfo.setOpenId(res.openid);
                        context.$invoke('footer', 'getCountByOpendId');
                        userInfo.setSessionKey(res.session_key);
                        getUserInfo()
                            .then((res)=> {
                                userInfo.setInfo(res);
                                add(res);
                                resolve(res);
                            })
                            .catch(reject);
                    })
            });
    });
}