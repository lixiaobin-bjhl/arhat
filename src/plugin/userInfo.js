/**
 * @fileOverview arhat-plugin-userInfo 用户信息
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

// import { initUser } from '../function/initUser';
import checkSession from '../function/checkSession';

export default {
    async getInfo () {
        var res = await checkSession();
        // if (res) {
            return this._userInfo;
        // } else {
            // toast('登录信息失效');
        // }
    },
    setInfo (userInfo) {
        this._userInfo = userInfo;
    },
    setOpenId (openId) {
        this._openId = openId; 
    },
    getOpenId () {
        return this._openId;
    },
    setSessionKey (sessionKey) {
        this._sessionKey = sessionKey;
    },
    getSessionKey () {
       return this._sessionKey; 
    }
}