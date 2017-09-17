/**
 * @fileOverview arhat-plugin-userInfo 用户信息
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

// import { initUser } from '../function/initUser';
import checkSession from '../function/checkSession';

export default {
    getUserid () {
        if (!this._user) {
            this._user = wx.getStorageSync('user');
        }
        return this._user.id;
    },
    getUserName () {
        if (!this._user) {
            this._user = wx.getStorageSync('user');
        }
        return this._user.name;
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