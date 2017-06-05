<template>
  <div class="header-bar">
    <a class="return-btn" @click="goBack"><i class="icon-return"></i>返回</a>
    <span class="title"> {{ title }} </span>
  </div>
</template>
<script>
  export default{
    props: ['title'],
    methods: {
      goBack () {
        window.history.back()
      }
    }

  }
</script>
<style scoped lang="scss">
  @import "../assets/css/var.scss";
  .header-bar {
    position: relative;
    background: $topicColor;
    line-height: 44px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    .return-btn {
      position: absolute;
      left: 0;
      display: flex;
      align-items: center;
      height: 44px;
      margin-left: 10px;
      font-size: 16px;
      color: #fff;
      .icon-return {
        display: inline-block;
        background: url(../assets/img/arrow_return.png);
        background-size: 24px auto;
        width: 24px;
        height: 24px;
      }
    }
  }
</style>
