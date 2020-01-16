<template>
  <div class="wrapper">
    <h1>登录页</h1>
    <a-form :form="form">
      <a-input placeholder="请输入姓名" />
      <a-input placeholder="请输入密码" type="pwd" />
      <a-button @click="login">登录</a-button>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    login() {
      localStorage.setItem('userInfo', '1');
      this.$router.push('/index');
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 300px;
  height: 500px;
  box-shadow: 1px 1px 8px #4d4d4d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
