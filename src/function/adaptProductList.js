/**
 * @file arhat function adpatProudctList
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import compressImage from './compressImage'

export default function adaptProductList (data) {
    var bannerOption = [];
    data.forEach((item)=> {
        var storageIds = item.storageIds || item.product.storageIds;
        item.count = 1;
        if (storageIds && storageIds.length) {
            storageIds.forEach((storageId, index)=> {
                // 产品仅显示第1张图
                if (index === 0) {
                    item.imageUrl = compressImage(storageId)
                } 
            });
        }
    });
    return data;
}