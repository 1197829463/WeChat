Page({

  /**
  * 页面的初始数据
  */
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false,
    //模拟数据
    searchList: [
      {
        "id": 1,
        "itemImg": "../../images/l1.png",
        "itemTitle": "企业网站建设 网站定制开发 网站制作 网站设计 响应式",
        "label": [
          {
            "id": 1,
            "icon": "免费修改，满意为止"
          },
          {
            "id": 2,
            "icon": "提供源代码"
          }
        ],
        "price": "999.00",
        "unit": "个",
        "score": "5.0",
        "comment": '"很喜欢这种设计，很符合我想要的。~~真是太满意了，如果有下次需要还会再来"'
      },
      {
        "id": 2,
        "itemImg": "../../images/l2.png",
        "itemTitle": "APP定制开发/APP开发/电商类APP",
        "label": [
          {
            "id": 1,
            "icon": "免费修改，满意为止"
          },
          {
            "id": 2,
            "icon": "包注册成功"
          }
        ],
        "price": "999.00",
        "unit": "个",
        "score": "3.4",
        "comment": '"很喜欢这种设计，很符合我想要的。~~真是太满意了，如果有下次需要还会再来"'
      },
      {
        "id": 3,
        "itemImg": "../../images/l3.png",
        "itemTitle": "小程序 小程序开发 微信小程序开发",
        "price": "999.00",
        "score": "4.5",
        "comment": '"很喜欢这种设计，很符合我想要的。~~真是太满意了，如果有下次需要还会再来"'
      },
      {
        "id": 4,
        "itemImg": "../../images/l4.png",
        "itemTitle": "微信开发/公众号平台开发/公众号",
        "price": "999.00",
        "score": "2.9",
        "comment": '"很喜欢这种设计，很符合我想要的。"'
      }
    ]
  },

  //事件处理函数
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected: true,
      selected3: false,
      selected4: false
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false
    })
  },
  selected3: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false
    })
  },
  selected4: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true
    })
  },

  //详情页跳转
  toDetails: function (e) {
    wx.navigateTo({
      url: '../item/item',
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