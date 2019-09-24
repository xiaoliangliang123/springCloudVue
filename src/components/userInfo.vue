<template>
  <div>
    <div id="logout" style="display: block">会员:{{username}}<button v-on:click="toLogout">退出</button></div>
    <div id="login" style="display: none"><button v-on:click="toLogin">登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userInfo",
    data() {
      return {
        username:""
      }
    },
    methods: {

      toLogin:function () {
        this.$router.push('/Login')
      },
      toLogout:function () {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        this.showLogin();
        this.$router.push('/');
      },
      showLogin:function () {
        debugger
        let username = localStorage.getItem('username')
        if (username) {
          this.username = username;
          document.getElementById("logout").style.display="block";
          document.getElementById("login").style.display="none";
        }else {
          document.getElementById("logout").style.display="none";
          document.getElementById("login").style.display="block";
        }
      }
    },
    mounted: function () {
      this.showLogin();
    }
  }
</script>

<style scoped>

</style>
