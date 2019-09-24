<template>

  <div>
    <div><h1>登录页面</h1></div>
    <input v-model="loginInfoVo.username" placeholder="username">
    <input v-model="loginInfoVo.password" placeholder="password">
    <button v-on:click="login">登录</button>
  </div>
</template>

<script>
  import jwtDecode from 'jwt-decode'

  export default {
    data() {
      return {
        loginInfoVo: {username: '', password: ''},
        responseResult: []
      }
    },

    methods: {
      login() {

        this.$axios
          .post('/zuul_client/main/login', {
            username: this.loginInfoVo.username,
            password: this.loginInfoVo.password
          })
          .then(successResponse => {
            if (successResponse.data.success) {

              var td = jwtDecode(successResponse.data.data.signature);
              localStorage.setItem('username', td.username)
              localStorage.setItem('token', successResponse.data.data.signature)
              this.$router.push('/welcome')
            } else {
              alert(successResponse.data.message);
            }
          })
          .catch(failResponse => {
          })
      }
    }
  }
</script>

<style>

</style>
