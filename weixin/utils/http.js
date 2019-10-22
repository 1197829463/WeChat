function request(url, data, callback) {
  wx.request({
    url: url,
    data: data,
    method: 'POST',
    success: function(res) {
      callback(res.data);
    }
  })
}

module.exports = {
  request
}