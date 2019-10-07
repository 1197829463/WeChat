Page({
  data: {
    focus: false,
    inputValue: '',
    scrollTop: 0
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  //滚轮监听
  onPageScroll: function (e) {
    var _this = this
    console.log(e.scrollTop, this.data.scroll_top)
    _this.setData({
      'scroll_top': e.scrollTop
    })
  }
})