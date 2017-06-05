if (!window.fn) {
  window.fn = {}
}
window.fn.getQueryString = function (paramObj) {
  let tempArr = []
  for (let key in paramObj) {
    tempArr.push(key + '=' + paramObj[key])
  }
  return tempArr.join('&')
}
