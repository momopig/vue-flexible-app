<template>
  <div class="map-content">
    <div class="map-item" v-for="item in configArr">
      <div class="key" v-html="item.cn"></div>
      <div class="value" v-html="(Array.isArray(detailObj[item.en])?detailObj[item.en].join(','):detailObj[item.en]) || '--'"></div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['configArr', 'detailObj']
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .map-content{
    .map-item {
      margin-top: 10px;
      .key{
        font-size: 12px;
        color: #999999;
      }
      .value{
        font-size: 14px;
        color: #333333;
      }
    }
  }
</style>
