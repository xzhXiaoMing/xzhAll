<template>
  <div>
    <TopNav name="找同事">
      <template scope="{returl}" slot="left-icon">
        <img
          @click="returl"
          src="../assets/imges/space-righ.png"
          alt="#"
        />
      </template>
    </TopNav>
    <div class="block-flex back-fff spacing search-colleague">
      <input class="search qh-bjs bjt1 int" type="text" placeholder="请输入名字" v-model="information" >
    </div>
    <Personnel v-for="(v1,v2) in filterate" :key="v1.id+v2" :person="v1" :search="information"></Personnel>
  </div>
</template>

<script>
import TopNav from '../components/TopNav.vue'
import Personnel from '../components/Personnel.vue'
export default {
  name:'FindColleague',
  components:{TopNav,Personnel},
  data(){return{
    information:'',
  }},
  computed:{
    getal(){
      return this.$store.state.Personnel
    },
    filterate(){
      return this.getal.filter((x)=>{
        return x.name.indexOf(this.information) !== -1
      });
    },
  },
  methods:{
    jump(path){
      this.$router.push({path:path})
    }
  },
  mounted(){
    // console.log(this.filterate);
  },
}
</script>

<style>
  .search-colleague{
    padding-bottom: 1rem;
  }
  .int{
    width: 100%;
  }
</style>