<template>
  <div>
    <h1>首页</h1>
    <a-button @click="logout">退出</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss"></style>
