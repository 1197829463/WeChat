Page({
  /**
   * 页面的初始数据
   */
  data: {
    serveList: [{
      id: 1,
      imgs: [
        { url: '../../images/s1.gif' },
        { url: '../../images/s2.gif' },
        { url: '../../images/s3.png' },
        { url: '../../images/s4.png' },
        { url: '../../images/s1.gif' },
        { url: '../../images/s2.gif' },
        { url: '../../images/s3.png' }
      ],
      shopTitle: "企业公司品牌logo设计图文字体标志商标LOGO图标平面设计",
      price: "990.00",
      unit: "个",
      save: "10.00",
      security: [
        {
          id: 1,
          cont: "保证完成"
        },
        {
          id: 2,
          cont: "保证推广效果"
        }
      ],
      shopImg: "../../images/timg1.jpg",
      shopName: "匠派品牌",
      style: "企业",
      grade: "猪三十六戒",
      score: "99.96%",
      amount: "2481",
      income: "551.28万",
      province: "四川",
      city: "成都",
      ratings: [
        {
          id: 1,
          count: 14456,
          classify: [
            {
              id: 1,
              cont: "好评",
              num: "5185",
            }, {
              id: 2,
              cont: "不错",
              num: "5174",
            }, {
              id: 3,
              cont: "专业",
              num: "742",
            }, {
              id: 4,
              cont: "值得推荐",
              num: "658",
            }, {
              id: 5,
              cont: "信誉很好",
              num: "872",
            }, {
              id: 6,
              cont: "风格统一",
              num: "689",
            }, {
              id: 7,
              cont: "严谨认真",
              num: "689",
            }, {
              id: 8,
              cont: "品质很高",
              num: "689",
            }, {
              id: 9,
              cont: "注重细节",
              num: "689",
            }, {
              id: 10,
              cont: "回复及时",
              num: "689",
            }
          ],
          commentList: [
            {
              id: "01",
              msgSrc: "../../images/timg1.jpg",
              msgTitle: "t_2053_Rpojdx",
              score: "5.0",
              msgText: "设计师水平很高！作品很nice，老板看到后大爱，超级喜欢，以后如有需要还会再来的！下次有需要还会选择这里的"
            }, {
              id: "02",
              msgSrc: "../../images/timg1.jpg",
              msgTitle: "t_6767_xYdzsb",
              score: "3.8",
              msgText: "设计师水平很高！作品很nice，老板看到后大爱，超级喜欢，以后如有需要还会再来的！下次有需要还会选择这里的"
            }
          ]
        }
      ],
      detailsImg: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571281277&di=905e8930beb8239939b90fe5252a47bc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160927%2F9866af48e75e432f821f6e54ba7cdccc_th.png',
        'http://pic38.nipic.com/20140228/2457331_083845176000_2.jpg',
        '../../images/timg1.jpg'
      ]
    }],

    currentSwiper: 0,
    autoplay: true,
    hideModal: true, //模态框的状态  true-隐藏  false-显示
    animationData: {},
    order: "确认下单"
  },

  // 显示遮罩层
  showModal: function () {
    var that = this;
    that.setData({
      hideModal: false
    })
    var animation = wx.createAnimation({
      duration: 600,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    setTimeout(function () {
      that.fadeIn();//调用显示动画
    }, 200)
  },

  // 隐藏遮罩层
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      duration: 800,//动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease',//动画的效果 默认值是linear
    })
    this.animation = animation
    that.fadeDown();//调用隐藏动画   
    setTimeout(function () {
      that.setData({
        hideModal: true
      })
    }, 720)//先执行下滑动画，再隐藏模块

  },

  //动画集
  fadeIn: function () {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export()//动画实例的export方法导出动画数据传递给组件的animation属性
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
    // console.log(e.currentTarget.dataset.src);

    var src = encodeURI(e.currentTarget.dataset.src);
    var imgArr = this.data.serveList[0].detailsImg;
    // console.log(this.data.serveList[0].detailsImg);

    wx.previewImage({
      current: src,
      urls: imgArr
    })
  },

  //确认下单 跳转
  confirm() {
    this.setData({
      order: "正在下单..."
    })
    wx.navigateTo({
      url: "../orderdetails/orderdetails"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
