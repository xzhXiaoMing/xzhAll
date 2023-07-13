<template>
   <div class="Theme xhx spacin back-fff">
      <div class="heads">
         <img class="block-level" :src="person.heads" alt="#">
      </div>
      
      <div class="contentbox">
         <ul class="basic">
            <li class="block-flex">
               <div v-if="search" class="name">
                  <span v-for="(v,index) of person.name.split('')" :key="index">
                     <span :style="{color:search.indexOf(v)!==-1?'red':''}">{{v}}</span>
                  </span>
               </div>
               <div v-else class="name">{{person.name}}</div>
               <div class="label back-zts">{{person.label}}</div>
            </li>
            <li @click="addFollow" :class="onenlt?'interests':''" class="interest">{{fullName}}</li>
         </ul>
         <ul class="basics">
            <li class="busin">{{person.busin}}</li>
            <li class="positioning">{{person.positioning}}</li>
         </ul>
         <ul class="declaration">
            <li class="decla">{{person.decla}}</li>
            <li class="eclarati">{{person.eclarati}}</li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   name:'Personnel',
   props: {
      person: {
         type: Object,
      },
      search:{
         type:String
      }
   },
   data(){return {
      onenlt:this.person.interest,
   };},
   computed:{
      fullName() {
         return this.onenlt === 0 ? '关注':'已关注';
      }
   },
   methods:{
      addFollow(){
         this.onenlt = this.onenlt? 0 : 1 ;
      }
   },
}
</script>

<style scoped>
   .Theme{
      display: flex;
      justify-content: flex-start;
   }
   .xhx{
      border-bottom: 1px solid #f2f4f7;
   }
   .xhx:last-child{
      border-bottom:none;
   }
   .heads{
      width: 2.25rem;
      height: 2.25rem;
      border-radius:50%;
      overflow: hidden;
   }
   .heads img{
      width:100% ;
   }
   .contentbox{
      margin-left: 1rem;
      flex-grow: 1;
   }
   .basic{
      display: flex;
      justify-content: space-between;
   }
   .name{
      font-size: 1rem;
      color: #0F1F45;
      font-weight: 600;
      line-height: 1.375rem;
   }
   .label{
      color: #FFFFFF;
      font-size: 0.625rem;
      line-height: 1.125rem;
      border-radius: 2px;
      padding: 0.125rem 0.375rem;
      margin-left: 0.625rem;
   }
   .interest{
      font-size: 0.625rem;
      color: #64708E;
      padding: 0.125rem 0.75rem;
      border: solid 1px rgba(40,126,241,0.1);
      line-height: 1.15rem;
      border-radius: 1rem;
   }
   .interests{
      color: #287EF1;
      border: solid 1px #287EF1;
   }
   .basics{
      display: flex;
      justify-content: space-between;
      margin-top: 0.45rem;
   }
   .busin{
      font-size: 1rem;
      color: #64708E;
      line-height: 1.375rem;
   }
   .positioning{
      font-size: 0.75rem;
      color: #64708E;
      line-height: 1.375rem;
   }
   .declaration{
      display: flex;
      justify-content: flex-start;
      margin-top: 1rem;
   }
   .decla{
      font-size: 0.625rem;
      color: #287EF1;
      padding: 0.125rem 0.375rem;
      background: rgba(40,126,241,0.1);
      line-height: 1.15rem;
   }
   .eclarati{
      font-size: 0.75rem;
      color: #0F1F45;
      line-height: 1.4rem;
      margin-left: 0.625rem;
      white-space: nowrap; /* 文字不折行 */
      overflow: hidden; /* 超出部分隐藏 */
      text-overflow: ellipsis; /* 显示省略号 */
   }
</style>