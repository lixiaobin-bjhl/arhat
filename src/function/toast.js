/**
 * @fileOverview toast
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

export default function (message, type = 'warning', duration = 3000) {

    var params =  {
        title: message,
        duration: 3000
    };

    if (type == 'warning') {
        params.image = '/images/warning.png';
    } else {
        params.icon = 'success';
    }

    wx.showToast(params);
}