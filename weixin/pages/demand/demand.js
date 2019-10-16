Page({
  data: {
    iphone: '',
    needName: ''
  },
  getPhone: function (e) {
    var val = e.detail.value;
    console.log(e.detail.value)
    this.setData({
      iphone: e.detail.value
    })
  },
  getNeed: function (e) {
    var val = e.detail.value;
    console.log(e.detail.value)
    this.setData({
      needName: e.detail.value
    })
  },
  save(e) {
    var tempObj = {};
    var dataArr = [];
    for (let key in tempObj) {
      let dect = {};
      dect[key] = tempObj[key];
      dataArr.push(dect)
    }
    console.log(dataArr);
    tempObj.iphone = this.data.iphone;
    tempObj.needName = this.data.needName;
    wx.setStorage({
      key: "needVal",
      data: tempObj
    })
    // return;
    wx.switchTab({
      url: '../order/order',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    // console.log(this)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (option) {

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
  onUnload: function (e) {
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