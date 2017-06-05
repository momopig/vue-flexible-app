<template>
    <div class="account-detail-page">
        <div class="header-area">
          <header-return></header-return>
            <div class="header-body">
                <div class="portrait-area"></div>
                <div class="user-name">{{ currentUser.username }}</div>
            </div>
        </div>
        <ul class="detail-items">
            <li class="detail-item">
                <span class="">用户名</span>
                <span class="">{{ currentUser.username }}</span>
            </li>
            <li class="detail-item">
                <span class="">邮箱</span>
                <span class="">{{ currentUser.email }}</span>
            </li>
        </ul>
        <div class="logout-btn" @click="showToast">退出登录</div>
    </div>
</template>

<script>
  import headerReturn from '../components/header-return.vue'
  import { Toast } from 'mint-ui'
//  import AccountService from '../assets/js/fetch_service/account.js'
  export default{
    components: {
      headerReturn
    },
    created () {
      this.getProfile()
    },
    data () {
      return {
        currentUser: {}
      }
    },
    methods: {
      getProfile () {
        let self = this
//        AccountService.getProfile(function (data) {
//          if (data.status === 0) {
//            window.currentUser = self.currentUser = data.data
//          }
//        })
        let data = {
          status: 0,
          msg: 'success',
          data: {
            username: 'momopig',
            email: '121978614@qq.com'
          }
        }
        if (data.status === 0) {
          self.currentUser = data.data
        }
      },
      showToast () {
//        Toast('Upload Completed')
        Toast({
          message: '登出成功',
          iconClass: 'icon icon-success',
          duration: 3000
        })
        localStorage.removeItem('access_token')
        window.location.href = '/#/login'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/var.scss";
  .account-detail-page{
        background: #F7F7F7;
        height: 100%;
        .header-area {
            background: $topicColor;

            .header-body{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 51px 0 50px 0;
                .portrait-area{
                    background: url(../assets/img/portrait.png);
                    background-size: 56px auto;
                    width: 56px;
                    height: 56px;
                }
                .user-name{
                    margin-top: 16px;
                    font-size: 16px;
                    color: #fff;
                }
            }
        }
        .detail-items{
            background: #fff;
            margin-top: 10px;
            .detail-item{
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 48px;
                padding: 0 12px;
                border-top: 1px solid #EFEFEF;
                color: #999999;
                font-size: 16px;
                &:last-child{
                    border-bottom: 1px solid #EFEFEF;
                }
            }
        }
        .logout-btn{
            display: flex;
            background: #fff;
            margin-top: 10px;
            border-top: 1px solid #EFEFEF;
            border-bottom: 1px solid #EFEFEF;
            height: 48px;
            align-items: center;
            justify-content: center;
            font-size: 16px;
        }
    }
</style>
