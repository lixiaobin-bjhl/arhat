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
        // 没有count 就默认为1
        if (!item.count) {
            item.count = 1;
        }
        item.selected = true;
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