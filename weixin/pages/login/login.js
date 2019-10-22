// pages/login/login.js
var app = getApp();
var http = require("../../utils/http.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    appid: 'wx9c5730e7405f5328',
    secret: 'b270aea8b6d4c6b6eac16a64ce4c7252'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              //从数据库获取用户信息
              that.queryUsreInfo();
              //用户已经授权过
              wx.switchTab({
                url: '../talents/talents'
              })
            }
          });
        }
      }
    })
  },
  bindGetUserInfo: function(e) {
    console.log(e)
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      wx.showLoading({
        title: '加载中...',
      });
      //插入登录的用户的相关信息到数据库
      //发送请求，获取数据
      var res = app.globalData.index;
      var data = {
        openid: wx.getStorageSync('openid').openid,
        nick: e.detail.userInfo.nickName,
        avatar: e.detail.userInfo.avatarUrl
      }
      http.request(res.url + res.login, data, this.getIndex)

      setTimeout(function() {
        wx.hideLoading()
      }, 300)
      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '../talents/talents'
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },

  //获取数据
  getIndex(res) {
    var that = this;
    console.log(res)
    that.queryUsreInfo();
    console.log("插入小程序登录用户信息成功！");

  },
  //获取用户信息接口
  queryUsreInfo: function() {
    wx.showLoading({
      title: '加载中...',
    });
    var res = app.globalData.index;
    var data = {
      openid: wx.getStorageSync('openid').openid,
    }
    http.request(res.url + res.login, data, this.getInfor)
    
    setTimeout(function() {
      wx.hideLoading()
    }, 300)

  },
  getInfor(){

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

})