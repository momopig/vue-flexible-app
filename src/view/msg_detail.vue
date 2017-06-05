<template>
  <div class="msg-list-page">
    <header-return :title="title"></header-return>
    <div class="msg-detail-board">
      <div class="msg-header">
        <div class="title"> {{ detailObj.title }} </div>
        <div class="sub-title">
          <div class="date">{{ detailObj.push_time |  moment('YYYY-MM-DD')}}</div>
          <!--<div class="v-gap"></div>-->
          <!--<div class="origin">来源: <a href="">源站点</a></div>-->
        </div>
      </div>
      <div class="msg-content">
        <!--{{JSON.stringify(detailObj.detail)}}-->
        <!--<detail-list v-if="subType==='new_invested_company'"></detail-list>-->
        <detail-map :configArr="configObj.cols" :detailObj="detailObj"></detail-map>

      </div>
    </div>
  </div>
</template>

<script>
  import headerTab from '../components/header-tab.vue'
  import msgCards from '../components/msg-cards.vue'
  import headerReturn from '../components/header-return.vue'
  import detailMap from '../components/detail-map.vue'
//  import MsgService from '../assets/js/fetch_service/msg.js'
  export default{
    components: {
      headerTab,
      headerReturn,
      msgCards,
      detailMap
    },
    data () {
      return {
        title: '商品详情',
        msgs: [],
        detailObj: {},
        configObj: {
          name: '商品详情',
          cols: [{
            en: 'title',
            cn: '商品名称'
          }, {
            en: 'weight',
            cn: '商品重量'
          }, {
            en: 'price',
            cn: '价格'
          }, {
            en: 'place',
            cn: '产地'
          }]
        }
      }
    },
    created () {
      this.getMsgDetail()
    },
    methods: {
      getMsgDetail () {
        let self = this
//        MsgService.getMsgDetail(self.msgId, function (data) {
//          if (data.status === 0) {
//            self.detailObj = data.data
//          }
//        })
        let data = {
          status: 0,
          msg: 'success',
          data: {
            title: '水果',
            price: '$50',
            place: '新疆',
            weight: '10kg'
          }
        }
        if (data.status === 0) {
          self.detailObj = data.data
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/var.scss";
  .msg-list-page{
    background: #fff;
    .msg-detail-board{
      padding: 0 12px 20px 12px;
      margin-top: 20px;
      .msg-header{
        .title{
          font-size: 18px;
          color: #333333;
        }
        .sub-title{
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #999999;
          .date{
          }
          .v-gap{
            background: #DDDDDD;
            width: 1px;
            height: 10px;
            margin: 0 8px;
          }
          .origin{
            >a{
              color: $topicColor;
            }
          }
        }
      }
      .msg-content{
        padding-top: 10px;
      }

    }
  }
</style>
