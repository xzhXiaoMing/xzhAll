<template>
  <div>
    <div class="Theme">
      <div class="left">
        <slot :returl="returl" name="left-icon"> </slot>
      </div>
      <div class="center">{{ name }}</div>
      <div class="right">
        <slot name="right-icon"></slot>
      </div>
    </div>
    <div style="height: 4rem;"></div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  props: ["name"],
  methods: {
    returl() {
      this.$router.back();
    },
  },
  mounted() {},
};
</script>

<style scoped>
.left {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
}
.right {
  width: 4rem;
  height: 4rem;
}
.center {
  text-align: center;
  color: #fff;
  font-size: 1.125rem;
  line-height: 4rem;
  font-weight: 600;
}
.Theme {
  background-color: #4871c0;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
}
.Theme img {
  display: block;
  width: 2rem;
}
</style>