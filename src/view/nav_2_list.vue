<template>
  <div class="marketing-list-page">
    <header-tab :config="tabConfig" :selectSubTypeFn="selectSubType"  v-if="loadTabs"></header-tab>
    <msg-cards :msgs="msgs" :getNextPageData="getNextPageData" :totalCount="totalCount"></msg-cards>
  </div>
</template>

<script>
  import headerTab from '../components/header-tab.vue'
  import msgCards from '../components/msg-cards.vue'
  //    import MsgService from '../assets/js/fetch_service/msg.js'
  export default{
    components: {
      headerTab,
      msgCards
    },
    created () {
      this.initPageData()
    },
    computed: {
      type () {
        return '(' + this.tabConfig.parent.arr[this.tabConfig.parent.activeIndex].name + ':' +
          this.tabConfig.sub.arr[this.tabConfig.sub.activeIndex].cn_name + ')'
      }
    },
    data () {
      return {
        loadTabs: false,
        tabConfig: {
          parent: {
            arr: [{name: '导航一', href: '/#/nav-1-list'}, {name: '导航二', href: '/#/nav-2-list'}],
            activeIndex: 1
          },
          sub: {
            arr: [
              {cn_name: '标签一', en_name: 'tab1'},
              {cn_name: '标签二', en_name: 'tab2'},
              {cn_name: '标签三', en_name: 'tab3'},
              {cn_name: '标签四', en_name: 'tab4'},
              {cn_name: '标签五', en_name: 'tab5'},
              {cn_name: '标签六', en_name: 'tab6'},
              {cn_name: '标签七', en_name: 'tab7'}
            ],
            activeIndex: 0
          }
        },
        msgs: [],
        totalCount: 0,
        searchKeys: {
          type: 'nav1',
          sub_type: 'tab1',
          count: 10,
          offset: 0
        }
      }
    },
    methods: {
      initPageData () {
        let self = this
//          MsgService.getMsgList(self.searchKeys, function (data) {
//            if (data.status === 0) {
//              self.msgs = data.data.data
//              self.totalCount = data.data.total_count
//            }
//          })
        let data1 = {
          status: 0,
          msg: 'success',
          data: {
            data: [
              {company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称1', type_cn_name: '优质'},
              {company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称2', type_cn_name: '优质'},
              {company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称3', type_cn_name: '优质'},
              {company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称4', type_cn_name: '优质'},
              {company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称5', type_cn_name: '优质'}
            ],
            total_count: 10000000000000
          }
        }
        if (data1.status === 0) {
          self.msgs = data1.data.data
          self.totalCount = data1.data.total_count
        }

//          MsgService.getNotReadNums('risk', function (data) {
//            if (data.status === 0) {
//              data = data.data
//              self.tabConfig.sub.arr.forEach(function (item, index) {
//                item.notReadNum = data[item.en_name]
//                self.loadTabs = true
//              })
//            }
//          })
        let data2 = {
          status: 0,
          msg: 'success',
          data: {
            data: {
              tab1: '2',
              tab2: '2',
              tab3: '2',
              tab4: '2',
              tab5: '2',
              tab6: '2',
              tab7: '2'
            }
          }
        }
        if (data2.status === 0) {
          data2 = data2.data
          self.tabConfig.sub.arr.forEach(function (item, index) {
            item.notReadNum = data2[item.en_name]
            self.loadTabs = true
          })
        }
      },
      getNextPageData () {
        let self = this
        self.searchKeys.offset += self.searchKeys.count
//          MsgService.getMsgList(self.searchKeys, function (data) {
//            if (data.status === 0) {
//              self.msgs = self.msg.concat(data.data.data)
//              console.log(self.msgs.length)
//            }
//          })
        setTimeout(function () {
          for (let i = 0; i < self.searchKeys.count; i++) {
            self.msgs.push({company: '商品简介' + self.type, id: 1, push_time: 1495036800000, title: '商品名称' + (self.msgs.length + 1), type_cn_name: '优质'})
          }
        }, 1500)
      },
      selectSubType (subType) {
        let self = this
        self.searchKeys.sub_type = subType
        self.searchKeys.offset = 0
        self.initPageData()
      }
    }
  }
</script>

<style scoped lang="scss">
  .marketing-list-page{
  }
</style>
