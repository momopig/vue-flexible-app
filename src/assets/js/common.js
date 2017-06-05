if (!window.fn) {
  window.fn = {}
}
window.fn.getQueryString = function (paramObj) {
  var tempArr = []
  for (var key in paramObj) {
    tempArr.push(key + '=' + paramObj[key])
  }
  return tempArr.join('&')
}
