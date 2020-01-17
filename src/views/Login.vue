<template>
  <div class="wrapper">
    <a-tabs type="card" :tabBarStyle="tabBarStyle">
      <a-tab-pane key="1">
        <span slot="tab">
          <a-icon type="desktop" />
          登录
        </span>
        <a-form :form="form1" class="form">
          <a-input placeholder="请输入姓名" />
          <a-input placeholder="请输入密码" type="pwd" />
          <a-button @click="login">登录</a-button>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <a-icon type="user-add" />
          注册
        </span>
        <a-form :form="form2" class="form">
          <a-input placeholder="请输入姓名" />
          <a-input placeholder="请输入密码" type="pwd" />
          <a-button @click="login">登录</a-button>
        </a-form>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form1: this.$form.createForm(this),
      form2: this.$form.createForm(this),
      tabBarStyle: {
        'text-align': 'center',
        height: '40px',
        width: '100%'
      }
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
  .ant-tabs-card {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .ant-tabs-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px;
      .form {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
