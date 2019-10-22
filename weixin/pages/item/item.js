var app = getApp();
var http = require("../../utils/http.js")
Page({
  data: {
    serverdata: [],
    details: {},
    pimage: [],
    album: [],
    services: [],
    cid: '', //产品类型id
    id: '', //产品id
    opendi: '', //用户的openid
    order: "确认下单",
    orderid: ""
  },

  // 显示遮罩层
  showModal: function () {
    var that = this;
    that.setData({
      hideModal: false
    })
    var animation = wx.createAnimation({
      duration: 600, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
    setTimeout(function () {
      that.fadeIn(); //调用显示动画
    }, 200)
  },

  // 隐藏遮罩层
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 800, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
    that.fadeDown(); //调用隐藏动画   
    setTimeout(function () {
      that.setData({
        hideModal: true
      })
    }, 720) //先执行下滑动画，再隐藏模块
  },

  //动画集
  fadeIn: function () {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export() //动画实例的export方法导出动画数据传递给组件的animation属性
    })
  },
  fadeDown: function () {
    this.animation.translateY(300).step()
    this.setData({
      animationData: this.animation.export(),
    })
  },


  //轮播图
  swiperChange(e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  // 防止出现轮播图卡死现象
  animationChange(e) {
    this.activeSlide = e.detail.current;
  },
  //点击预览图片
  imgPvw(e) {
    console.log(e);
    console.log(e.currentTarget.dataset.src);
    var src = encodeURI(e.currentTarget.dataset.src);
    var services = this.data.services;
    var arr = [];
    for (var i = 0; i < services.length; i++) {
      arr.push("http://192.168.31.244:888/" + services[i])
    }
    // console.log(services);
    wx.previewImage({
      current: "http://192.168.31.244:888/" + src,
      urls: arr
    })
  },
  onLoad: function (options) {
    console.log(options.id)
    var id = options.id;
    var cid = options.cid;
    var orderid = options.orderid;
    var openid = wx.getStorageSync('openid').openid
    var that = this;
    wx.showLoading({
      title: '加载中...',
    });

    //发送请求，获取数据
    var res = app.globalData.index;
    var data = {
      'id': id
    }
    http.request(res.url + res.product_details, data, this.getDetails)
    setTimeout(function () {
      wx.hideLoading()
    }, 300)


    //数据初始化
    this.setData({
      hideModal: true,
      order: "确认下单",
      cid: cid,
      id: id,
      openid: openid
    })
  },
  //获取数据
  getDetails(res) {
    var tempObj = res.data;
    var pimage = tempObj.details.pimage;
    var album = tempObj.details.album;
    var services = tempObj.details.services;
    this.setData({
      details: tempObj.details,
      serverdata: tempObj.punlun,
      pimage: pimage.split('###'),
      album: album.split('###'),
      services: services.split('###')
    })
    console.log(res)

  },
  //确认下单 跳转
  confirm: function (e) {
    // console.log(e)
    var that = this;
    this.setData({
      order: "正在下单..."
    })
    //下订单请求
    wx.showLoading({
      title: '加载中...',
    });

    var res = app.globalData.index;
    var data = {
      'pid': that.data.id,
      'type': 1,
      'openid': that.data.openid
    }
    http.request(res.url + res.purchase, data, this.getIndex)

    setTimeout(function () {
      wx.hideLoading()
    }, 300)
  },

  //获取数据
  getIndex(res) {
    var orderid = res.data.orderid;
    //页面跳转到订单详情页   参数订单ID
    wx.navigateTo({
      url: "/pages/orderdetails/orderdetails?orderid=" + orderid
    })
    console.log(res)
  }
})
