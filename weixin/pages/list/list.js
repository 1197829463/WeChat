Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconList: [],
    inx: 1
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
    // console.log(e)
    var that = this;
    var idx = e.target.dataset.id;
    wx.request({
      url: 'http://192.168.31.244:888/api/api/product_list',
      data: {
        'page': 1,
        'cid': idx
      },
      success(res) {
        if (res.data.code == 200) {
          // console.log(res.data)
          // var tempObj = res.data.data;
          // that.setData({
          //   prouct: tempObj.prouct
          // })

        } else {
          console.log('网络错误，请求失败')
        }
      }
    })
    this.setData({
      inx: idx
    }),
      wx.request({
        url: 'http://192.168.31.244:888/api/api/product_list',
        data: {
          'page': 1,
          'cid': that.data.inx
        },
        success(res) {
          if (res.data.code == 200) {
            // console.log(res.data)
            var tempObj = res.data.data;
            that.setData({
              iconList: tempObj.cate,
              prouct: tempObj.prouct
            })
          } else {
            console.log('网络错误，请求失败')
          }
        }
      })
  },

  //详情页跳转
  toDetails: function (e) {
    // console.log(e)
    var id = e.currentTarget.id;
    // console.log(id)
    wx.navigateTo({
      url: '/pages/item/item?id=' + id
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://192.168.31.244:888/api/api/product_cate',
      data: {
        'page': 1
      },
      success(res) {

        if (res.data.code == 200) {
          // console.log(res.data)
          var tempObj = res.data.data;
          that.setData({
            iconList: tempObj.cate,
            prouct: tempObj.prouct
          })

        } else {
          console.log('网络错误，请求失败')
        }
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () { }
})