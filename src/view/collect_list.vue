<template>
  <div class="collect-list-page">
    <header-return :title="title"></header-return>
    <msg-cards :msgs="msgs" :pullUp="getNextPageData" :totalCount="totalCount"></msg-cards>
  </div>
</template>

<script>
  import headerTab from '../components/header-tab.vue'
  import msgCards from '../components/msg-cards.vue'
  import headerReturn from '../components/header-return.vue'
  import MsgService from '../assets/js/fetch_service/msg.js'
  export default{
    components: {
      headerTab,
      headerReturn,
      msgCards
    },
    created () {
      this.initPageData()
    },
    data () {
      return {
        title: '收藏消息',
        msgs: [],
        loadList: false,
        searchKeys: {
          count: 10,
          offset: 0,
          collected: true
        },
        totalCount: 0
      }
    },
    methods: {
      initPageData () {
        let self = this
        MsgService.getMsgList(self.searchKeys, function (data) {
          if (data.status === 0) {
            self.msgs = data.data.data
            self.totalCount = data.data.total_count
            console.log(self.msgs.length)
          }
        })
      },
      getNextPageData () {
        let self = this
        self.searchKeys.offset += self.searchKeys.count
        MsgService.getMsgList(self.searchKeys, function (data) {
          if (data.status === 0) {
            self.msgs = self.msgs.concat(data.data.data)
            self.totalCount = data.data.total_count
            console.log(self.msgs.length)
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .collect-list-page{
    .msg-items{
      top: 45px;
    }
  }
</style>
