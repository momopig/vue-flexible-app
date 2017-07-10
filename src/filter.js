/**
 * Created by Jamter on 17/2/28.
 */
let filters = {

  spliceDate: function (value) {
    if (typeof value === 'string') {
      var array = value.split(' ')
      var dateNums = array[0].split('-')
      var formatDate = dateNums[0] + ''
      for (var i = 1, l = dateNums.length; i < l; i++) {
        formatDate += '-'
        if (Number(dateNums[i]) < 10 && dateNums[i].charAt(0) !== '0') {
          formatDate += '0'
        }
        formatDate += dateNums[i]
      }
      return formatDate
    }
    return '--'
  },
  formatVals: function (key, val) {
    var dateArr = ['publish_time', 'publish_date', 'filing_date', 'case_date', 'reg_date', 'court_time']
    if (dateArr.indexOf(key) > -1) {
      console.log(key)
      return filters.spliceDate(val)
    } else {
      return val
    }
  }
}
export default {
  install: function (Vue) {
    for (var key in filters) {
      Vue.filter(key, filters[key])
    }
  }
}
