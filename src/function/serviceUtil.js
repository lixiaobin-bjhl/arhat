/**
 * @fileOverview service util
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict';

import wepy from 'wepy'
import config from '../config'
import toast from './toast';

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
                    toast('系统异常，请稍后重试');
                    reject(data);
                    return;
                }

                if (data.code === 0) {
                    resolve(data);
                }  else if (typeof data.code === 'undefined') {
                    resolve(data);
                } else {
                    toast('系统异常，请稍后重试');
                    reject(data);
                }
            }, 
            (response)=> {
                toast('系统异常，请稍后重试');
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