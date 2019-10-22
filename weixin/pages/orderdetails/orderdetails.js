// pages/orderdetails/orderdetails.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "motto": "取消订单",
    "trust": "托管赏金",
    "code": '../../images/code.jpg',
    hideModal: true, //模态框的状态  true-隐藏  false-显示
    animationData: {},
    order: "确认下单",
    orderid: "", //订单id
    ordeIfon: [], //订单信息
    nowDate: ''
  },

  //取消订单
  cancel() {

    this.setData({
      motto: "正在取消订单..."
    })
    wx.showToast({
      title: '取消订单',
      icon: 'none',
      duration: 2000
    })
    //取消订单页面跳转   参数 订单id
    var that = this
    wx.navigateTo({
      url: '../cancelorder/cancelorder?orderid=' + that.data.orderid
    })

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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    var that = this;
    var orderid = options.orderid; //获取到订单id
    wx.showLoading({
      title: '加载中...',
    });
    wx.request({ //发送请求 获取订单信息
      url: 'http://192.168.31.244:888/api/api/order_details',
      data: {
        orderid: orderid
      },
      method: 'POST',
      success: function(res) {
        console.log(res);
        if (res.data.code == 200) {
          that.setData({
            ordeIfon: res.data.data.order
          })
          console.log(that.data.ordeIfon);
        } else {
          console.log('请求数据失败');
        }

      }
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 300)


    that.setData({
      nowDate: util.formatTime(new Date()),
      orderid: orderid
    })
  },


  onUnload: function() {
    // if (false == this.data.isBack) {
    wx.reLaunch({
      url: '../talents/talents',
    })
    // }
  },

})