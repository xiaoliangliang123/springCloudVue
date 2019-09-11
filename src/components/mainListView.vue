<template>
  <ul>

    <li v-for="(item,index) in list">
      {{item.id}} {{item.data}}
    </li>

  </ul>
</template>

<script>
    export default {

      data() {
        return {
          list: []
        }
      },
      methods: {
        loadData() {

          this.$axios
            .post('/zuul_client/main/mainList',null)
            .then(successResponse => {
              if(successResponse.data.success){
                  this.list = successResponse.data.data;
              }else {

              }
            })
            .catch(failResponse => {})
        }
      },
      mounted:function () {
        this.loadData();
      }
    }
</script>

<style scoped>

</style>
