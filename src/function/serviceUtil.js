/**
 * @fileOverview service util
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

import wepy from 'wepy'
import config from '../config'

/**
 * 调用wepy.request 发送请求
 */
function doRequest(url, data = {}, method = 'get') {
    return new Promise((resolve, reject) => {
        wepy.request({
            url: url.indexOf('http') > -1 ? url : (config.domain + url),
            method: method,
            header: {
                'mobile': config.mobile
            },
            data: data
        })
        .then(
            (response)=> {
                var data = response.data;

                if (response.statusCode > 300) {
                    wx.showToast({
                        icon: 'loading',
                        title: '系统异常，请稍后重试',
                        duration: 3000
                    });
                    reject(data);
                    return;
                }

                if (data.code === 0) {
                    resolve(data);
                }  else if (typeof data.code === 'undefined') {
                    resolve(data);
                } else {
                    wx.showToast({
                        icon: 'loading',
                        title: data.message || '系统异常，请稍后重试',
                        duration: 3000
                    });
                    reject(data);
                }
            }, 
            (response)=> {
                wx.showToast({
                    icon: 'loading',
                    title: '系统异常，请稍后重试',
                    duration: 3000
                });
            }
        );
    });
}

/**
 * 发送 post 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @return {Promise}
 */
export function post(url, data = {}) {
    return doRequest(url, data, 'post');
}

/**
 * 发送 delete 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @param {boolean} sync 是否是同步请求
 * @return {Promise}
 */
export function del(url, data = {}) {
     return doRequest(url, data, 'delete');
}

/**
 * 发送 get 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @return {Promise}
 */
export function get(url, data = {}) {
    return doRequest(url, data, 'get');
}

/**
 * 发送 update 请求
 *
 * @param {string} url 请求 url
 * @param {Object} data 发送的数据
 * @return {Promise}
 */
export function put(url, data = {}) {
    return doRequest(url, data, 'put');
}