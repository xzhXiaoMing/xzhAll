<template>
  <div>
    <TopNav name="商机广场">
      <template scope="{returl}" slot="left-icon">
        <img
          @click="returl"
          src="../assets/imges/space-righ.png"
          alt="#"
        />
      </template>
    </TopNav>
    <div class="fontsize-16 color3 box">
      <div class="title">设置发行主体评级</div>
      <ul class="contentbox">
        <li
          v-for="(v1, v2) in labels"
          :key="v1.id + v2"
          class="label-top"
          @click="adds(v2)"
        >
          {{ v1.name }}
        </li>
      </ul>
    </div>
    <div class="fontsize-16 color3 box">
      <div class="title">设置发行主体评级</div>
      <ul class="contentbox">
        <li
          @click="add(v2)"
          v-for="(v1, v2) in label"
          :key="v1.id + v2"
          class="label-db"
          :class="v1.age ? 'label-db1' : ''"
        >
          {{ v1.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
export default {
  name: "Home",
  components: { TopNav },
  data() {
    return {
      label: [
        { name: "不限", id: "001", age: false },
        { name: "吃饭", id: "002", age: false },
        { name: "睡觉", id: "003", age: false },
        { name: "打游戏", id: "004", age: false },
        { name: "学习", id: "005", age: false },
      ],
      labels: [],
    };
  },
  methods: {
    add(x) {
      this.label[x].age = !this.label[x].age;
      if (this.label[x].age) {
        this.labels.push(this.label[x]);
      } else {
        const index = this.labels.findIndex(
          (item) => item.id === this.label[x].id
        );
        if (index !== -1) {
          this.labels.splice(index, 1);
        }
      }
    },
    adds(index) {
      this.labels[index].age = !this.labels[index].age;
      this.labels.splice(index, 1);
    },
  },
  computed: {
    labelss() {},
  },
  mounted() {},
};
</script>

<style scoped>
.box {
}
.title {
  line-height: 3.25rem;
  padding: 0 1rem;
}
.contentbox {
  background-color: #ffffff;
  padding: 0 1rem 1rem 0;
  display: flex;
  flex-wrap: wrap;
}
.label-top {
  color: #fff;
  line-height: 2.35rem;
  padding: 0 2rem 0 1rem;
  background-color: #287ef1;
  border-radius: 1.175rem;
  background-image: url(../assets/imges/space-righ.png);
  background-repeat: no-repeat;
  background-size: 0.8rem;
  background-position: right 0.75rem center;
  margin-left: 1rem;
  margin-top: 1rem;
}
.label-db {
  line-height: 2.35rem;
  padding: 0 1rem;
  border-radius: 1.175rem;
  border: 1px solid #e1e3e5;
  margin-left: 1rem;
  margin-top: 1rem;
}

.label-db1 {
  background-color: #287ef1;
  color: #fff;
}
</style>
