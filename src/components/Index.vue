<template>
  <div>
    <TopNav name="找人找项目">
    </TopNav>
    <div class="gradient">
      <ul class="topBox">
        <li class="customer"></li>
        <input
          class="search color2 tm-bjs bjt widths12"
          type="text"
          placeholder="请输入名字"
          v-model="name"
          @keyup.enter="add"
        />
        <li class="sculpture"></li>
      </ul>
      <ul class="District">
        <li
          @click="jump(v1.urls)"
          class="navigation"
          v-for="v1 in district"
          :key="v1.id"
        >
          <img :src="v1.imgsq" />
          <p>{{ v1.nav }}</p>
        </li>
      </ul>
    </div>

    <div class="advertise">
      <div class="picture">
        <p class="pic_text1">金融创新专区</p>
        <p class="pic_text2">科技赋能金融，创新引领发展</p>
        <p class="pic_text3">探索更多</p>
      </div>
      <div class="pictures">
        <ul>
          <li class="advertisement_a">
            <p class="pic_text4">雪球产品报价单</p>
            <p class="pic_text5">更新时间：2023-05-15</p>
          </li>
          <li class="advertisement_b">
            <p class="pic_text4">场外券池</p>
            <p class="pic_text5">更新时间：2023-05-15</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="spacing">
      <div class="sjgc_box">
        <ul class="layout_about">
          <li class="titleAll title_sj">商机广场</li>
          <li class="size_15">
            <img
              class="block-level self-adaption"
              src="../assets/arrow-right.png"
              alt="#"
            />
          </li>
        </ul>
        <div class="content-Box fontsize-14 Text-folding2 lineheight-20">
          <span class="block-level">
            浙江某光伏业某拟上市业上市某拟主行业上市公司，2022年主公司年主行业某某光伏业某拟上市业
          </span>
        </div>
      </div>

      <div class="layout_about margintop-16">
        <div>
          <div class="gsxm_title fontsize-16 jiacu">公司项目</div>
          <ul class="color1 jiacu back-fff redius8">
            <li class="nav_te" @click="jump('/home')">股权项目</li>
            <li class="nav_te" @click="jump('/homa')">债券项目</li>
          </ul>
        </div>
        <div>
          <div class="gsxm_titlv fontsize-16 jiacu">公司项目</div>
          <ul class="color1 back-fff redius8">
            <li class="nav_tv">对接中证工商数据 查询外部企业信息</li>
          </ul>
        </div>
      </div>

      <div class="margintop-16 redius8 overflow rotation">
        <ul class="dingshiq">
          <li
            class="dingshiqs"
            :class="{ dingshix: time === v2 }"
            v-for="(v1, v2) in rotation"
            :key="v2"
          ></li>
        </ul>
        <img
          class="block-level self-adaption"
          :src="rotation[time].url"
          alt="#"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "./TopNav.vue";
export default {
  name: "Index",
  components: { TopNav },
  data() {
    return {
      name: "",
      district: [
        {
          nav: "找同事",
          imgsq: require("@/assets/aa.png"),
          id: "001",
          urls: "/findcolleague",
        },
        {
          nav: "找客户",
          imgsq: require("@/assets/find-doc.png"),
          id: "002",
          urls: "/enter",
        },
        {
          nav: "资料库",
          imgsq: require("@/assets/find-possible.png"),
          id: "003",
          urls: "/homa",
        },
        {
          nav: "商机广场",
          imgsq: require("@/assets/find-user.png"),
          id: "004",
          urls: "/home",
        },
      ],
      rotation: [
        { id: "001", url: require("@/assets/homebanner1.png") },
        { id: "002", url: require("@/assets/homebanner2.png") },
      ],
      time: 0,
    };
  },
  methods: {
    add() {
      console.log(this.name);
    },
    jump(path) {
      this.$router.push(path);
    },
 
  },
  mounted() {
    setInterval(() => {
      this.time++;
      if (this.time >= this.rotation.length) {
        this.time = 0;
      }
    }, 4000);
  },
};
</script>

<style scoped>
.rotation {
  position: relative;
}
.rotation .dingshiq {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  bottom: 0.1rem;
}
.dingshiqs {
  width: 0.4rem;
  height: 0.4rem;
  background-color: #fff;
  border-radius: 50%;
  margin: 0.2rem;
  opacity: 0.5;
}

