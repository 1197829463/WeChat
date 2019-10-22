var app = getApp();
var http = require("../../utils/http.js");

Page({
  data: {
    //轮播图照片
    bnrUrl: [],
    // 导航栏数据
    navlist: [],
    helplist: [],
    //地图
    markers: [{
      id: 0,
      latitude: 34.2312304066, //纬度 
      longitude: 108.9494955540, //经度
    }],
    //地图参数：
    latitude: 34.2312304066, //纬度 
    longitude: 108.9494955540, //经度
  },

  //获取我需要的值
  getNameValue: function(e) {
    this.setData({
      name: e.detail.value
    })
    if (this.data.name.length > 1) {
      this.setData({
        Icyn: 'block'
      })
    } else {
      this.setData({
        Icyn: 'none'
      })
    }
  },

  // 生命周期函数--监听页面加载
  onLoad: function(options) {
    // var that = this;
    //判断是否已经授权
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) { //授权了可以获取用户信息
          wx.getUserInfo({
            success: (res) => {
              // console.log(res);
            }
          })
        } else { //未授权跳到授权页面
          wx.redirectTo({
            url: '../login/login', //授权页面
          })
        }
      }
    })

    //获取数据
    var res = app.globalData.index;
    wx.showLoading({
      title: '加载中...',
    });
    var data = {}
    http.request(res.url + res.index, data, this.getIndex)
    setTimeout(function() {
      wx.hideLoading()
    }, 500)
  },

  //获取数据
  getIndex(res) {
    this.setData({
      bnrUrl: res.data.lunbo,
      navlist: res.data.demand,
      helplist: res.data.adv
    })
    // console.log(res.data.adv)

  },

  onShow: function() {},
})