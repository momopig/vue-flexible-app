/**
 * Created by Jamter on 17/2/28.
 */
let filters = {
  enToCn: function (val) {
    let config = {
      beijing: '北京'
    }
    return config[val]
  },
  formatMoney: function (val, num, unit) {
    num = num || 2
    unit = unit || '$'
    if (typeof val === 'number') {
      return unit + val.toFixed(num)
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
