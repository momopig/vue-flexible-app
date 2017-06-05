/**
 * Created by Jamter on 17/5/20.
 */

var getMsgList = function (searchKeys, resolveCallback, rejectCallback) {
  fetch('/api/notification/msgs?' + window.fn.getQueryString(searchKeys), {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }).then(function (response) {
    return response.json()
  }).then(resolveCallback, rejectCallback).catch(function (e) {
  })
}
var getNotReadNums = function (type, resolveCallback, rejectCallback) {
  fetch('/api/notification/not_read_nums?type=' + type, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }).then(function (response) {
    return response.json()
  }).then(resolveCallback, rejectCallback).catch(function (e) {
  })
}
var getMsgDetail = function (msgId, resolveCallback, rejectCallback) {
  fetch('/api/notification/msg_detail?id=' + msgId, {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }).then(function (response) {
    return response.json()
  }).then(resolveCallback, rejectCallback).catch(function (e) {
  })
}
export default {
  getMsgList: getMsgList,
  getMsgDetail: getMsgDetail,
  getNotReadNums: getNotReadNums
}
