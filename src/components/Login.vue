<template>

  <div>
    <div ><h1>登录页面</h1></div>
    <input v-model="loginInfoVo.username" placeholder="username">
    <input v-model="loginInfoVo.password" placeholder="password">
    <button v-on:click="login">登录</button>
  </div>
</template>

<script>
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
            this.responseResult = JSON.stringify(successResponse.data);
            if(this.responseResult.success){
              alert(this.responseResult);
            }else {
              alert(this.responseResult);
            }
          })
          .catch(failResponse => {})
      }
    }
  }
</script>

<style>

</style>
