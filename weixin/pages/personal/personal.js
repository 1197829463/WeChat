//index.js
//获取应用实例
var app = getApp();
var http = require("../../utils/http.js")

Page({
  data: {
    hideModal: true, //模态框的状态  true-隐藏  false-显示
    animationData: {},
    //用户个人信息
    userInfo: {
      avatarUrl: "", //用户头像
      nickName: "", //用户昵称
    },
    //订单列表
    commodity: [],
    openid: ''
  },
  onLoad: function(option) {
    //获取用户信息
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        that.setData({
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName,
        })
      }
    })

    var openid = wx.getStorageSync('openid').openid;
    console.log(openid)
    
    wx.showLoading({
      title: '加载中...',
    });
    //发送请求 获取订单全部信息
    var res = app.globalData.index;
    var data = {openid: openid}
    http.request(res.url + res.order_list, data, this.getIndex)
    setTimeout(function() {
      wx.hideLoading()
    }, 300)
  },

  //获取数据
  getIndex(res) {
    this.setData({
      commodity: res.data.order
    })
    console.log(res)

  },

  //联系客服   显示遮罩层
  showModal: function() {
    var that = this;
    that.setData({
      hideModal: false
    })
    var animation = wx.createAnimation({
      duration: 800, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
    setTimeout(function() {
      that.fadeIn(); //调用显示动画
    }, 200)
  },

  // 隐藏遮罩层
  hideModal: function() {
    var that = this;
    var animation = wx.createAnimation({
      duration: 800, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
    that.fadeDown(); //调用隐藏动画   
    setTimeout(function() {
      that.setData({
        hideModal: true
      })
    }, 300) //先执行下滑动画，再隐藏模块

  },

  //动画集
  fadeIn: function() {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export() //动画实例的export方法导出动画数据传递给组件的animation属性
    })
  },
  fadeDown: function() {
    this.animation.translateY(500).step()
    this.setData({
      animationData: this.animation.export(),
    })
  }
})