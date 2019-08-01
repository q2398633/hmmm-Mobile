<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="欢迎" />
    <!-- 表单 -->
    <form action="/">
      <van-cell-group>
        <van-field v-model="user.mobile" label="手机号" placeholder="请输入用户名" required />
        <van-field v-model="user.code" label="验证码" placeholder="请输入验证码" required type="password" />
      </van-cell-group>
      <!-- @事件名.修饰符 -->
      <van-button type="info" block @click.prevent="handleLogin">登录</van-button>
    </form>
  </div>
</template>

<script>
// import request from '@/utils/request.js'
import { login } from '@/api/user.js'
import { setUser } from '@/utils/auth.js'
import { mapMutations } from 'vuex'

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
    ...mapMutations(['setUser']),

    async handleLogin () {
      try {
        const data = await login(this.user)
        // console.log(data) // data里面有token
        this.setUser(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>

<style scoped lang="less">
.van-nav-bar {
  background: #0096fa;

  .van-nav-bar__title {
    color: white;
  }
}
</style>
