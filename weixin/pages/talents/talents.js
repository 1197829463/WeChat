var app = getApp()
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name: '',//我需要
    Icyn: 'none',//搜索按钮显示隐藏
    showModal: false, //控制弹出框现实与隐藏
    selectShow: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    index: 0,//选择的下拉列表下标
    //轮播图照片
    bnrUrl: [
      {
        id: 1,
        url: "../../images/s1.gif"
      },
      {
        id: 2,
        url: "../../images/s2.gif"
      },
      {
        id: 3,
        url: "../../images/s3.png"
      },
      {
        id: 4,
        url: "../../images/s4.png"
      }],
    // 导航栏数据
    navlist: [
      {
        id: 1,
        image: '../../images/l1.png',
        character: '品牌设计',

      },
      {
        id: 2,
        image: '../../images/l2.png',
        character: '营销推广'
      },
      {
        id: 3,
        image: '../../images/l3.png',
        character: 'IT/软件'
      },
      {
        id: 4,
        image: '../../images/l4.png',
        character: '电商服务'
      },
      {
        id: 5,
        image: '../../images/l5.png',
        character: '游戏服务'
      },
      {
        id: 6,
        image: '../../images/l6.png',
        character: '装修/工程'
      },
      {
        id: 7,
        image: '../../images/l7.png',
        character: '音视频'
      },
      {
        id: 8,
        image: '../../images/l2.png',
        character: '影视动漫'
      },
    ],
    // 帮助部分
    helplist: [
      {
        id: 1,
        image: '../../images/a1.png',
        name: '需求响应快',
        character: '30分钟内及时响应',
      },
      {
        id: 2,
        image: '../../images/a2.png',
        name: '官方顾问联系',
        character: '帮你梳理完善需求',
      },
      {
        id: 3,
        image: '../../images/a3.png',
        name: '大数据推荐',
        character: '帮你推荐合适的服务商',
      },
      {
        id: 4,
        image: '../../images/a4.png',
        name: '交易有担保',
        character: '在线签协议验收付款可开票',
      },
    ],
    //地图
    markers: [{
      id: 0,
      latitude: 34.2311816198, //纬度 
      longitude: 108.9498764277,  //经度
    }],  
    //地图参数：
    latitude: 34.2311816198, //纬度 
    longitude: 108.9498764277,  //经度
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    var that = this;
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

  },
  //生命周期函数--监听页面显示
  onShow: function () {

  },


})