.dingshiq .dingshix {
  opacity: 1;
}

.nav_te {
  line-height: 2.375rem;
  background-image: url(../assets/space-right.png);
  background-repeat: no-repeat;
  background-size: 0.75rem;
  background-position: 9.75rem center;
  padding-left: 1rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.nav_tv {
  padding: 1rem;
  width: 8.812rem;
  line-height: 1.3625rem;
}
.gsxm_title {
  line-height: 2.5rem;
  background-image: url(../assets/home-ourproject.png);
  background-repeat: no-repeat;
  background-size: 100%;
  color: #5c8bc6;
  width: 8.812rem;
  padding: 0 1rem;
}
.gsxm_titlv {
  line-height: 2.5rem;
  background-image: url(../assets/home-outside-project.png);
  background-repeat: no-repeat;
  background-size: 100%;
  color: #c66ba3;
  width: 8.812rem;
  padding: 0 1rem;
}
.content-Box {
  background-color: #f3f9ff;
  padding: 0.875rem;
  margin-top: 0.875rem;
}
.content-Box span {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 最大显示行数 */
  overflow: hidden;
  text-overflow: ellipsis; /* 以省略号表示超出的部分 */
}
.sjgc_box {
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem 1.1rem 1.25rem 0.75rem;
}
.title_sj {
  line-height: 1.5rem;
  background-image: url(../assets/find-possible.png);
  background-repeat: no-repeat;
  background-size: 1.5rem;
  padding-left: 1.75rem;
  background-position: center left;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.gradient {
  color: #fff;
  font-size: 0.875rem;
  padding: 1.75rem 0.85rem 0rem 0.85rem;
  background: linear-gradient(180deg, #4871c0 0%, #4390d9 54%, #f5f6f9 75%);
}
.gradient .topBox {
  display: flex;
  justify-content: space-between;
}
.customer {
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  background-image: url(../assets/on-call.png);
  background-repeat: no-repeat;
  background-size: 1.5rem;
  background-position: center center;
}

.sculpture {
  width: 2.436rem;
  height: 2.436rem;
  border-radius: 50%;
  border: 1px solid #fff;
  background-image: url(../assets/head.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

.topBox input::placeholder {
  color: #ffffff; /* 设置提示文字的颜色为红色 */
}

.District {
  background-color: #fff;
  border-radius: 0.625rem;
  margin: 0 auto;
  padding: 1.25rem 1.25rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1.87rem;
}

.navigation {
  color: #64708e;
  display: flex;
  flex-direction: column;
  width: 3.5rem;
  align-items: center;
}

.navigation img {
  display: block;
  width: 2rem;
}

.navigation p {
  text-align: center;
  font-size: 0.875rem;
  margin-top: 0.4rem;
}

.advertise {
  padding: 1rem 0.85rem 0rem 0.85rem;
  display: flex;
  justify-content: space-between;
}

.picture {
  width: 8.812rem;
  height: 8.06rem;
  padding: 0 1rem;
  background-image: url(../assets/home-chuangxin.png);
  background-repeat: no-repeat;
  background-size: 100%;
}

.pictures {
  width: 10.812rem;
}

.pictures ul {
  display: flex;
  flex-direction: column;
  height: 8.06rem;
  justify-content: space-between;
}

.pictures li {
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100%;
}

.advertisement_a {
  background-image: url(../assets/home-snowball.png);
  padding: 0 1rem;
  color: #2a5d79;
}

.advertisement_b {
  background-image: url(../assets/home-quanchi.png);
  padding: 0 1rem;
  color: #554285;
}

.pic_text1 {
  font-size: 1rem;
  color: #2a4179;
  font-weight: 600;
  line-height: 1.375rem;
  margin-top: 1rem;
}

.pic_text2 {
  font-size: 0.75rem;
  color: #5474a4;
  line-height: 1rem;
  margin-top: 0.3rem;
}

.pic_text3 {
  padding: 0 0.625rem;
  background-color: #62acff;
  border-radius: 0.687rem;
  line-height: 1.375rem;
  margin-top: 1.25rem;
  color: #fff;
  font-size: 0.625rem;
  width: 70px;
}
.pic_text4 {
  font-size: 0.875rem;
  margin-top: 0.5rem;
  line-height: 1.375rem;
  font-weight: 600;
}
.pic_text5 {
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: 0.3rem;
}
</style>
