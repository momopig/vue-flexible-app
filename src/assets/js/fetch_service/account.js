/**
 * Created by Jamter on 17/5/20.
 */
var login = function (username, password, resolveCallback, rejectCallback) {
  fetch('/api/account/login.json', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(function (response) {
    return response.json()
  }).then(resolveCallback, rejectCallback).catch(function (e) {
  })
}

var getProfile = function (resolveCallback, rejectCallback) {
  fetch('/api/account/profile.json', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }).then(function (response) {
    return response.json()
  }).then(resolveCallback, rejectCallback).catch(function (e) {
  })
}
export default {
  getProfile: getProfile,
  login: login
}
