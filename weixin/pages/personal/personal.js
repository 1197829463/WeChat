//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    //用户个人信息
    userInfo: {
      avatarUrl: "",//用户头像
      nickName: "",//用户昵称
    },
    //商品信息
    commodity: [
      {
      "id": 0,
      "itemTitle": "商品名称",
      "price": "商品价格"
    },
    {
      "id": 1,
      "itemTitle": "商品名称",
      "price": "商品价格"
    }
  ]
  },
    onLoad: function(option){ 
      var that = this;
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            avatarUrl: res.userInfo.avatarUrl,
            nickName: res.userInfo.nickName,
          })
        }
      })
    },
})
