<template>
  <div style="background-color: #4871C0;">
    <TopNav name="登录"></TopNav>
    <div class="box">
      <form @submit="han">
        <ul class="logbox">
          <li class="logbox1">
            <input 
            class="search color1 tm-bjs widths12" 
            type="text" 
            placeholder="请输入账号"
            v-model="username"
            required
            :minlength="4"
            :maxlength="10"
            />
          </li>
          <li class="logbox2">
            <input class="search color1 tm-bjs widths12" type="text" placeholder="请输入密码">
          </li>
        </ul>
        <button type="submit">登录</button>
      </form>
    
    </div>
    
  </div>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
export default {
  name: 'enter',
  components:{TopNav},
  data() {
    return {
      username:'',
    }
  },
  methods: {
    han() {
      // 进行表单验证逻辑
      if (this.username.length < 4 || this.username.length > 10) {
        alert('用户名长度在4-10位字符之间');
        return;
      };
      console.log('用户名: ', this.username);
    }
  },
}
</script>

<style scoped>
.box{
  padding: 4rem;
  height:30rem;
}
.logbox{
  background-color: #fff;
  border-radius: 0.25rem;
  padding: 1rem 0;
  margin-top: 5rem;
}
.logbox1{
  display: flex;
  justify-content: center;
}
.logbox1 input{
  background-image: url('../assets/imges/log.png');
  border-bottom: #dfe5ee 1px solid;
  border-radius: 0;
}
.logbox2{
margin-top: 1rem;
display: flex;
justify-content: center;
}
.logbox2 input{
  background-image: url('../assets/imges/password.png');
  border-bottom: #dfe5ee 1px solid;
  border-radius: 0;
}
button{
  padding:0.8rem 1.5rem;
  margin: 0 auto;
  display: block;
  width: 15rem;
  margin-top:2rem ;
  border: none;
  border-radius: 0.2rem;
}

</style>