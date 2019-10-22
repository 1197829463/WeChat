// const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// module.exports = {
//   formatTime: formatTime
// }

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  if (date.getMonth() + 1 < 10) {
    month = '0' + date.getMonth() + 1
  } else {
    month = date.getMonth() + 1
  }
  var day = date.getDate()
  if (date.getDate() < 10) {
    day = '0' + date.getDate()
  } else {
    day = date.getDate()
  }
  var hour = date.getHours()
  var minute
  if (date.getMinutes() < 10) {
    minute = '0' + date.getMinutes()
  } else {
    minute = date.getMinutes()
  }
  var second = date.getSeconds()
  return year + "-" + month + "-" + day + "  " + hour + ":" + minute;
}

module.exports = {
  formatTime: formatTime
}