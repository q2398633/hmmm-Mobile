<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
    <form action="/login" method="POST">
      <van-cell-group>
        <van-field v-model="user.mobile" required clearable label="手机号" placeholder="请输入手机号"></van-field>
        <van-field v-model="user.code" required type="password" label="密码" placeholder="请输入密码"></van-field>
      </van-cell-group>
      <van-button type="info" block @click.prevent="handleLogin">登录</van-button>
    </form>
  </div>
</template>

<script>
import request from '@/utils/request.js'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    async handleLogin () {
      const res = await request({
        method: 'post',
        url: '/app/v1_0/authorizations',
        data: this.user
      })
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar {
  background: #0096fa;

  .van-nav-bar__title {
    color: white;
    font-size: 30px;

  }
}
</style>
