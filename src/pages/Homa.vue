<template>
  <div>
    <h1>我是Homa</h1>
    <p>小明小明小明</p>
    <router-link replace to="/test">按钮</router-link>
    <hr><br><br>
    <button @click="jump('/homa/urz/'+uzid)">按钮1</button>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name:'Homa',
  data(){return{
    uzid:'xzh123',
  }},
  methods:{
    jump(path){
      this.$router.push({path:path})
    }
  },
}
</script>

<style>

</style>