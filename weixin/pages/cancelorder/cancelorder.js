// pages/orderdetails/orderdetails.js
var app = getApp();
var http = require("../../utils/http.js")
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pname: '',
    nowDate: '',
    p_price: "",
    order_no: ''
  },

  //返回首页
  goback() {
    wx.reLaunch({
      url: '../talents/talents',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    console.log(options)
    var that = this;
    var orderid = options.orderid; //获取到订单id
    //发送请求，获取数据
    var res = app.globalData.index;
    var data = {
      orderid: orderid
    }
    http.request(res.url + res.order_quxiao, data, this.getIndex)
  },

  //获取数据
  getIndex(res) {
    var cancelData = res.data.data;
    this.setData({
      pname: cancelData.name,
      order_no: cancelData.order_no,
      p_price: cancelData.p_price,
      nowDate: util.formatTime(new Date()),
    })
    console.log(res)

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
    wx.reLaunch({
      url: '../talents/talents',
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})