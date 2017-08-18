/**
 * @fileOverview arhat-plugin-userInfo 用户信息
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

// import { initUser } from '../function/initUser';
import checkSession from '../function/checkSession';

export default {
    getInfo () {
        // var res = await checkSession();
        // console.log(res);
        // if (res) {
            return this._userInfo;
        // } else {
        //     toast('登录信息失效');
        // }
    },
    setInfo (userInfo) {
        this._userInfo = userInfo;
    },
    getUserid () {
        if (!this._user) {
            this._user = wx.getStorageSync('user');
        }
        return this._user.id;
    },
    getOpenid () {
        if (!this._user) {
            this._user = wx.getStorageSync('user');
        }
        return this._user.openid;
    },
    setSessionKey (sessionKey) {
        this._sessionKey = sessionKey;
    },
    getSessionKey () {
       return this._sessionKey; 
    }
}