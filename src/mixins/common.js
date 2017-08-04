import wepy from 'wepy'

export default class CommonMixin extends wepy.mixin {
    methods = {
        /**
         * 跳转地址 
         */
        redirect (url) {
            wx.redirectTo({
                url: url
            });
        }
    }
}
