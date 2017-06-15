/**
 * @file arhat function checkSession
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

export default function checkSession() {
    return new Promise((resolve, reject) => {
        wx.checkSession({
            success: function () {
                resolve(true);
            },
            fail: function () {
                reject(false);
            }
        })
    });
}
