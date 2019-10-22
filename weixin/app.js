//app.js
App({
  onLaunch: function() {
    var that = this
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
      wx.login({
        success: function(res) {
          that.globalData.code = res.code;
          console.log(that.globalData.code)
          if (res.code) {
            wx.getUserInfo({
              success: function(res) {
                var objz = {};
                objz.avatarUrl = res.userInfo.avatarUrl;
                objz.nickName = res.userInfo.nickName;
                objz.code = res.userInfo.code;
                // console.log(objz);
                wx.setStorageSync('userInfo', objz); //存储userInfo
              }
            });
            var d = that.globalData; //这里存储了appid、secret、token串 
            var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
            wx.request({
              url: l,
              data: {},
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT 
              // header: {}, // 设置请求的 header 
              success: function(res) {
                var openid = {};
                openid.openid = res.data.openid;
                // obj.expires_in = Date.now() + res.data.expires_in;
                console.log(openid);
                wx.setStorageSync('openid', openid); //存储openid
                // that.globalData.openid = res.openid;
              }
            });
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    }
  },

  globalData: {
    userInfo: null,
    index: {
      url: 'http://192.168.31.244:888/api/api/',
      login: 'login',
      index: 'index',
      order_quxiao: 'order_quxiao',
      order_list: 'order_list',
      order_details: 'order_details',
      product_list: 'product_list',
      product_cate: 'product_cate',
      purchase: 'purchase',
      product_details: 'product_details',
      order_quxiao: 'order_quxiao'
    },
    appid: 'wx9c5730e7405f5328',
    secret: 'b270aea8b6d4c6b6eac16a64ce4c7252',
    code: '',
    openid: ''
  }
})